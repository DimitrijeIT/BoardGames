const books = [
  {
    id: "leonardo-da-vinci",
    title: "Leonardo da Vinči",
    originalTitle: "Leonardo da Vinci",
    author: "Volter Ajzakson",
    language: "SR",
    category: "Biografija",
    description: "Obimna biografija renesansnog genija zasnovana na hiljadama stranica Leonardovih beležnica, koja ga prikazuje kao umetnika, naučnika i radoznalog posmatrača sveta.",
    image: "https://laguna.oozmi-cdn.com/images/e4ff9d4d-1f52-407d-9f99-dd2ed423cc4d/leonardo-da-vinci-volter-ajzakson-m-w1200.webp",
    sourceUrl: "https://laguna.rs/n3773_knjiga_leonardo_da_vinci_laguna.html"
  },
  {
    id: "tajni-zivot-nikole-tesle",
    title: "Tajni život Nikole Tesle",
    originalTitle: "",
    author: "Miodrag Milanović",
    language: "SR",
    category: "Biografija",
    description: "Knjiga otkriva manje poznate detalje iz Teslinog života, povezujući naučne činjenice sa njegovom unutrašnjom, gotovo mističnom dimenzijom.",
    image: "https://www.korisnaknjiga.com/photo/books0053/p052211c0.jpg",
    sourceUrl: "https://www.korisnaknjiga.com/tajni-zivot-nikole-tesle-naslov-52211"
  },
  {
    id: "istorijski-zabavnik",
    title: "Istorijski zabavnik",
    originalTitle: "",
    author: "Istorijski zabavnik (magazin)",
    language: "SR",
    category: "Časopis",
    description: "Srpski popularno-istorijski magazin koji donosi priče o zanimljivim, često prećutanim događajima i ličnostima iz prošlosti.",
    image: "https://images.squarespace-cdn.com/content/v1/5c77ddea29f2cc23e86854e4/9207c6e6-f1a8-46bf-bc1c-5bca4c9db51a/Istorijski+Zabavnik.png?format=1500w",
    sourceUrl: "https://www.istorijskizabavnik.rs"
  },
  {
    id: "gradinar",
    title: "Gradinar",
    originalTitle: "The Gardener",
    author: "Rabindranat Tagore",
    language: "SR",
    category: "Beletristika",
    description: "Najpoznatija zbirka pesama Rabindranata Tagorea iz 1913. godine, koja peva o ljubavi i emocijama; ilustrovano izdanje Lagune.",
    image: "https://laguna.oozmi-cdn.com/images/c55fc3b9-4cb2-4bbe-b55b-c15015483a60/Gradinar-w1200.webp",
    sourceUrl: "https://laguna.rs/n6000_knjiga_gradinar_laguna.html"
  },
  {
    id: "moc-geografije",
    title: "Moć geografije",
    originalTitle: "The Power of Geography",
    author: "Tim Maršal",
    language: "SR",
    category: "Geografija i politika",
    description: "Analiza deset ključnih regiona koji će oblikovati svetsku geopolitiku 21. veka i pokazuje kako geografski položaj određuje sudbinu država.",
    image: "https://laguna.oozmi-cdn.com/images/51cd07ad-209e-4fae-a0a9-299699fedd4a/Moc-geografije-w1200.webp",
    sourceUrl: "https://laguna.rs/n5572_knjiga_moc_geografije_laguna.html"
  },
  {
    id: "hotel-portofino",
    title: "Hotel Portofino",
    originalTitle: "Hotel Portofino",
    author: "Dž. P. O'Konel",
    language: "SR",
    category: "Beletristika",
    description: "Istorijski roman smešten na italijansku rivijeru dvadesetih godina 20. veka, po kome je snimljena popularna TV serija.",
    image: "https://laguna.oozmi-cdn.com/images/206ecdf0-e9bb-4d2a-b639-ad421c096115/Hotel-Portofino-w1200.webp",
    sourceUrl: "https://laguna.rs/n5776_knjiga_hotel_portofino_laguna.html"
  },
  {
    id: "velika-knjiga-o-bojama",
    title: "Velika knjiga o bojama",
    originalTitle: "Das große Buch der Farben",
    author: "Klausbernd Folmar",
    language: "SR",
    category: "Umetnost i dizajn",
    description: "Sveobuhvatan vodič o psihologiji i simbolici boja, učenju o bojama od Njutna i Getea do moderne, sa savetima, meditacijama i vežbama opažanja.",
    image: "https://laguna.oozmi-cdn.com/images/2f2cbb1a-96dd-422e-8b7b-bb9d3a0a1a26/velika-knjiga-o-bojama-w1200.webp",
    sourceUrl: "https://laguna.rs/n1547_knjiga_velika_knjiga_o_bojama_laguna.html"
  },
  {
    id: "1984",
    title: "1984",
    originalTitle: "Nineteen Eighty-Four",
    author: "Džordž Orvel",
    language: "SR",
    category: "Beletristika",
    description: "Stavka „1987“ sa liste — najverovatnije Orvelov distopijski klasik „1984“ o totalitarnom nadzoru. Proveriti naslov na samom primerku.",
    image: "https://laguna.oozmi-cdn.com/images/8025c69b-7acd-48bc-871a-7485405ed929/1984-KORICE-w1200.webp",
    sourceUrl: "https://laguna.rs/n5578_knjiga_1984_laguna.html",
    needsCheck: true
  },
  {
    id: "umece-ratovanja",
    title: "Umeće ratovanja",
    originalTitle: "The Art of War",
    author: "Sun Cu",
    language: "SR",
    category: "Filozofija i stoicizam",
    description: "Jedan od najuticajnijih spisa o ratnoj strategiji u istoriji, čije se ideje danas primenjuju i u poslovanju, diplomatiji i svakodnevnom životu.",
    image: "https://media.alfaknjizara.rs/2017/03/umece-ratovanja-sun-tzu-web.jpg",
    sourceUrl: "https://alfaknjizara.rs/knjizara/psihologija/umece-ratovanja-sun-cu/"
  },
  {
    id: "blistanje",
    title: "Blistanje",
    originalTitle: "",
    author: "Vladimir Đukanović",
    language: "SR",
    category: "Beletristika",
    description: "Napeti naučnofantastični triler o sukobu tvorca i tvorevine i o razvoju veštačke inteligencije koja prevazilazi ljudsku kontrolu.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/374202_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/domaci-roman/150832-blistanje"
  },
  {
    id: "tajna-zacina",
    title: "Tajna začina",
    originalTitle: "A Sister's Promise",
    author: "Renita D'Silva",
    language: "SR",
    category: "Beletristika",
    description: "Dirljiva priča o ljubavi, izdaji i žrtvi, smeštena u Indiju 1939, gde junakinja utehu pronalazi u receptima i mirisnim začinima.",
    image: "https://laguna.oozmi-cdn.com/images/967ddc1f-679e-4bc5-8074-ccd75e1fb70b/Tajna-zacina-w1200.webp",
    sourceUrl: "https://laguna.rs/n6858_knjiga_tajna_zacina_laguna.html"
  },
  {
    id: "misli-i-obogati-se",
    title: "Misli i obogati se",
    originalTitle: "Think and Grow Rich",
    author: "Napoleon Hil",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Klasik motivacione literature iz 1937. u kome Hil iznosi filozofiju uspeha zasnovanu na proučavanju navika bogatih i uspešnih ljudi.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/219516_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/biznis/4640-misli-i-obogati-se"
  },
  {
    id: "kleopatra",
    title: "Kleopatra",
    originalTitle: "Cleopatra: A Life",
    author: "Stejsi Šif",
    language: "SR",
    category: "Biografija",
    description: "Biografija dobitnice Pulicerove nagrade koja se vraća antičkim izvorima i razdvaja činjenice od mitova o poslednjoj egipatskoj kraljici.",
    image: "https://laguna.oozmi-cdn.com/images/304d97a0-b177-4f2e-8747-ddd7b9fd95b1/kleopatra-stejsi-sif-m-h600.webp",
    sourceUrl: "https://laguna.rs/a857_autor_stejsi_sif_laguna.html"
  },
  {
    id: "nesavrseni-a-srecni",
    title: "Nesavršeni, a srećni",
    originalTitle: "Perfektionismus: Wenn das Soll zum Muss wird",
    author: "Rafael M. Boneli",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Bečki psihijatar objašnjava kako se pravilno nositi sa sopstvenom nesavršenošću i osloboditi tereta perfekcionizma.",
    image: "https://verbum.hr/media/catalog/product/cache/b3a8c5d72af5ccc43716fb3b4592e2ef/n/e/nesavrseni-a-sretni_korice.jpg",
    sourceUrl: "https://verbum.hr/nesavrseni-a-sretni"
  },
  {
    id: "otpetljavanje-emocionalno-nezreli",
    title: "Otpetljavanje od emocionalno nezrelih ljudi",
    originalTitle: "Disentangling from Emotionally Immature People",
    author: "Lindzi Gibson",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Praktičan vodič za prepoznavanje obrazaca u odnosima sa emocionalno nezrelim ljudima i postavljanje zdravih granica.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/412244_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/psihologija/299368-otpetljavanje-od-emocionalno-nezrelih-ljudi"
  },
  {
    id: "svako-je-sposoban-za-vezu",
    title: "Svako je sposoban za vezu",
    originalTitle: "Jeder ist beziehungsfähig",
    author: "Štefani Štal",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Nemačka stručnjakinja za strah od vezivanja pokazuje da je ispunjena ljubavna veza stvar lične odluke, uz praktične vežbe.",
    image: "https://www.makart.rs/__public/upload/2022/03/16/svako-je-sposoban-za-vezu-stefani-stal-makart--f2-45783.jpg",
    sourceUrl: "https://www.makart.rs/knjige/knjiga-svako-je-sposoban-za-vezu-stefani-stal-45783"
  },
  {
    id: "skolovanje-srca",
    title: "Školovanje srca",
    originalTitle: "Emotional Literacy: Intelligence with a Heart",
    author: "Klod Stajner",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Knjiga o emocionalnoj pismenosti koja uči kako da ujedinimo srce i razum, izbegnemo tipične emocionalne greške i unapredimo odnose.",
    image: "https://psihopolis.edu.rs/wp-content/uploads/2018/03/knjiga-skolovanje-srca-prednja-korica-600x871.jpg",
    sourceUrl: "https://psihopolis.edu.rs/knjiga/skolovanje-srca/"
  },
  {
    id: "odrasle-cerke-teskih-majki",
    title: "Odrasle ćerke teških majki",
    originalTitle: "Difficult Mothers, Adult Daughters",
    author: "Karen K. L. Anderson",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Vodič za isceljenje žena čiji su odnosi sa majkama bili komplikovani; pomaže u prepoznavanju toksičnih obrazaca i postavljanju granica.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/397847_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/asertivnost-motivacija-samopostovanje/259413-odrasle-cerke-teskih-majki"
  },
  {
    id: "toplina-gnezda",
    title: "Toplina gnezda koja daje krila",
    originalTitle: "Nestwärme, die Flügel verleiht",
    author: "Štefani Štal i Julija Tomušat",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Priručnik za roditelje o tome kako da deci pruže sigurnost i istovremeno slobodu da odrastu u snažne i srećne ljude.",
    image: "https://laguna.oozmi-cdn.com/images/a110f688-bd66-43c3-b9a8-581f3ac6c05b/Toplina-gnezda-koja-daje-krila-h600.webp",
    sourceUrl: "https://www.laguna.rs/n6732_knjiga_toplina_gnezda_koja_daje_krila_laguna.html"
  },
  {
    id: "emocije-koje-lece",
    title: "Emocije koje leče",
    originalTitle: "Ces émotions qui guérissent",
    author: "Rika Zarai",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Knjiga o isceljujućoj moći emocija i prirodnoj medicini, koja naglašava značaj izražavanja osećanja umesto njihovog potiskivanja.",
    image: "https://demago.rs/wp-content/uploads/2021/11/Emocije-koje-lece-Rika-Zarai-1-1-300x386.jpg",
    sourceUrl: "https://demago.rs/product/emocije-koje-lece-rika-zarai/"
  },
  {
    id: "dilema-inovatora",
    title: "Dilema inovatora",
    originalTitle: "The Innovator's Dilemma",
    author: "Klejton M. Kristensen",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Svetski klasik o disruptivnoj inovaciji koji objašnjava zašto uspešne kompanije propadaju kada nove tehnologije promene tržište. (Pokriva i stavku „dilema investitora“ sa liste.)",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/353879_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/biznis/84116-dilema-inovatora",
    needsCheck: true
  },
  {
    id: "ted-govori",
    title: "TED govori",
    originalTitle: "TED Talks: The Official TED Guide to Public Speaking",
    author: "Kris Anderson",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Zvanični TED priručnik koji otkriva šta stoji iza najmoćnijih govora i daje konkretne smernice za jasno i ubedljivo prenošenje ideja.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1534499724i/41196863.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/41196863-ted-govori"
  },
  {
    id: "psihologija-novca",
    title: "Psihologija novca",
    originalTitle: "The Psychology of Money",
    author: "Morgan Hausel",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Kroz 19 kratkih priča autor istražuje kako naše ponašanje, a ne samo znanje, oblikuje finansijske odluke.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/351848_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/ekonomija/76596-psihologija-novca"
  },
  {
    id: "surove-istine-o-teskocama",
    title: "Surove istine o teškoćama",
    originalTitle: "The Hard Thing About Hard Things",
    author: "Ben Horovic",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Suosnivač fonda Andreessen Horowitz deli praktične savete o vođenju kompanije u najtežim situacijama o kojima se ne uči u školama.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/367172_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/biznis/122514-surove-istine-o-teskocama-kako-da-izgradite-biznis-kada-nema-lakih-resenja"
  },
  {
    id: "napoleon-hil-moj-mentor",
    title: "Napoleon Hil: Moj mentor",
    originalTitle: "Napoleon Hill: My Mentor",
    author: "Don Grin",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Direktor Fondacije Napoleona Hila deli lične uspomene o svom mentoru i ključne principe uspeha iz dela „Misli i obogati se“.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/358751_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/saveti-za-karijeru-postizanje-uspeha/98379-napoleon-hil-moj-mentor"
  },
  {
    id: "tajne-zanata",
    title: "Tajne zanata",
    originalTitle: "",
    author: "Miroslav Mišković",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Nakon bestselera „Ja, tajkun“, Mišković u kratkim pričama prenosi suštinu poslovnog znanja stečenog tokom više od pola veka.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/395183_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/biznis/245974-tajne-zanata"
  },
  {
    id: "ilon-mask",
    title: "Ilon Mask: Tesla, SpaceX i potraga za fantastičnom budućnošću",
    originalTitle: "Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future",
    author: "Ešli Vens",
    language: "SR",
    category: "Biografija",
    description: "Biografija zasnovana na desetinama sati razgovora; prati Maskov put od detinjstva u Južnoj Africi do osnivanja Tesle i SpaceX-a.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/317369_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/biografije-memoari-dnevnici-pisma/40489-ilon-mask-tesla-spacex-i-potraga-za-fantasticnom-buducnoscu"
  },
  {
    id: "mamin-test",
    title: "Mamin test",
    originalTitle: "The Mom Test",
    author: "Rob Ficpatrik",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Praktičan vodič koji uči kako da razgovarate sa kupcima i otkrijete da li je vaša poslovna ideja zaista dobra — bez beskorisnih pohvala.",
    image: "https://www.makart.rs/__public/upload/2019/05/02/mamin-test-rob-ficpatrik-makart--f1-23795.jpg",
    sourceUrl: "https://www.makart.rs/knjige/knjiga-mamin-test-rob-ficpatrik-23795"
  },
  {
    id: "od-nule-do-jedan",
    title: "Od nule do jedan",
    originalTitle: "Zero to One",
    author: "Piter Til i Blejk Masters",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Beleške o startapima i izgradnji budućnosti; suosnivač PayPala iznosi originalne ideje o inovaciji i pravom napretku — skoku od nule do jedan.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/315766_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/esejistika-i-publicistika/40330-od-nule-do-jedan"
  },
  {
    id: "48-zakona-moci",
    title: "48 zakona moći",
    originalTitle: "The 48 Laws of Power",
    author: "Robert Grin",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Kroz 48 zakona prikazuje tri hiljade godina istorije moći, oslanjajući se na Makijavelija, Sun Cua i istorijske primere uspona i padova.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/296713_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/saveti-za-karijeru-postizanje-uspeha/33913-p48-zakona-moci"
  },
  {
    id: "the-obstacle-is-the-way",
    title: "The Obstacle Is the Way",
    originalTitle: "The Obstacle Is the Way",
    author: "Ryan Holiday",
    language: "EN",
    category: "Filozofija i stoicizam",
    description: "Vodič zasnovan na stoičkoj filozofiji koji pokazuje kako prepreke pretvoriti u prilike, uz mudrost Marka Aurelija, Seneke i Epikteta.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1391440316i/18668059.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/18668059-the-obstacle-is-the-way"
  },
  {
    id: "meditations-marcus-aurelius",
    title: "Meditations",
    originalTitle: "Τὰ εἰς ἑαυτόν (Samom sebi)",
    author: "Marcus Aurelius",
    language: "EN",
    category: "Filozofija i stoicizam",
    description: "Lični dnevnik i filozofska razmišljanja rimskog cara, jedno od ključnih dela stoičke filozofije (na srpskom poznato kao „Samom sebi“).",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1421618636i/30659.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/30659.Meditations"
  },
  {
    id: "od-dobrog-do-sjajnog",
    title: "Kako stići od dobrog do sjajnog",
    originalTitle: "Good to Great",
    author: "Džim Kolins",
    language: "SR",
    category: "Biznis i preduzetništvo",
    description: "Rezultat petogodišnjeg istraživanja koje otkriva zašto neke kompanije uspevaju da pređu put od dobrih do izuzetnih, dok druge ostaju prosečne.",
    image: "https://www.knjizare-vulkan.rs/files/images/slike_proizvoda/224538.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/menadzment/6265-kako-stici-od-dobrog-do-sjajnog"
  },
  {
    id: "dk-how-to-start-your-own-business",
    title: "How to Start Your Own Business",
    originalTitle: "How to Start Your Own Business: The Facts Visually Explained",
    author: "DK",
    language: "EN",
    category: "DK ilustrovane knjige",
    description: "Vizuelni vodič kroz osnivanje i vođenje sopstvenog biznisa, od finansija do izgradnje brenda, sa preglednim grafikama i jasnim objašnjenjima.",
    image: "https://dk.com/cdn/shop/files/getfile_6bd9e548-1616-44cf-a8bb-e73c628e1dab.jpg?v=1759853361&width=3840",
    sourceUrl: "https://dk.com/en-us/products/9780744027341-how-to-start-your-own-business"
  },
  {
    id: "dk-coffee-obsession",
    title: "Coffee Obsession",
    originalTitle: "",
    author: "DK",
    language: "EN",
    category: "DK ilustrovane knjige",
    description: "Ilustrovani vodič za ljubitelje kafe, sa tehnikama prženja, mlevenja i pripreme, kao i preko 100 recepata za razne napitke.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1535273822i/41461799.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/41461799-coffee-obsession"
  },
  {
    id: "dk-whiskey",
    title: "Whiskey: The Definitive World Guide",
    originalTitle: "",
    author: "Michael Jackson (DK)",
    language: "EN",
    category: "DK ilustrovane knjige",
    description: "Sveobuhvatni ilustrovani vodič kroz svet viskija, sa pregledom destilerija i stilova širom sveta.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677846070i/50394156.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/50394156"
  },
  {
    id: "dk-the-business-book",
    title: "The Business Book",
    originalTitle: "The Business Book: Big Ideas Simply Explained",
    author: "DK",
    language: "EN",
    category: "DK ilustrovane knjige",
    description: "Pregled preko 90 najvažnijih ideja i koncepata iz sveta biznisa i menadžmenta, objašnjenih jednostavnim tekstom i upečatljivim grafikama.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1387728067i/19736170.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/19736170-the-business-book"
  },
  {
    id: "dk-the-economics-book",
    title: "The Economics Book",
    originalTitle: "The Economics Book: Big Ideas Simply Explained",
    author: "DK",
    language: "EN",
    category: "DK ilustrovane knjige",
    description: "Više od 100 najvažnijih ideja iz ekonomije, od najranije trgovine do globalnih kriza, predstavljenih kroz jasan tekst i grafike.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1579231038i/16093522.jpg",
    sourceUrl: "https://www.goodreads.com/en/book/show/16093522-the-economics-book"
  },
  {
    id: "dk-how-management-works",
    title: "How Management Works",
    originalTitle: "How Management Works: The Concepts Visually Explained",
    author: "DK",
    language: "EN",
    category: "DK ilustrovane knjige",
    description: "Pregledan vodič kroz aspekte organizacionog menadžmenta, sa grafikama koje demistifikuju koncepte poput kaizena i lean proizvodnje.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1634036894i/58284523.jpg",
    sourceUrl: "https://www.goodreads.com/book/isbn/9780744048421"
  },
  {
    id: "the-4-hour-chef",
    title: "The 4-Hour Chef",
    originalTitle: "The 4-Hour Chef",
    author: "Timothy Ferriss",
    language: "EN",
    category: "Kuvar i hrana",
    description: "Kuvar i vodič kroz brzo učenje koji kroz kuvanje uči meta-tehnikama za savladavanje bilo koje veštine, spajajući recepte i principe učenja.",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1349156708i/13129810.jpg",
    sourceUrl: "https://www.goodreads.com/book/show/13129810-the-4-hour-chef"
  },
  {
    id: "dete-u-tebi-mora-da-pronadje-zavicaj",
    title: "Dete u tebi mora da pronađe svoj zavičaj",
    originalTitle: "Das Kind in dir muss Heimat finden",
    author: "Štefani Štal",
    language: "SR",
    category: "Psihologija i samopomoć",
    description: "Svetski bestseler o radu sa „unutrašnjim detetom“: kako traume iz detinjstva oblikuju odraslog čoveka i kako pronaći ključ za njihovo rešavanje.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/335450_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/asertivnost-motivacija-samopostovanje/47582-dete-u-tebi-mora-da-pronade-svoj-zavicaj"
  },
  {
    id: "kad-je-nice-plakao",
    title: "Kad je Niče plakao",
    originalTitle: "When Nietzsche Wept",
    author: "Irvin D. Jalom",
    language: "SR",
    category: "Beletristika",
    description: "Roman o depresiji i lečenju razgovorom u Beču 19. veka, kroz izmišljen terapijski susret lekara Jozefa Brojera i filozofa Fridriha Ničea.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/287608_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/roman/30675-kad-je-nice-plakao"
  },
  {
    id: "brza-hrono-kuhinja",
    title: "Brza hrono kuhinja",
    originalTitle: "",
    author: "Ana Ćubela",
    language: "SR",
    category: "Kuvar i hrana",
    description: "Zbirka recepata za hrono jela koja se pripremaju za najviše dvadesetak minuta, sa dodatkom posnih hrono recepata.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/304210_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/kulinarstvo/36612-brza-hrono-kuhinja"
  },
  {
    id: "antoni-gaudi",
    title: "Antoni Gaudi",
    originalTitle: "Antoni Gaudí",
    author: "Edicija „Arhitektura — Protagonisti“",
    language: "SR",
    category: "Umetnost i dizajn",
    description: "Monografija posvećena katalonskom arhitekti Antoniju Gaudiju, sa fotografijama i analizom njegovih dela uključujući Sagrada Familiju.",
    image: "https://www.knjizare-vulkan.rs/files/thumbs/files/images/slike_proizvoda/thumbs_1200/272802_1200_1200px.jpg.webp",
    sourceUrl: "https://www.knjizare-vulkan.rs/enterijer-i-unutrasnji-dekor-326/24788-arhitektura-protagonisti-3-antoni-gaudi"
  },
  {
    id: "sveto-pismo",
    title: "Sveto pismo Starog i Novog zaveta",
    originalTitle: "",
    author: "Đ. Daničić i Sveti arhijerejski sinod SPC",
    language: "SR",
    category: "Religija",
    description: "Biblija Starog i Novog zaveta u pravoslavnom izdanju Srpske pravoslavne crkve na srpskom jeziku.",
    image: "https://spcprodavnica.rs/wp-content/uploads/2026/02/%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D1%98%D0%B0-%D0%BA%D0%BE%D0%B6%D0%B0-Custom-400x400.jpg",
    sourceUrl: "https://spcprodavnica.rs/eprodavnica/knjige/sveto-pismo/"
  },
  {
    id: "m-management",
    title: "M: Management",
    originalTitle: "",
    author: "Bateman, Snell, Konopaske",
    language: "EN",
    category: "Udžbenik i referentna",
    description: "Univerzitetski udžbenik iz osnova menadžmenta (McGraw-Hill) koji sažeto obrađuje ključne teme savremenog menadžmenta.",
    image: "https://pictures.abebooks.com/isbn/9781259732805-us.jpg",
    sourceUrl: "https://www.abebooks.com/9781259732805/M-Management-Bateman-Thomas-Snell-1259732800/plp"
  },
  {
    id: "zelim-da-znam-zasto",
    title: "Želim da znam zašto",
    originalTitle: "I Want to Know Why",
    author: "Brigid Avison i dr.",
    language: "SR",
    category: "Udžbenik i referentna",
    description: "Ilustrovana dečja enciklopedija koja odgovara na pitanja dece o svetu oko njih („zašto“ i „kako“), velikog formata i u tvrdom povezu.",
    image: "https://knjiganadlanu.com/wp-content/uploads/2019/07/DSCF9893.jpg",
    sourceUrl: "http://knjiganadlanu.com/enciklopedija-zelim-da-znam-zasto/",
    needsCheck: true
  },
  {
    id: "cardon-business-communication",
    title: "Business Communication",
    originalTitle: "Business Communication: Developing Leaders for a Networked World",
    author: "Peter W. Cardon",
    language: "EN",
    category: "Udžbenik i referentna",
    description: "Univerzitetski udžbenik poslovne komunikacije koji kroz studije slučaja razvija liderske veštine i naglašava značaj kredibiliteta.",
    image: "https://m.media-amazon.com/images/I/51A8wIxGBjL.jpg",
    sourceUrl: "https://www.amazon.com/Business-Communication-Developing-Leaders-Networked/dp/1259694518"
  },
  {
    id: "petojezicni-vizuelni-recnik",
    title: "Petojezični vizuelni rečnik za početnike",
    originalTitle: "",
    author: "Jovana Ninković",
    language: "SR",
    category: "DK ilustrovane knjige",
    description: "Ilustrovani vizuelni rečnik koji predstavlja pojmove na pet jezika (srpski, engleski, francuski, nemački, italijanski), organizovan po temama.",
    image: "https://www.knjizara.com/slika/Petojezicni-vizuelni-recnik-42554.jpg",
    sourceUrl: "https://www.knjizara.com/Petojezicni-vizuelni-recnik-Jovana-Ninkovic-104151"
  },
  {
    id: "microbiology-an-introduction",
    title: "Microbiology: An Introduction",
    originalTitle: "",
    author: "Tortora, Funke, Case",
    language: "EN",
    category: "Udžbenik i referentna",
    description: "Sveobuhvatan univerzitetski udžbenik mikrobiologije koji jasnim jezikom i bogatim ilustracijama uvodi studente u svet mikroorganizama.",
    image: "https://m.media-amazon.com/images/I/51aUuugYnkL.jpg",
    sourceUrl: "https://www.amazon.com/Microbiology-Introduction-Gerard-J-Tortora/dp/0134605187"
  }
];

