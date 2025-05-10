// Base fare for each route
const baseFares = {
    "102": 12,
    "201": 15,
    "202": 15,
    "301": 10,
    "302": 12,
    "203": 15,
    "204": 15,
    "303": 10,
    "304": 12,
    "305": 12,
    "306": 12,
    "307": 12,
    "308": 12,
    "309": 12
};


const fareIncrements = {
    "102": 3,
    "201": 3.5,
    "202": 3.5,
    "301": 2.5,
    "302": 3,
    "203": 3,
    "204": 2,
    "303": 2,
    "304": 3.5,
    "305": 3.5,
    "306": 3.5,
    "307": 3.5,
    "308": 3.5,
    "309": 3.5
};

const busRoutes = [
    {
        number: "01",
        name: "Bahon (বাহন)",
        stops: [
                "Mirpur 14 (মিরপুর ১৪)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 1 (মিরপুর ১)",
                "Ansar Camp (আনসার ক্যাম্প)",
                "Bangla College (বাংলা কলেজ)",
                "Technical (টেকনিক্যাল)",
                "Darussalam (দারুস্সালাম)",
                "Kallyanpur (কল্যাণপুর)",
                "Shyamoli (শ্যামলী)",
                "Asad Gate (আসাদ গেট)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Kalabagan (কলাবাগান)",
                "Science Lab (বিজ্ঞান গবেষণা প্রযুক্তি)",
                "Katabon (কাটাবন)",
                "Shahbag (শাহবাগ)",
                "High Court (উচ্চ আদালত)",
                "Press Club (প্রেস ক্লাব)",
                "Paltan (পল্টন)",
                "Dainik Bangla Moor (দৈনিক বাংলা মোড়)",
                "Motijheel (মতিঝিল)",
                "Arambagh (আরামবাগ)",
                "Kamalapur (কমলাপুর)",
                "Mugdapara (মুগদাপাড়া)",
                "Bashabo (বাসাবো)",
                "Khilgaon (খিলগাঁও)",
             
         
        // Reverse route stops appended below
             
                "Khilgaon (খিলগাঁও)",
                "Bashabo (বাসাবো)",
                "Mugdapara (মুগদাপাড়া)",
                "Kamalapur (কমলাপুর)",
                "Arambagh (আরামবাগ)",
                "Motijheel (মতিঝিল)",
                "Dainik Bangla Moor (দৈনিক বাংলা মোড়)",
                "Paltan (পল্টন)",
                "Press Club (প্রেস ক্লাব)",
                "High Court (উচ্চ আদালত)",
                "Shahbag (শাহবাগ)",
                "Katabon (কাটাবন)",
                "Science Lab (বিজ্ঞান গবেষণা প্রযুক্তি)",
                "Kalabagan (কলাবাগান)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Asad Gate (আসাদ গেট)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Darussalam (দারুস্সালাম)",
                "Technical (টেকনিক্যাল)",
                "Bangla College (বাংলা কলেজ)",
                "Ansar Camp (আনসার ক্যাম্প)",
                "Mirpur 1 (মিরপুর ১)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 14 (মিরপুর ১৪)"
        ]
        
    },
    {
        number: "02",
        name: "Azmeri Glory Limited (আজমেরী গ্লোরী লিমিটেড)",
        stops: [
                "Sadarghat (সদরঘাট)",
                "Ray Saheb Bazar (রায় সাহেব বাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "GPO (জিপিও)",
                "Paltan (পল্টন)",
                "Kakrail (কাকরাইল)",
                "Shantinagar (শান্তিনগর)",
                "Malibagh (মালিবাগ)",
                "Mouchak (মৌচাক)",
                "Nabisco (নাবিস্কো)",
                "Mohakhali (মহাখালী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Banani (বনানী)",
                "Kakali (কাকলী)",
                "Staff Road (স্টাফ রোড)",
                "MES (এমইএস)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
                "Station Road (স্টেশন রোড)",
                "Mill Gate (মিল গেট)",
                "Board Bazar (বোর্ড বাজার)",
                "Gazipur Bypass (গাজীপুর বাইপাস)",
                "Konabari (কোনাবাড়ি)",
                "Chandra (চন্দ্রা)",
             
         
        // Reverse route stops appended below
             
                "Chandra (চন্দ্রা)",
                "Konabari (কোনাবাড়ি)",
                "Gazipur Bypass (গাজীপুর বাইপাস)",
                "Board Bazar (বোর্ড বাজার)",
                "Mill Gate (মিল গেট)",
                "Station Road (স্টেশন রোড)",
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "Staff Road (স্টাফ রোড)",
                "Kakali (কাকলী)",
                "Banani (বনানী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Mohakhali (মহাখালী)",
                "Nabisco (নাবিস্কো)",
                "Mouchak (মৌচাক)",
                "Malibagh (মালিবাগ)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Ray Saheb Bazar (রায় সাহেব বাজার)",
                "Sadarghat (সদরঘাট)"
            ]
        
    },
    {
        number: "03",
        name: "6 No. Motijheel Banani Transport (৬নং মতিঝিল বনানী ট্রান্সপোর্ট)",
         
            stops: [
                "Kamalapur (কমলাপুর)",
                "Motijheel (মতিঝিল)",
                "Gulistan (গুলিস্তান)",
                "GPO (জিপিও)",
                "Paltan (পল্টন)",
                "Kakrail (কাকরাইল)",
                "Shantinagar (শান্তিনগর)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Mouchak (মৌচাক)",
                "Mogbazar (মগবাজার)",
                "Kawran Bazar (কাওরান বাজার)",
                "Farmgate (ফার্মগেট)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Mohakhali (মহাখালী)",
                "Gulshan 1 (গুলশান ১)",
                "Gulshan 2 (গুলশান ২)",
                "Notun Bazar (নতুন বাজার)",
             
         
        // Reverse route stops appended below
             
                "Notun Bazar (নতুন বাজার)",
                "Gulshan 2 (গুলশান ২)",
                "Gulshan 1 (গুলশান ১)",
                "Mohakhali (মহাখালী)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Farmgate (ফার্মগেট)",
                "Kawran Bazar (কাওরান বাজার)",
                "Mogbazar (মগবাজার)",
                "Mouchak (মৌচাক)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Gulistan (গুলিস্তান)",
                "Motijheel (মতিঝিল)",
                "Kamalapur (কমলাপুর)"
            ]
        
    },
    {
        number: "04",
        name: "Itihash (ইতিহাস)",
         
            stops: [
                "Mirpur 14 (মিরপুর ১৪)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 2 (মিরপুর ২)",
                "Sony Cinema Hall (সনি সিনেমা হল)",
                "Ansar Camp (আনসার ক্যাম্প)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)",
                "Nobinagar (নবীনগর)",
                "Baipayl (বাইপাইল)",
                "Zirani Bazar (জিরানী বাজার)",
                "Nandan Park (নন্দন পার্ক)",
                "Chandra (চন্দ্রা)",
             
         
        // Reverse route stops appended below
             
                "Chandra (চন্দ্রা)",
                "Nandan Park (নন্দন পার্ক)",
                "Zirani Bazar (জিরানী বাজার)",
                "Baipayl (বাইপাইল)",
                "Savar (সাভার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Amin Bazar (আমিন বাজার)",
                "Gabtoli (গাবতলি)",
                "Technical (টেকনিক্যাল)",
                "Sony Cinema Hall (সনি সিনেমা হল)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 14 (মিরপুর ১৪)"
            ]
        
    },
    {
        number: "05",
        name: "Siam Transport (সিয়াম ট্রান্সপোর্ট)",
         
            stops: [
                "Banasree (বনশ্রী)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Badda (বাড্ডা)",
                "Shahjadpur (শাহজাদপুর)",
                "Bashtola (বাঁশতলা)",
                "Notun Bazar (নতুন বাজার)",
                "Nadda (নদ্দা)",
                "Bashundhara (বসুন্ধরা)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Kamarpara (কামারপাড়া)",
                "Dhour (ঢাউর)",
                "Beribadh (বেড়িবাঁধ)",
                "Ashulia (আশুলিয়া)",
                "Zirabo (জিরাবো)",
                "Fantasy Kingdom (ফ্যান্টাসি কিংডম)",
                "Jamgora (জামগড়া)",
                "Shimultola (সিমুলতলা)",
                "Baipayl (বাইপাইল)",
                "Palli Bidyut (পল্লী বিদ্যুৎ)",
                "Savar Cantonment (সাভার ক্যান্টনমেন্ট)",
                "Nobinagar (নবীনগর)",
             
         
        // Reverse route stops appended below
             
                "Nobinagar (নবীনগর)",
                "Savar Cantonment (সাভার ক্যান্টনমেন্ট)",
                "Palli Bidyut (পল্লী বিদ্যুৎ)",
                "Baipayl (বাইপাইল)",
                "Shimultola (সিমুলতলা)",
                "Fantasy Kingdom (ফ্যান্টাসি কিংডম)",
                "Zirabo (জিরাবো)",
                "Ashulia (আশুলিয়া)",
                "Beribadh (বেড়িবাঁধ)",
                "Dhour (ঢাউর)",
                "Kamarpara (কামারপাড়া)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Bashundhara (বসুন্ধরা)",
                "Nadda (নদ্দা)",
                "Notun Bazar (নতুন বাজার)",
                "Bashtola (বাঁশতলা)",
                "Shahjadpur (শাহজাদপুর)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Ray Saheb Bazar (রায় সাহেব বাজার)",
                "Sadarghat (সদরঘাট)"
            ]
        
    },
    {
        number: "06",
        name: "Bikash Paribahan (বিকাশ পরিবহন)",
         
            stops: [
                "Sign Board (সাইন বোর্ড)",
                "Matuail (মাতুয়াইল)",
                "Rayerbag (রায়েরবাগ)",
                "Shonir Akhra (শনির আখরা)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Sayapabad (সায়াপাবাদ)",
                "Gulistan (গুলিস্তান)",
                "Chankhar Pul (চাঁকহার পুল)",
                "Bakshi Bazar (বকশী বাজার)",
                "Azimpur (আজিমপুর)",
                "Nilkhet (নীলক্ষেত)",
                "New Market (নিউ মার্কেট)",
                "City College (সিটি কলেজ)",
                "Kalabagan (কলাবাগান)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Khamar Bari (খামার বাড়ি)",
                "Farmgate (ফার্মগেট)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Mohakhali (মহাখালী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Banani (বনানী)",
                "Kakali (কাকলী)",
                "Staff Road (স্টাফ রোড)",
                "MES (এমইএস)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
                "Station Road (স্টেশন রোড)",
                "Mill Gate (মিল গেট)",
                "Board Bazar (বোর্ড বাজার)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Joydebpur (জয়দেবপুর)",
                "Sreepur (শ্রীপুর)",
                "Barmi (বরমী)",
             
         
        // Reverse route stops appended below
             
                "Barmi (বরমী)",
                "Sreepur (শ্রীপুর)",
                "Joydebpur (জয়দেবপুর)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Board Bazar (বোর্ড বাজার)",
                "Mill Gate (মিল গেট)",
                "Station Road (স্টেশন রোড)",
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "Staff Road (স্টাফ রোড)",
                "Kakali (কাকলী)",
                "Banani (বনানী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Mohakhali (মহাখালী)",
                "Bakshi Bazar (বকশী বাজার)",
                "Chankhar Pul (চাঁকহার পুল)",
                "Gulistan (গুলিস্তান)",
                "Sayapabad (সায়াপাবাদ)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Shonir Akhra (শনির আখরা)",
                "Matuail (মাতুয়াইল)",
                "Sign Board (সাইন বোর্ড)",
                "Jalkuri (জলকুড়ি)",
                "Shibu Market (শিবু মার্কেট)",
                "Chasara (চাষারা)"
            ]
        
    },
    {
        number: "07",
        name: "Baishakhi (বৈশাখী)",
         
            stops: [
                "Savar (সাভার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Amin Bazar (আমিন বাজার)",
                "Gabtoli (গাবতলি)",
                "Technical (টেকনিক্যাল)",
                "Kallyanpur (কল্যাণপুর)",
                "Shyamoli (শ্যামলী)",
                "Shishu Mela (শিশু মেলা)",
                "Agargaon (আগারগাঁও)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Mohakhali (মহাখালী)",
                "Gulshan 1 (গুলশান ১)",
                "Badda Link Road (বাড্ডা লিংক রোড)",
                "Bashtola (বাঁশতলা)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Notun Bazar (নতুন বাজার)",
             
         
        // Reverse route stops appended below
             
                "Notun Bazar (নতুন বাজার)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Bashtola (বাঁশতলা)",
                "Badda Link Road (বাড্ডা লিংক রোড)",
                "Gulshan 1 (গুলশান ১)",
                "Mohakhali (মহাখালী)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Agargaon (আগারগাঁও)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)"
            ]
        
    },
    {
        number: "08",
        name: "Bihanga (বিহঙ্গ)",
         
            stops: [
                "Mirpur 12 (মিরপুর ১২)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 10 (মিরপুর ১০)",
                "Kazipara (কাজীপাড়া)",
                "Shewrapara (শেওড়াপাড়া)",
                "Agargaon (আগারগাঁও)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Mohakhali (মহাখালী)",
                "Wireless (ওয়্যারলেস)",
                "Gulshan Bridge (গুলশান ব্রিজ)",
                "Gulshan 1 (গুলশান ১)",
                "Badda (বাড্ডা)",
                "Notun Bazar (নতুন বাজার)",
             
         
        // Reverse route stops appended below
             
                "Notun Bazar (নতুন বাজার)",
                "Badda (বাড্ডা)",
                "Gulshan 1 (গুলশান ১)",
                "Wireless (ওয়্যারলেস)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Agargaon (আগারগাঁও)",
                "Shewrapara (শেওড়াপাড়া)",
                "Kazipara (কাজীপাড়া)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 12 (মিরপুর ১২)"
            ]
        
    },
    {
        number: "09",
        name: "Basumati Transport (বাসুমতি ট্রান্সপোর্ট)",
         
            stops: [
                "Gabtoli (গাবতলি)",
                "Mirpur 1 (মিরপুর ১)",
                "Sony Cinema Hall (সনি সিনেমা হল)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 11 (মিরপুর ১১)",
                "Purobi (পুরবী)",
                "Kalshi (কালশী)",
                "ECB Square (ইসিবি স্কয়ার)",
                "MES (এমইএস)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
                "Station Road (স্টেশন রোড)",
                "Mill Gate (মিল গেট)",
                "Board Bazar (বোর্ড বাজার)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
             
         
        // Reverse route stops appended below
             
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Board Bazar (বোর্ড বাজার)",
                "Mill Gate (মিল গেট)",
                "Station Road (স্টেশন রোড)",
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "ECB Square (ইসিবি স্কয়ার)",
                "Kalshi (কালশী)",
                "Purobi (পুরবী)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 1 (মিরপুর ১)"
            ]
        
    },
    {
        number: "10",
        name: "Basumati (বাসুমতি)",
         
            stops: [
                "Gabtoli (গাবতলি)",
                "Technical (টেকনিক্যাল)",
                "Kallyanpur (কল্যাণপুর)",
                "Shyamoli (শ্যামলী)",
                "Shishu Mela (শিশু মেলা)",
                "College Gate (কলেজ গেট)",
                "Asad Gate (আসাদ গেট)",
                "Manik Mia Avenue (মানিক মিয়া এভিনিউ)",
                "Khamar Bari (খামার বাড়ি)",
                "Farmgate (ফার্মগেট)",
                "Kawran Bazar (কাওরান বাজার)",
                "Bangla Motor (বাংলা মোটর)",
                "Shahbag (শাহবাগ)",
                "Matsya Bhaban (মৎস্য ভবন)",
                "High Court (উচ্চ আদালত)",
                "Press Club (প্রেস ক্লাব)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Babubazar (বাবুবাজার)",
                "Keraniganj (কেরাণীগঞ্জ)",
                "Maowa (মাওয়া)",
             
         
        // Reverse route stops appended below
             
                "Maowa (মাওয়া)",
                "Keraniganj (কেরাণীগঞ্জ)",
                "Babubazar (বাবুবাজার)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Paltan (পল্টন)",
                "Press Club (প্রেস ক্লাব)",
                "High Court (উচ্চ আদালত)",
                "Matsya Bhaban (মৎস্য ভবন)",
                "Bangla Motor (বাংলা মোটর)",
                "Kawran Bazar (কাওরান বাজার)",
                "Shishu Mela (শিশু মেলা)",
                "College Gate (কলেজ গেট)",
                "Asad Gate (আসাদ গেট)",
                "Khamar Bari (খামার বাড়ি)",
                "Farmgate (ফার্মগেট)",
                "Manik Mia Avenue (মানিক মিয়া এভিনিউ)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)",
                "Baipayl (বাইপাইল)",
                "Zirani Bazar (জিরানী বাজার)",
                "Nandan Park (নন্দন পার্ক)",
                "Chandra (চন্দ্রা)"
            ]
        
    },
    {
        number: "11",
        name: "Bikash (বিকাশ)",
         
            stops: [
                "Azimpur (আজিমপুর)",
                "Nilkhet (নীলক্ষেত)",
                "New Market (নিউ মার্কেট)",
                "City College (সিটি কলেজ)",
                "Kalabagan (কলাবাগান)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Khamar Bari (খামার বাড়ি)",
                "Farmgate (ফার্মগেট)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Mohakhali (মহাখালী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Banani (বনানী)",
                "Kakali (কাকলী)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Kamarpara (কামারপাড়া)",
             
         
        // Reverse route stops appended below
             
                "Kamarpara (কামারপাড়া)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Kakali (কাকলী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Mohakhali (মহাখালী)",
                "Farmgate (ফার্মগেট)",
                "Khamar Bari (খামার বাড়ি)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Jahangir Gate (জাহাঙ্গীর গেট)",
                "Banani (বনানী)",
                "Kakali (কাকলী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Mohakhali (মহাখালী)",
                "Farmgate (ফার্মগেট)",
                "Khamar Bari (খামার বাড়ি)",
                "College Gate (কলেজ গেট)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)",
                "Baipayl (বাইপাইল)",
                "Zirani Bazar (জিরানী বাজার)",
                "Nandan Park (নন্দন পার্ক)",
                "Chandra (চন্দ্রা)"
            ]
        
    },
    {
        number: "12",
        name: "Bikalpa (বিকল্প অটো সুপার সার্ভিস)",
         
            stops: [
                "Mirpur 12 (মিরপুর ১২)",
                "Pallabi (পল্লবী)",
                "Purobi (পুরবী)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 1 (মিরপুর ১)",
                "Kazipara (কাজীপাড়া)",
                "Shewrapara (শেওড়াপাড়া)",
                "Taltola (তালতলা)",
                "Agargaon (আগারগাঁও)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Farmgate (ফার্মগেট)",
                "Kawran Bazar (কাওরান বাজার)",
                "Bangla Motor (বাংলা মোটর)",
                "Shahbag (শাহবাগ)",
                "Matsya Bhaban (মৎস্য ভবন)",
                "High Court (উচ্চ আদালত)",
                "Press Club (প্রেস ক্লাব)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Gulistan (গুলিস্তান)",
                "Motijheel (মতিঝিল)",
             
         
        // Reverse route stops appended below
             
                "Motijheel (মতিঝিল)",
                "Gulistan (গুলিস্তান)",
                "GPO (জিপিও)",
                "Paltan (পল্টন)",
                "Press Club (প্রেস ক্লাব)",
                "High Court (উচ্চ আদালত)",
                "Matsya Bhaban (মৎস্য ভবন)",
                "Bangla Motor (বাংলা মোটর)",
                "Kawran Bazar (কাওরান বাজার)",
                "Farmgate (ফার্মগেট)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Agargaon (আগারগাঁও)",
                "Taltola (তালতলা)",
                "Shewrapara (শেওড়াপাড়া)",
                "Kazipara (কাজীপাড়া)",
                "Purobi (পুরবী)",
                "Pallabi (পল্লবী)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 12 (মিরপুর ১২)"
            ]
        
    },
    {
        number: "13",
        name: "Paristhan (পরিস্থান)",
         
            stops: [
                "Bosila (বসিলা)",
                "Mohammadpur (মোহাম্মদপুর)",
                "Asad Gate (আসাদ গেট)",
                "College Gate (কলেজ গেট)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Darussalam (দারুস্সালাম)",
                "Technical (টেকনিক্যাল)",
                "Bangla College (বাংলা কলেজ)",
                "Tolarbag (টোলারবাগ)",
                "Ansar Camp (আনসার ক্যাম্প)",
                "Mirpur 1 (মিরপুর ১)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 11 (মিরপুর ১১)",
                "Purobi (পুরবী)",
                "Kalshi (কালশী)",
                "ECB Square (ইসিবি স্কয়ার)",
                "MES (এমইএস)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
             
         
        // Reverse route stops appended below
             
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "ECB Square (ইসিবি স্কয়ার)",
                "Kalshi (কালশী)",
                "Purobi (পুরবী)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 2 (মিরপুর ২)",
                "Mirpur 1 (মিরপুর ১)"
            ]
        
    },
    {
        number: "14",
        name: "Raida (রাইদা)",
         
            stops: [
                "Postogola (পোস্তগোলা)",
                "Dholairpar (ধলাইড়পাড়)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Janapoth Moor (জনপথ মোড়)",
                "Sayapabad (সায়াপাবাদ)",
                "Mugdapara (মুগদাপাড়া)",
                "Bashabo (বাসাবো)",
                "Khilgaon (খিলগাঁও)",
                "Malibagh Railgate (মালিবাগ রেলগেট)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Badda (বাড্ডা)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Bashtola (বাঁশতলা)",
                "Notun Bazar (নতুন বাজার)",
                "Nadda (নদ্দা)",
                "Bashundhara (বসুন্ধরা)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Kuril Chourasta (কুড়িল চৌরাস্তা)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Dia Bari (দিয়া বাড়ি)",
             
         
        // Reverse route stops appended below
             
                "Dia Bari (দিয়া বাড়ি)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Janapoth Moor (জনপথ মোড়)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Malibagh Railgate (মালিবাগ রেলগেট)",
                "Khilgaon (খিলগাঁও)",
                "Bashabo (বাসাবো)",
                "Mugdapara (মুগদাপাড়া)",
                "Sayapabad (সায়াপাবাদ)",
                "Janapoth Moor (জনপথ মোড়)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Dholairpar (ধলাইড়পাড়)",
                "Postogola (পোস্তগোলা)"
            ]
        
    },
    {
        number: "15",
        name: "Shikhor Paribahan (শিখর পরিবহন)",
         
            stops: [
                "Mirpur 12 (মিরপুর ১২)",
                "Pallabi (পল্লবী)",
                "Purobi (পুরবী)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 10 (মিরপুর ১০)",
                "Kazipara (কাজীপাড়া)",
                "Shewrapara (শেওড়াপাড়া)",
                "Taltola (তালতলা)",
                "Agargaon (আগারগাঁও)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Farmgate (ফার্মগেট)",
                "Kawran Bazar (কাওরান বাজার)",
                "Bangla Motor (বাংলা মোটর)",
                "Shahbag (শাহবাগ)",
                "Matsya Bhaban (মৎস্য ভবন)",
                "High Court (উচ্চ আদালত)",
                "Press Club (প্রেস ক্লাব)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Gulistan (গুলিস্তান)",
                "Janapoth Moor (জনপথ মোড়)",
                "Jatrabari (যাত্রাবাড়ি)",
             
         
        // Reverse route stops appended below
             
                "Jatrabari (যাত্রাবাড়ি)",
                "Janapoth Moor (জনপথ মোড়)",
                "Gulistan (গুলিস্তান)",
                "Press Club (প্রেস ক্লাব)",
                "High Court (উচ্চ আদালত)",
                "Matsya Bhaban (মৎস্য ভবন)",
                "Bangla Motor (বাংলা মোটর)",
                "Kawran Bazar (কাওরান বাজার)",
                "Farmgate (ফার্মগেট)",
                "Bijoy Sarani (বিজয় সারাণী)",
                "Agargaon (আগারগাঁও)",
                "Taltola (তালতলা)",
                "Shewrapara (শেওড়াপাড়া)",
                "Kazipara (কাজীপাড়া)",
                "Mirpur 10 (মিরপুর ১০)",
                "Mirpur 11 (মিরপুর ১১)",
                "Mirpur 12 (মিরপুর ১২)"
            ]
        
    },
    {
        number: "16",
        name: "Shatabdi (শতাব্দি)",
         
            stops: [
                "Motijheel (মতিঝিল)",
                "Paltan (পল্টন)",
                "Kakrail (কাকরাইল)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Mouchak (মৌচাক)",
                "Mogbazar (মগবাজার)",
                "Sat rasta (সাত রাস্তা)",
                "Nabisco (নাবিস্কো)",
                "Mohakhali (মহাখালী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Banani (বনানী)",
                "Kakali (কাকলী)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Kamarpara (কামারপাড়া)",
             
         
        // Reverse route stops appended below
             
                "Kamarpara (কামারপাড়া)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "Sat rasta (সাত রাস্তা)",
                "Mogbazar (মগবাজার)",
                "Mouchak (মৌচাক)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Gulistan (গুলিস্তান)",
                "Motijheel (মতিঝিল)"
            ]
        
    },
    {
        number: "17",
        name: "Turag (গ্রেট তুরাগ)",
         
            stops: [
                "Jatrabari (যাত্রাবাড়ি)",
                "Sayapabad (সায়াপাবাদ)",
                "Mugdapara (মুগদাপাড়া)",
                "Bashabo (বাসাবো)",
                "Khilgaon (খিলগাঁও)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Badda (বাড্ডা)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Bashtola (বাঁশতলা)",
                "Notun Bazar (নতুন বাজার)",
                "Nadda (নদ্দা)",
                "Bashundhara (বসুন্ধরা)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
             
         
        // Reverse route stops appended below
             
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Bashundhara (বসুন্ধরা)",
                "Nadda (নদ্দা)",
                "Notun Bazar (নতুন বাজার)",
                "Bashtola (বাঁশতলা)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Khilgaon (খিলগাঁও)",
                "Bashabo (বাসাবো)",
                "Mugdapara (মুগদাপাড়া)",
                "Sayapabad (সায়াপাবাদ)",
                "Jatrabari (যাত্রাবাড়ি)"
            ]
        
    },
    {
        number: "18",
        name: "Anabil Super (অনাবিল সুপার)",
         
            stops: [
                "Sign Board (সাইন বোর্ড)",
                "Shonir Akhra (শনির আখরা)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Mugdapara (মুগদাপাড়া)",
                "Bashabo (বাসাবো)",
                "Khilgaon (খিলগাঁও)",
                "Malibagh Railgate (মালিবাগ রেলগেট)",
                "Hazipara (হাজীপাড়া)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Shahjadpur (শাহজাদপুর)",
                "Nadda (নদ্দা)",
                "Bashtola (বাঁশতলা)",
                "Notun Bazar (নতুন বাজার)",
                "Nadda (নদ্দা)",
                "Khilkhet (খিলক্ষেত)",
                "Bashundhara (বসুন্ধরা)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
                "Station Road (স্টেশন রোড)",
                "Mill Gate (মিল গেট)",
                "Board Bazar (বোর্ড বাজার)",
                "Gazipur Bypass (গাজীপুর বাইপাস)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
             
         
        // Reverse route stops appended below
             
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Board Bazar (বোর্ড বাজার)",
                "Mill Gate (মিল গেট)",
                "Station Road (স্টেশন রোড)",
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
                "Bashundhara (বসুন্ধরা)",
                "Nadda (নদ্দা)",
                "Notun Bazar (নতুন বাজার)",
                "Bashtola (বাঁশতলা)",
                "Shahjadpur (শাহজাদপুর)",
                "Uttar Badda (উত্তর বাড্ডা)",
                "Merul Badda (মেরুল বাড্ডা)",
                "Rampura Bridge (রামপুরা ব্রিজ)",
                "Rampura Bazar (রামপুরা বাজার)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Ray Saheb Bazar (রায় সাহেব বাজার)",
                "Sadarghat (সদরঘাট)"
            ]
        
    },
    {
        number: "19",
        name: "Provati Banasree (প্রভাতী বনশ্রী)",
         
            stops: [
                "Fulbaria (ফুলবাড়িয়া)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "GPO (জিপিও)",
                "Paltan (পল্টন)",
                "Kakrail (কাকরাইল)",
                "Shantinagar (শান্তিনগর)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Mogbazar (মগবাজার)",
                "Sat rasta (সাত রাস্তা)",
                "Nabisco (নাবিস্কো)",
                "Mohakhali (মহাখালী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Banani (বনানী)",
                "Kakali (কাকলী)",
                "Staff Road (স্টাফ রোড)",
                "MES (এমইএস)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
                "Station Road (স্টেশন রোড)",
                "Mill Gate (মিল গেট)",
                "Board Bazar (বোর্ড বাজার)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Joydebpur (জয়দেবপুর)",
                "Sreepur (শ্রীপুর)",
                "Barmi (বরমী)",
             
         
        // Reverse route stops appended below
             
                "Barmi (বরমী)",
                "Sreepur (শ্রীপুর)",
                "Joydebpur (জয়দেবপুর)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Board Bazar (বোর্ড বাজার)",
                "Mill Gate (মিল গেট)",
                "Station Road (স্টেশন রোড)",
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "Staff Road (স্টাফ রোড)",
                "Kakali (কাকলী)",
                "Banani (বনানী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Mohakhali (মহাখালী)",
                "Nabisco (নাবিস্কো)",
                "Sat rasta (সাত রাস্তা)",
                "Mogbazar (মগবাজার)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Ray Saheb Bazar (রায় সাহেব বাজার)",
                "Sadarghat (সদরঘাট)"
            ]
        
    },
    {
        number: "20",
        name: "Moumita (মৌমিতা)",
         
            stops: [
                "Chasara (চাষারা)",
                "Shibu Market (শিবু মার্কেট)",
                "Jalkuri (জলকুড়ি)",
                "Sign Board (সাইন বোর্ড)",
                "Matuail (মাতুয়াইল)",
                "Rayerbag (রায়েরবাগ)",
                "Shonir Akhra (শনির আখরা)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Sayapabad (সায়াপাবাদ)",
                "Gulistan (গুলিস্তান)",
                "Chankhar Pul (চাঁকহার পুল)",
                "Bakshi Bazar (বকশী বাজার)",
                "Azimpur (আজিমপুর)",
                "Nilkhet (নীলক্ষেত)",
                "New Market (নিউ মার্কেট)",
                "City College (সিটি কলেজ)",
                "Kalabagan (কলাবাগান)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Asad Gate (আসাদ গেট)",
                "College Gate (কলেজ গেট)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Darussalam (দারুস্সালাম)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)",
                "Baipayl (বাইপাইল)",
                "Zirani Bazar (জিরানী বাজার)",
                "Nandan Park (নন্দন পার্ক)",
                "Chandra (চন্দ্রা)",
             
         
        // Reverse route stops appended below
             
                "Chandra (চন্দ্রা)",
                "Nandan Park (নন্দন পার্ক)",
                "Zirani Bazar (জিরানী বাজার)",
                "Baipayl (বাইপাইল)",
                "Savar (সাভার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Amin Bazar (আমিন বাজার)",
                "Gabtoli (গাবতলি)",
                "Technical (টেকনিক্যাল)",
                "College Gate (কলেজ গেট)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Darussalam (দারুস্সালাম)",
                "Asad Gate (আসাদ গেট)",
                "College Gate (কলেজ গেট)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)"
            ]
        
    },
    {
        number: "21",
        name: "Gazipur Paribahan (গাজীপুর পরিবহন)",
         
            stops: [
                "Motijheel (মতিঝিল)",
                "Paltan (পল্টন)",
                "Kakrail (কাকরাইল)",
                "Shantinagar (শান্তিনগর)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Mouchak (মৌচাক)",
                "Mogbazar (মগবাজার)",
                "Nabisco (নাবিস্কো)",
                "Mohakhali (মহাখালী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Kakali (কাকলী)",
                "Banani (বনানী)",
                "Staff Road (স্টাফ রোড)",
                "MES (এমইএস)",
                "Shewra (শেওড়া)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Khilkhet (খিলক্ষেত)",
                "Airport (বিমানবন্দর)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Azampur (আজমপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "Tongi (টঙ্গী)",
                "Station Road (স্টেশন রোড)",
                "Mill Gate (মিল গেট)",
                "Board Bazar (বোর্ড বাজার)",
                "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
                "Sib Bari (শিব বাড়ি)",
             
         
        // Reverse route stops appended below
             
                "Sib Bari (শিব বাড়ি)",
                "Board Bazar (বোর্ড বাজার)",
                "Mill Gate (মিল গেট)",
                "Station Road (স্টেশন রোড)",
                "Tongi (টঙ্গী)",
                "Abdullahpur (আব্দুল্লাহপুর)",
                "House Building (হাউজ বিল্ডিং)",
                "Azampur (আজমপুর)",
                "Rajlakshmi (রাজলক্ষ্মী)",
                "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
                "Airport (বিমানবন্দর)",
                "Khilkhet (খিলক্ষেত)",
                "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
                "Shewra (শেওড়া)",
                "MES (এমইএস)",
                "Staff Road (স্টাফ রোড)",
                "Kakali (কাকলী)",
                "Banani (বনানী)",
                "Chairman Bari (চেয়ারম্যান বাড়ী)",
                "Sainik Club (সৈনিক ক্লাব)",
                "Mohakhali (মহাখালী)",
                "Nabisco (নাবিস্কো)",
                "Mouchak (মৌচাক)",
                "Malibaag Moor (মালিবাগ মোড়)",
                "Shantinagar (শান্তিনগর)",
                "Kakrail (কাকরাইল)",
                "Paltan (পল্টন)",
                "GPO (জিপিও)",
                "Golap Shah Mazar (গোলাপ শাহ মাজার)",
                "Naya Bazar (নয়া বাজার)",
                "Ray Saheb Bazar (রায় সাহেব বাজার)",
                "Sadarghat (সদরঘাট)"
            ]
        
    },
    {
        number: "22",
        name: "Thikana Express (ঠিকানা এক্সপ্রেস)",
         
            stops: [
                "Shonbari Sreenagar (শনবাড়ি শ্রীনগর)",
                "Nimtola (নিমতলা)",
                "Kuchimura (কুচিমুড়া)",
                "Rajendrapur (রাজেন্দ্রপুর)",
                "Hasnabad (হাসনাবাদ)",
                "Postogola (পোস্তগোলা)",
                "Jurain (জুরাইন)",
                "Dholairpar (ধলাইড়পাড়)",
                "Jatrabari (যাত্রাবাড়ি)",
                "Sayapabad (সায়াপাবাদ)",
                "Gulistan (গুলিস্তান)",
                "Chankhar Pul (চাঁকহার পুল)",
                "Bakshi Bazar (বকশী বাজার)",
                "Azimpur (আজিমপুর)",
                "Nilkhet (নীলক্ষেত)",
                "New Market (নিউ মার্কেট)",
                "City College (সিটি কলেজ)",
                "Kalabagan (কলাবাগান)",
                "Dhanmondi 32 (ধানমন্ডি ৩২)",
                "Dhanmondi 27 (ধানমন্ডি ২৭)",
                "Asad Gate (আসাদ গেট)",
                "College Gate (কলেজ গেট)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Darussalam (দারুস্সালাম)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)",
                "Baipayl (বাইপাইল)",
                "Zirani Bazar (জিরানী বাজার)",
                "Nandan Park (নন্দন পার্ক)",
                "Chandra (চন্দ্রা)",
             
         
        // Reverse route stops appended below
             
                "Chandra (চন্দ্রা)",
                "Nandan Park (নন্দন পার্ক)",
                "Zirani Bazar (জিরানী বাজার)",
                "Baipayl (বাইপাইল)",
                "Savar (সাভার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Amin Bazar (আমিন বাজার)",
                "Gabtoli (গাবতলি)",
                "Technical (টেকনিক্যাল)",
                "College Gate (কলেজ গেট)",
                "Shishu Mela (শিশু মেলা)",
                "Shyamoli (শ্যামলী)",
                "Kallyanpur (কল্যাণপুর)",
                "Darussalam (দারুস্সালাম)",
                "Technical (টেকনিক্যাল)",
                "Gabtoli (গাবতলি)",
                "Amin Bazar (আমিন বাজার)",
                "Hemayetpur (হেমায়েতপুর)",
                "Savar (সাভার)"
            ]
    }
    
];


