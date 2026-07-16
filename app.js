var fleet = {
  sedan: {
    label: "Легковые",
    items: [
      {
        name: "Chevrolet Cobalt", year: 2026, seats: 4,
        desc: "Комфортный седан для деловых поездок по городу. Кондиционер, мягкий салон, вместительный багажник.",
        price: "Цена договорная",
        features: ["Кондиционер", "4 пассажира", "Багажник 470л", "USB зарядка"],
        img: "./imgs/card1.png"
      },
      {
        name: "Chevrolet Lacetti", year: 2025, seats: 4,
        desc: "Надёжный и экономичный седан для трансферов и повседневных поездок.",
        price: "Цена договорная",
        features: ["Кондиционер", "4 пассажира", "Просторный салон", "USB зарядка"],
        img: "./imgs/card2.jpg"
      },
      {
        name: "Chevrolet Malibu 2", year: 2025, seats: 4,
        desc: "Бизнес-класс седан с просторным салоном и современным оснащением.",
        price: "Цена договорная",
        features: ["Климат-контроль", "4 пассажира", "Кожаный салон", "Bluetooth"],
        img: "./imgs/card3.png"
      },
      {
        name: "BYD Song Plus", year: 2026, seats: 5,
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
        name: "Toyota Land Cruiser 200", year: 2022, seats: 7,
        desc: "Легендарный внедорожник для любых маршрутов. Проходимость, комфорт и безопасность.",
        price: "Цена договорная",
        features: ["Полный привод", "7 пассажиров", "Кожаный салон", "Климат-контроль"],
        img: "./imgs/card5.jfif"
      },
      {
        name: "Li L7", year: 2025, seats: 6,
        desc: "Премиальный гибридный кроссовер с просторным салоном и передовыми технологиями.",
        price: "Цена договорная",
        features: ["Гибрид", "6 пассажиров", "Панорамная крыша", "Массаж сидений"],
        img: "./imgs/card6.jpg"
      }
    ]
  },
  minivan: {
    label: "Минивэны",
    items: [
      {
        name: "Hyundai Starex", year: 2022, seats: 8,
        desc: "Вместительный минивэн для групповых поездок и семейных путешествий.",
        price: "Цена договорная",
        features: ["8 пассажиров", "Кондиционер", "Просторный багажник", "Раздвижные двери"],
        img: "./imgs/card7.jpg"
      },
      {
        name: "Hyundai Staria", year: 2025, seats: 9,
        desc: "Минивэн премиум-класса нового поколения с футуристичным дизайном.",
        price: "Цена договорная",
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
        name: "Joylong", year: 2021, seats: 15,
        desc: "Комфортабельный микроавтобус для средних групп.",
        price: "Цена договорная",
        features: ["15 мест", "Кондиционер", "Мягкие сиденья", "Микрофон"],
        img: "./imgs/avt3.avif"
      },
      {
        name: "Mercedes Sprinter", year: 2018, seats: 18,
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
        name: "King Long", year: 2025, seats: 55,
        desc: "Большой туристический автобус для масштабных перевозок.",
        price: "по запросу",
        features: ["55 мест", "Климат-контроль", "TV экраны", "Туалет"],
        img: "./imgs/bus2.jfif"
      },
      {
        name: "ASIA STAR", year: 2025, seats: 51,
        desc: "Комфортабельный автобус для дальних и международных маршрутов.",
        price: "по запросу",
        features: ["51 место", "Кондиционер", "Откидные сиденья", "Багажное отделение"],
        img: "./imgs/bus3.jpg"
      }
    ]
  },
  vip: {
    label: "VIP",
    items: [
      {
        name: "Mercedes V-Class", year: 2025, seats: 7,
        desc: "VIP минивэн для первых лиц. Роскошный салон, конфиденциальность.",
        price: "Цена договорная",
        features: ["VIP салон", "7 мест", "Тонировка", "Wi-Fi"],
        img: "./imgs/vip1.avif"
      },
      {
        name: "Mercedes S-Class W222", year: 2022, seats: 3,
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


// ─── FLEET TABS ───────────────────────────────────────

function renderTabs() {
  var wrap = document.getElementById("tabs");
  if (!wrap) return;
  wrap.innerHTML = "";

  // Update fleet count
  var total = 0;
  Object.values(fleet).forEach(function(cat) { total += cat.items.length; });
  var countEl = document.getElementById("fleetCount");
  if (countEl) countEl.textContent = total + " АВТО";

  Object.entries(fleet).forEach(function (entry) {
    var key = entry[0];
    var val = entry[1];
    var btn = document.createElement("button");
    btn.textContent = val.label;

    if (key === activeCat) {
      btn.className = "px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-accent text-white border-none cursor-pointer whitespace-nowrap";
    } else {
      btn.className = "px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-400 border border-white/10 bg-dark-700 cursor-pointer hover:border-accent/50 hover:text-white transition-all whitespace-nowrap";
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
  if (!grid) return;
  grid.innerHTML = "";
  var items = fleet[activeCat].items;

  items.forEach(function (v, idx) {
    var card = document.createElement("a");
    card.href = "car.html?cat=" + activeCat + "&id=" + idx;
    card.className = "fleet-card bg-dark-700 rounded-2xl overflow-hidden border border-white/5 cursor-pointer block no-underline";

    var tag1 = '<span class="bg-white/15 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide">С ВОДИТЕЛЕМ</span>';
    var tag2 = '<span class="bg-accent/80 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded uppercase tracking-wide">ДОСТУПНО СЕГОДНЯ</span>';

    var nameParts = v.name.split(" ");
    var brand = nameParts[0];
    var model = nameParts.slice(1).join(" ") || brand;

    card.innerHTML =
      '<div class="relative h-52 sm:h-60 overflow-hidden bg-dark-600">' +
        '<img src="' + v.img + '" alt="' + v.name + '" class="fleet-img w-full h-full object-cover" loading="lazy">' +
        '<div class="absolute top-3 left-3 flex gap-1.5 flex-wrap">' + tag1 + tag2 + '</div>' +
        '<div class="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white/80 text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">' +
          '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' +
          'Ташкент</div>' +
      '</div>' +
      '<div class="p-5 sm:p-6">' +
        '<div class="flex items-start justify-between gap-2 mb-1">' +
          '<div>' +
            '<p class="text-[11px] text-accent font-semibold uppercase tracking-wider">' + brand + '</p>' +
            '<h3 class="font-heading text-lg sm:text-xl font-bold text-white">' + model + '</h3>' +
          '</div>' +
          '<span class="shrink-0 text-[11px] text-gray-500 bg-white/5 px-2.5 py-1 rounded">' + fleet[activeCat].label + '</span>' +
        '</div>' +
        '<div class="flex items-center gap-0 text-[13px] text-gray-400 mt-3 mb-5">' +
          '<span class="pr-3 border-r border-white/10">' + v.year + '</span>' +
          '<span class="px-3 border-r border-white/10">' + v.seats + ' мест</span>' +
          '<span class="px-3 border-r border-white/10">' + v.features[0] + '</span>' +
          '<span class="pl-3">' + (v.features[1] || '') + '</span>' +
        '</div>' +
        '<div class="flex items-center justify-between pt-4 border-t border-white/5">' +
          '<div>' +
            '<p class="text-[10px] text-gray-600 uppercase tracking-wider">СТОИМОСТЬ</p>' +
            '<p class="text-base sm:text-lg font-bold text-white">' + v.price + '</p>' +
          '</div>' +
          '<div class="flex gap-2">' +
            '<span class="text-xs font-medium text-gray-300 border border-white/10 px-4 py-2.5 rounded-full">Подробнее</span>' +
            '<span class="text-xs font-semibold text-white bg-accent px-4 py-2.5 rounded-full">Заявка</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}


// ─── SERVICES ─────────────────────────────────────────

function renderServices() {
  var grid = document.getElementById("svcGrid");
  if (!grid) return;

  svcList.forEach(function (s, i) {
    var card = document.createElement("a");
    card.href = "service.html?id=" + i;
    card.className = "svc-row relative overflow-hidden group block no-underline";

    var num = String(i + 1).padStart(2, "0");
    card.innerHTML =
      '<img src="' + s.img + '" alt="' + s.title + '" class="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300" loading="lazy">' +
      '<div class="relative z-10 p-5 sm:p-6 md:p-7 min-h-[140px] flex items-start gap-4">' +
        '<span class="shrink-0 text-accent font-heading font-bold text-sm mt-0.5">' + num + '</span>' +
        '<div class="min-w-0">' +
          '<h3 class="font-heading font-bold text-[15px] sm:text-base text-white mb-1.5">' + s.title + '</h3>' +
          '<p class="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3">' + s.desc + '</p>' +
          '<span class="text-xs text-accent font-medium group-hover:underline">Подробнее</span>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}


// ─── CLIENTS ──────────────────────────────────────────

function renderClients() {
  var wrap = document.getElementById("clientsList");
  if (!wrap) return;

  clientData.forEach(function (c) {
    var block = document.createElement("div");
    block.className = "mb-6 last:mb-0";

    var tags = c.names.map(function (n) {
      return '<span class="bg-white/5 text-gray-300 text-sm font-medium px-4 py-2.5 rounded-lg border border-white/5">' + n + '</span>';
    }).join("");

    block.innerHTML =
      '<h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">' + c.group + '</h3>' +
      '<div class="flex flex-wrap gap-2">' + tags + '</div>';

    wrap.appendChild(block);
  });
}


// ─── INIT ─────────────────────────────────────────────

renderTabs();
renderGrid();
renderServices();
renderClients();