const ratingKey = "book-library-ratings-v1";
const state = {
  search: "",
  group: "category",
  sort: "title",
  ratings: loadRatings()
};

const library = document.querySelector("#library");
const searchInput = document.querySelector("#searchInput");
const groupSelect = document.querySelector("#groupSelect");
const sortSelect = document.querySelector("#sortSelect");
const resultCount = document.querySelector("#resultCount");
const totalBooks = document.querySelector("#totalBooks");
const totalCategories = document.querySelector("#totalCategories");
const totalAuthors = document.querySelector("#totalAuthors");
const ratedBooks = document.querySelector("#ratedBooks");
const resetRatings = document.querySelector("#resetRatings");
const exportButton = document.querySelector("#exportLibrary");

function loadRatings() {
  try {
    return JSON.parse(localStorage.getItem(ratingKey)) || {};
  } catch {
    return {};
  }
}

function saveRatings() {
  localStorage.setItem(ratingKey, JSON.stringify(state.ratings));
}

function collator() {
  return new Intl.Collator("sr", { sensitivity: "base" });
}

function getFilteredBooks() {
  const query = state.search.trim().toLowerCase();
  const cmp = collator();
  return books
    .filter((book) => {
      const haystack = [
        book.title,
        book.originalTitle,
        book.author,
        book.category
      ]
        .join(" ")
        .toLowerCase();
      return !query || haystack.includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "author") {
        return cmp.compare(a.author, b.author) || cmp.compare(a.title, b.title);
      }
      if (state.sort === "ratingDesc") {
        return (state.ratings[b.id] || 0) - (state.ratings[a.id] || 0) || cmp.compare(a.title, b.title);
      }
      return cmp.compare(a.title, b.title);
    });
}

