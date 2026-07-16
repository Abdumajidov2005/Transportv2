

var fleet = {
  sedan: {
    label: "Легковые",
    items: [
      {
        name: "Chevrolet Cobalt",
        year: 2026,
        seats: 4,
        desc: "Комфортный седан для деловых поездок по городу. Кондиционер, мягкий салон, вместительный багажник.",
        price: "Цена договорная",
        features: ["Кондиционер", "4 пассажира", "Багажник 470л", "USB зарядка"],
        img: "./imgs/card1.png"
      },
      {
        name: "Chevrolet Lacetti",
        year: 2025,
        seats: 4,
        desc: "Надёжный и экономичный седан для трансферов и повседневных поездок.",
        price: "Цена договорная",
        features: ["Кондиционер", "4 пассажира", "Просторный салон", "USB зарядка"],
        img: "./imgs/card2.jpg"
      },
      {
        name: "Chevrolet Malibu 2",
        year: 2025,
        seats: 4,
        desc: "Бизнес-класс седан с просторным салоном и современным оснащением.",
        price: "Цена договорная",
        features: ["Климат-контроль", "4 пассажира", "Кожаный салон", "Bluetooth"],
        img: "./imgs/card3.png"
      },
      {
        name: "BYD Song Plus",
        year: 2026,
        seats: 5,
        desc: "Электрический кроссовер. Тихий ход, экологичность, высокий уровень комфорта.",
        price: "Цена договорная",
        features: ["Электромобиль", "5 пассажиров", "Панорамная крыша", "Мультимедиа"],
        img: "./imgs/card4.png"
      }
    ]
  },
  suv: {
    label: "Кроссоверы",
    items: [
      {
        name: "Toyota Land Cruiser 200", year: 2022, seats: 7, desc: "Легендарный внедорожник для любых маршрутов. Проходимость, комфорт и безопасность.",
        price: "Цена договорная", features: ["Полный привод", "7 пассажиров", "Кожаный салон", "Климат-контроль"],
        img: "./imgs/card5.jfif"
      },
      {
        name: "Li L7", year: 2025, seats: 6, desc: "Премиальный гибридный кроссовер с просторным салоном и передовыми технологиями.",
        price: "Цена договорная", features: ["Гибрид", "6 пассажиров", "Панорамная крыша", "Массаж сидений"],
        img: "./imgs/card6.jpg"
      }
    ]
  },
  minivan: {
    label: "Минивэны",
    items: [
      {
        name: "Hyundai Starex",
        year: 2022,
        seats: 8,
        desc: "Вместительный минивэн для групповых поездок и семейных путешествий.",
        price: "Цена договорная",
        features: ["8 пассажиров", "Кондиционер", "Просторный багажник", "Раздвижные двери"],
        img: "./imgs/card7.jpg"
      },
      {
        name: "Hyundai Staria", year: 2025, seats: 9,
        desc: "Минивэн премиум-класса нового поколения с футуристичным дизайном.", price: "Цена договорная",
        features: ["9 пассажиров", "Климат-контроль", "LED подсветка", "Электродвери"],
        img: "./imgs/card9.png"
      },
      {
        name: "Mercedes V-Class", year: 2025, seats: 7,
        desc: "VIP минивэн для бизнес-перевозок и обслуживания делегаций.",
        price: "Цена договорная",
        features: ["VIP салон", "7 пассажиров", "Кожаные кресла", "Wi-Fi"],
        img: "./imgs/card8.webp"
      }
    ]
  },
  microbus: {
    label: "Микроавтобусы",
    items: [
      {
        name: "Toyota HiAce", year: 2018, seats: 12,
        desc: "Надёжный микроавтобус для групповых трансферов и экскурсий.",
        price: "Цена договорная",
        features: ["12 мест", "Кондиционер", "Высокий потолок", "Багажное отделение"],
        img: "./imgs/avt2.jfif"
      },
      {
        name: "Joylong",
        year: 2021,
        seats: 15,
        desc: "Комфортабельный микроавтобус для средних групп.",
        price: "Цена договорная",
        features: ["15 мест", "Кондиционер", "Мягкие сиденья", "Микрофон"],
        img: "./imgs/avt3.avif"
      },
      {
        name: "Mercedes Sprinter",
        year: 2018, seats: 18,
        desc: "Премиальный микроавтобус для корпоративных перевозок.",
        price: "Цена договорная",
        features: ["18 мест", "Климат-контроль", "Аудиосистема", "USB зарядки"],
        img: "./imgs/avt1.avif"
      },
      {
        name: "Eurise", year: 2026, seats: 19,
        desc: "Новейший микроавтобус с увеличенной вместимостью.",
        price: "Цена договорная",
        features: ["19 мест", "Кондиционер", "Откидные сиденья", "Большой багажник"],
        img: "./imgs/avt4.avif"
      }
    ]
  },
  bus: {
    label: "Автобусы",
    items: [
      {
        name: "Yutong", year: 2024, seats: 31,
        desc: "Автобус для средних групп. Экскурсии, корпоративы, межгород.",
        price: "по запросу",
        features: ["31 место", "Климат-контроль", "Микрофон", "Холодильник"],
        img: "./imgs/bus1.jpg"
      },
      {
        name: "King Long", year: 2025, seats: 55, desc: "Большой туристический автобус для масштабных перевозок.", price: "по запросу", features: ["55 мест", "Климат-контроль", "TV экраны", "Туалет"],
        img: "./imgs/bus2.jfif"
      },
      {
        name: "ASIA STAR", year: 2025, seats: 51, desc: "Комфортабельный автобус для дальних и международных маршрутов.", price: "по запросу", features: ["51 место", "Кондиционер", "Откидные сиденья", "Багажное отделение"],
        img: "./imgs/bus3.jpg"
      }
    ]
  },
  vip: {
    label: "VIP",
    items: [
      {
        name: "Mercedes V-Class",
        year: 2025,
        seats: 7,
        desc: "VIP минивэн для первых лиц. Роскошный салон, конфиденциальность.",
        price: "Цена договорная",
        features: ["VIP салон", "7 мест", "Тонировка", "Wi-Fi"],
        img: "./imgs/vip1.avif"
      },
      {
        name: "Mercedes S-Class W222", year: 2022,
        seats: 3,
        desc: "Представительский седан для VIP персон.",
        price: "Цена договорная",
        features: ["Представительский", "3 пассажира", "Массаж", "Холодильник"],
        img: "./imgs/vip2.avif"
      },
      {
        name: "Mercedes S-Class W223", year: 2026, seats: 3,
        desc: "Флагман нового поколения. Максимальная роскошь и технологии.",
        price: "Цена договорная",
        features: ["Флагман", "3 пассажира", "Массаж", "Ambient Light"],
        img: "./imgs/vip3.jpg"
      }
    ]
  }
};

