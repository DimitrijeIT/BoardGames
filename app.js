const games = [
  {
    id: "cards-against-humanity",
    title: "Cards Against Humanity",
    originalTitle: "U listi: Cards against humans",
    language: "EN",
    status: "Na stanju",
    price: 6990,
    priceLabel: "6.990 RSD",
    sourceName: "Bottle Gnome",
    sourceUrl: "https://gnom.rs/cards-against-humanity-international-edition-sr",
    image: "https://gnom.rs/image/cache/catalog/drustvene%20igre/CCC/Cards%20Against%20Humanity%20-%20International%20Editionnn-550x550w.jpg",
    description: "Party igra za odrasle sa crnim humorom i odgovorima koji namerno prelaze granice pristojnosti.",
    tags: ["party", "karte", "18+"],
    sourceLocale: "regional"
  },
  {
    id: "zemlja",
    title: "Zemlja",
    originalTitle: "Earth",
    language: "SR",
    status: "Na stanju",
    price: 5400,
    priceLabel: "5.400 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Zemlja-Drustvena-Igra",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/zemlja%20kutija-500x500.jpg",
    description: "Strateška igra u kojoj gradite ostrvo, ekosistem i motor poena kroz pametno biranje akcija.",
    tags: ["strategija", "engine", "priroda"],
    sourceLocale: "serbian"
  },
  {
    id: "pandemic",
    title: "Pandemic",
    originalTitle: "Pandemic",
    language: "SR/EN",
    status: "Na stanju",
    price: 6000,
    priceLabel: "6.000 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Pandemic",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/pandemic%20kutija-500x500.jpg",
    description: "Kooperativni klasik: tim stručnjaka pokušava da zaustavi epidemije pre nego što svet izmakne kontroli.",
    tags: ["kooperativno", "klasik", "porodično"],
    sourceLocale: "serbian"
  },
  {
    id: "7-wonders-duel",
    title: "7 Wonders Duel na srpskom",
    originalTitle: "7 Wonders Duel",
    language: "SR",
    status: "Na stanju",
    price: 3600,
    priceLabel: "3.600 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/7-Wonders-Duel-na-srpskom",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/7%20wonders%20duel%20kutija%202-500x500.jpg",
    description: "Napet duel civilizacija za dva igrača, sa vojnim, naučnim i poenterskim putevima do pobede.",
    tags: ["2 igrača", "draft", "strategija"],
    sourceLocale: "serbian"
  },
  {
    id: "codenames",
    title: "Codenames na srpskom",
    originalTitle: "Codenames",
    language: "SR",
    status: "Na stanju",
    price: 2600,
    priceLabel: "2.600 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Codenames-na-srpskom",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/codenames%20sr%20novo%20kutija%202-500x500.jpg",
    description: "Asocijacije, timovi i jedan pogrešan trag koji može sve da preokrene.",
    tags: ["party", "asocijacije", "timovi"],
    sourceLocale: "serbian"
  },
  {
    id: "jenga",
    title: "Jenga",
    originalTitle: "Jenga",
    language: "EN/SR",
    status: "Nema na stanju",
    price: 3300,
    priceLabel: "3.300 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Jenga",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/jenga-500x500.jpg",
    description: "Drvena kula, mirna ruka i univerzalna panika čim se sto malo zaljulja.",
    tags: ["spretnost", "porodično", "klasik"],
    sourceLocale: "serbian"
  },
  {
    id: "srpsko-carstvo",
    title: "Srpsko carstvo",
    originalTitle: "Srpsko carstvo",
    language: "SR",
    status: "Na stanju",
    price: 2319,
    priceLabel: "2.319 RSD",
    sourceName: "Dice Arena",
    sourceUrl: "https://dicearena.rs/product/srpsko-carstvo/",
    image: "https://dicearena.rs/wp-content/uploads/2024/04/Srpsko1.jpg",
    description: "Domaća igra sa posedima srpskih velikaških porodica, kockicama i osvajanjem utvrđenja.",
    tags: ["srpsko", "kockice", "porodično"],
    sourceLocale: "serbian"
  },
  {
    id: "morska-so-i-papir",
    title: "Morska so i papir",
    originalTitle: "Sea Salt & Paper",
    language: "SR",
    status: "Na stanju",
    price: 1500,
    priceLabel: "1.500 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Morska-so-i-papir-Drustvena-Igra",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/morska%20so%20i%20papir%20kutija-500x500.jpg",
    description: "Džepna kartična igra sa origami ilustracijama, setovima, rizikom i savršenim tempom.",
    tags: ["karte", "push your luck", "prelepo"],
    sourceLocale: "serbian"
  },
  {
    id: "port-royal",
    title: "Port Rojal",
    originalTitle: "Port Royal",
    language: "SR",
    status: "Nema na stanju",
    price: 1500,
    priceLabel: "1.500 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Port-Rojal-na-srpskom-jeziku",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/port%20rojal%20box-500x500h.jpg",
    description: "Kartični piratski push-your-luck: povuci još jednu kartu ili stani dok je luka još pod kontrolom.",
    tags: ["karte", "rizik", "pirati"],
    sourceLocale: "serbian"
  },
  {
    id: "mikado",
    title: "Mikado",
    originalTitle: "Mikado",
    language: "SR",
    status: "Na stanju",
    price: 172,
    priceLabel: "171,70 RSD",
    sourceName: "Knjižare Vulkan",
    sourceUrl: "https://www.knjizare-vulkan.rs/tradicionalne-igre/115119-drustvena-igra-mikado",
    image: "https://www.knjizare-vulkan.rs/files/images/slike_proizvoda/364444.jpg.webp",
    description: "Tradicionalna igra pažnje i mirne ruke: izvuci štapić bez pomeranja ostalih.",
    tags: ["spretnost", "klasik", "putno"],
    sourceLocale: "serbian"
  },
  {
    id: "tako-cica",
    title: "Tako Cica Koza Sir Pica",
    originalTitle: "Taco Cat Goat Cheese Pizza",
    language: "SR",
    status: "Na stanju",
    price: 1500,
    priceLabel: "1.500 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Tako-Cica-Koza-Sir-Pica",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/tako%20cica%20koza%20sir%20pica%20kutija-500x500.jpg",
    description: "Brza refleksna igra za sto, glas i dlanove. Kažeš redom, udaraš kad se poklopi.",
    tags: ["party", "refleksi", "brzo"],
    sourceLocale: "serbian"
  },
  {
    id: "monopoly-go",
    title: "Monopoly GO!",
    originalTitle: "Monopoly GO! Board Game",
    language: "EN",
    status: "U prodaji van Srbije",
    price: 1600,
    priceLabel: "$14.97 (oko 1.600 RSD)",
    sourceName: "GameStop",
    sourceUrl: "https://www.gamestop.com/toys-games/board-games/products/monopoly-go-board-game/20012679.html",
    image: "https://m.media-amazon.com/images/I/51fjGoVSkVL._SS400_.jpg",
    description: "Stona verzija mobilnog Monopoly GO! iskustva, sa brzim rundama, mini tablama i gradnjom landmarka.",
    tags: ["porodično", "brzo", "Hasbro"],
    sourceLocale: "english"
  },
  {
    id: "grimm-masquerade",
    title: "The Grimm Masquerade",
    originalTitle: "The Grimm Masquerade",
    language: "EN",
    status: "Nema na stanju",
    price: 3000,
    priceLabel: "3.000 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/The-Grimm-Masquerade",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/the%20grim%20masquerade%20box-500x500h.jpg",
    description: "Blef i dedukcija u bajkovitom maskenbalu: sakupi artefakte i sakrij svoj identitet.",
    tags: ["dedukcija", "blef", "bajke"],
    sourceLocale: "serbian"
  },
  {
    id: "mysterium-park",
    title: "Mysterium Park na srpskom",
    originalTitle: "Mysterium Park",
    language: "SR",
    status: "Nema na stanju",
    price: 3800,
    priceLabel: "3.800 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Mysterium-Park",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/mysterium%20park-500x500h.jpg",
    description: "Kooperativna dedukcija kroz vizije duha u čudnom zabavnom parku.",
    tags: ["dedukcija", "kooperativno", "vizije"],
    sourceLocale: "serbian"
  },
  {
    id: "carcassonne",
    title: "Carcassonne na srpskom",
    originalTitle: "Carcassonne",
    language: "SR",
    status: "Na stanju",
    price: 3200,
    priceLabel: "3.200 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Carcassonne-SR",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/carcassonne%20sr%20new%20box-500x500.jpg",
    description: "Postavljanje pločica, meeplovi i srednjovekovni pejzaž koji svaka partija izgradi drugačije.",
    tags: ["tile placement", "klasik", "porodično"],
    sourceLocale: "serbian"
  },
  {
    id: "takenoko",
    title: "Takenoko",
    originalTitle: "Takenoko",
    language: "EN",
    status: "Nema na stanju",
    price: 5300,
    priceLabel: "5.300 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Takenoko",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/takenoko-500x500.jpg",
    description: "Baštovan, panda, bambus i prelepa taktička porodična igra sa mnogo šarma.",
    tags: ["porodično", "taktički", "bambus"],
    sourceLocale: "serbian"
  },
  {
    id: "heraldica",
    title: "Heraldica",
    originalTitle: "Heraldica",
    language: "EN",
    status: "Cena pronađena",
    price: 2975,
    priceLabel: "2.975 RSD",
    sourceName: "Najbolja Cena",
    sourceUrl: "https://najboljacena.rs/p/697774/drustvena-igra---heraldica.html",
    image: "https://www.uplay.it/storage/379401/conversions/heraldica-foto.webp",
    description: "Apstraktna igra grbova i pločica u kojoj plemićke kuće pokušavaju da nametnu svoj simbol.",
    tags: ["apstraktno", "pločice", "heraldika"],
    sourceLocale: "serbian"
  },
  {
    id: "codenames-duet",
    title: "Codenames Duet na srpskom",
    originalTitle: "Codenames Duet",
    language: "SR",
    status: "Na stanju",
    price: 2600,
    priceLabel: "2.600 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Codenames-Duet-na-srpskom",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/codenames%20duet%20sr%20novo%20kutija-500x500.jpg",
    description: "Kooperativni Codenames za dvoje, sa ograničenom komunikacijom i zajedničkim misijama.",
    tags: ["2 igrača", "kooperativno", "asocijacije"],
    sourceLocale: "serbian"
  },
  {
    id: "posada-duboko-more",
    title: "Posada: Misija Duboko more",
    originalTitle: "The Crew: Mission Deep Sea",
    language: "SR",
    status: "Na stanju kod drugog izvora",
    price: 1990,
    priceLabel: "1.990 RSD",
    sourceName: "Bottle Gnome",
    sourceUrl: "https://gnom.rs/posada-misija-duboko-more-srpski-rs",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/posada%20misija%20duboko%20more%20kutija-500x500.jpg",
    description: "Kooperativna igra uzimanja štihova kroz misije u potrazi za izgubljenim kontinentom Mu.",
    tags: ["kooperativno", "karte", "misije"],
    sourceLocale: "serbian"
  },
  {
    id: "hot-zone-north-america",
    title: "Pandemic: Hot Zone - North America",
    originalTitle: "Pandemic: Hot Zone - North America",
    language: "EN",
    status: "Nema na stanju",
    price: 3000,
    priceLabel: "3.000 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Pandemic-Hot-Zone-North-America",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/pandemic%20hot%20zone%20box-500x500h.jpg",
    description: "Kompaktna, brža verzija Pandemic sistema, fokusirana na Severnu Ameriku.",
    tags: ["kooperativno", "kompaktno", "Pandemic"],
    sourceLocale: "serbian"
  },
  {
    id: "citadele",
    title: "Citadele",
    originalTitle: "Citadels",
    language: "SR",
    status: "Na stanju",
    price: 4000,
    priceLabel: "4.000 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Citadels-Drustvena-Igra",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/citadele%20kutija-500x500.jpg",
    description: "Izgradnja grada i izbor likova, sa blefom i malim ratom oko toga ko će kome pokvariti plan.",
    tags: ["karte", "blef", "gradnja"],
    sourceLocale: "serbian"
  },
  {
    id: "uno",
    title: "UNO karte",
    originalTitle: "UNO",
    language: "SR",
    status: "Na stanju",
    price: 999,
    priceLabel: "999 RSD",
    sourceName: "Dice Arena",
    sourceUrl: "https://dicearena.rs/product/uno-karte-standard/",
    image: "https://dicearena.rs/wp-content/uploads/2024/07/image-500x500.png",
    description: "Brza kartaška klasika: uklopi boju ili broj i ne zaboravi da kažeš UNO.",
    tags: ["karte", "porodično", "klasik"],
    sourceLocale: "serbian"
  },
  {
    id: "illusion",
    title: "Illusion",
    originalTitle: "U listi: Ilusion",
    language: "SR",
    status: "Nema na stanju",
    price: 1500,
    priceLabel: "1.500 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Illusion",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/illusion%20srb%20box-500x500.jpg",
    description: "Vizuelna procena procenata boje. Jednostavno pravilo, ali oči stalno prave problem.",
    tags: ["brzo", "vizuelno", "karte"],
    sourceLocale: "serbian"
  },
  {
    id: "the-mind",
    title: "The Mind",
    originalTitle: "The Mind",
    language: "SR",
    status: "Nema na stanju",
    price: 1500,
    priceLabel: "1.500 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/The-Mind",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/the%20mind%20srb%20box-500x500.jpg",
    description: "Kooperativni eksperiment tišine: odigrajte karte u rastućem redosledu bez dogovaranja.",
    tags: ["kooperativno", "tišina", "karte"],
    sourceLocale: "serbian"
  },
  {
    id: "the-game",
    title: "The Game",
    originalTitle: "The Game",
    language: "SR",
    status: "Nema na stanju",
    price: 1500,
    priceLabel: "1.500 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/The-Game",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/the%20game%20srb%20box-500x500.jpg",
    description: "Tim pokušava da spusti 98 karata na četiri niza. Pravila su laka, igra baš i nije.",
    tags: ["kooperativno", "karte", "kratko"],
    sourceLocale: "serbian"
  },
  {
    id: "bandida",
    title: "Bandida",
    originalTitle: "U listi: Badida",
    language: "EN/SLO",
    status: "Regionalna cena",
    price: 1400,
    priceLabel: "11,90 EUR (oko 1.400 RSD)",
    sourceName: "Družabne igre",
    sourceUrl: "https://druzabneigre.si/igra/bandida/",
    image: "https://www.igraj.si/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6NTU4OTAsInB1ciI6ImJsb2JfaWQifX0=--6372449c1211d553248fb8e7d91fe0b718c60e65/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJ3ZWJwIiwic2F2ZXIiOnsic3RyaXAiOnRydWUsInF1YWxpdHkiOjc1LCJsb3NzbGVzcyI6ZmFsc2UsImFscGhhX3EiOjg1LCJyZWR1Y3Rpb25fZWZmb3J0Ijo2LCJzbWFydF9zdWJzYW1wbGUiOnRydWV9LCJyZXNpemVfYW5kX3BhZCI6WzcyMCw3MjAseyJncmF2aXR5IjoiY2VudHJlIiwiYmFja2dyb3VuZCI6WzI1NV19XX0sInB1ciI6InZhcmlhdGlvbiJ9fQ==--3b12a45f36bd30a1884db01fdded8320cb093bd7/bandida.jpg",
    description: "Nastavak Bandida sa tri načina igre: uhvatiti Banditu, pomoći joj da pobegne ili spojiti oba špila.",
    tags: ["kooperativno", "džepno", "karte"],
    sourceLocale: "regional"
  },
  {
    id: "bandido",
    title: "Bandido",
    originalTitle: "Bandido",
    language: "SR",
    status: "Na stanju",
    price: 1000,
    priceLabel: "1.000 RSD",
    sourceName: "Društvene igre",
    sourceUrl: "https://www.drustveneigre.rs/Bandido",
    image: "https://www.drustveneigre.rs/image/cache/catalog/artikli/bandido%20kutija%202026-500x500.jpg",
    description: "Džepna kooperativna igra zatvaranja tunela pre nego što Bandido pobegne iz zatvora.",
    tags: ["kooperativno", "džepno", "porodično"],
    sourceLocale: "serbian"
  },
  {
    id: "sushi-go",
    title: "Sushi Go",
    originalTitle: "Sushi Go!",
    language: "SR",
    status: "Nema na zalihama",
    price: 1800,
    priceLabel: "1.800 RSD",
    sourceName: "Mini Mondo",
    sourceUrl: "https://www.minimondo.rs/product/sushi-go/",
    image: "https://www.minimondo.rs/wp-content/uploads/2023/11/sushi-go-srb-box-500x500.jpg",
    description: "Brza draft igra sa preslatkim sušijem, setovima i tri runde taktičnog prosleđivanja karata.",
    tags: ["draft", "karte", "porodično"],
    sourceLocale: "serbian"
  },
  {
    id: "mindful-talk",
    title: "Mindful Talk",
    originalTitle: "Mindful Talk",
    language: "EN",
    status: "Internacionalni izvor",
    price: 800,
    priceLabel: "$7 (oko 800 RSD)",
    sourceName: "Boardgames and Puzzles",
    sourceUrl: "https://boardgames-puzzles.com/products/mindful-talk",
    image: "https://boardgames-puzzles.com/cdn/shop/files/IMG_6235.jpg",
    description: "Špil pitanja za razgovor, emocije, refleksiju i povezivanje u porodici ili maloj grupi.",
    tags: ["razgovor", "porodično", "mindfulness"],
    sourceLocale: "english"
  },
  {
    id: "pip-cards",
    title: "Pip Cards",
    originalTitle: "Pip Decks: Storyteller Tactics",
    language: "EN",
    status: "Internacionalni izvor",
    price: 15500,
    priceLabel: "£125 (oko 15.500 RSD)",
    sourceName: "Pip Decks",
    sourceUrl: "https://pipdecks.com/products/storyteller-tactics",
    image: "https://pipdecks.com/cdn/shop/files/storyteller-tactics-pdp_1200x1200.png",
    description: "Profesionalni špil taktika i promptova za pričanje priča, radionice i prezentacije.",
    tags: ["karte", "pričanje", "alat"],
    sourceLocale: "english"
  }
];

