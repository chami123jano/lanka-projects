const STORAGE_KEY = "lanka-ready-state-v1";

const translations = {
  en: {
    appName: "Lanka Ready",
    eyebrow: "Offline family planner",
    language: "Language",
    printPlan: "Print plan",
    profileKicker: "Your household",
    profileTitle: "Preparedness profile",
    areaName: "Village or area",
    district: "District",
    people: "People",
    days: "Days",
    risks: "Known local risks",
    needs: "Care needs",
    tabPlan: "Plan",
    tabSupplies: "Supplies",
    tabContacts: "Contacts",
    tabCommunity: "Community",
    readinessScore: "Readiness score",
    actionKicker: "Priority actions",
    actionTitle: "What to do next",
    resetTasks: "Reset tasks",
    supplyKicker: "Home reserve",
    supplyTitle: "Supply calculator",
    stockKicker: "Track what is ready",
    stockTitle: "Household stock",
    resetStock: "Reset stock",
    contactsKicker: "Verified by you",
    contactsTitle: "Local contact card",
    contactName: "Name",
    contactRole: "Role",
    contactPhone: "Phone",
    addContact: "Add",
    meetingPoint: "Meeting point",
    safeRoute: "Safe route note",
    communityKicker: "Mutual aid",
    communityTitle: "Neighbour support board",
    canOffer: "Can offer",
    needHelp: "Need help with",
    printKicker: "Pocket plan",
    printTitle: "Family readiness card",
    saved: "Saved on this device.",
    noContacts: "Add the numbers your family has verified locally.",
    noArea: "your area",
    readyFor: "Ready for {people} people in {area}, {district}, for {days} days.",
    tasksDone: "{done} of {total} priority tasks complete.",
    delete: "Delete",
    today: "Today",
    week: "This week",
    warning: "When an alert comes",
    customPromptOffer: "What can your household offer a neighbour?",
    customPromptNeed: "What help should neighbours know you may need?",
    contactPrompt: "Add local GN, PHI, police, hospital, school, and family contacts after checking them yourself.",
    printNoRoute: "No route added",
    printNoMeeting: "No meeting point added",
    metricWater: "Minimum drinking and cooking water target.",
    metricMeals: "Simple meals or meal portions to plan.",
    metricMedicine: "Medicine reserve target for each regular medicine.",
    metricLights: "Working lights for safe nights and outages.",
  },
  si: {
    appName: "ලංකා Ready",
    eyebrow: "අන්තර්ජාලය නැතිව වැඩ කරන පවුල් සැලැස්ම",
    language: "භාෂාව",
    printPlan: "සැලැස්ම මුද්‍රණය කරන්න",
    profileKicker: "ඔබේ නිවස",
    profileTitle: "සූදානම් පැතිකඩ",
    areaName: "ගම හෝ ප්‍රදේශය",
    district: "දිස්ත්‍රික්කය",
    people: "පුද්ගලයන්",
    days: "දින",
    risks: "ප්‍රදේශයේ අවදානම්",
    needs: "විශේෂ සැලකිලි",
    tabPlan: "සැලැස්ම",
    tabSupplies: "භාණ්ඩ",
    tabContacts: "සම්බන්ධතා",
    tabCommunity: "අසල්වැසි",
    readinessScore: "සූදානම් ප්‍රගතිය",
    actionKicker: "මුල් කටයුතු",
    actionTitle: "ඊළඟට කළ යුතු දේ",
    resetTasks: "කටයුතු නැවත",
    supplyKicker: "නිවසේ සුරක්ෂිත භාණ්ඩ",
    supplyTitle: "භාණ්ඩ ගණකය",
    stockKicker: "සූදානම් දේ සලකුණු කරන්න",
    stockTitle: "නිවසේ තොගය",
    resetStock: "තොගය නැවත",
    contactsKicker: "ඔබ විසින් තහවුරු කළ",
    contactsTitle: "දේශීය සම්බන්ධතා කාඩ්පත",
    contactName: "නම",
    contactRole: "කාර්යභාරය",
    contactPhone: "දුරකථන",
    addContact: "එකතු",
    meetingPoint: "එකතු වන ස්ථානය",
    safeRoute: "ආරක්ෂිත මාර්ග සටහන",
    communityKicker: "පරස්පර සහය",
    communityTitle: "අසල්වැසි සහය පුවරුව",
    canOffer: "දිය හැකි සහය",
    needHelp: "අවශ්‍ය සහය",
    printKicker: "පොකට් සැලැස්ම",
    printTitle: "පවුල් සූදානම් කාඩ්පත",
    saved: "මෙම උපාංගයේ සුරැකිණි.",
    noContacts: "ඔබ තහවුරු කළ දේශීය අංක එකතු කරන්න.",
    noArea: "ඔබේ ප්‍රදේශය",
    readyFor: "{district} දිස්ත්‍රික්කයේ {area} සඳහා, පුද්ගලයන් {people}කට දින {days}ක සැලැස්ම.",
    tasksDone: "මුල් කටයුතු {total}න් {done}ක් සම්පූර්ණයි.",
    delete: "ඉවත් කරන්න",
    today: "අද",
    week: "මෙම සතිය",
    warning: "අනතුරු ඇඟවීමක් ලැබුණොත්",
    customPromptOffer: "අසල්වැසියෙකුට ඔබේ නිවසෙන් දිය හැකි සහය කුමක්ද?",
    customPromptNeed: "අසල්වැසියන් දැනගත යුතු ඔබට අවශ්‍ය සහය කුමක්ද?",
    contactPrompt: "දේශීය GN, PHI, පොලීසිය, රෝහල, පාසල සහ පවුල් අංක ඔබම පරීක්ෂා කර එකතු කරන්න.",
    printNoRoute: "මාර්ගයක් එකතු කර නැත",
    printNoMeeting: "එකතු වන ස්ථානයක් නැත",
    metricWater: "පානයට සහ ආහාර සකස් කිරීමට අවම ජල ඉලක්කය.",
    metricMeals: "සැලසුම් කළ යුතු සරල ආහාර හෝ ආහාර කොටස්.",
    metricMedicine: "නිතිපතා ඖෂධ සඳහා අවශ්‍ය ඖෂධ දින ඉලක්කය.",
    metricLights: "රාත්‍රී සහ විදුලි බිඳවැටීම් සඳහා වැඩ කරන ආලෝක උපකරණ.",
  },
  ta: {
    appName: "Lanka Ready",
    eyebrow: "இணையம் இல்லாமலும் இயங்கும் குடும்ப திட்டம்",
    language: "மொழி",
    printPlan: "திட்டத்தை அச்சிடு",
    profileKicker: "உங்கள் வீடு",
    profileTitle: "தயார்நிலை விவரம்",
    areaName: "கிராமம் அல்லது பகுதி",
    district: "மாவட்டம்",
    people: "மக்கள்",
    days: "நாட்கள்",
    risks: "உள்ளூர் அபாயங்கள்",
    needs: "கவனிப்பு தேவைகள்",
    tabPlan: "திட்டம்",
    tabSupplies: "பொருட்கள்",
    tabContacts: "தொடர்புகள்",
    tabCommunity: "அயல்வாசிகள்",
    readinessScore: "தயார்நிலை மதிப்பு",
    actionKicker: "முன்னுரிமை செயல்கள்",
    actionTitle: "அடுத்து செய்ய வேண்டியது",
    resetTasks: "செயல்களை மீட்டமை",
    supplyKicker: "வீட்டு கையிருப்பு",
    supplyTitle: "பொருள் கணக்கீடு",
    stockKicker: "தயார் பொருட்களை குறி",
    stockTitle: "வீட்டு கையிருப்பு",
    resetStock: "கையிருப்பை மீட்டமை",
    contactsKicker: "நீங்கள் சரிபார்த்தது",
    contactsTitle: "உள்ளூர் தொடர்பு அட்டை",
    contactName: "பெயர்",
    contactRole: "பங்கு",
    contactPhone: "தொலைபேசி",
    addContact: "சேர்",
    meetingPoint: "சந்திப்பு இடம்",
    safeRoute: "பாதுகாப்பான பாதை குறிப்பு",
    communityKicker: "பரஸ்பர உதவி",
    communityTitle: "அயல்வாசி உதவி பலகை",
    canOffer: "வழங்க முடியும்",
    needHelp: "உதவி தேவை",
    printKicker: "சிறு திட்டம்",
    printTitle: "குடும்ப தயார்நிலை அட்டை",
    saved: "இந்த சாதனத்தில் சேமிக்கப்பட்டது.",
    noContacts: "உங்கள் குடும்பம் உள்ளூரில் சரிபார்த்த எண்களைச் சேர்க்கவும்.",
    noArea: "உங்கள் பகுதி",
    readyFor: "{district} மாவட்டத்தின் {area} பகுதியில் {people} பேருக்கு {days} நாட்கள் தயாராக.",
    tasksDone: "{total} முன்னுரிமை செயல்களில் {done} முடிந்தது.",
    delete: "நீக்கு",
    today: "இன்று",
    week: "இந்த வாரம்",
    warning: "எச்சரிக்கை வந்தால்",
    customPromptOffer: "உங்கள் வீடு அயல்வாசிக்கு என்ன உதவி வழங்க முடியும்?",
    customPromptNeed: "உங்களுக்கு தேவைப்படக்கூடிய உதவி என்ன?",
    contactPrompt: "GN, PHI, காவல் நிலையம், மருத்துவமனை, பள்ளி மற்றும் குடும்ப எண்களை நீங்களே சரிபார்த்து சேர்க்கவும்.",
    printNoRoute: "பாதை சேர்க்கப்படவில்லை",
    printNoMeeting: "சந்திப்பு இடம் சேர்க்கப்படவில்லை",
    metricWater: "குடிநீர் மற்றும் சமையலுக்கான குறைந்தபட்ச நீர் இலக்கு.",
    metricMeals: "திட்டமிட வேண்டிய எளிய உணவுகள் அல்லது உணவு பகுதிகள்.",
    metricMedicine: "ஒவ்வொரு வழக்கமான மருந்திற்கும் கையிருப்பு நாள் இலக்கு.",
    metricLights: "இரவு மற்றும் மின்தடைக்கான இயங்கும் விளக்குகள்.",
  },
};