var svcList = [
  { title: "Обслуживание делегаций", desc: "Полный комплекс транспортного обеспечения для официальных визитов", img: "./imgs/card1.png" },
  { title: "Туристические перевозки", desc: "Комфортные автобусы и минивэны для экскурсионных маршрутов", img: "./imgs/bus1.jpg" },
  { title: "Трансферы", desc: "Встреча и проводы в аэропорту и на ж/д вокзале в любое время", img: "./imgs/card5.jfif" },
  { title: "VIP обслуживание", desc: "Премиальный транспорт с персональным водителем", img: "./imgs/vip1.avif" },
  { title: "Корпоративные поездки", desc: "Транспорт для конференций, семинаров и корпоративных событий", img: "./imgs/card4.png" },
  { title: "Международные перевозки", desc: "Организация перевозок по СНГ и за его пределами", img: "./imgs/bus3.jpg" },
  { title: "Обслуживание мероприятий", desc: "Логистика транспорта для форумов и крупных событий", img: "./imgs/card7.jpg" },
  { title: "Долгосрочная аренда", desc: "Аренда от 1 месяца, развоз сотрудников, регулярные маршруты", img: "./imgs/card9.png" }
];

var clientData = [
  { group: "Туристические агентства", names: ["ASIA LUXE", "CENTRUM HOLIDAYS", "FUN SUN", "PRISTAGE"] },
  { group: "Корпоративные клиенты", names: ["TURON BANK", "SEA BREEZE", "NRG", "AKFA", "YANDEX MARKET", "KAPITAL BANK"] },
  { group: "Международные организации", names: ["NASA", "Посольство Казахстана", "Посольство Малайзии", "Посольство России"] },
  { group: "Государственные учреждения", names: ["Транспорт Вазирлиги", "Инвестиция Вазирлиги", "Соғлиқни сақлаш Вазирлиги"] }
];


// ─── STATE ────────────────────────────────────────────

var activeCat = "sedan";


// ─── MOBILE MENU ──────────────────────────────────────
// (handled in index.html)


// ─── FLEET TABS ───────────────────────────────────────

function renderTabs() {
  var wrap = document.getElementById("tabs");
  wrap.innerHTML = "";

  Object.entries(fleet).forEach(function (entry) {
    var key = entry[0];
    var val = entry[1];
    var btn = document.createElement("button");
    btn.textContent = val.label;

    if (key === activeCat) {
      btn.className = "px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-brand-600 text-white border-none cursor-pointer whitespace-nowrap";
    } else {
      btn.className = "px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-500 border border-slate-200 bg-white cursor-pointer hover:border-brand-500 hover:text-brand-600 transition-all whitespace-nowrap";
    }

    btn.addEventListener("click", function () {
      activeCat = key;
      renderTabs();
      renderGrid();
    });

    wrap.appendChild(btn);
  });
}