const searchForm = document.querySelector('.search-form');
if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const from = document.getElementById('from').value.toLowerCase();
        const to = document.getElementById('to').value.toLowerCase();
        
        const filteredBuses = busData.filter(bus => 
            bus.from.toLowerCase().includes(from) && 
            bus.to.toLowerCase().includes(to)
        );
        
        displaySearchResults(filteredBuses);
    });
}

// Function to display search results
function displaySearchResults(buses) {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer) {
        const container = document.createElement('div');
        container.className = 'search-results container';
        document.querySelector('.search-section').appendChild(container);
    }
    
    const resultsHTML = buses.length > 0 ? 
        generateBusCardsHTML(buses) : 
        '<p class="no-results">No buses found matching your search criteria.</p>';
    
    document.querySelector('.search-results').innerHTML = `
        <h2>Available Buses</h2>
        <div class="bus-cards">${resultsHTML}</div>
    `;

    // Add event listeners to all "More Info" buttons
    document.querySelectorAll('.more-info-btn').forEach(button => {
        button.addEventListener('click', function() {
            const busId = parseInt(this.getAttribute('data-bus-id'));
            const bus = busData.find(b => b.id === busId);
            showBusDetails(bus);
        });
    });
}

// Function to generate HTML for bus cards
function generateBusCardsHTML(buses) {
    return buses.map(bus => `
        <div class="bus-card">
            <h3>${bus.name} (${bus.number})</h3>
            <p><strong>Route:</strong> ${bus.from} ↔ ${bus.to}</p>
            <p><strong>First Departure:</strong> ${bus.departure}</p>
            <p><strong>Last Departure:</strong> ${bus.lastDeparture}</p>
            <p><strong>Frequency:</strong> ${bus.frequency}</p>
            <p><strong>Fare:</strong> ${bus.fare}</p>
            <button class="more-info-btn" data-bus-id="${bus.id}">More Info</button>
           
        </div>
    `).join('');
}

// Function to show detailed bus information
function showBusDetails(bus) {
    const modalHTML = `
        <div class="bus-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${bus.name} (${bus.number}) Details</h2>
                <div class="bus-details">
                    <p><strong>Operator:</strong> ${bus.operator}</p>
                    <p><strong>Route:</strong> ${bus.from} ↔ ${bus.to}</p>
                    <p><strong>Schedule:</strong> ${bus.departure} - ${bus.lastDeparture} (${bus.frequency})</p>
                    <p><strong>Fare Range:</strong> ${bus.fare}</p>
                    
                    <div class="detail-section">
                        <h3>Major Stops:</h3>
                        <ul>${bus.stops.map(stop => `<li>${stop}</li>`).join('')}</ul>
                    </div>
                    
                    <div class="detail-section">
                        <h3>Amenities:</h3>
                        <ul>${bus.amenities.map(amenity => `<li>${amenity}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Create and show modal
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add event listener to close button
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.querySelector('.bus-modal').remove();
    });
    
    // Close modal when clicking outside content
    document.querySelector('.bus-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.remove();
        }
    });
}




