const districts = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

const districtRisks = {
  Ampara:         ["flood", "dengue"],
  Anuradhapura:   ["heat", "dengue", "outage"],
  Badulla:        ["landslide", "dengue"],
  Batticaloa:     ["flood", "dengue", "outage"],
  Colombo:        ["flood", "dengue", "outage"],
  Galle:          ["flood", "dengue"],
  Gampaha:        ["flood", "dengue", "outage"],
  Hambantota:     ["flood", "heat", "dengue"],
  Jaffna:         ["flood", "heat", "dengue", "outage"],
  Kalutara:       ["flood", "landslide", "dengue"],
  Kandy:          ["landslide", "dengue", "outage"],
  Kegalle:        ["flood", "landslide", "dengue"],
  Kilinochchi:    ["heat", "dengue", "outage"],
  Kurunegala:     ["dengue", "outage"],
  Mannar:         ["heat", "dengue", "outage"],
  Matale:         ["landslide", "dengue"],
  Matara:         ["flood", "dengue"],
  Monaragala:     ["heat", "dengue", "outage"],
  Mullaitivu:     ["flood", "dengue", "outage"],
  "Nuwara Eliya": ["landslide", "outage"],
  Polonnaruwa:    ["heat", "dengue"],
  Puttalam:       ["flood", "dengue", "outage"],
  Ratnapura:      ["flood", "landslide", "dengue"],
  Trincomalee:    ["flood", "heat", "dengue"],
  Vavuniya:       ["heat", "dengue", "outage"],
};