// ─── FLEET GRID ───────────────────────────────────────

function renderGrid() {
  var grid = document.getElementById("grid");
  grid.innerHTML = "";
  var items = fleet[activeCat].items;

  items.forEach(function (v) {
    var card = document.createElement("div");
    card.className = "fleet-card bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer";

    card.addEventListener("click", function () {
      openModal(v);
    });

    card.innerHTML =
      '<div class="h-40 sm:h-44 overflow-hidden bg-slate-100">' +
      '<img src="' + v.img + '" alt="' + v.name + '" class="fleet-img w-full h-full object-cover" loading="lazy">' +
      '</div>' +
      '<div class="p-4 sm:p-5">' +
      '<div class="flex items-start justify-between gap-2 mb-2">' +
      '<h3 class="font-heading text-[15px] sm:text-base font-bold text-slate-900">' + v.name + '</h3>' +
      '<span class="shrink-0 text-xs text-slate-400 mt-0.5">' + v.year + '</span>' +
      '</div>' +
      '<p class="text-sm text-slate-400 mb-3 line-clamp-2">' + v.desc + '</p>' +
      '<div class="flex items-center justify-between">' +
      '<span class="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">' + v.seats + ' мест</span>' +
      '<span class="text-xs sm:text-sm font-semibold text-slate-700">' + v.price + '</span>' +
      '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}


// ─── SERVICES ─────────────────────────────────────────

function renderServices() {
  var grid = document.getElementById("svcGrid");

  svcList.forEach(function (s, i) {
    var card = document.createElement("div");
    card.className = "svc-row bg-white p-4 sm:p-5 md:p-6";

    var num = String(i + 1).padStart(2, "0");
    card.innerHTML =
      '<div class="flex items-center gap-4 sm:gap-5">' +
      '<div class="shrink-0 w-[100px] h-[72px] sm:w-[140px] sm:h-[96px] md:w-[160px] md:h-[110px] rounded-xl overflow-hidden bg-slate-100">' +
      '<img src="' + s.img + '" alt="' + s.title + '" class="w-full h-full object-cover" loading="lazy">' +
      '</div>' +
      '<div class="flex items-start gap-3 flex-1 min-w-0">' +
      '<span class="shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-brand-50 text-brand-600 font-heading font-bold text-xs sm:text-sm flex items-center justify-center">' + num + '</span>' +
      '<div class="min-w-0">' +
      '<h3 class="font-heading font-bold text-sm sm:text-[15px] md:text-base text-slate-900 mb-1">' + s.title + '</h3>' +
      '<p class="text-xs sm:text-sm text-slate-400 leading-relaxed">' + s.desc + '</p>' +
      '</div>' +
      '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}


// ─── CLIENTS ──────────────────────────────────────────

function renderClients() {
  var wrap = document.getElementById("clientsList");

  clientData.forEach(function (c) {
    var block = document.createElement("div");
    block.className = "mb-6 last:mb-0";

    var tags = c.names.map(function (n) {
      return '<span class="bg-slate-100 text-slate-700 text-sm font-medium px-4 py-2 rounded-lg">' + n + '</span>';
    }).join("");

    block.innerHTML =
      '<h3 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">' + c.group + '</h3>' +
      '<div class="flex flex-wrap gap-2">' + tags + '</div>';

    wrap.appendChild(block);
  });
}


// ─── MODAL ────────────────────────────────────────────

function openModal(v) {
  document.getElementById("mImg").src = v.img;
  document.getElementById("mName").textContent = v.name;
  document.getElementById("mYear").textContent = v.year + " г.";
  document.getElementById("mSeats").textContent = v.seats + (v.seats < 5 ? " места" : " мест");
  document.getElementById("mDesc").textContent = v.desc;
  document.getElementById("mPrice").textContent = v.price;

  var featHtml = v.features.map(function (f) {
    return '<div class="bg-slate-50 rounded-lg px-3 py-2.5 text-[13px] text-slate-600 font-medium">' +
      '<span class="text-brand-600 font-bold mr-1">&#10003;</span>' + f +
      '</div>';
  }).join("");

  document.getElementById("mFeat").innerHTML = featHtml;
  document.getElementById("modal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e && e.target && e.target !== e.currentTarget) return;
  document.getElementById("modal").classList.add("hidden");
  document.body.style.overflow = "";
}


// ─── INIT ─────────────────────────────────────────────

renderTabs();
renderGrid();
renderServices();
renderClients();
