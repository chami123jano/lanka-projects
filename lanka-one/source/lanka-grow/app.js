const STORAGE_KEY = "lanka-grow-state-v1";

const translations = {
  en: {
    appName: "Lanka Grow",
    eyebrow: "Offline farming guide",
    language: "Language",
    profileKicker: "Your farm",
    profileTitle: "Farm profile",
    farmerName: "Farmer name",
    district: "District",
    farmSize: "Farm size (perches)",
    season: "Current season",
    seasonMaha: "Maha (Oct–Feb)",
    seasonYala: "Yala (Mar–Sep)",
    tabFarm: "My Farm",
    tabDisease: "Diseases",
    tabPests: "Pests",
    tabCalendar: "Calendar",
    mycropsKicker: "What you are growing",
    mycropsTitle: "My crops",
    addCrop: "+ Add crop",
    cropName: "Crop",
    cropArea: "Area (perches)",
    plantedDate: "Planted",
    expectedHarvest: "Expected harvest",
    cropNotes: "Notes",
    saveCrop: "Save crop",
    cancel: "Cancel",
    logKicker: "Field observations",
    logTitle: "Farm log",
    logNote: "What did you observe today?",
    addLog: "Add note",
    diseaseKicker: "Identify and act",
    diseaseTitle: "Crop disease guide",
    filterCrop: "Crop",
    filterSymptom: "Symptom",
    allCrops: "All crops",
    allSymptoms: "All symptoms",
    symptomYellow: "Yellowing leaves",
    symptomSpots: "Dark/brown spots",
    symptomWilt: "Wilting",
    symptomRot: "Rotting",
    symptomBlight: "Blight / die-back",
    symptomStunted: "Stunted growth",
    pestsKicker: "Protect your crop",
    pestsTitle: "Pest management",
    calendarKicker: "Plan by season",
    calendarTitle: "Planting calendar",
    saved: "Saved on this device.",
    delete: "Delete",
    noCrops: "No crops added yet. Tap + Add crop to get started.",
    noLog: "No observations recorded yet.",
    noResults: "No results for this filter. Try a different combination.",
    daysLeft: "days to harvest",
    daysOver: "days overdue",
    organicLabel: "Organic option",
    chemicalLabel: "Chemical option",
    preventionLabel: "Prevention",
    causeLabel: "Cause",
    affectsLabel: "Affects",
    mahaRecommended: "Good for Maha season",
    yalaRecommended: "Good for Yala season",
    bothSeasons: "Both seasons",
  },
  si: {
    appName: "Lanka Grow",
    eyebrow: "අන්තර්ජාලය නැතිව ගොවිතැන් මාර්ගෝපදේශය",
    language: "භාෂාව",
    profileKicker: "ඔබේ ගොවිපල",
    profileTitle: "ගොවිපල පැතිකඩ",
    farmerName: "ගොවියාගේ නම",
    district: "දිස්ත්‍රික්කය",
    farmSize: "ගොවිපල විශාලත්වය (පර්ච)",
    season: "වත්මන් කන්නය",
    seasonMaha: "මහ (ඔක්–පෙබ)",
    seasonYala: "යල (මාර්–සැප්)",
    tabFarm: "මගේ ගොවිපල",
    tabDisease: "රෝග",
    tabPests: "කෘමීන්",
    tabCalendar: "දිනදර්ශනය",
    mycropsKicker: "ඔබ වගා කරන දේ",
    mycropsTitle: "මගේ බෝග",
    addCrop: "+ බෝගය එකතු කරන්න",
    cropName: "බෝගය",
    cropArea: "භූමිය (පර්ච)",
    plantedDate: "රෝපණය කළ දිනය",
    expectedHarvest: "අපේක්ෂිත අස්වනු",
    cropNotes: "සටහන්",
    saveCrop: "බෝගය සුරකින්න",
    cancel: "අවලංගු",
    logKicker: "ක්ෂේත්‍ර නිරීක්ෂණ",
    logTitle: "ගොවිපල ලොගය",
    logNote: "අද ඔබ නිරීක්ෂණය කළ දේ?",
    addLog: "සටහන් එකතු කරන්න",
    diseaseKicker: "හඳුනා ගෙන ක්‍රියා කරන්න",
    diseaseTitle: "බෝග රෝග මාර්ගෝපදේශය",
    filterCrop: "බෝගය",
    filterSymptom: "රෝග ලක්ෂණ",
    allCrops: "සියලු බෝග",
    allSymptoms: "සියලු රෝග ලක්ෂණ",
    symptomYellow: "කහ වූ කොළ",
    symptomSpots: "තද/දුඹුරු ලප",
    symptomWilt: "萎ශාඛා",
    symptomRot: "කැඩිය/දිරාපත්",
    symptomBlight: "ගිනිගෑම් / මිය යෑම",
    symptomStunted: "කෙටි වර්ධනය",
    pestsKicker: "ඔබේ බෝගය ආරක්ෂා කරන්න",
    pestsTitle: "කෘමි කළමනාකරණය",
    calendarKicker: "කන්නය අනුව සැලසුම් කරන්න",
    calendarTitle: "රෝපණ දිනදර්ශනය",
    saved: "මෙම උපාංගයේ සුරැකිණි.",
    delete: "ඉවත් කරන්න",
    noCrops: "තවම බෝග නොමැත. + බෝගය එකතු කරන්න ඔබන්න.",
    noLog: "තවම නිරීක්ෂණ සටහන් කර නොමැත.",
    noResults: "මෙම පෙරහනට ප්‍රතිඵල නොමැත.",
    daysLeft: "දින ඉතිරි",
    daysOver: "දින ඉකුත් විය",
    organicLabel: "ස්වාභාවික ක්‍රමය",
    chemicalLabel: "රසායනික ක්‍රමය",
    preventionLabel: "වළකා ගැනීම",
    causeLabel: "හේතුව",
    affectsLabel: "බලපාන බෝග",
    mahaRecommended: "මහ කන්නයට සුදුසු",
    yalaRecommended: "යල කන්නයට සුදුසු",
    bothSeasons: "කන්නය දෙකටම",
  },
  ta: {
    appName: "Lanka Grow",
    eyebrow: "இணையம் இல்லா விவசாய வழிகாட்டி",
    language: "மொழி",
    profileKicker: "உங்கள் தோட்டம்",
    profileTitle: "தோட்ட விவரம்",
    farmerName: "விவசாயி பெயர்",
    district: "மாவட்டம்",
    farmSize: "நிலம் (பர்ச்)",
    season: "தற்போதைய பருவம்",
    seasonMaha: "மகா (அக்–பிப்)",
    seasonYala: "யாலா (மார்–செப்)",
    tabFarm: "என் தோட்டம்",
    tabDisease: "நோய்கள்",
    tabPests: "பூச்சிகள்",
    tabCalendar: "நாட்காட்டி",
    mycropsKicker: "நீங்கள் வளர்ப்பது",
    mycropsTitle: "என் பயிர்கள்",
    addCrop: "+ பயிர் சேர்",
    cropName: "பயிர்",
    cropArea: "பரப்பு (பர்ச்)",
    plantedDate: "நடவு தேதி",
    expectedHarvest: "எதிர்பார்த்த அறுவடை",
    cropNotes: "குறிப்புகள்",
    saveCrop: "பயிரை சேமி",
    cancel: "இரத்து",
    logKicker: "வயல் கவனிப்புகள்",
    logTitle: "தோட்ட பதிவேடு",
    logNote: "இன்று நீங்கள் கவனித்தது என்ன?",
    addLog: "குறிப்பு சேர்",
    diseaseKicker: "அடையாளம் காணி செயல்படுங்கள்",
    diseaseTitle: "பயிர் நோய் வழிகாட்டி",
    filterCrop: "பயிர்",
    filterSymptom: "அறிகுறி",
    allCrops: "அனைத்து பயிர்கள்",
    allSymptoms: "அனைத்து அறிகுறிகள்",
    symptomYellow: "மஞ்சள் இலைகள்",
    symptomSpots: "கருப்பு/பழுப்பு புள்ளிகள்",
    symptomWilt: "வாடல்",
    symptomRot: "அழுகல்",
    symptomBlight: "எரிவு / கிளை இறப்பு",
    symptomStunted: "குள்ள வளர்ச்சி",
    pestsKicker: "பயிரை பாதுகாக்கவும்",
    pestsTitle: "பூச்சி மேலாண்மை",
    calendarKicker: "பருவம் படி திட்டமிடு",
    calendarTitle: "நடவு நாட்காட்டி",
    saved: "இந்த சாதனத்தில் சேமிக்கப்பட்டது.",
    delete: "நீக்கு",
    noCrops: "இன்னும் பயிர்கள் சேர்க்கவில்லை.",
    noLog: "இன்னும் கவனிப்புகள் பதிவு இல்லை.",
    noResults: "இந்த வடிப்பானுக்கு முடிவுகள் இல்லை.",
    daysLeft: "நாட்கள் மீதம்",
    daysOver: "நாட்கள் தாமதம்",
    organicLabel: "இயற்கை முறை",
    chemicalLabel: "இரசாயன முறை",
    preventionLabel: "தடுப்பு",
    causeLabel: "காரணம்",
    affectsLabel: "பாதிக்கும் பயிர்கள்",
    mahaRecommended: "மகா பருவத்திற்கு ஏற்றது",
    yalaRecommended: "யாலா பருவத்திற்கு ஏற்றது",
    bothSeasons: "இரண்டு பருவமும்",
  },
};