const riskLabels = {
  flood: { en: "Flood", si: "ගංවතුර", ta: "வெள்ளம்" },
  landslide: { en: "Landslide", si: "නායයෑම", ta: "மண் சரிவு" },
  dengue: { en: "Dengue", si: "ඩෙංගු", ta: "டெங்கு" },
  heat: { en: "Heat", si: "උෂ්ණත්වය", ta: "வெப்பம்" },
  outage: { en: "Power outage", si: "විදුලි බිඳවැටීම", ta: "மின்தடை" },
};

const needLabels = {
  children: { en: "Children", si: "දරුවන්", ta: "குழந்தைகள்" },
  elders: { en: "Elders", si: "වැඩිහිටියන්", ta: "மூத்தவர்கள்" },
  disability: { en: "Disability access", si: "ප්‍රවේශ සහය", ta: "அணுகல் உதவி" },
  medicines: { en: "Medicines", si: "ඖෂධ", ta: "மருந்துகள்" },
  pets: { en: "Animals", si: "සතුන්", ta: "விலங்குகள்" },
};

const taskText = {
  docsPouch: {
    en: "Put IDs, clinic cards, bank books, land papers, and certificates into a sealed pouch.",
    si: "හැඳුනුම්පත්, සායන කාඩ්පත්, බැංකු පොත්, ඉඩම් ලේඛන සහ සහතික ජලයෙන් ආරක්ෂිත පොකට්ටුවකට දමන්න.",
    ta: "அடையாள அட்டைகள், கிளினிக் அட்டைகள், வங்கி புத்தகங்கள், நில ஆவணங்கள், சான்றிதழ்கள் ஆகியவற்றை நீர்ப்புகா பையில் வைக்கவும்.",
  },
  chargeDevices: {
    en: "Charge phones, torches, power banks, and one radio if you have one.",
    si: "දුරකථන, ටෝච්, පවර් බැංකු සහ රේඩියෝවක් ඇත්නම් එය ආරෝපණය කරන්න.",
    ta: "தொலைபேசிகள், டார்ச்சுகள், பவர் பேங்க்கள், ரேடியோ இருந்தால் அதையும் சார்ஜ் செய்யவும்.",
  },
  reachableWater: {
    en: "Store drinking water where children can reach it safely.",
    si: "පානීය ජලය දරුවන්ට ආරක්ෂිතව ගත හැකි තැනක තබන්න.",
    ta: "குடிநீரை குழந்தைகள் பாதுகாப்பாக எடுக்கக்கூடிய இடத்தில் வைக்கவும்.",
  },
  meetingPoints: {
    en: "Agree on one meeting point and one backup meeting point.",
    si: "එක් එකතු වන ස්ථානයක් සහ එක් විකල්ප ස්ථානයක් පවුලේ අය සමඟ එකඟ කරගන්න.",
    ta: "ஒரு சந்திப்பு இடமும் ஒரு மாற்று இடமும் குடும்பத்துடன் ஒப்புக்கொள்ளவும்.",
  },
  paperContacts: {
    en: "Write local contacts on paper and keep a copy near the door.",
    si: "දේශීය සම්බන්ධතා කඩදාසියක ලියා පිටපතක් දොර අසල තබන්න.",
    ta: "உள்ளூர் தொடர்புகளை காகிதத்தில் எழுதி ஒரு நகலை கதவு அருகில் வைக்கவும்.",
  },
  roofDrainsPath: {
    en: "Check roof, drains, gutters, and the nearest safe path after dark.",
    si: "වහලය, නාළිකා, කාණු සහ රාත්‍රියේ භාවිත කළ හැකි ආරක්ෂිත මාර්ගය පරීක්ෂා කරන්න.",
    ta: "கூரை, வடிகால், நீரோட்டிகள், இரவில் செல்லக்கூடிய பாதுகாப்பான பாதை ஆகியவற்றைச் சரிபார்க்கவும்.",
  },
  grabBag: {
    en: "Move documents, medicines, and chargers into one grab bag.",
    si: "ලේඛන, ඖෂධ සහ චාජර් එක් හදිසි බෑගයකට දමන්න.",
    ta: "ஆவணங்கள், மருந்துகள், சார்ஜர்கள் ஆகியவற்றை ஒரு அவசர பையில் வைக்கவும்.",
  },
  unsafePlugs: {
    en: "Switch off unsafe plugs before leaving home.",
    si: "නිවසින් පිටවීමට පෙර අවදානම් විදුලි ප්ලග් අක්‍රිය කරන්න.",
    ta: "வீட்டை விட்டு செல்லும் முன் அபாயமான மின்பிளக்குகளை அணைக்கவும்.",
  },
  messageNeighbour: {
    en: "Message one trusted neighbour before travelling.",
    si: "ගමන් කිරීමට පෙර විශ්වාසනීය අසල්වැසියෙකුට පණිවිඩයක් යවන්න.",
    ta: "பயணம் செய்யும் முன் நம்பகமான அயல்வாசிக்கு செய்தி அனுப்பவும்.",
  },
  liftValuables: {
    en: "Lift extension cords, rice bags, school books, and medicine above floor level.",
    si: "දිගු විදුලි කේබල්, බත් මලු, පාසල් පොත් සහ ඖෂධ බිම මට්ටමට ඉහළට ගෙනයන්න.",
    ta: "நீட்டிப்பு கம்பிகள், அரிசி மூட்டைகள், பள்ளி புத்தகங்கள், மருந்துகள் ஆகியவற்றை தரையிலிருந்து உயர்த்தி வைக்கவும்.",
  },
  floodShelf: {
    en: "Mark the highest safe shelf and keep a plastic box ready for documents.",
    si: "ආරක්ෂිත ඉහළම රාක්කය සලකුණු කර ලේඛන සඳහා ප්ලාස්ටික් පෙට්ටියක් සූදානම් තබන්න.",
    ta: "பாதுகாப்பான உயர்ந்த தட்டைப் குறி வைத்து ஆவணங்களுக்கு பிளாஸ்டிக் பெட்டியை தயார் வைக்கவும்.",
  },
  floodLeaveEarly: {
    en: "Leave before water crosses the safe walking point you chose as a family.",
    si: "පවුලේ අය තෝරාගත් ආරක්ෂිත ඇවිදීමේ සීමාව ජලය ඉක්මවීමට පෙර පිටවන්න.",
    ta: "குடும்பமாக தேர்ந்தெடுத்த பாதுகாப்பான நடைப்புள்ளியை நீர் கடக்கும் முன் வெளியேறவும்.",
  },
  landslideKit: {
    en: "Keep shoes, torch, raincoat, and phone together before heavy rain.",
    si: "තද වැසිට පෙර සපත්තු, ටෝච්, වැසි කබාය සහ දුරකථනය එකට තබන්න.",
    ta: "கனமழைக்கு முன் காலணி, டார்ச்சி, மழைக்கோட், தொலைபேசி ஆகியவற்றை ஒன்றாக வைக்கவும்.",
  },
  slopeSigns: {
    en: "Note new cracks, leaning trees, blocked drains, or water flowing through slopes.",
    si: "නව ඉරිතැලීම්, ඇලවූ ගස්, අවහිර වූ කාණු හෝ බෑවුම් හරහා ගලා යන ජලය සටහන් කරන්න.",
    ta: "புதிய பிளவுகள், சாய்ந்த மரங்கள், அடைத்த வடிகால்கள், சரிவில் ஓடும் நீர் ஆகியவற்றைக் கவனிக்கவும்.",
  },
  unstableSlope: {
    en: "Move early to a safer place if slopes become unstable or sounds change.",
    si: "බෑවුම් අස්ථාවර වන්නේ නම් හෝ අසාමාන්‍ය ශබ්ද ඇසෙන්නේ නම් ඉක්මනින් ආරක්ෂිත ස්ථානයකට යන්න.",
    ta: "சரிவுகள் நிலைகுலைந்தால் அல்லது ஒலி மாறினால் விரைவில் பாதுகாப்பான இடத்திற்கு நகரவும்.",
  },
  emptyWater: {
    en: "Empty small water holders around the house before evening.",
    si: "සවසට පෙර නිවස වටා ඇති කුඩා ජල භාජන හිස් කරන්න.",
    ta: "மாலை முன் வீட்டைச் சுற்றியுள்ள சிறிய நீர் பாத்திரங்களை காலி செய்யவும்.",
  },
  dengueSweep: {
    en: "Do a 10-minute dengue sweep: gutters, pots, tyres, roof sheets, buckets, tanks.",
    si: "මිනිත්තු 10ක ඩෙංගු පරීක්ෂාවක් කරන්න: කාණු, මල් පෝච්චි, ටයර්, වහල තහඩු, බකට්, ටැංකි.",
    ta: "10 நிமிட டெங்கு சோதனை செய்யவும்: நீரோட்டி, குடுவை, டயர், கூரை தகடு, வாளி, தொட்டி.",
  },
  feverCare: {
    en: "If fever appears, avoid self-medicating and contact a qualified health worker.",
    si: "උණ ඇති වුවහොත් ස්වයං ඖෂධ ගැනීමෙන් වළකිමින් සුදුසු සෞඛ්‍ය සේවකයෙකු අමතන්න.",
    ta: "காய்ச்சல் இருந்தால் தானாக மருந்து எடுக்காமல் தகுதியான சுகாதார பணியாளரை தொடர்புகொள்ளவும்.",
  },
  shadedRest: {
    en: "Set a shaded rest spot and check drinking water for elders and children.",
    si: "සෙවනැලි විවේක ස්ථානයක් සකසා වැඩිහිටියන් සහ දරුවන් සඳහා පානීය ජලය පරීක්ෂා කරන්න.",
    ta: "நிழல் ஓய்வு இடம் அமைத்து மூத்தவர்கள் மற்றும் குழந்தைகளுக்கான குடிநீரைச் சரிபார்க்கவும்.",
  },
  coolerHours: {
    en: "Plan outdoor work for cooler hours where possible.",
    si: "හැකි තරම් පිටත වැඩ සිසිල් වේලාවන්ට සැලසුම් කරන්න.",
    ta: "வெளிப்பணிகளை முடிந்தவரை குளிர்ந்த நேரங்களில் திட்டமிடவும்.",
  },
  heatCheck: {
    en: "Check vulnerable neighbours during very hot afternoons.",
    si: "ඉතා උණුසුම් දවල් වේලාවන්හි අවදානම් අසල්වැසියන් පිළිබඳ විමසන්න.",
    ta: "மிகவும் வெப்பமான பிற்பகல்களில் பாதிக்கப்படக்கூடிய அயல்வாசிகளைச் சரிபார்க்கவும்.",
  },
  torchPlaces: {
    en: "Place torches where everyone can find them without using candles.",
    si: "ඉටිපන්දම් භාවිත නොකර සෑම කෙනෙකුටම හමු වන තැන ටෝච් තබන්න.",
    ta: "மெழுகுவர்த்தி இல்லாமல் எல்லோரும் எடுக்கக்கூடிய இடத்தில் டார்ச்சுகளை வைக்கவும்.",
  },
  freezeBottles: {
    en: "Freeze water bottles if outages are expected and label essential plugs.",
    si: "විදුලි බිඳවැටීම් අපේක්ෂිත නම් ජල බෝතල් කැටි කර අත්‍යවශ්‍ය ප්ලග් ලේබල් කරන්න.",
    ta: "மின்தடை எதிர்பார்க்கப்பட்டால் நீர் பாட்டில்களை உறையவைத்து முக்கிய பிளக்குகளை குறியிடவும்.",
  },
  batteryUse: {
    en: "Keep one phone for emergency calls and reduce unnecessary battery use.",
    si: "හදිසි ඇමතුම් සඳහා එක් දුරකථනයක් තබා අනවශ්‍ය බැටරි භාවිතය අඩු කරන්න.",
    ta: "அவசர அழைப்புகளுக்காக ஒரு தொலைபேசியை வைத்துக் கொண்டு தேவையற்ற பேட்டரி பயன்பாட்டை குறைக்கவும்.",
  },
  childContacts: {
    en: "Pack copies of school contact details and comfort items for children.",
    si: "පාසල් සම්බන්ධතා පිටපත් සහ දරුවන්ට සැනසීම දෙන භාණ්ඩ සූදානම් කරන්න.",
    ta: "பள்ளி தொடர்பு விவரங்களின் நகல்கள் மற்றும் குழந்தைகளுக்கான ஆறுதல் பொருட்களை தயார் செய்யவும்.",
  },
  adultPerChild: {
    en: "Assign one adult to each child before leaving home.",
    si: "නිවසින් පිටවීමට පෙර එක් එක් දරුවාට එක් වැඩිහිටියෙකු වෙන් කරන්න.",
    ta: "வீட்டை விட்டு செல்லும் முன் ஒவ்வொரு குழந்தைக்கும் ஒரு பெரியவரை ஒதுக்கவும்.",
  },
  medicineNotes: {
    en: "Write medicine names, doses, and clinic dates on paper.",
    si: "ඖෂධ නම්, මාත්‍රා සහ සායන දිනයන් කඩදාසියක ලියන්න.",
    ta: "மருந்து பெயர்கள், அளவு, கிளினிக் தேதிகள் ஆகியவற்றை காகிதத்தில் எழுதவும்.",
  },
  moveEldersEarly: {
    en: "Move elders early, before paths become crowded or slippery.",
    si: "මාර්ග තදබදය හෝ ලිස්සන බව ඇති වීමට පෙර වැඩිහිටියන් කලින් ගෙනයන්න.",
    ta: "பாதைகள் நெரிசல் அல்லது வழுக்கும் முன் மூத்தவர்களை முன்கூட்டியே நகர்த்தவும்.",
  },
  accessAids: {
    en: "Check wheelchair, walking aid, glasses, hearing aid batteries, and backup transport.",
    si: "රෝද පුටුව, ඇවිදීමේ ආධාරක, කණ්ණාඩි, ශ්‍රවණ උපකරණ බැටරි සහ විකල්ප ප්‍රවාහනය පරීක්ෂා කරන්න.",
    ta: "சக்கர நாற்காலி, நடை உதவி, கண்ணாடி, கேள்வி கருவி பேட்டரி, மாற்று போக்குவரத்து ஆகியவற்றைச் சரிபார்க்கவும்.",
  },
  neighbourAssistance: {
    en: "Tell a trusted neighbour exactly what assistance may be needed.",
    si: "අවශ්‍ය විය හැකි සහය නිශ්චිතව විශ්වාසනීය අසල්වැසියෙකුට කියන්න.",
    ta: "எந்த உதவி தேவைப்படலாம் என்பதை நம்பகமான அயல்வாசிக்கு தெளிவாகச் சொல்லவும்.",
  },
  prescriptionPouch: {
    en: "Keep at least a small medicine pouch with prescriptions and allergy notes.",
    si: "වෛද්‍ය උපදෙස් සහ ඇලර්ජි සටහන් සහිත කුඩා ඖෂධ පොකට්ටුවක් වත් තබන්න.",
    ta: "மருந்து சீட்டுகள் மற்றும் அலர்ஜி குறிப்புகளுடன் ஒரு சிறிய மருந்துப் பையை வைத்திருங்கள்.",
  },
  expiryCheck: {
    en: "Check medicine expiry dates and refill what is essential.",
    si: "ඖෂධ කල් ඉකුත් වීමේ දිනයන් පරීක්ෂා කර අත්‍යවශ්‍ය දේ පුරවන්න.",
    ta: "மருந்து காலாவதி தேதிகளைச் சரிபார்த்து அவசியமானவற்றை நிரப்பவும்.",
  },
  petSupplies: {
    en: "Keep animal food, leash, or carrier near the family grab bag.",
    si: "සත්ත්ව ආහාර, ලීෂ් හෝ රැගෙන යන පෙට්ටිය පවුල් හදිසි බෑගය අසල තබන්න.",
    ta: "விலங்கு உணவு, கயிறு அல்லது கொண்டு செல்லும் பெட்டியை குடும்ப அவசர பைக்கு அருகில் வைக்கவும்.",
  },
  movePetsEarly: {
    en: "Move animals early if your safe route may flood or close.",
    si: "ඔබේ ආරක්ෂිත මාර්ගය ගංවතුරට හෝ වැසීමට ඉඩ තිබේ නම් සතුන් කලින් ගෙනයන්න.",
    ta: "உங்கள் பாதுகாப்பான பாதை வெள்ளமடையலாம் அல்லது மூடப்படலாம் என்றால் விலங்குகளை முன்கூட்டியே நகர்த்தவும்.",
  },
};