const ratingKey = "board-game-collection-ratings-v1";
const state = {
  search: "",
  filter: "all",
  sort: "name",
  ratings: loadRatings()
};

const grid = document.querySelector("#gameGrid");
const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const resultCount = document.querySelector("#resultCount");
const totalGames = document.querySelector("#totalGames");
const totalValue = document.querySelector("#totalValue");
const ratedGames = document.querySelector("#ratedGames");
const serbianSources = document.querySelector("#serbianSources");
const resetRatings = document.querySelector("#resetRatings");

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

function formatRsd(value) {
  return `${Math.round(value).toLocaleString("sr-RS")} RSD`;
}

function isInStock(game) {
  return /na stanju/i.test(game.status) || /u prodaji/i.test(game.status);
}

function getFilteredGames() {
  const query = state.search.trim().toLowerCase();
  return games
    .filter((game) => {
      const haystack = [
        game.title,
        game.originalTitle,
        game.sourceName,
        game.status,
        ...game.tags
      ]
        .join(" ")
        .toLowerCase();
      return !query || haystack.includes(query);
    })
    .filter((game) => {
      if (state.filter === "srpski") return game.sourceLocale === "serbian";
      if (state.filter === "inStock") return isInStock(game);
      if (state.filter === "rated") return Boolean(state.ratings[game.id]);
      return true;
    })
    .sort((a, b) => {
      if (state.sort === "priceDesc") return b.price - a.price;
      if (state.sort === "priceAsc") return a.price - b.price;
      if (state.sort === "ratingDesc") {
        return (state.ratings[b.id] || 0) - (state.ratings[a.id] || 0) || a.title.localeCompare(b.title, "sr");
      }
      return a.title.localeCompare(b.title, "sr");
    });
}

