<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (isset($data['feedback'])) {
        $feedback = [
            'feedback' => $data['feedback'],
            'timestamp' => date('Y-m-d H:i:s')
        ];
        

        $dir = __DIR__ . '/feedback';
        if (!file_exists($dir)) {
            if (!mkdir($dir, 0777, true)) {
                $error = error_get_last();
                echo json_encode([
                    'success' => false,
                    'message' => 'Could not create feedback directory',
                    'error' => $error ? $error['message'] : 'Unknown error',
                    'path' => $dir
                ]);
                exit;
            }
        }
        
        $file = $dir . '/feedback_data.json';
        $existing_data = [];
        
        if (file_exists($file)) {
            $content = file_get_contents($file);
            if ($content !== false) {
                $existing_data = json_decode($content, true) ?? [];
            } else {
                $error = error_get_last();
                echo json_encode([
                    'success' => false,
                    'message' => 'Could not read existing feedback file',
                    'error' => $error ? $error['message'] : 'Unknown error',
                    'path' => $file
                ]);
                exit;
            }
        }
        
        $existing_data[] = $feedback;
        
        if (file_put_contents($file, json_encode($existing_data, JSON_PRETTY_PRINT))) {
            echo json_encode(['success' => true, 'message' => 'Feedback saved successfully']);
        } else {
            $error = error_get_last();
            echo json_encode([
                'success' => false,
                'message' => 'Error saving feedback',
                'error' => $error ? $error['message'] : 'Unknown error',
                'path' => $file,
                'permissions' => [
                    'dir_writable' => is_writable($dir),
                    'file_writable' => file_exists($file) ? is_writable($file) : 'file does not exist'
                ]
            ]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'No feedback provided']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?> 