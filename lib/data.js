// All business content below (text, prices, contact info) is carried over
// verbatim from the current site — nothing here was reworded or changed,
// only reorganized into a module Next.js pages can import from.

export const LANGS = ["fr", "ar", "en", "es"];
export const LANG_LABEL = { fr: "Français", ar: "العربية", en: "English", es: "Español" };
export const LANG_SHORT = { fr: "FR", ar: "AR", en: "EN", es: "ES" };
export const DEFAULT_LANG = "fr";

export const T = {
  fr: {
    nav: { accueil: "Accueil", vehicules: "Véhicules", agence: "À propos", contact: "Contact", reserver: "Réserver", tagline: "Agence de location des scooter Vespa, vélo et trottinette électrique, quad" },
    marquee: { items: ["🛵 Livraison gratuite à votre hôtel", "⭐ 5.0 sur Google Maps", "☎️ +212 665 438 895", "🎉 -10% pour 3+ jours de location", "🛡️ Casques inclus", "📍 Marrakech, Avenue Mohamed V"] },
    categories: { scooters: "Scooters", vespa: "Vespa", velosElectriques: "Vélos électriques", velos: "Vélos", quads: "Quads", trottinettes: "Trottinettes", tous: "Tous" },
    fleet: { tag: "Nos véhicules", title: "Découvrez notre flotte", seeAll: "Voir toute la flotte →", desc: "Des véhicules fiables, confortables et adaptés à tous vos déplacements à Marrakech.", available: "Disponible" },
    units: { perDay: "/ jour", perHour: "/ 1h", per15min: "/ 15 min", circuit130: "circuit 1h30" },
    tags: { automatic: "Automatique", electric: "Électrique", manual: "Manuel", new: "Nouveau" },
    hero: { book: "Réserver sur WhatsApp", seeVehicles: "Voir nos véhicules" },
    stats: { clients: "Clients satisfaits", rating: "Note Google", vehicles: "Véhicules disponibles", years: "Ans d'expérience" },
    whyus: { tag: "Pourquoi choisir BE FREE ?", items: [{ icon: "shield", title: "Location simple et rapide" }, { icon: "pin", title: "Service local à Marrakech" }, { icon: "clock", title: "Disponibilité toute la journée" }, { icon: "chat", title: "Contact direct via WhatsApp" }] },
    how: { tag: "Comment ça marche ?", title: "Réservez en 3 étapes simples.", steps: [{ icon: "scooter", title: "Choisissez votre véhicule", desc: "Sélectionnez le véhicule qui vous convient." }, { icon: "clock", title: "Précisez la durée", desc: "Indiquez la durée et vos informations." }, { icon: "chat", title: "Contactez-nous sur WhatsApp", desc: "Recevez notre message et validez votre réservation." }], explore1: "Explore Marrakech", explore2: "à votre rythme." },
    destinations: { tag: "À découvrir", title: "Explorez Marrakech autrement", desc: "Nos véhicules vous permettent d'atteindre facilement les lieux incontournables de la ville rouge.", items: [
      { name: "Koutoubia", desc: "Le minaret emblématique", time: "5 min" },
      { name: "Jemaa el-Fna", desc: "La place mythique", time: "7 min" },
      { name: "Jardin Majorelle", desc: "Le bleu majorelle", time: "12 min" },
      { name: "La Palmeraie", desc: "Oasis de palmiers", time: "15 min" },
      { name: "Gueliz", desc: "Quartier moderne", time: "8 min" },
      { name: "Désert d'Agafay", desc: "Dunes à 30 min", time: "30 min" },
    ] },
    reviews: { tag: "Avis Google", title: "Ils nous ont fait confiance", desc: "Découvrez les avis de nos clients sur Google Maps.", seeAll: "Voir tous les avis", basedOn: "sur 6 avis" },
    vehiclesPage: { tag: "Notre flotte complète", title: "Tous nos véhicules", desc: "Choisissez le véhicule qui correspond à votre trajet et réservez-le en quelques secondes via WhatsApp.", reserveThis: "Réserver ce véhicule", empty: "Aucun véhicule dans cette catégorie pour le moment." },
    agence: {
      tag: "Notre agence", title: "À propos de BE FREE Marrakech",
      intro: "Basée au cœur de Marrakech, BE FREE vous accompagne pour découvrir la ville en toute liberté. Que vous soyez voyageur, résident ou professionnel, nous proposons une sélection de véhicules adaptés à tous les besoins : scooters, Vespa, vélos, trottinettes électriques et quads. Notre objectif est simple : vous permettre de vous déplacer facilement, rapidement et en toute sérénité, que ce soit pour explorer les ruelles de la médina, rejoindre les principaux sites touristiques, découvrir les quartiers de Marrakech ou partir à l'aventure aux alentours de la ville.",
      s1Title: "Une location simple et sans complications",
      s1Text: "Chez BE FREE, nous privilégions une expérience de location rapide, claire et humaine. Notre équipe locale est disponible pour vous conseiller et vous aider à choisir le véhicule correspondant le mieux à votre trajet, à votre durée de location et à vos besoins. Pas de démarches compliquées ni de perte de temps : nous vous expliquons les conditions de location, vous remettons un véhicule entretenu et vous accompagnons pour que votre expérience commence dans les meilleures conditions.",
      s2Title: "Des véhicules entretenus avec soin",
      s2Text: "Votre sécurité et votre confort sont essentiels. Nos véhicules font l'objet d'un entretien régulier et de contrôles avant la location, afin de vous offrir une expérience agréable et sereine sur les routes de Marrakech. Que vous recherchiez la praticité d'un scooter, le style d'une Vespa, la liberté d'un vélo, la mobilité d'une trottinette électrique ou les sensations d'un quad, BE FREE vous propose différentes solutions pour profiter pleinement de Marrakech.",
      s3Title: "Marrakech en toute liberté",
      s3Text: "Marrakech se découvre autrement lorsqu'on peut se déplacer librement. Évitez les contraintes des déplacements et profitez davantage de votre séjour. Avec BE FREE Marrakech, vous bénéficiez d'un contact direct sur WhatsApp, d'une équipe locale à votre écoute et d'un service pensé pour être aussi simple que possible. Votre destination, votre rythme, votre liberté.",
      tagline: "BE FREE Marrakech — Louez. Roulez. Découvrez. Soyez libre.",
      ctaTitle: "📲 Réservez facilement",
      ctaText: "Une question sur un véhicule, un tarif ou une disponibilité ? Contactez-nous directement sur WhatsApp. Notre équipe vous répond rapidement et vous accompagne dans votre réservation.",
      chat: "Discuter sur WhatsApp", address: "Adresse",
      addressFull: "Avenue Mohamed V, à côté de McDonald's, Marrakech",
      phone: "Téléphone", whatsappLabel: "WhatsApp", whatsappTag: "(WhatsApp)", sendMsg: "Envoyer un message",
      keywords: ["BE FREE Marrakech", "BE FREE", "scooters", "scooter", "Vespa", "vélos", "vélo", "trottinettes électriques", "trottinette électrique", "quads", "quad"],
    },
    reservation: { tag: "Réservation", title: "Réservez votre véhicule", desc: "Remplissez ce formulaire, votre demande sera envoyée directement sur WhatsApp pour confirmer votre réservation.", name: "Nom complet", namePh: "Votre nom", phone: "Téléphone / WhatsApp", phonePh: "06 xx xx xx xx", vehicle: "Véhicule souhaité", vehicleChoose: "Choisissez un véhicule", startDate: "Date de départ", returnDate: "Date de retour", notes: "Message / précisions (optionnel)", notesPh: "Livraison à l'hôtel, casque supplémentaire...", submit: "Envoyer ma demande sur WhatsApp", sending: "Ouverture de WhatsApp...", hint: "En cliquant sur \"Envoyer\", WhatsApp s'ouvre avec votre demande déjà rédigée. Il ne vous reste qu'à l'envoyer.", errName: "Merci d'indiquer votre nom.", errPhone: "Merci d'indiquer un numéro de téléphone.", errPhoneInvalid: "Numéro de téléphone invalide.", errVehicle: "Merci de choisir un véhicule.", errDepart: "Merci d'indiquer la date de départ.", errReturn: "Merci d'indiquer la date de retour.", errDatePast: "La date ne peut pas être dans le passé.", errReturnBefore: "La date de retour doit être après la date de départ.", waIntro: "Salam ! Je voudrais réserver un véhicule chez BE FREE Marrakech.", waName: "Nom", waPhone: "Téléphone", waVehicle: "Véhicule", waDepart: "Départ", waReturn: "Retour", waNote: "Note", waInfoIntro: "Salam ! J'aimerais avoir plus d'informations sur BE FREE Marrakech." },
    footer: { tagline: "Location de scooters, quads, vélos & Vespa.", brush: "Explore. Rent. Be Free.", nav: "Navigation", contact: "Contact", follow: "Suivez-nous", rights: "© 2025 BE FREE Marrakech. Tous droits réservés." },
  },
  ar: {
    nav: { accueil: "الرئيسية", vehicules: "المركبات", agence: "الوكالة", contact: "اتصل بنا", reserver: "احجز", tagline: "وكالة كراء سكوتر فيسبا، دراجات وطوطينات كهربائية، كواد" },
    marquee: { items: ["🛵 توصيل مجاني إلى فندقك", "⭐ 5.0 على خرائط جوجل", "☎️ 212665438895+", "🎉 خصم 10% لأكثر من 3 أيام", "🛡️ خوذات مجانية", "📍 مراكش، شارع محمد الخامس"] },
    categories: { scooters: "سكوترات", vespa: "فيسبا", velosElectriques: "دراجات كهربائية", velos: "دراجات", quads: "كواد", trottinettes: "طوطينات", tous: "الكل" },
    fleet: { tag: "مركباتنا", title: "اكتشف أسطولنا", seeAll: "شاهد كل الأسطول ←", desc: "مركبات موثوقة ومريحة، مناسبة لجميع تنقلاتك في مراكش.", available: "متوفر" },
    units: { perDay: "/ يوم", perHour: "/ ساعة", per15min: "/ 15 دقيقة", circuit130: "جولة 1h30" },
    tags: { automatic: "أوتوماتيكي", electric: "كهربائي", manual: "يدوي", new: "جديد" },
    hero: { book: "احجز عبر واتساب", seeVehicles: "شاهد مركباتنا" },
    stats: { clients: "عميل راضٍ", rating: "تقييم جوجل", vehicles: "مركبة متوفرة", years: "سنوات خبرة" },
    whyus: { tag: "لماذا تختار BE FREE؟", items: [{ icon: "shield", title: "كراء سهل وسريع" }, { icon: "pin", title: "خدمة محلية في مراكش" }, { icon: "clock", title: "متوفرون طوال اليوم" }, { icon: "chat", title: "تواصل مباشر عبر واتساب" }] },
    how: { tag: "كيف يعمل الأمر؟", title: "احجز في 3 خطوات بسيطة.", steps: [{ icon: "scooter", title: "اختر مركبتك", desc: "اختر المركبة التي تناسبك." }, { icon: "clock", title: "حدد المدة", desc: "أدخل المدة ومعلوماتك." }, { icon: "chat", title: "تواصل معنا عبر واتساب", desc: "استلم رسالتنا وأكّد حجزك." }], explore1: "اكتشف مراكش", explore2: "على إيقاعك الخاص." },
    destinations: { tag: "للزيارة", title: "اكتشف مراكش بطريقة أخرى", desc: "مركباتنا تمكنك من الوصول بسهولة إلى أبرز معالم المدينة الحمراء.", items: [
      { name: "الكتبية", desc: "المئذنة الشهيرة", time: "5 دقائق" },
      { name: "جامع الفنا", desc: "الساحة الأسطورية", time: "7 دقائق" },
      { name: "حديقة ماجوريل", desc: "الأزرق الماجوريلي", time: "12 دقيقة" },
      { name: "واحة النخيل", desc: "واحة من النخيل", time: "15 دقيقة" },
      { name: "جيليز", desc: "الحي العصري", time: "8 دقائق" },
      { name: "صحراء أكافاي", desc: "كثبان على بعد 30 دقيقة", time: "30 دقيقة" },
    ] },
    reviews: { tag: "تقييمات جوجل", title: "وثقوا فينا", desc: "اطلع على تقييمات عملائنا على خرائط جوجل.", seeAll: "شاهد كل التقييمات", basedOn: "من 6 تقييمات" },
    vehiclesPage: { tag: "أسطولنا الكامل", title: "جميع مركباتنا", desc: "اختر المركبة المناسبة لرحلتك واحجزها في ثوانٍ عبر واتساب.", reserveThis: "احجز هذه المركبة", empty: "لا توجد مركبات في هذه الفئة حاليًا." },
    agence: {
      tag: "وكالتنا", title: "عن BE FREE مراكش",
      intro: "تقع BE FREE في قلب مراكش، وترافقك لاكتشاف المدينة بحرية تامة. سواء كنت مسافراً أو مقيماً أو محترفاً، نوفر لك تشكيلة من المركبات المناسبة لجميع الاحتياجات: سكوترات، فيسبا، دراجات، طوطينات كهربائية وكواد. هدفنا بسيط: تمكينك من التنقل بسهولة وسرعة وهدوء، سواء لاستكشاف أزقة المدينة القديمة، أو الوصول إلى المعالم السياحية الرئيسية، أو اكتشاف أحياء مراكش، أو الانطلاق في مغامرة حول المدينة.",
      s1Title: "كراء بسيط بلا تعقيدات",
      s1Text: "في BE FREE، نفضل تجربة كراء سريعة وواضحة وإنسانية. فريقنا المحلي متاح لنصحك ومساعدتك في اختيار المركبة الأنسب لمسارك ومدة كرائك واحتياجاتك. لا إجراءات معقدة ولا إضاعة للوقت: نشرح لك شروط الكراء، ونسلمك مركبة مصانة، ونرافقك لتبدأ تجربتك في أفضل الظروف.",
      s2Title: "مركبات مصانة بعناية",
      s2Text: "سلامتك وراحتك أساسيتان. تخضع مركباتنا لصيانة منتظمة وفحوصات قبل الكراء، لنقدم لك تجربة ممتعة وهادئة على طرقات مراكش. سواء كنت تبحث عن عملية السكوتر، أو أناقة الفيسبا، أو حرية الدراجة، أو تنقل الطوطينة الكهربائية، أو إحساس الكواد، توفر لك BE FREE حلولاً مختلفة للاستمتاع الكامل بمراكش.",
      s3Title: "مراكش بحرية تامة",
      s3Text: "تُكتشف مراكش بطريقة مختلفة عندما يمكنك التنقل بحرية. تجنب قيود التنقل واستفد أكثر من إقامتك. مع BE FREE مراكش، تستفيد من تواصل مباشر على واتساب، وفريق محلي في خدمتك، وخدمة مصممة لتكون بسيطة قدر الإمكان. وجهتك، إيقاعك، حريتك.",
      tagline: "BE FREE مراكش — اكترِ. قد. اكتشف. كن حراً.",
      ctaTitle: "📲 احجز بسهولة",
      ctaText: "سؤال حول مركبة أو سعر أو توفر؟ تواصل معنا مباشرة على واتساب. فريقنا يجيبك بسرعة ويرافقك في حجزك.",
      chat: "تواصل عبر واتساب", address: "العنوان",
      addressFull: "شارع محمد الخامس، بجانب ماكدونالدز، مراكش",
      phone: "الهاتف", whatsappLabel: "واتساب", whatsappTag: "(واتساب)", sendMsg: "أرسل رسالة",
      keywords: ["BE FREE مراكش", "BE FREE", "سكوترات", "سكوتر", "فيسبا", "دراجات", "دراجة", "طوطينات كهربائية", "طوطينة كهربائية", "كواد"],
    },
    reservation: { tag: "الحجز", title: "احجز مركبتك", desc: "املأ هذا النموذج وستُرسل طلبك مباشرة عبر واتساب لتأكيد حجزك.", name: "الاسم الكامل", namePh: "اسمك", phone: "الهاتف / واتساب", phonePh: "06 xx xx xx xx", vehicle: "المركبة المرغوبة", vehicleChoose: "اختر مركبة", startDate: "تاريخ الانطلاق", returnDate: "تاريخ العودة", notes: "ملاحظات (اختياري)", notesPh: "توصيل إلى الفندق، خوذة إضافية...", submit: "أرسل طلبي عبر واتساب", sending: "جاري فتح واتساب...", hint: "بالضغط على \"إرسال\"، سيُفتح واتساب برسالتك جاهزة. لا يتبقى سوى الإرسال.", errName: "الرجاء إدخال اسمك.", errPhone: "الرجاء إدخال رقم هاتفك.", errPhoneInvalid: "رقم الهاتف غير صحيح.", errVehicle: "الرجاء اختيار مركبة.", errDepart: "الرجاء إدخال تاريخ الانطلاق.", errReturn: "الرجاء إدخال تاريخ العودة.", errDatePast: "لا يمكن أن يكون التاريخ في الماضي.", errReturnBefore: "يجب أن يكون تاريخ العودة بعد تاريخ الانطلاق.", waIntro: "السلام! أرغب في حجز مركبة من وكالة BE FREE مراكش.", waName: "الاسم", waPhone: "الهاتف", waVehicle: "المركبة", waDepart: "الانطلاق", waReturn: "العودة", waNote: "ملاحظة", waInfoIntro: "السلام! أرغب في الحصول على مزيد من المعلومات حول BE FREE مراكش." },
    footer: { tagline: "كراء سكوترات، كواد، دراجات وفيسبا.", brush: "استكشف. اكترِ. كن حراً.", nav: "روابط", contact: "اتصل بنا", follow: "تابعنا", rights: "© 2025 BE FREE Marrakech. جميع الحقوق محفوظة." },
  },
  en: {
    nav: { accueil: "Home", vehicules: "Vehicles", agence: "About", contact: "Contact", reserver: "Book Now", tagline: "Rental agency for Vespa scooters, bikes and e-scooters, quads" },
    marquee: { items: ["🛵 Free delivery to your hotel", "⭐ 5.0 on Google Maps", "☎️ +212 665 438 895", "🎉 -10% for 3+ day rentals", "🛡️ Helmets included", "📍 Marrakech, Avenue Mohamed V"] },
    categories: { scooters: "Scooters", vespa: "Vespa", velosElectriques: "Electric bikes", velos: "Bikes", quads: "Quads", trottinettes: "E-scooters", tous: "All" },
    fleet: { tag: "Our vehicles", title: "Discover our fleet", seeAll: "See the full fleet →", desc: "Reliable, comfortable vehicles suited to all your rides around Marrakech.", available: "Available" },
    units: { perDay: "/ day", perHour: "/ 1h", per15min: "/ 15 min", circuit130: "1h30 tour" },
    tags: { automatic: "Automatic", electric: "Electric", manual: "Manual", new: "New" },
    hero: { book: "Book on WhatsApp", seeVehicles: "See our vehicles" },
    stats: { clients: "Happy customers", rating: "Google rating", vehicles: "Vehicles available", years: "Years of experience" },
    whyus: { tag: "Why choose BE FREE?", items: [{ icon: "shield", title: "Fast and simple rental" }, { icon: "pin", title: "Local service in Marrakech" }, { icon: "clock", title: "Available all day" }, { icon: "chat", title: "Direct contact on WhatsApp" }] },
    how: { tag: "How it works", title: "Book in 3 simple steps.", steps: [{ icon: "scooter", title: "Choose your vehicle", desc: "Pick the vehicle that suits you." }, { icon: "clock", title: "Set the duration", desc: "Tell us the duration and your details." }, { icon: "chat", title: "Contact us on WhatsApp", desc: "Get our reply and confirm your booking." }], explore1: "Explore Marrakech", explore2: "at your own pace." },
    destinations: { tag: "Discover", title: "Explore Marrakech differently", desc: "Our vehicles let you easily reach the must-see spots of the Red City.", items: [
      { name: "Koutoubia", desc: "The iconic minaret", time: "5 min" },
      { name: "Jemaa el-Fna", desc: "The legendary square", time: "7 min" },
      { name: "Majorelle Garden", desc: "The majorelle blue", time: "12 min" },
      { name: "The Palm Grove", desc: "Palm oasis", time: "15 min" },
      { name: "Gueliz", desc: "Modern district", time: "8 min" },
      { name: "Agafay Desert", desc: "Dunes 30 min away", time: "30 min" },
    ] },
    reviews: { tag: "Google Reviews", title: "They trusted us", desc: "Read what our clients say about us on Google Maps.", seeAll: "See all reviews", basedOn: "based on 6 reviews" },
    vehiclesPage: { tag: "Our full fleet", title: "All our vehicles", desc: "Choose the vehicle that fits your trip and book it in seconds on WhatsApp.", reserveThis: "Book this vehicle", empty: "No vehicles in this category yet." },
    agence: {
      tag: "Our agency", title: "About BE FREE Marrakech",
      intro: "Based in the heart of Marrakech, BE FREE helps you discover the city in total freedom. Whether you're a traveler, resident or professional, we offer a selection of vehicles suited to every need: scooters, Vespas, bikes, e-scooters and quads. Our goal is simple: to let you get around easily, quickly and with peace of mind — whether exploring the medina's alleys, reaching the main tourist sites, discovering Marrakech's neighborhoods, or heading out on an adventure around the city.",
      s1Title: "Simple, hassle-free rental",
      s1Text: "At BE FREE, we favor a fast, clear and human rental experience. Our local team is available to advise you and help you choose the vehicle that best fits your trip, rental duration and needs. No complicated paperwork or wasted time: we explain the rental terms, hand you a well-maintained vehicle, and support you so your experience starts in the best conditions.",
      s2Title: "Vehicles maintained with care",
      s2Text: "Your safety and comfort come first. Our vehicles undergo regular maintenance and pre-rental checks so you can enjoy a pleasant, worry-free experience on Marrakech's roads. Whether you're after a scooter's practicality, a Vespa's style, a bike's freedom, an e-scooter's mobility or a quad's thrill, BE FREE offers different solutions to make the most of Marrakech.",
      s3Title: "Marrakech in total freedom",
      s3Text: "Marrakech feels different when you can move freely. Skip the transportation hassle and get more out of your stay. With BE FREE Marrakech you get direct contact on WhatsApp, a local team that listens, and a service designed to be as simple as possible. Your destination, your pace, your freedom.",
      tagline: "BE FREE Marrakech — Rent. Ride. Discover. Be Free.",
      ctaTitle: "📲 Book easily",
      ctaText: "A question about a vehicle, a price or availability? Contact us directly on WhatsApp. Our team replies quickly and guides you through your booking.",
      chat: "Chat on WhatsApp", address: "Address",
      addressFull: "Avenue Mohamed V, next to McDonald's, Marrakech",
      phone: "Phone", whatsappLabel: "WhatsApp", whatsappTag: "(WhatsApp)", sendMsg: "Send a message",
      keywords: ["BE FREE Marrakech", "BE FREE", "scooters", "scooter", "Vespas", "Vespa", "bikes", "bike", "e-scooters", "e-scooter", "quads", "quad"],
    },
    reservation: { tag: "Booking", title: "Book your vehicle", desc: "Fill in this form and your request will be sent straight to WhatsApp.", name: "Full name", namePh: "Your name", phone: "Phone / WhatsApp", phonePh: "06 xx xx xx xx", vehicle: "Vehicle wanted", vehicleChoose: "Choose a vehicle", startDate: "Departure date", returnDate: "Return date", notes: "Message / notes (optional)", notesPh: "Hotel delivery, extra helmet...", submit: "Send my request on WhatsApp", sending: "Opening WhatsApp...", hint: "Clicking \"Send\" opens WhatsApp with your request already written.", errName: "Please enter your name.", errPhone: "Please enter a phone number.", errPhoneInvalid: "Invalid phone number.", errVehicle: "Please choose a vehicle.", errDepart: "Please enter the departure date.", errReturn: "Please enter the return date.", errDatePast: "The date can't be in the past.", errReturnBefore: "The return date must be after the departure date.", waIntro: "Hi! I'd like to book a vehicle at BE FREE Marrakech.", waName: "Name", waPhone: "Phone", waVehicle: "Vehicle", waDepart: "Departure", waReturn: "Return", waNote: "Note", waInfoIntro: "Hi! I'd like more information about BE FREE Marrakech." },
    footer: { tagline: "Scooter, quad, bike & Vespa rental.", brush: "Explore. Rent. Be Free.", nav: "Navigation", contact: "Contact", follow: "Follow us", rights: "© 2025 BE FREE Marrakech. All rights reserved." },
  },
  es: {
    nav: { accueil: "Inicio", vehicules: "Vehículos", agence: "Nosotros", contact: "Contacto", reserver: "Reservar", tagline: "Agencia de alquiler de scooters Vespa, bicicletas y patinetes eléctricos, quads" },
    marquee: { items: ["🛵 Entrega gratis en tu hotel", "⭐ 5.0 en Google Maps", "☎️ +212 665 438 895", "🎉 -10% por 3+ días", "🛡️ Cascos incluidos", "📍 Marrakech, Avenue Mohamed V"] },
    categories: { scooters: "Scooters", vespa: "Vespa", velosElectriques: "Bicis eléctricas", velos: "Bicicletas", quads: "Quads", trottinettes: "Patinetes", tous: "Todos" },
    fleet: { tag: "Nuestros vehículos", title: "Descubre nuestra flota", seeAll: "Ver toda la flota →", desc: "Vehículos fiables y cómodos para todos tus desplazamientos en Marrakech.", available: "Disponible" },
    units: { perDay: "/ día", perHour: "/ 1h", per15min: "/ 15 min", circuit130: "circuito 1h30" },
    tags: { automatic: "Automático", electric: "Eléctrico", manual: "Manual", new: "Nuevo" },
    hero: { book: "Reservar por WhatsApp", seeVehicles: "Ver vehículos" },
    stats: { clients: "Clientes satisfechos", rating: "Valoración Google", vehicles: "Vehículos disponibles", years: "Años de experiencia" },
    whyus: { tag: "¿Por qué elegir BE FREE?", items: [{ icon: "shield", title: "Alquiler simple y rápido" }, { icon: "pin", title: "Servicio local en Marrakech" }, { icon: "clock", title: "Disponibles todo el día" }, { icon: "chat", title: "Contacto directo por WhatsApp" }] },
    how: { tag: "¿Cómo funciona?", title: "Reserva en 3 sencillos pasos.", steps: [{ icon: "scooter", title: "Elige tu vehículo", desc: "Selecciona el vehículo que más te convenga." }, { icon: "clock", title: "Indica la duración", desc: "Dinos la duración y tus datos." }, { icon: "chat", title: "Contáctanos por WhatsApp", desc: "Recibe nuestra respuesta y confirma tu reserva." }], explore1: "Explora Marrakech", explore2: "a tu propio ritmo." },
    destinations: { tag: "Descubre", title: "Explora Marrakech de otra manera", desc: "Nuestros vehículos te permiten llegar fácilmente a los lugares imprescindibles de la ciudad roja.", items: [
      { name: "Koutoubia", desc: "El minarete emblemático", time: "5 min" },
      { name: "Jemaa el-Fna", desc: "La plaza mítica", time: "7 min" },
      { name: "Jardín Majorelle", desc: "El azul majorelle", time: "12 min" },
      { name: "El Palmeral", desc: "Oasis de palmeras", time: "15 min" },
      { name: "Gueliz", desc: "Barrio moderno", time: "8 min" },
      { name: "Desierto de Agafay", desc: "Dunas a 30 min", time: "30 min" },
    ] },
    reviews: { tag: "Reseñas de Google", title: "Confiaron en nosotros", desc: "Lee lo que dicen nuestros clientes en Google Maps.", seeAll: "Ver todas las reseñas", basedOn: "basado en 6 reseñas" },
    vehiclesPage: { tag: "Nuestra flota completa", title: "Todos nuestros vehículos", desc: "Elige el vehículo adecuado para tu trayecto y resérvalo en segundos.", reserveThis: "Reservar este vehículo", empty: "No hay vehículos en esta categoría." },
    agence: {
      tag: "Nuestra agencia", title: "Sobre BE FREE Marrakech",
      intro: "Ubicada en el corazón de Marrakech, BE FREE te acompaña para descubrir la ciudad con total libertad. Ya seas viajero, residente o profesional, ofrecemos una selección de vehículos adaptados a todas las necesidades: scooters, Vespas, bicicletas, patinetes eléctricos y quads. Nuestro objetivo es simple: que te desplaces con facilidad, rapidez y tranquilidad, ya sea para explorar las callejuelas de la medina, llegar a los principales sitios turísticos, descubrir los barrios de Marrakech o lanzarte a la aventura por los alrededores.",
      s1Title: "Alquiler simple y sin complicaciones",
      s1Text: "En BE FREE priorizamos una experiencia de alquiler rápida, clara y humana. Nuestro equipo local está disponible para asesorarte y ayudarte a elegir el vehículo que mejor se adapte a tu trayecto, duración y necesidades. Sin trámites complicados ni pérdidas de tiempo: te explicamos las condiciones, te entregamos un vehículo bien mantenido y te acompañamos para que tu experiencia empiece en las mejores condiciones.",
      s2Title: "Vehículos cuidados con esmero",
      s2Text: "Tu seguridad y comodidad son esenciales. Nuestros vehículos pasan por mantenimiento regular y controles antes del alquiler, para que disfrutes de una experiencia agradable y tranquila por las calles de Marrakech. Tanto si buscas la practicidad de un scooter, el estilo de una Vespa, la libertad de una bici, la movilidad de un patinete eléctrico o las sensaciones de un quad, BE FREE te ofrece distintas soluciones para aprovechar Marrakech al máximo.",
      s3Title: "Marrakech con total libertad",
      s3Text: "Marrakech se descubre de otra manera cuando puedes moverte con libertad. Evita las complicaciones del transporte y aprovecha más tu estancia. Con BE FREE Marrakech disfrutas de contacto directo por WhatsApp, un equipo local a tu disposición y un servicio pensado para ser lo más simple posible. Tu destino, tu ritmo, tu libertad.",
      tagline: "BE FREE Marrakech — Alquila. Rueda. Descubre. Sé libre.",
      ctaTitle: "📲 Reserva fácilmente",
      ctaText: "¿Una duda sobre un vehículo, una tarifa o la disponibilidad? Contáctanos directamente por WhatsApp. Nuestro equipo responde rápido y te acompaña en tu reserva.",
      chat: "Chatear por WhatsApp", address: "Dirección",
      addressFull: "Avenida Mohamed V, junto a McDonald's, Marrakech",
      phone: "Teléfono", whatsappLabel: "WhatsApp", whatsappTag: "(WhatsApp)", sendMsg: "Enviar mensaje",
      keywords: ["BE FREE Marrakech", "BE FREE", "scooters", "scooter", "Vespas", "Vespa", "bicicletas", "bicicleta", "bici", "patinetes eléctricos", "patinete eléctrico", "quads", "quad"],
    },
    reservation: { tag: "Reserva", title: "Reserva tu vehículo", desc: "Completa este formulario y tu solicitud se enviará por WhatsApp.", name: "Nombre completo", namePh: "Tu nombre", phone: "Teléfono / WhatsApp", phonePh: "06 xx xx xx xx", vehicle: "Vehículo deseado", vehicleChoose: "Elige un vehículo", startDate: "Fecha de salida", returnDate: "Fecha de regreso", notes: "Mensaje / notas (opcional)", notesPh: "Entrega en el hotel, casco adicional...", submit: "Enviar mi solicitud por WhatsApp", sending: "Abriendo WhatsApp...", hint: "Al pulsar \"Enviar\", se abrirá WhatsApp con tu solicitud ya redactada.", errName: "Por favor, indica tu nombre.", errPhone: "Por favor, indica un número de teléfono.", errPhoneInvalid: "Número de teléfono no válido.", errVehicle: "Por favor, elige un vehículo.", errDepart: "Por favor, indica la fecha de salida.", errReturn: "Por favor, indica la fecha de regreso.", errDatePast: "La fecha no puede ser en el pasado.", errReturnBefore: "La fecha de regreso debe ser posterior a la fecha de salida.", waIntro: "¡Hola! Me gustaría reservar un vehículo en BE FREE Marrakech.", waName: "Nombre", waPhone: "Teléfono", waVehicle: "Vehículo", waDepart: "Salida", waReturn: "Regreso", waNote: "Nota", waInfoIntro: "¡Hola! Me gustaría más información sobre BE FREE Marrakech." },
    footer: { tagline: "Alquiler de scooters, quads, bicis y Vespa.", brush: "Explore. Rent. Be Free.", nav: "Navegación", contact: "Contacto", follow: "Síguenos", rights: "© 2025 BE FREE Marrakech. Todos los derechos reservados." },
  },
};