const districts = [
  "Ampara","Anuradhapura","Badulla","Batticaloa","Colombo","Galle","Gampaha",
  "Hambantota","Jaffna","Kalutara","Kandy","Kegalle","Kilinochchi","Kurunegala",
  "Mannar","Matale","Matara","Monaragala","Mullaitivu","Nuwara Eliya",
  "Polonnaruwa","Puttalam","Ratnapura","Trincomalee","Vavuniya",
];

const cropSuggestions = [
  "Rice","Maize","Tomato","Brinjal","Bitter gourd","Snake gourd","Pumpkin",
  "Okra","Chilli","Green beans","Cowpea","Soya","Groundnut","Sesame",
  "Sweet potato","Cassava","Banana","Papaya","Coconut","Tea","Rubber",
  "Mango","Pineapple","Passion fruit","Lime","Orange","Drumstick","Spinach",
  "Mukunuwenna","Gotukola","Leeks","Carrot","Beetroot","Cabbage","Cauliflower",
];

// Disease database — Sri Lanka common crop diseases
const diseases = [
  {
    id: "rice-blast",
    name: { en: "Rice Blast", si: "සැමිල්ල රෝගය", ta: "நெல் திக்கு நோய்" },
    crops: ["Rice"],
    symptoms: ["spots", "blight"],
    cause: { en: "Fungus (Magnaporthe oryzae)", si: "දිලීරය (Magnaporthe oryzae)", ta: "பூஞ்சை (Magnaporthe oryzae)" },
    organic: { en: "Remove infected plants. Apply Trichoderma biological agent. Avoid excess nitrogen.", si: "ආසාදිත ශාක ඉවත් කරන්න. ට්‍රයිකෝඩර්මා යොදන්න. අධික නයිට්‍රජන් වළකින්න.", ta: "பாதிக்கப்பட்ட செடிகளை நீக்கவும். டிரைக்கோடெர்மா பயன்படுத்தவும்." },
    chemical: { en: "Tricyclazole (Beam) or Isoprothiolane (Fuji-One) at first sign.", si: "Tricyclazole හෝ Isoprothiolane රෝගය ආරම්භ වූ සාමිදි.", ta: "Tricyclazole அல்லது Isoprothiolane முதல் அறிகுறியில் பயன்படுத்தவும்." },
    prevention: { en: "Use resistant varieties (BG 300, BG 352). Maintain proper spacing. Avoid over-watering.", si: "ප්‍රතිරෝධී ප්‍රභේද (BG 300, BG 352) භාවිතා කරන්න. නිසි අභ්‍යාංශ පාලනය.", ta: "எதிர்ப்பு ரகங்கள் (BG 300, BG 352) பயன்படுத்தவும். சரியான இடைவெளி." },
  },
  {
    id: "rice-bls",
    name: { en: "Bacterial Leaf Blight", si: "බැක්ටීරියා කොළ දැවීම", ta: "பாக்டீரியா இலை கருகல்" },
    crops: ["Rice"],
    symptoms: ["blight", "yellowing"],
    cause: { en: "Bacteria (Xanthomonas oryzae)", si: "බැක්ටීරියා (Xanthomonas oryzae)", ta: "பாக்டீரியா (Xanthomonas oryzae)" },
    organic: { en: "Remove infected plants. Spray copper-based solution. Drain flooded fields.", si: "ආසාදිත ශාක ඉවත් කරන්න. තඹ ද්‍රාවණය ඉසින්න.", ta: "பாதித்த செடிகளை நீக்கவும். தாமிர திரவம் தெளிக்கவும்." },
    chemical: { en: "Copper oxychloride spray. Avoid excess nitrogen fertilizer.", si: "Copper oxychloride ඉසීම.", ta: "Copper oxychloride தெளிக்கவும்." },
    prevention: { en: "Use certified seed. Maintain balanced fertilizer. Improve field drainage.", si: "සහතික කළ බීජ භාවිතා කරන්න. ක්ෂේත්‍ර ජල ප්‍රවාහය වැඩි දියුණු කරන්න.", ta: "சான்றளிக்கப்பட்ட விதை பயன்படுத்தவும். வடிகால் மேம்படுத்தவும்." },
  },
  {
    id: "tomato-blight",
    name: { en: "Tomato Late Blight", si: "තක්කාලි අගේ ගිනිගෑම", ta: "தக்காளி தாமதமான திக்கு" },
    crops: ["Tomato"],
    symptoms: ["blight", "spots", "rot"],
    cause: { en: "Oomycete (Phytophthora infestans)", si: "දිලීරය (Phytophthora infestans)", ta: "பூஞ்சை (Phytophthora infestans)" },
    organic: { en: "Remove and destroy infected plant parts. Apply copper-based Bordeaux mixture. Improve air circulation.", si: "ආසාදිත කොටස් ඉවත් කරන්න. Bordeaux mixture ඉසින්න.", ta: "பாதித்த பகுதிகளை அகற்றவும். Bordeaux கலவை தெளிக்கவும்." },
    chemical: { en: "Mancozeb or Metalaxyl+Mancozeb (Ridomil Gold) spray every 7–10 days.", si: "Mancozeb හෝ Metalaxyl+Mancozeb දින 7–10 ට වරක් ඉසින්න.", ta: "Mancozeb அல்லது Metalaxyl+Mancozeb 7–10 நாட்களுக்கு ஒருமுறை தெளிக்கவும்." },
    prevention: { en: "Stake plants for good airflow. Avoid overhead irrigation. Rotate crops annually.", si: "ශාකවලට හොඳ වාතාශ්‍රය ලැබෙන සේ ස්ථාවර කරන්න. ශාකය භ්‍රමණය කරන්න.", ta: "நல்ல காற்றோட்டம் தர கோல் வைக்கவும். பயிர் சுழற்சி செய்யவும்." },
  },
  {
    id: "tomato-leaf-curl",
    name: { en: "Tomato Leaf Curl Virus", si: "තක්කාලි කොළ ඇඹරුම් රෝගය", ta: "தக்காளி இலை சுருட்டு நோய்" },
    crops: ["Tomato","Chilli"],
    symptoms: ["yellowing", "stunted"],
    cause: { en: "Virus spread by whitefly", si: "සුදු මැස්සා මගින් පතිරවන වෛරසය", ta: "வெள்ளை ஈ மூலம் பரவும் வைரஸ்" },
    organic: { en: "Remove infected plants immediately. Control whitefly with yellow sticky traps and neem oil spray.", si: "ආසාදිත ශාක ඉවත් කරන්න. කහ ලොස්කර පොදි සහ නිල් තෙල් ස්ප්‍රේ.", ta: "பாதிக்கப்பட்ட செடிகளை உடனே நீக்கவும். மஞ்சள் பசை பொறி மற்றும் வேப்பெண்ணெய்." },
    chemical: { en: "Control whitefly with Imidacloprid or Thiamethoxam. No cure for the virus itself.", si: "Imidacloprid හෝ Thiamethoxam සමඟ සුදු මැස්සා නියාමනය කරන්න.", ta: "Imidacloprid அல்லது Thiamethoxam கொண்டு வெள்ளை ஈ கட்டுப்படுத்தவும்." },
    prevention: { en: "Use virus-resistant varieties. Plant away from infected areas. Install insect nets.", si: "ප්‍රතිරෝධී ප්‍රභේද භාවිතා කරන්න. කෘමි ජාල ස්ථාපනය කරන්න.", ta: "எதிர்ப்பு ரகங்கள் பயன்படுத்தவும். பூச்சி வலை பொருத்தவும்." },
  },
  {
    id: "chilli-anthracnose",
    name: { en: "Chilli Anthracnose", si: "මිරිස් ඇන්ත්‍රැක්නෝස්", ta: "மிளகாய் ஆந்திராக்னோஸ்" },
    crops: ["Chilli"],
    symptoms: ["spots", "rot"],
    cause: { en: "Fungus (Colletotrichum spp.)", si: "දිලීරය (Colletotrichum spp.)", ta: "பூஞ்சை (Colletotrichum spp.)" },
    organic: { en: "Harvest fruits early. Apply Trichoderma spray. Remove and destroy infected fruits.", si: "පළතුරු කල් ඉකුත්වීමට පෙර අස්වනු නෙළන්න. Trichoderma ස්ප්‍රේ.", ta: "பழங்களை முன்கூட்டியே அறுவடை செய்யவும். Trichoderma தெளிக்கவும்." },
    chemical: { en: "Mancozeb + Carbendazim spray. Start before monsoon arrives.", si: "Mancozeb + Carbendazim ස්ප්‍රේ. මෝසම් ආරම්භයට පෙර.", ta: "Mancozeb + Carbendazim தெளிக்கவும். மழை வருமுன் தொடங்கவும்." },
    prevention: { en: "Use disease-free seed. Good drainage. Avoid overhead watering.", si: "රෝගය නොමැති බීජ භාවිතා කරන්න. හොඳ ජල ප්‍රවාහය.", ta: "நோயற்ற விதை பயன்படுத்தவும். நல்ல வடிகால்." },
  },
  {
    id: "banana-fusarium",
    name: { en: "Banana Fusarium Wilt (Panama Disease)", si: "කෙළඹ ෆ්‍යූසේරියම්萎ශාඛා", ta: "வாழை பனாமா நோய்" },
    crops: ["Banana"],
    symptoms: ["wilting", "yellowing"],
    cause: { en: "Fungus (Fusarium oxysporum)", si: "දිලීරය (Fusarium oxysporum)", ta: "பூஞ்சை (Fusarium oxysporum)" },
    organic: { en: "Remove and burn infected plants including the rhizome. Do not replant bananas in the same soil for 3–5 years.", si: "ආසාදිත ශාක rhizome සමෙත් ගෙන දහනය කරන්න. වසර 3–5 ස්ථානය ​​වෙනස් කරන්න.", ta: "பாதிக்கப்பட்ட செடிகளை கிழங்குடன் எரிக்கவும். 3–5 ஆண்டு வேறு இடம்." },
    chemical: { en: "No effective chemical cure. Focus on prevention and resistant varieties.", si: "රසායනික ප්‍රතිකාරයක් නැත. ප්‍රතිරෝධී ප්‍රභේද.", ta: "திறமையான இரசாயன மருந்து இல்லை. எதிர்ப்பு ரகங்கள் பயன்படுத்தவும்." },
    prevention: { en: "Plant resistant varieties (Dwarf Cavendish, BBTV-free suckers). Do not move soil from infected areas.", si: "ප්‍රතිරෝධී ප්‍රභේද (Dwarf Cavendish) වගා කරන්න. ආසාදිත ස්ථාන වලින් පස් ගෙනෙන්නේ නොකරන්න.", ta: "எதிர்ப்பு ரகங்கள் நடவும். நோய் உள்ள மண் நகர்த்தாதீர்." },
  },
  {
    id: "coconut-wilt",
    name: { en: "Coconut Wilt Disease", si: "පොල්萎ශාඛා රෝගය", ta: "தேங்காய் வாடல் நோய்" },
    crops: ["Coconut"],
    symptoms: ["wilting", "yellowing", "stunted"],
    cause: { en: "Complex of phytoplasma and fungus", si: "ෆයිටොප්ලාස්මා සහ දිලීරය", ta: "பைட்டோபிளாஸ்மா மற்றும் பூஞ்சை சேர்க்கை" },
    organic: { en: "Remove severely infected palms. Apply organic manure to healthy trees. Avoid root damage.", si: "දැඩි ලෙස ආසාදිත ශාක ඉවත් කරන්න. සෞඛ්‍ය සම්පන්න ශාකවලට කාබනික පොහොර.", ta: "கடுமையாக பாதிக்கப்பட்ட மரங்களை நீக்கவும். ஆரோக்கியமான மரங்களுக்கு இயற்கை உரம்." },
    chemical: { en: "Trunk injection with Metalaxyl. Consult CRI (Coconut Research Institute) for assistance.", si: "Metalaxyl කඳ ඇතුළේ ඇතුළු කිරීම. CRI සහය ලබාගන්න.", ta: "Metalaxyl மரத்தின் உள்ளே செலுத்தவும். CRI உதவி பெறவும்." },
    prevention: { en: "Plant healthy certified seedlings. Manage soil moisture. Annual soil testing.", si: "සෞඛ්‍ය සම්පන්න සහතික රෝපණ ද්‍රව්‍ය රෝපණය කරන්න. ගොඩ ජලය කළමනාකරණය.", ta: "ஆரோக்கியமான சான்றளிக்கப்பட்ட நாற்றுகள் நடவும். மண் ஈரப்பதம் நிர்வகிக்கவும்." },
  },
  {
    id: "paddy-sheath",
    name: { en: "Sheath Blight of Rice", si: "සාප්පු ගිනිගෑම", ta: "உரோமை கருகல்" },
    crops: ["Rice"],
    symptoms: ["spots", "blight"],
    cause: { en: "Fungus (Rhizoctonia solani)", si: "දිලීරය (Rhizoctonia solani)", ta: "பூஞ்சை (Rhizoctonia solani)" },
    organic: { en: "Reduce plant density. Apply Pseudomonas fluorescens biological agent. Drain mid-season.", si: "ශාක ඝනත්වය අඩු කරන්න. Pseudomonas fluorescens යොදන්න.", ta: "செடி அடர்த்தி குறைக்கவும். Pseudomonas fluorescens பயன்படுத்தவும்." },
    chemical: { en: "Hexaconazole or Propiconazole spray at early infection stage.", si: "Hexaconazole හෝ Propiconazole ආරම්භක ආසාදනය ලදී.", ta: "Hexaconazole அல்லது Propiconazole ஆரம்ப தொற்றில் தெளிக்கவும்." },
    prevention: { en: "Use wider spacing. Balanced fertilizer (avoid excess nitrogen). Drain fields mid-season.", si: "넓 aralabadunu ශාකය රෝපණය. සමතුලිත පොහොර. බාගේ ජලය බැස්සෙව්ව.", ta: "அகலமான இடைவெளி. சமன் உரம். பாதி பருவத்தில் வடிகால்." },
  },
  {
    id: "brinjal-littleleaf",
    name: { en: "Brinjal Little Leaf (Phytoplasma)", si: "බටු කොළ හිඟ රෝගය", ta: "கத்தரி சிறு இலை நோய்" },
    crops: ["Brinjal"],
    symptoms: ["stunted", "yellowing"],
    cause: { en: "Phytoplasma transmitted by leafhoppers", si: "ෆයිටොප්ලාස්මා (leafhopper නිසා)", ta: "பைட்டோபிளாஸ்மா (இலை தாவி பரவுகிறது)" },
    organic: { en: "Remove and destroy infected plants. Control leafhopper vectors with neem oil. Use reflective mulch.", si: "ආසාදිත ශාක ඉවත් කරන්න. නිල් තෙල් ස්ප්‍රේ.", ta: "பாதித்த செடிகளை நீக்கவும். வேப்பெண்ணெய் தெளிக்கவும்." },
    chemical: { en: "Control leafhopper with Imidacloprid or Thiamethoxam. No chemical cure for phytoplasma.", si: "Imidacloprid හෝ Thiamethoxam සමඟ leafhopper නිවාරණය.", ta: "Imidacloprid அல்லது Thiamethoxam கொண்டு இலை தாவி கட்டுப்படுத்தவும்." },
    prevention: { en: "Early planting. Resistant varieties. Insect-proof nets.", si: "ඉක්මන් රෝපණය. ප්‍රතිරෝධී ප්‍රභේද. කෘමි ජාල.", ta: "ஆரம்ப நடவு. எதிர்ப்பு ரகங்கள். பூச்சி வலை." },
  },
];