function groupKeyFor(book) {
  if (state.group === "category") return book.category;
  if (state.group === "author") return book.author;
  if (state.group === "language") return book.language === "SR" ? "Na srpskom" : "Na engleskom";
  if (state.group === "rating") {
    const r = state.ratings[book.id] || 0;
    return r ? `${r} ★` : "Neocenjeno";
  }
  return "";
}

function renderStats() {
  const rated = books.filter((book) => state.ratings[book.id]).length;
  totalBooks.textContent = books.length;
  totalCategories.textContent = new Set(books.map((book) => book.category)).size;
  totalAuthors.textContent = new Set(books.map((book) => book.author)).size;
  ratedBooks.textContent = rated;
}

function renderLibrary() {
  const visible = getFilteredBooks();
  resultCount.textContent = `${visible.length} ${pluralBooks(visible.length)}`;

  if (!visible.length) {
    library.innerHTML = `<div class="empty-state">Nema rezultata za ovu pretragu.</div>`;
    return;
  }

  if (state.group === "none") {
    library.innerHTML = `<div class="book-grid">${visible.map(renderBookCard).join("")}</div>`;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const groups = new Map();
  visible.forEach((book) => {
    const key = groupKeyFor(book);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(book);
  });

  const cmp = collator();
  const sortedKeys = [...groups.keys()].sort((a, b) => {
    if (state.group === "rating") {
      const rank = (k) => (k === "Neocenjeno" ? -1 : parseInt(k, 10));
      return rank(b) - rank(a);
    }
    return cmp.compare(a, b);
  });

  library.innerHTML = sortedKeys
    .map((key) => {
      const items = groups.get(key);
      return `
        <section class="group">
          <div class="group-head">
            <h3>${key}</h3>
            <span class="group-count">${items.length} ${pluralBooks(items.length)}</span>
          </div>
          <div class="book-grid">${items.map(renderBookCard).join("")}</div>
        </section>
      `;
    })
    .join("");

  if (window.lucide) window.lucide.createIcons();
}

function pluralBooks(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "knjiga";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "knjige";
  return "knjiga";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderBookCard(book) {
  const rating = state.ratings[book.id] || 0;
  const languageClass = book.language === "SR" ? "" : " en";
  const languageLabel = book.language === "SR" ? "SR" : "EN";
  const originalLine = book.originalTitle
    ? `<p class="original-title">${escapeHtml(book.originalTitle)}</p>`
    : "";
  const checkBadge = book.needsCheck
    ? `<span class="check-badge" title="Proveriti identifikaciju">proveriti</span>`
    : "";

  return `
    <article class="book-card" data-id="${book.id}">
      <div class="book-image-wrap">
        <span class="category-badge">${escapeHtml(book.category)}</span>
        ${checkBadge}
        <img src="${book.image}" alt="${escapeHtml(book.title)}" loading="lazy" onerror="this.closest('.book-image-wrap').classList.add('image-error'); this.remove();">
      </div>
      <div class="book-body">
        <div class="book-title-row">
          <h4>${escapeHtml(book.title)}</h4>
          <span class="language-pill${languageClass}">${languageLabel}</span>
        </div>
        <p class="book-author">${escapeHtml(book.author)}</p>
        ${originalLine}
        <p class="book-description">${escapeHtml(book.description)}</p>
        <div class="book-footer">
          <div class="rating-row">
            <span class="rating-label">Moja ocena</span>
            <div class="stars" role="group" aria-label="Oceni ${escapeHtml(book.title)}">
              ${[1, 2, 3, 4, 5].map((value) => `
                <button
                  class="star-button${value <= rating ? " active" : ""}"
                  type="button"
                  aria-label="${value} od 5"
                  data-rate="${value}"
                  data-book="${book.id}"
                >★</button>
              `).join("")}
            </div>
          </div>
          <a class="source-link" href="${book.sourceUrl}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="external-link"></i>
            Pogledaj izvor
          </a>
        </div>
      </div>
    </article>
  `;
}

function buildExportText() {
  const cmp = collator();
  const date = new Date().toLocaleDateString("sr-RS");
  const lines = [];
  lines.push("MOJA BIBLIOTEKA");
  lines.push(`Izvezeno: ${date}`);
  lines.push(`Ukupno knjiga: ${books.length}`);
  lines.push("=".repeat(48));
  lines.push("");

  const categories = [...new Set(books.map((book) => book.category))].sort((a, b) =>
    cmp.compare(a, b)
  );

  categories.forEach((category) => {
    const items = books
      .filter((book) => book.category === category)
      .sort((a, b) => cmp.compare(a.title, b.title));
    lines.push(`## ${category} (${items.length})`);
    lines.push("");
    items.forEach((book, index) => {
      const rating = state.ratings[book.id];
      const stars = rating ? ` — ocena: ${"★".repeat(rating)}` : "";
      lines.push(`${index + 1}. ${book.title} — ${book.author} [${book.language}]${stars}`);
      if (book.originalTitle) lines.push(`   Originalni naslov: ${book.originalTitle}`);
      lines.push(`   ${book.description}`);
      lines.push(`   Izvor: ${book.sourceUrl}`);
      lines.push("");
    });
  });

  return lines.join("\n");
}

function exportLibrary() {
  const text = buildExportText();
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "moja-biblioteka.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderLibrary();
});

groupSelect.addEventListener("change", (event) => {
  state.group = event.target.value;
  renderLibrary();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderLibrary();
});

library.addEventListener("click", (event) => {
  const star = event.target.closest("[data-rate]");
  if (!star) return;
  const bookId = star.dataset.book;
  const value = Number(star.dataset.rate);
  state.ratings[bookId] = state.ratings[bookId] === value ? 0 : value;
  saveRatings();
  renderStats();
  renderLibrary();
});

resetRatings.addEventListener("click", () => {
  state.ratings = {};
  saveRatings();
  renderStats();
  renderLibrary();
});

exportButton.addEventListener("click", exportLibrary);

renderStats();
renderLibrary();

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});