export function t(lang, path) {
  const parts = path.split(".");
  let node = T[lang] || T[DEFAULT_LANG];
  for (const p of parts) node = node && node[p];
  return node === undefined ? path : node;
}

export const WHATSAPP_NUMBER = "212665438895";
export const AGENCY = { city: "Marrakech, Maroc", phones: ["06 65 43 88 95", "06 88 13 87 74"], site: "befreemarrakech.com" };
export const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/FG9AMTrLXRKXC18P8";
export const GOOGLE_REVIEWS_RATING = 5.0;
export const GOOGLE_REVIEWS_COUNT = 6;
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100066729303764";
export const INSTAGRAM_URL = "https://www.instagram.com/locationvespa_marrakech?stkn=MXFkNHZqbDUwcXBhdg==";

export const REVIEWS = [
  { id: 1, name: "Mécanique Machhor", rating: 5, initial: "M", color: "#E0122B",
    text: { fr: "Everything is fine, thank you Yassin", ar: "كل شيء على ما يرام، شكراً ياسين", en: "Everything is fine, thank you Yassin", es: "Todo está bien, gracias Yassin" },
    date: { fr: "Il y a 3 mois", ar: "قبل 3 أشهر", en: "3 months ago", es: "Hace 3 meses" } },
  { id: 2, name: "outman el_wechki", rating: 5, initial: "O", color: "#1B7E5C",
    text: { fr: "Good service", ar: "خدمة جيدة", en: "Good service", es: "Buen servicio" },
    date: { fr: "Il y a 5 mois", ar: "قبل 5 أشهر", en: "5 months ago", es: "Hace 5 meses" } },
  { id: 3, name: "karim elbrihi", rating: 5, initial: "K", color: "#6B21A8",
    text: { fr: "Top", ar: "ممتاز", en: "Top", es: "Excelente" },
    date: { fr: "Il y a 5 mois", ar: "قبل 5 أشهر", en: "5 months ago", es: "Hace 5 meses" } },
];