// Pest database
const pests = [
  {
    id: "rice-thrips",
    name: { en: "Rice Thrips", si: "වී ත්‍රිප්ස්", ta: "நெல் திரிப்ஸ்" },
    crops: ["Rice"],
    damage: { en: "Leaves roll inward, turn yellow, seedlings look like onion shoots.", si: "කොළ ඇතුළට රෝල් වේ, කහ වේ.", ta: "இலைகள் உள்ளே சுருளும், மஞ்சளாகும்." },
    organic: { en: "Flood field for 2–3 days (thrips dislike water). Spray neem oil (5ml/L) every 5 days.", si: "ක්ෂේත්‍රය දින 2–3 ගංවතුරේ දිය. නිල් තෙල් 5ml/L.", ta: "வயலில் 2–3 நாள் தண்ணீர் நிரப்பவும். வேப்பெண்ணெய் 5ml/L." },
    chemical: { en: "Chlorpyrifos or Malathion spray. Apply early morning.", si: "Chlorpyrifos හෝ Malathion ස්ප්‍රේ. උදෑසන.", ta: "Chlorpyrifos அல்லது Malathion தெளிக்கவும்." },
    prevention: { en: "Healthy nursery management. Avoid drought stress at seedling stage.", si: "නිරෝගී නර්සරි කළමනාකරණය. ශාකය නිජ කන වියළිලම වළකින්න.", ta: "ஆரோக்கியமான நாற்றங்கால் மேலாண்மை." },
  },
  {
    id: "brown-planthopper",
    name: { en: "Brown Planthopper (BPH)", si: "දුඹුරු ශාක ලිපිහොපිං", ta: "பழுப்பு தாவரத் தாவி" },
    crops: ["Rice"],
    damage: { en: "Hopper burn — circular yellowed patches. Can destroy entire field rapidly.", si: "ශාක ඕලෙන්හිරියම — කිසිම කාලයක වෙනස් වු කහ කොටස් ශාකය ගා.", ta: "ஹாப்பர் தீ — வட்ட மஞ்சள் திட்டுகள். விரைவில் முழு வயல் அழியும்." },
    organic: { en: "Drain water for 3–5 days. Reduce nitrogen fertilizer. Encourage natural predators (spiders, mirid bugs).", si: "ජලය දින 3–5 ක් ඉවත් කරන්න. ස්වාභාවික ශිකාරිකාරීන් දිරිගන්වන්න.", ta: "3–5 நாள் தண்ணீர் வடிக்கவும். இயற்கை எதிரிகளை ஊக்குவிக்கவும்." },
    chemical: { en: "Buprofezin or Imidacloprid. Spray at base of plants. Rotate insecticides to prevent resistance.", si: "Buprofezin හෝ Imidacloprid. ශාකයේ පාදය ඉසින්න.", ta: "Buprofezin அல்லது Imidacloprid. கீழ் பகுதியில் தெளிக்கவும்." },
    prevention: { en: "Balanced fertilizer. Wider plant spacing. Avoid mid-season nitrogen surge.", si: "සමතුලිත පොහොර. niru aralabadunu ශාකය රෝපණය. ශාකයේ ශ්‍රිතාන්ත නයිට්‍රජන් සයිකල් අඩු.", ta: "சம உரம். அகலமான இடைவெளி." },
  },
  {
    id: "tomato-mite",
    name: { en: "Tomato Red Spider Mite", si: "තක්කාලි රතු මකුළු කුරුල්ලා", ta: "தக்காளி சிவப்பு சிலந்தி பூச்சி" },
    crops: ["Tomato","Brinjal","Chilli"],
    damage: { en: "Yellow stippling on leaves. Fine webbing on underside. Leaves bronze and drop in severe attack.", si: "කොළ රෝල් කහ ලප. කොළ යට මකුළු ජාලය.", ta: "இலைகளில் மஞ்சள் புள்ளிகள். இலை அடியில் சிலந்தி வலை." },
    organic: { en: "Spray neem oil (5ml/L) + soap solution. Increase humidity. Release predatory mites.", si: "නිල් තෙල් 5ml/L + සබන් ද්‍රාවණය. ආර්ද්‍රතාවය වැඩි කරන්න.", ta: "வேப்பெண்ணெய் 5ml/L + சோப்பு திரவம் தெளிக்கவும்." },
    chemical: { en: "Abamectin or Spiromesifen. Spray underside of leaves. Rotate chemicals.", si: "Abamectin හෝ Spiromesifen. කොළ යට ඉසින්න.", ta: "Abamectin அல்லது Spiromesifen. இலை அடியில் தெளிக்கவும்." },
    prevention: { en: "Avoid dusty conditions. Overhead irrigation reduces mite populations.", si: "ධූලිමය ස්ථාන වළකින්න. ඉහළ ජලය සින්දන ජනතාව අඩු.", ta: "தூசு நிலைமைகளைத் தவிர்க்கவும். மேலிருந்து நீர்ப்பாசனம்." },
  },
  {
    id: "fruit-fly",
    name: { en: "Fruit Fly (Bactrocera)", si: "ඵල මීය", ta: "பழ ஈ" },
    crops: ["Bitter gourd","Snake gourd","Pumpkin","Mango","Papaya","Chilli"],
    damage: { en: "Larvae inside fruit cause rotting. Affected fruit drops early. Yellow ooze visible at entry point.", si: "ලාවරු ඇතුළේ දිරාපත් කරයි. ඵල කලින් evapenava.", ta: "உள்ளே லார்வா அழுகல் ஏற்படுத்தும். பழங்கள் முன்கூட்டியே விழும்." },
    organic: { en: "Protein bait traps with Methyl Eugenol. Bag individual fruits. Remove fallen fruit daily.", si: "Methyl Eugenol සඳහා ප්‍රෝටීන් ශිකාරිකාරී. ඵල ප්ලාස්ටික් ගෙන ඇ.", ta: "Methyl Eugenol கொண்டு பொறி வைக்கவும். தனி பழங்களை பை கட்டவும்." },
    chemical: { en: "Spinosad bait spray (Tracer). Do not spray after sunset — affects bees.", si: "Spinosad bait ස්ප්‍රේ. හිරු ගිල්වෙන්නට පෙර ස්ප්‍රේ — හොල්ටේ.", ta: "Spinosad bait தெளிக்கவும். சூரியன் மறைந்த பின் தெளிக்க வேண்டாம்." },
    prevention: { en: "Clear fallen and overripe fruit. Install pheromone traps early in season.", si: "වැගිරෙන හා ඉදුනු ගිය ඵල ඉවත් කරන්න. ෆෙරොමෝන් ශිකාරිකාරී.", ta: "விழுந்த பழங்களை அகற்றவும். ஃபெரோமோன் பொறி வைக்கவும்." },
  },
  {
    id: "coconut-rhinoceros",
    name: { en: "Coconut Rhinoceros Beetle", si: "පොල් ගොරෝසු", ta: "தேங்காய் கண்டா வண்டு" },
    crops: ["Coconut"],
    damage: { en: "V-shaped cuts in fronds. Spear leaf with holes. Can kill young palms.", si: "ශාඛා V-ස්වරූපී කැපීම. ෆ්‍රොන්ඩ් හිස හෝල.", ta: "பேரிய V வடிவ வெட்டுகள். இளைஞர் மரங்கள் இறக்கலாம்." },
    organic: { en: "Set Oryctes rhinoceros pheromone traps. Apply Metarhizium fungal biopesticide into breeding sites (compost heaps, stumps).", si: "Oryctes ෆෙරොමෝන් ශිකාරිකාරී. Metarhizium ජෛව කෘමිනාශකය.", ta: "Oryctes pheromone பொறி. Metarhizium உயிர் பூச்சிக்கொல்லி." },
    chemical: { en: "Carbaryl dust or Chlorpyrifos into crown of palms. Contact Coconut Research Institute (CRI) for severe infestations.", si: "Carbaryl ធូළ හෝ Chlorpyrifos ශාකයේ කිරීටයට. CRI සම්බන්ධ.", ta: "Carbaryl தூள் அல்லது Chlorpyrifos மரத்தின் முகட்டில். CRI தொடர்புகொள்ளவும்." },
    prevention: { en: "Remove rotting logs and stumps — breeding sites. Regular removal of damaged fronds.", si: "දිරාපත් කඳ සහ කොකු ඉවත් කරන්න. ක්‍රමිකව හානි ශාඛා ඉවත් කරන්න.", ta: "அழுகல் கட்டைகள் நீக்கவும். சேதமடைந்த கிளைகளை அகற்றவும்." },
  },
];