const defaultTasks = {
  base: {
    today: ["docsPouch", "chargeDevices", "reachableWater"],
    week: ["meetingPoints", "paperContacts", "roofDrainsPath"],
    warning: ["grabBag", "unsafePlugs", "messageNeighbour"],
  },
  flood: {
    today: ["liftValuables"],
    week: ["floodShelf"],
    warning: ["floodLeaveEarly"],
  },
  landslide: {
    today: ["landslideKit"],
    week: ["slopeSigns"],
    warning: ["unstableSlope"],
  },
  dengue: {
    today: ["emptyWater"],
    week: ["dengueSweep"],
    warning: ["feverCare"],
  },
  heat: {
    today: ["shadedRest"],
    week: ["coolerHours"],
    warning: ["heatCheck"],
  },
  outage: {
    today: ["torchPlaces"],
    week: ["freezeBottles"],
    warning: ["batteryUse"],
  },
  children: {
    today: ["childContacts"],
    warning: ["adultPerChild"],
  },
  elders: {
    today: ["medicineNotes"],
    warning: ["moveEldersEarly"],
  },
  disability: {
    today: ["accessAids"],
    warning: ["neighbourAssistance"],
  },
  medicines: {
    today: ["prescriptionPouch"],
    week: ["expiryCheck"],
  },
  pets: {
    today: ["petSupplies"],
    warning: ["movePetsEarly"],
  },
};