export const VEHICLES = [
  { id: "kymco-50", nameKey: "Kymco 50cc", categoryKey: "scooters", priceEUR: 20, unitKey: "perDay", tagKey: "automatic", img: "/sora1.jpeg", desc: { fr: "Scooter automatique idéal pour se faufiler dans la médina et rejoindre la Gueliz sans effort.", ar: "سكوتر أوتوماتيكي مثالي للتنقل داخل المدينة القديمة والوصول إلى جيليز بسهولة.", en: "Automatic scooter, perfect for weaving through the medina and reaching Gueliz effortlessly.", es: "Scooter automático ideal para moverse por la medina y llegar a Gueliz sin esfuerzo." } },
  { id: "primavera-50", nameKey: "Primavera 50cc", categoryKey: "vespa", priceEUR: 25, unitKey: "perDay", tagKey: "automatic", img: "/sora2.jpeg", desc: { fr: "L'élégance italienne pour rouler avec style sur les avenues de Marrakech.", ar: "الأناقة الإيطالية للتجول بأسلوب في شوارع مراكش.", en: "Italian elegance to cruise the avenues of Marrakech in style.", es: "La elegancia italiana para recorrer con estilo las avenidas de Marrakech." } },
  { id: "velo-electrique", nameKey: "Vélo électrique", categoryKey: "velosElectriques", priceEUR: 30, unitKey: "perDay", price2EUR: 10, unit2Key: "perHour", tagKey: "electric", img: "/sora3.jpeg", desc: { fr: "Assistance électrique pour explorer la ville et ses jardins sans se fatiguer.", ar: "مساعدة كهربائية لاستكشاف المدينة وحدائقها دون تعب.", en: "Electric assist to explore the city and its gardens without breaking a sweat.", es: "Asistencia eléctrica para explorar la ciudad y sus jardines sin esfuerzo." } },
  { id: "vtt-rockrider", nameKey: "VTT Rockrider", categoryKey: "velos", priceEUR: 10, unitKey: "perDay", tagKey: "manual", img: "/sora4.jpeg", desc: { fr: "Un vélo tout-terrain robuste, parfait pour les excursions vers la palmeraie.", ar: "دراجة جبلية متينة، مثالية للرحلات نحو واحة النخيل.", en: "A sturdy mountain bike, perfect for trips out to the palm grove.", es: "Una bicicleta de montaña robusta, perfecta para excursiones al palmeral." } },
  { id: "quad-canam", nameKey: "Quad 4x4 — Circuit Palmeraie", categoryKey: "quads", priceEUR: 25, unitKey: "circuit130", tagKey: "automatic", img: "/sora5.jpeg", desc: { fr: "Circuit d'1h30 avec un guide local dans la palmeraie, thé inclus.", ar: "جولة لمدة ساعة ونصف مع مرشد محلي في واحة النخيل، الشاي متضمن.", en: "A 1.5-hour tour with a local guide through the palm grove, tea included.", es: "Un recorrido de 1h30 con guía local por el palmeral, té incluido." } },
  { id: "trottinette", nameKey: "Trottinette électrique", categoryKey: "trottinettes", priceEUR: 3, unitKey: "per15min", tagKey: "electric", img: "/sora6.jpeg", desc: { fr: "La solution la plus simple pour un trajet court et rapide dans le centre-ville.", ar: "الحل الأبسط لرحلة قصيرة وسريعة في وسط المدينة.", en: "The simplest option for a short, quick ride around downtown.", es: "La opción más simple para un trayecto corto y rápido por el centro." } },
  { id: "velo-elec-premium", nameKey: "Vélo électrique Premium", categoryKey: "velosElectriques", priceEUR: 15, unitKey: "perDay", price2EUR: 8, unit2Key: "perHour", tagKey: "electric", isNew: true, img: "/sora7.jpeg", desc: { fr: "Vélo électrique tout confort, idéal pour de longues balades à Marrakech.", ar: "دراجة كهربائية مريحة، مثالية للجولات الطويلة في مراكش.", en: "Comfortable electric bike, ideal for long rides around Marrakech.", es: "Bicicleta eléctrica cómoda, ideal para paseos largos por Marrakech." } },
  { id: "vespa-sprint-50", nameKey: "Vespa Sprint 50cc", categoryKey: "vespa", priceEUR: 30, unitKey: "perDay", tagKey: "automatic", isNew: true, img: "/sora8.jpeg", desc: { fr: "Vespa Sprint 50cc, sportive et élégante, parfaite pour se déplacer avec style à Marrakech.", ar: "فيسبا سبرينت 50cc، رياضية وأنيقة، مثالية للتنقل بأسلوب في مراكش.", en: "Vespa Sprint 50cc, sporty and elegant, perfect for stylish rides around Marrakech.", es: "Vespa Sprint 50cc, deportiva y elegante, perfecta para moverte con estilo por Marrakech." } },
];

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function formatPrice(amountEUR, lang) {
  if (lang === "ar") return `${amountEUR * 10} درهم`;
  if (lang === "en") return `$${amountEUR}`;
  return `${amountEUR}€`;
}

export function formatVehiclePrice(v, lang) {
  const main = `${formatPrice(v.priceEUR, lang)} ${t(lang, `units.${v.unitKey}`)}`;
  if (v.price2EUR) return `${main} · ${formatPrice(v.price2EUR, lang)} ${t(lang, `units.${v.unit2Key}`)}`;
  return main;
}