// Planting calendar data
const calendar = [
  { crop: "Rice", maha: true, yala: true, duration: { en: "90–115 days", si: "දින 90–115", ta: "90–115 நாட்கள்" }, notes: { en: "BG 300, BG 352, AT 362 are popular. Maha: plant Oct–Nov; Yala: Apr–May.", si: "BG 300, BG 352 ජනප්‍රිය. මහ: ඔක්–නොවැ; යල: අප්‍රේල්–මාර්.", ta: "BG 300, BG 352 பிரபலம். மகா: அக்–நவ; யாலா: ஏப்–மே." } },
  { crop: "Maize", maha: true, yala: true, duration: { en: "90–100 days", si: "දින 90–100", ta: "90–100 நாட்கள்" }, notes: { en: "Plant in both seasons. Suitable for dry and intermediate zones.", si: "කන්නය දෙකේදීම. වියළි හා අතරමැදි කළාප.", ta: "இரு பருவமும் நடவு. வறண்ட மற்றும் இடைநிலை மண்டலம்." } },
  { crop: "Tomato", maha: true, yala: false, duration: { en: "75–90 days", si: "දින 75–90", ta: "75–90 நாட்கள்" }, notes: { en: "Best in Maha (cool weather). Avoid heavy monsoon rains.", si: "මහ කාලය හොඳයි. ශක්තිමත් මෝසම් නොගන.", ta: "மகா (குளிர்) சிறந்தது. கனமழை தவிர்க்கவும்." } },
  { crop: "Chilli", maha: true, yala: true, duration: { en: "90–120 days", si: "දින 90–120", ta: "90–120 நாட்கள்" }, notes: { en: "Both seasons. Harvest multiple times. Dry zone performs well in Yala.", si: "කන්නය දෙකේ. අස්වනු නෙළීම් කිහිපයක්. යල: වියළි කළාපය.", ta: "இரு பருவம். பல முறை அறுவடை. யாலா: வறண்ட மண்டலம்." } },
  { crop: "Brinjal", maha: true, yala: true, duration: { en: "60–75 days to first harvest", si: "දින 60–75 (මුල් අස්වනු)", ta: "60–75 நாட்கள் (முதல் அறுவடை)" }, notes: { en: "Year-round in well-drained soil. Avoid waterlogging.", si: "ජල ප්‍රවාහය හොඳ පස. ජල ගැලීම් .", ta: "நல்ல வடிகால் மண்ணில் ஆண்டுமுழுவதும். தண்ணீர் தேங்காதீர்." } },
  { crop: "Bitter gourd", maha: false, yala: true, duration: { en: "50–60 days to first harvest", si: "දින 50–60 (මුල් අස්වනු)", ta: "50–60 நாட்கள் (முதல் அறுவடை)" }, notes: { en: "Best in Yala (warm, sunny). Requires trellis.", si: "යල: උෂ්ණ, හිරු. ස්ට්‍රක්චරයක් අවශ්‍ය.", ta: "யாலா (வெப்பம், வெயில்) சிறந்தது. தட்டி தேவை." } },
  { crop: "Banana", maha: true, yala: true, duration: { en: "11–14 months", si: "මාස 11–14", ta: "11–14 மாதங்கள்" }, notes: { en: "Plant suckers year-round. Avoid waterlogged areas.", si: "දළු ශාකය ඕනෑ ම වේලාවක. ජල ගැලීම් .", ta: "ஆண்டுமுழுவதும் கன்று நடவு. தண்ணீர் தேங்கும் இடம் தவிர்க்கவும்." } },
  { crop: "Coconut", maha: true, yala: true, duration: { en: "5–7 years to first yield (seedling)", si: "අවුරුදු 5–7 (නර්සරි ශාකය)", ta: "5–7 ஆண்டுகள் (நாற்றிலிருந்து)" }, notes: { en: "Long-term crop. Year-round management. Sandy loam soils preferred.", si: "දිගු කාල බෝගය. ගොඩිනිෂ් ලෝමී පස්.", ta: "நீண்ட கால பயிர். மண்ணில் மணல் கலவை விரும்பும்." } },
  { crop: "Sweet potato", maha: false, yala: true, duration: { en: "90–120 days", si: "දින 90–120", ta: "90–120 நாட்கள்" }, notes: { en: "Drought-tolerant. Good for dry zone in Yala. Light, sandy soils.", si: "නියං ඔරොත්තු. යල: වියළි කළාපය. සැහැල්ලු පස්.", ta: "வறட்சி தாங்கும். யாலா: வறண்ட மண்டலம். மென் மண்." } },
  { crop: "Cassava", maha: true, yala: true, duration: { en: "9–12 months", si: "මාස 9–12", ta: "9–12 மாதங்கள்" }, notes: { en: "Hardy crop. Tolerates poor soils and drought. Both seasons.", si: "ශක්තිමත් බෝගය. දුර්වල පස් ඔරොත්තු. කන්නය දෙකේ.", ta: "கடினமான பயிர். மோசமான மண் தாங்கும். இரு பருவம்." } },
  { crop: "Groundnut", maha: false, yala: true, duration: { en: "100–120 days", si: "දින 100–120", ta: "100–120 நாட்கள்" }, notes: { en: "Yala season in dry zone. Sandy loam. Good soil drainage critical.", si: "යල: වියළි කළාපය. ගොඩිනිෂ් ලෝමී. හොඳ ජල ප්‍රවාහය.", ta: "யாலா: வறண்ட மண்டலம். மணல் கலவை மண். நல்ல வடிகால் அவசியம்." } },
  { crop: "Pumpkin", maha: false, yala: true, duration: { en: "70–90 days", si: "දින 70–90", ta: "70–90 நாட்கள்" }, notes: { en: "Best Yala. Sprawling vine — needs space. Well-drained fertile soil.", si: "හොඳම යල. ශාකය ව්‍යාප්ත. හොඳ ජල ප්‍රවාහය.", ta: "யாலா சிறந்தது. படர் கொடி — இடம் தேவை. நல்ல வடிகால் மண்." } },
];