const stockCatalog = [
  {
    key: "water",
    label: {
      en: "Water containers filled",
      si: "ජල භාජන පුරවා ඇත",
      ta: "நீர் பாத்திரங்கள் நிரப்பப்பட்டன",
    },
    unit: "containers",
    detail: {
      en: "Keep drinking water separate from cleaning water.",
      si: "පානීය ජලය පිරිසිදු කිරීමේ ජලයෙන් වෙනම තබන්න.",
      ta: "குடிநீரை சுத்தம் செய்யும் நீரிலிருந்து தனியாக வைக்கவும்.",
    },
  },
  {
    key: "dryFood",
    label: {
      en: "Dry food packs",
      si: "වියළි ආහාර පැකට්",
      ta: "உலர் உணவு பொதிகள்",
    },
    unit: "packs",
    detail: {
      en: "Rice, dhal, noodles, biscuits, infant food, or other family staples.",
      si: "බත්, පරිප්පු, නූඩ්ල්ස්, බිස්කට්, ළදරු ආහාර හෝ පවුලේ මූලික ආහාර.",
      ta: "அரிசி, பருப்பு, நூடுல்ஸ், பிஸ்கட், குழந்தை உணவு அல்லது குடும்ப அடிப்படை உணவுகள்.",
    },
  },
  {
    key: "medicine",
    label: {
      en: "Medicine days ready",
      si: "සූදානම් ඖෂධ දින",
      ta: "தயார் மருந்து நாட்கள்",
    },
    unit: "days",
    detail: {
      en: "Prescription medicine, ORS, sanitary items, and allergy notes.",
      si: "වෛද්‍ය ඖෂධ, ORS, සනීපාරක්ෂක භාණ්ඩ සහ ඇලර්ජි සටහන්.",
      ta: "மருந்து சீட்டு மருந்துகள், ORS, சுகாதார பொருட்கள், அலர்ஜி குறிப்புகள்.",
    },
  },
  {
    key: "lights",
    label: {
      en: "Working lights",
      si: "වැඩ කරන ආලෝක",
      ta: "இயங்கும் விளக்குகள்",
    },
    unit: "lights",
    detail: {
      en: "Torches, rechargeable lamps, spare batteries, or solar lights.",
      si: "ටෝච්, ආරෝපණ ලාම්පු, අමතර බැටරි හෝ සූර්ය ලාම්පු.",
      ta: "டார்ச்சுகள், சார்ஜ் விளக்குகள், கூடுதல் பேட்டரிகள் அல்லது சோலார் விளக்குகள்.",
    },
  },
  {
    key: "documents",
    label: {
      en: "Document copies sealed",
      si: "ලේඛන පිටපත් මුද්‍රා කර ඇත",
      ta: "ஆவண நகல்கள் பாதுகாக்கப்பட்டன",
    },
    unit: "sets",
    detail: {
      en: "ID, birth certificates, clinic cards, bank and land records.",
      si: "හැඳුනුම්පත්, උපන් සහතික, සායන කාඩ්පත්, බැංකු සහ ඉඩම් වාර්තා.",
      ta: "அடையாள அட்டை, பிறப்பு சான்றிதழ், கிளினிக் அட்டை, வங்கி மற்றும் நில பதிவுகள்.",
    },
  },
  {
    key: "cash",
    label: {
      en: "Small cash reserve",
      si: "කුඩා මුදල් සංචිතය",
      ta: "சிறிய பண கையிருப்பு",
    },
    unit: "sets",
    detail: {
      en: "Small notes kept separately from daily money.",
      si: "දෛනික මුදලින් වෙනම තබා ඇති කුඩා නෝට්ටු.",
      ta: "தினசரி பணத்திலிருந்து தனியாக வைக்கப்பட்ட சிறிய நோட்டுகள்.",
    },
  },
];