function renderStats() {
  const rated = Object.values(state.ratings).filter(Boolean).length;
  const total = games.reduce((sum, game) => sum + game.price, 0);

  totalGames.textContent = games.length;
  totalValue.textContent = formatRsd(total);
  ratedGames.textContent = rated;
  serbianSources.textContent = games.filter((game) => game.sourceLocale === "serbian").length;
}

function renderGames() {
  const visibleGames = getFilteredGames();
  resultCount.textContent = `${visibleGames.length} prikazanih stavki`;

  if (!visibleGames.length) {
    grid.innerHTML = `<div class="empty-state">Nema rezultata za ovu pretragu ili filter.</div>`;
    return;
  }

  grid.innerHTML = visibleGames.map(renderGameCard).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderGameCard(game) {
  const rating = state.ratings[game.id] || 0;
  const languageClass = game.language.includes("SR") ? "" : " en";
  const stockClass = isInStock(game) ? "" : " out";

  return `
    <article class="game-card" data-id="${game.id}">
      <div class="game-image-wrap">
        <span class="status-badge${stockClass}">${game.status}</span>
        <img src="${game.image}" alt="${game.title}" loading="lazy" onerror="this.src=''; this.alt='Slika nije dostupna'; this.closest('.game-image-wrap').classList.add('image-error');">
      </div>
      <div class="game-body">
        <div class="game-title-row">
          <h3>${game.title}</h3>
          <span class="language-pill${languageClass}">${game.language}</span>
        </div>
        <p class="original-title">${game.originalTitle}</p>
        <p class="game-description">${game.description}</p>
        <div class="game-tags">
          ${game.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <div class="game-footer">
          <div class="price-row">
            <span class="price">${game.priceLabel}</span>
            <span class="source">${game.sourceName}</span>
          </div>
          <div class="rating-row">
            <span class="rating-label">Moja ocena</span>
            <div class="stars" role="group" aria-label="Oceni ${game.title}">
              ${[1, 2, 3, 4, 5].map((value) => `
                <button
                  class="star-button${value <= rating ? " active" : ""}"
                  type="button"
                  aria-label="${value} od 5"
                  data-rate="${value}"
                  data-game="${game.id}"
                >★</button>
              `).join("")}
            </div>
          </div>
          <a class="source-link" href="${game.sourceUrl}" target="_blank" rel="noopener noreferrer">
            <i data-lucide="external-link"></i>
            Pogledaj izvor
          </a>
        </div>
      </div>
    </article>
  `;
}

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.filter = button.dataset.filter;
    renderGames();
  });
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderGames();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderGames();
});

grid.addEventListener("click", (event) => {
  const star = event.target.closest("[data-rate]");
  if (!star) return;

  const gameId = star.dataset.game;
  const value = Number(star.dataset.rate);
  state.ratings[gameId] = state.ratings[gameId] === value ? 0 : value;
  saveRatings();
  renderStats();
  renderGames();
});

resetRatings.addEventListener("click", () => {
  state.ratings = {};
  saveRatings();
  renderStats();
  renderGames();
});

renderStats();
renderGames();

window.addEventListener("load", () => {
  if (window.lucide) window.lucide.createIcons();
});