const initialState = {
  language: "en",
  farmerName: "",
  district: "Kandy",
  farmSize: 20,
  season: "maha",
  crops: [],
  log: [],
};

let state = loadState();
let activeTab = "farm";

const els = {
  languageSelect: document.querySelector("#languageSelect"),
  farmerNameInput: document.querySelector("#farmerNameInput"),
  districtSelect: document.querySelector("#districtSelect"),
  farmSizeInput: document.querySelector("#farmSizeInput"),
  seasonSelect: document.querySelector("#seasonSelect"),
  saveStatus: document.querySelector("#saveStatus"),
  cropList: document.querySelector("#cropList"),
  cropForm: document.querySelector("#cropForm"),
  cropNameInput: document.querySelector("#cropNameInput"),
  cropAreaInput: document.querySelector("#cropAreaInput"),
  plantedDateInput: document.querySelector("#plantedDateInput"),
  harvestDateInput: document.querySelector("#harvestDateInput"),
  cropNotesInput: document.querySelector("#cropNotesInput"),
  cropSuggestions: document.querySelector("#cropSuggestions"),
  logNoteInput: document.querySelector("#logNoteInput"),
  logList: document.querySelector("#logList"),
  diseaseCropFilter: document.querySelector("#diseaseCropFilter"),
  diseaseSymptomFilter: document.querySelector("#diseaseSymptomFilter"),
  diseaseList: document.querySelector("#diseaseList"),
  pestCropFilter: document.querySelector("#pestCropFilter"),
  pestList: document.querySelector("#pestList"),
  seasonBanner: document.querySelector("#seasonBanner"),
  calendarGrid: document.querySelector("#calendarGrid"),
};

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...structuredClone(initialState), ...JSON.parse(stored) } : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  els.saveStatus.textContent = t("saved");
}