const initialState = {
  language: "en",
  area: "",
  district: "Colombo",
  people: 4,
  days: 3,
  risks: ["flood", "dengue", "outage"],
  needs: ["elders", "medicines"],
  tasks: {},
  stock: {
    water: 0,
    dryFood: 0,
    medicine: 0,
    lights: 0,
    documents: 0,
    cash: 0,
  },
  contacts: [],
  meetingPoint: "",
  route: "",
  offers: [],
  help: [],
};

let state = loadState();
let activeTab = "plan";

const els = {
  languageSelect: document.querySelector("#languageSelect"),
  areaInput: document.querySelector("#areaInput"),
  districtSelect: document.querySelector("#districtSelect"),
  peopleInput: document.querySelector("#peopleInput"),
  daysInput: document.querySelector("#daysInput"),
  riskChoices: document.querySelector("#riskChoices"),
  needChoices: document.querySelector("#needChoices"),
  taskColumns: document.querySelector("#taskColumns"),
  scoreLabel: document.querySelector("#scoreLabel"),
  scoreRing: document.querySelector("#scoreRing"),
  profileSummary: document.querySelector("#profileSummary"),
  saveStatus: document.querySelector("#saveStatus"),
  supplyMetrics: document.querySelector("#supplyMetrics"),
  stockList: document.querySelector("#stockList"),
  contactForm: document.querySelector("#contactForm"),
  contactName: document.querySelector("#contactName"),
  contactRole: document.querySelector("#contactRole"),
  contactPhone: document.querySelector("#contactPhone"),
  contactList: document.querySelector("#contactList"),
  meetingPointInput: document.querySelector("#meetingPointInput"),
  routeInput: document.querySelector("#routeInput"),
  offerList: document.querySelector("#offerList"),
  helpList: document.querySelector("#helpList"),
  printCard: document.querySelector("#printCard"),
  printSummary: document.querySelector("#printSummary"),
  printDate: document.querySelector("#printDate"),
};

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? mergeState(JSON.parse(stored)) : structuredClone(initialState);
  } catch {
    return structuredClone(initialState);
  }
}