function t(key) {
  return translations[state.language]?.[key] ?? translations.en[key] ?? key;
}

function loc(obj) {
  return obj?.[state.language] ?? obj?.en ?? "";
}

function init() {
  populateDistricts();
  populateCropSuggestions();
  syncInputs();
  bindEvents();
  renderAll();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js").catch(() => {});
}

function populateDistricts() {
  els.districtSelect.innerHTML = districts
    .map((d) => `<option value="${d}">${d}</option>`)
    .join("");
}

function populateCropSuggestions() {
  els.cropSuggestions.innerHTML = cropSuggestions
    .map((c) => `<option value="${escapeHtml(c)}"></option>`)
    .join("");
}

function syncInputs() {
  els.languageSelect.value = state.language;
  els.farmerNameInput.value = state.farmerName;
  els.districtSelect.value = state.district;
  els.farmSizeInput.value = state.farmSize;
  els.seasonSelect.value = state.season;
  translatePage();
}

function bindEvents() {
  els.languageSelect.addEventListener("change", (e) => {
    state.language = e.target.value;
    document.documentElement.lang = state.language;
    translatePage();
    renderAll();
    saveState();
  });

  [
    ["farmerNameInput", "farmerName", String],
    ["farmSizeInput", "farmSize", Number],
  ].forEach(([id, key, cast]) => {
    els[id].addEventListener("input", (e) => {
      state[key] = cast(e.target.value);
      renderAll();
      saveState();
    });
  });

  els.districtSelect.addEventListener("change", (e) => {
    state.district = e.target.value;
    renderAll();
    saveState();
  });

  els.seasonSelect.addEventListener("change", (e) => {
    state.season = e.target.value;
    renderAll();
    saveState();
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.tab;
      renderTabs();
    });
  });

  document.querySelector("#addCropButton").addEventListener("click", () => {
    els.cropForm.classList.remove("hidden");
    els.plantedDateInput.value = todayIso();
    els.cropNameInput.focus();
  });

  document.querySelector("#cancelCropButton").addEventListener("click", () => {
    els.cropForm.classList.add("hidden");
    els.cropForm.reset();
  });

  els.cropForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.crops.push({
      id: crypto.randomUUID(),
      name: els.cropNameInput.value.trim(),
      area: Number(els.cropAreaInput.value),
      planted: els.plantedDateInput.value,
      harvest: els.harvestDateInput.value,
      notes: els.cropNotesInput.value.trim(),
    });
    els.cropForm.classList.add("hidden");
    els.cropForm.reset();
    renderAll();
    saveState();
  });

  document.querySelector("#logForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const text = els.logNoteInput.value.trim();
    if (!text) return;
    state.log.unshift({ id: crypto.randomUUID(), text, date: todayIso() });
    state.log = state.log.slice(0, 30);
    els.logNoteInput.value = "";
    renderLog();
    saveState();
  });

  els.diseaseCropFilter.addEventListener("change", renderDiseases);
  els.diseaseSymptomFilter.addEventListener("change", renderDiseases);
  els.pestCropFilter.addEventListener("change", renderPests);

  document.addEventListener("click", (e) => {
    if (e.target.dataset.deleteCrop) {
      state.crops = state.crops.filter((c) => c.id !== e.target.dataset.deleteCrop);
      renderCrops();
      saveState();
    }
    if (e.target.dataset.deleteLog) {
      state.log = state.log.filter((l) => l.id !== e.target.dataset.deleteLog);
      renderLog();
      saveState();
    }
  });
}