function mergeState(saved) {
  return {
    ...structuredClone(initialState),
    ...saved,
    stock: { ...initialState.stock, ...(saved.stock || {}) },
    tasks: saved.tasks || {},
    contacts: Array.isArray(saved.contacts) ? saved.contacts : [],
    offers: Array.isArray(saved.offers) ? saved.offers : initialState.offers,
    help: Array.isArray(saved.help) ? saved.help : initialState.help,
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  els.saveStatus.textContent = t("saved");
}

function t(key) {
  return translations[state.language]?.[key] || translations.en[key] || key;
}

function localText(value) {
  return value?.[state.language] || value?.en || "";
}

function translateTemplate(value, params = {}) {
  return Object.entries(params).reduce(
    (text, [key, replacement]) => text.replace(`{${key}}`, replacement),
    value,
  );
}

function init() {
  populateDistricts();
  renderChoices();
  bindEvents();
  syncInputs();
  renderAll();


}

function populateDistricts() {
  els.districtSelect.innerHTML = districts
    .map((district) => `<option value="${district}">${district}</option>`)
    .join("");
}

function renderChoices() {
  els.riskChoices.innerHTML = Object.keys(riskLabels)
    .map((key) => choiceMarkup("risk", key, riskLabels[key][state.language] || riskLabels[key].en))
    .join("");
  els.needChoices.innerHTML = Object.keys(needLabels)
    .map((key) => choiceMarkup("need", key, needLabels[key][state.language] || needLabels[key].en))
    .join("");
}

function choiceMarkup(type, key, label) {
  const checked = type === "risk" ? state.risks.includes(key) : state.needs.includes(key);
  return `
    <label class="chip">
      <input type="checkbox" value="${key}" data-choice="${type}" ${checked ? "checked" : ""} />
      <span>${label}</span>
    </label>
  `;
}

function bindEvents() {
  els.languageSelect.addEventListener("change", (event) => {
    state.language = event.target.value;
    document.documentElement.lang = state.language;
    renderChoices();
    translateStaticText();
    renderAll();
    saveState();
  });

  [
    ["areaInput", "area", stringValue],
    ["peopleInput", "people", numberValue],
    ["daysInput", "days", numberValue],
    ["meetingPointInput", "meetingPoint", stringValue],
    ["routeInput", "route", stringValue],
  ].forEach(([elementKey, stateKey, parser]) => {
    els[elementKey].addEventListener("input", (event) => {
      state[stateKey] = parser(event.target.value);
      renderAll();
      saveState();
    });
  });

  els.districtSelect.addEventListener("change", (event) => {
    state.district = event.target.value;
    const suggested = districtRisks[state.district];
    if (suggested) {
      state.risks = [...suggested];
      renderChoices();
    }
    renderAll();
    saveState();
  });

  document.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    if (target.dataset.choice === "risk") {
      toggleArrayValue(state.risks, target.value, target.checked);
      renderAll();
      saveState();
    }

    if (target.dataset.choice === "need") {
      toggleArrayValue(state.needs, target.value, target.checked);
      renderAll();
      saveState();
    }

    if (target.dataset.taskKey) {
      state.tasks[target.dataset.taskKey] = target.checked;
      renderAll();
      saveState();
    }
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.tab;
      renderTabs();
    });
  });

  document.querySelector("#resetTasksButton").addEventListener("click", () => {
    state.tasks = {};
    renderAll();
    saveState();
  });

  document.querySelector("#resetStockButton").addEventListener("click", () => {
    state.stock = { ...initialState.stock };
    renderAll();
    saveState();
  });

  document.querySelector("#printButton").addEventListener("click", () => window.print());

  els.contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const contact = {
      id: crypto.randomUUID(),
      name: els.contactName.value.trim(),
      role: els.contactRole.value.trim(),
      phone: els.contactPhone.value.trim(),
    };
    if (!contact.name || !contact.role || !contact.phone) return;
    state.contacts.push(contact);
    els.contactForm.reset();
    renderAll();
    saveState();
  });

  document.querySelector("#addOfferButton").addEventListener("click", () => addAidItem("offers"));
  document.querySelector("#addNeedButton").addEventListener("click", () => addAidItem("help"));
}

function stringValue(value) {
  return value.trimStart();
}

function numberValue(value) {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : 1;
}

function toggleArrayValue(collection, value, isEnabled) {
  const exists = collection.includes(value);
  if (isEnabled && !exists) collection.push(value);
  if (!isEnabled && exists) collection.splice(collection.indexOf(value), 1);
}

function syncInputs() {
  els.languageSelect.value = state.language;
  document.documentElement.lang = state.language;
  els.areaInput.value = state.area;
  els.districtSelect.value = state.district;
  els.peopleInput.value = state.people;
  els.daysInput.value = state.days;
  els.meetingPointInput.value = state.meetingPoint;
  els.routeInput.value = state.route;
  translateStaticText();
}

function translateStaticText() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
}

function renderAll() {
  renderTabs();
  renderSummary();
  renderTasks();
  renderSupplyMetrics();
  renderStock();
  renderContacts();
  renderAid();
  renderPrintCard();
}

function renderTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === activeTab);
  });
  document.querySelectorAll(".tab-view").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === activeTab);
  });
}

function getTasks() {
  const buckets = structuredClone(defaultTasks.base);
  [...state.risks, ...state.needs].forEach((key) => {
    const source = defaultTasks[key];
    if (!source) return;
    Object.entries(source).forEach(([bucket, tasks]) => {
      buckets[bucket].push(...tasks);
    });
  });
  return buckets;
}

function getFlatTasks() {
  return Object.values(getTasks()).flat();
}

function taskLabel(id) {
  return taskText[id]?.[state.language] || taskText[id]?.en || id;
}

function renderSummary() {
  const tasks = getFlatTasks();
  const doneTasks = tasks.filter((task) => state.tasks[task]).length;
  const stockDone = stockCatalog.filter((item) => state.stock[item.key] > 0).length;
  const contactPoints = Math.min(state.contacts.length, 3);
  const totalUnits = tasks.length + stockCatalog.length + 3;
  const doneUnits = doneTasks + stockDone + contactPoints;
  const score = Math.round((doneUnits / totalUnits) * 100);
  const area = state.area || t("noArea");
  const summary = translateTemplate(t("readyFor"), {
    people: state.people,
    area,
    district: state.district,
    days: state.days,
  });

  els.scoreLabel.textContent = `${score}%`;
  els.profileSummary.textContent = `${summary} ${translateTemplate(t("tasksDone"), {
    done: doneTasks,
    total: tasks.length,
  })}`;
  els.scoreRing.style.strokeDashoffset = `${302 - (302 * score) / 100}`;
}

function renderTasks() {
  const buckets = getTasks();
  const labels = {
    today: t("today"),
    week: t("week"),
    warning: t("warning"),
  };

  els.taskColumns.innerHTML = Object.entries(buckets)
    .map(([bucket, tasks]) => {
      const taskMarkup = tasks
        .map((task) => {
          return `
            <article class="task-item">
              <label>
                <input type="checkbox" data-task-key="${task}" ${state.tasks[task] ? "checked" : ""} />
                <span>${escapeHtml(taskLabel(task))}</span>
              </label>
            </article>
          `;
        })
        .join("");

      return `
        <section class="task-column">
          <h3>${labels[bucket]}</h3>
          ${taskMarkup}
        </section>
      `;
    })
    .join("");
}

function renderSupplyMetrics() {
  const waterLitres = state.people * state.days * 3;
  const dryMeals = state.people * state.days * 3;
  const medicineDays = state.days;
  const torchTarget = Math.max(2, Math.ceil(state.people / 2));

  const metrics = [
    {
      value: `${waterLitres} L`,
      label: t("metricWater"),
      tone: "teal",
    },
    {
      value: `${dryMeals}`,
      label: t("metricMeals"),
      tone: "amber",
    },
    {
      value: `${medicineDays} ${t("days")}`,
      label: t("metricMedicine"),
      tone: "blue",
    },
    {
      value: `${torchTarget}`,
      label: t("metricLights"),
      tone: "violet",
    },
  ];

  els.supplyMetrics.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric metric-${metric.tone}">
          <strong>${metric.value}</strong>
          <p>${metric.label}</p>
        </article>
      `,
    )
    .join("");
}

function renderStock() {
  els.stockList.innerHTML = stockCatalog
    .map(
      (item) => `
        <article class="stock-item">
          <div>
            <h3>${escapeHtml(localText(item.label))}</h3>
            <p>${escapeHtml(localText(item.detail))}</p>
          </div>
          <div class="stock-controls" data-stock-key="${item.key}">
            <button class="mini-button" type="button" data-action="minus" title="Decrease">−</button>
            <output>${state.stock[item.key] || 0}</output>
            <button class="mini-button" type="button" data-action="plus" title="Increase">+</button>
          </div>
        </article>
      `,
    )
    .join("");

  els.stockList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.closest("[data-stock-key]").dataset.stockKey;
      const direction = button.dataset.action === "plus" ? 1 : -1;
      state.stock[key] = Math.max(0, Math.min(99, (state.stock[key] || 0) + direction));
      renderAll();
      saveState();
    });
  });
}

function renderContacts() {
  if (!state.contacts.length) {
    els.contactList.innerHTML = `<p class="muted">${t("noContacts")}</p><p class="muted">${t(
      "contactPrompt",
    )}</p>`;
    return;
  }

  els.contactList.innerHTML = state.contacts
    .map(
      (contact) => `
        <article class="contact-item">
          <div>
            <h3>${escapeHtml(contact.name)}</h3>
            <p>${escapeHtml(contact.role)} · ${escapeHtml(contact.phone)}</p>
          </div>
          <button class="mini-button" type="button" data-delete-contact="${contact.id}" title="${t(
            "delete",
          )}">×</button>
        </article>
      `,
    )
    .join("");

  els.contactList.querySelectorAll("[data-delete-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      state.contacts = state.contacts.filter((contact) => contact.id !== button.dataset.deleteContact);
      renderAll();
      saveState();
    });
  });
}

function addAidItem(type) {
  const promptKey = type === "offers" ? "customPromptOffer" : "customPromptNeed";
  const value = window.prompt(t(promptKey));
  if (!value?.trim()) return;
  state[type].push(value.trim());
  renderAll();
  saveState();
}

function renderAid() {
  renderAidList(els.offerList, "offers");
  renderAidList(els.helpList, "help");
}

function renderAidList(container, type) {
  container.innerHTML = state[type]
    .map(
      (item, index) => `
        <article class="aid-item">
          <p>${escapeHtml(item)}</p>
          <button class="mini-button" type="button" data-aid-type="${type}" data-aid-index="${index}" title="${t(
            "delete",
          )}">×</button>
        </article>
      `,
    )
    .join("");

  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state[button.dataset.aidType].splice(Number(button.dataset.aidIndex), 1);
      renderAll();
      saveState();
    });
  });
}

function renderPrintCard() {
  const area = state.area || t("noArea");
  const contacts = state.contacts
    .slice(0, 5)
    .map((contact) => `<li>${escapeHtml(contact.role)}: ${escapeHtml(contact.phone)}</li>`)
    .join("");
  const tasks = getFlatTasks()
    .slice(0, 6)
    .map((task) => `<li>${escapeHtml(taskLabel(task))}</li>`)
    .join("");

  els.printDate.textContent = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date());

  els.printSummary.innerHTML = `
    <p><strong>${escapeHtml(area)}, ${escapeHtml(state.district)}</strong></p>
    <p>${escapeHtml(t("meetingPoint"))}: ${escapeHtml(state.meetingPoint || t("printNoMeeting"))}</p>
    <p>${escapeHtml(t("safeRoute"))}: ${escapeHtml(state.route || t("printNoRoute"))}</p>
    <h3>${escapeHtml(t("contactsTitle"))}</h3>
    <ul>${contacts || `<li>${escapeHtml(t("noContacts"))}</li>`}</ul>
    <h3>${escapeHtml(t("actionTitle"))}</h3>
    <ul>${tasks}</ul>
  `;
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