function translatePage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (el.tagName === "OPTION") el.textContent = t(key);
    else el.textContent = t(key);
  });
}

function renderAll() {
  renderTabs();
  renderCrops();
  renderLog();
  renderFilterOptions();
  renderDiseases();
  renderPests();
  renderCalendar();
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === activeTab);
  });
  document.querySelectorAll(".tab-view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === activeTab);
  });
}

function renderCrops() {
  if (!state.crops.length) {
    els.cropList.innerHTML = `<p class="muted">${t("noCrops")}</p>`;
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  els.cropList.innerHTML = state.crops
    .map((crop) => {
      const harvestDate = new Date(crop.harvest + 'T00:00:00');
      const diff = Math.round((harvestDate - today) / 86400000);
      const soon = diff >= 0 && diff <= 14;
      const past = diff < 0;
      const cls = past ? "harvest-past" : soon ? "harvest-soon" : "";
      const daysLabel = past
        ? `${Math.abs(diff)} ${t("daysOver")}`
        : `${diff} ${t("daysLeft")}`;

      return `
        <article class="crop-card ${cls}">
          <div>
            <h3>${escapeHtml(crop.name)}</h3>
            <p>${crop.area} perches · planted ${crop.planted}</p>
            ${crop.notes ? `<p>${escapeHtml(crop.notes)}</p>` : ""}
          </div>
          <div class="crop-days">
            <strong>${Math.abs(diff)}</strong>
            <span>${past ? t("daysOver") : t("daysLeft")}</span>
            <br/>
            <button class="mini-button danger-button" type="button" data-delete-crop="${crop.id}" style="margin-top:6px">${t("delete")}</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLog() {
  if (!state.log.length) {
    els.logList.innerHTML = `<p class="muted">${t("noLog")}</p>`;
    return;
  }
  els.logList.innerHTML = state.log
    .map(
      (entry) => `
      <article class="log-entry">
        <div>
          <p>${escapeHtml(entry.text)}</p>
          <small>${entry.date}</small>
        </div>
        <button class="mini-button danger-button" type="button" data-delete-log="${entry.id}">${t("delete")}</button>
      </article>
    `,
    )
    .join("");
}

function renderFilterOptions() {
  const allCrops = [...new Set([
    ...diseases.flatMap((d) => d.crops),
    ...pests.flatMap((p) => p.crops),
  ])].sort();

  const diseaseCrops = [...new Set(diseases.flatMap((d) => d.crops))].sort();
  const pestCrops = [...new Set(pests.flatMap((p) => p.crops))].sort();

  const allOpt = `<option value="all">${t("allCrops")}</option>`;

  els.diseaseCropFilter.innerHTML =
    allOpt + diseaseCrops.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");

  els.pestCropFilter.innerHTML =
    allOpt + pestCrops.map((c) => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
}

function renderDiseases() {
  const cropFilter = els.diseaseCropFilter.value;
  const symFilter = els.diseaseSymptomFilter.value;

  const filtered = diseases.filter((d) => {
    if (cropFilter !== "all" && !d.crops.includes(cropFilter)) return false;
    if (symFilter !== "all" && !d.symptoms.includes(symFilter)) return false;
    return true;
  });

  if (!filtered.length) {
    els.diseaseList.innerHTML = `<p class="muted">${t("noResults")}</p>`;
    return;
  }

  els.diseaseList.innerHTML = filtered
    .map(
      (d) => `
      <article class="disease-card">
        <h3>${loc(d.name)}</h3>
        <div class="symptom-tags">
          ${d.symptoms.map((s) => `<span class="symptom-tag">${t("symptom" + s.charAt(0).toUpperCase() + s.slice(1))}</span>`).join("")}
        </div>
        <div class="crop-tag">${d.crops.join(", ")}</div>
        <div class="disease-detail">
          <div class="detail-block">
            <h4>${t("causeLabel")}</h4>
            <p>${loc(d.cause)}</p>
          </div>
          <div class="detail-block">
            <h4>${t("preventionLabel")}</h4>
            <p>${loc(d.prevention)}</p>
          </div>
          <div class="detail-block">
            <h4>${t("organicLabel")}</h4>
            <p>${loc(d.organic)}</p>
          </div>
          <div class="detail-block">
            <h4>${t("chemicalLabel")}</h4>
            <p>${loc(d.chemical)}</p>
          </div>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderPests() {
  const cropFilter = els.pestCropFilter.value;
  const filtered = pests.filter((p) => cropFilter === "all" || p.crops.includes(cropFilter));

  if (!filtered.length) {
    els.pestList.innerHTML = `<p class="muted">${t("noResults")}</p>`;
    return;
  }

  els.pestList.innerHTML = filtered
    .map(
      (p) => `
      <article class="pest-card">
        <h3>${loc(p.name)}</h3>
        <div class="crop-tag">${p.crops.join(", ")}</div>
        <div class="pest-detail">
          <div class="detail-block">
            <h4>${t("affectsLabel")}</h4>
            <p>${loc(p.damage)}</p>
          </div>
          <div class="detail-block">
            <h4>${t("preventionLabel")}</h4>
            <p>${loc(p.prevention)}</p>
          </div>
          <div class="detail-block">
            <h4>${t("organicLabel")}</h4>
            <p>${loc(p.organic)}</p>
          </div>
          <div class="detail-block">
            <h4>${t("chemicalLabel")}</h4>
            <p>${loc(p.chemical)}</p>
          </div>
        </div>
      </article>
    `,
    )
    .join("");
}

function renderCalendar() {
  const isMaha = state.season === "maha";
  const seasonLabel = isMaha ? t("seasonMaha") : t("seasonYala");
  els.seasonBanner.textContent = `${t("calendarKicker")} — ${seasonLabel}`;

  const relevant = calendar.filter((c) => (isMaha ? c.maha : c.yala));
  const others = calendar.filter((c) => !(isMaha ? c.maha : c.yala));

  const renderCard = (c, recommended) => `
    <article class="calendar-crop ${recommended ? "recommended" : ""}">
      <h3>${c.crop}</h3>
      <p><strong>${loc(c.duration)}</strong></p>
      <p>${loc(c.notes)}</p>
    </article>
  `;

  els.calendarGrid.innerHTML =
    relevant.map((c) => renderCard(c, true)).join("") +
    others.map((c) => renderCard(c, false)).join("");
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

init();
