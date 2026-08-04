// ─── API CONFIGURATION ────────────────────────────────
var API_BASE = "https://api.artrans.uz";

// ─── STATE ────────────────────────────────────────────
var activeCat = null;
var categories = [];
var vehicles = [];
var services = [];
var clients = [];

// ─── API HELPERS ──────────────────────────────────────

function apiFetch(endpoint) {
  return fetch(API_BASE + endpoint)
    .then(function (res) {
      if (!res.ok) throw new Error("API error: " + res.status);
      return res.json();
    });
}

function getResults(data) {
  if (data && data.results) return data.results;
  if (Array.isArray(data)) return data;
  return [];
}

// ─── FLEET: LOAD CATEGORIES ───────────────────────────

function loadCategories() {
  return apiFetch("/fleet/categories/").then(function (data) {
    categories = getResults(data);
    if (categories.length > 0 && !activeCat) {
      activeCat = categories[0].slug;
    }
    renderTabs();
    return categories;
  });
}

// ─── FLEET: LOAD VEHICLES ─────────────────────────────

function loadVehicles() {
  var url = "/fleet/vehicles/";
  if (activeCat) url += "?category=" + activeCat;
  return apiFetch(url).then(function (data) {
    vehicles = getResults(data);
    renderGrid();
    return vehicles;
  });
}

// ─── FLEET TABS ───────────────────────────────────────

function renderTabs() {
  var wrap = document.getElementById("tabs");
  if (!wrap) return;
  wrap.innerHTML = "";

  var countEl = document.getElementById("fleetCount");
  if (countEl) countEl.textContent = categories.length + " КАТЕГОРИЙ";

  categories.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.textContent = cat.name;

    if (cat.slug === activeCat) {
      btn.className = "px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-accent text-white border-none cursor-pointer whitespace-nowrap";
    } else {
      btn.className = "px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-gray-600 border border-gray-200 bg-white cursor-pointer hover:border-accent/50 hover:text-gray-900 transition-all whitespace-nowrap";
    }

    btn.addEventListener("click", function () {
      activeCat = cat.slug;
      renderTabs();
      loadVehicles();
    });

    wrap.appendChild(btn);
  });
}

// ─── FLEET GRID ───────────────────────────────────────

function renderGrid() {
  var grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (vehicles.length === 0) {
    grid.innerHTML = '<p class="text-gray-500 text-sm col-span-full text-center py-10">Машиналар топилмади</p>';
    return;
  }

  vehicles.forEach(function (v) {
    var card = document.createElement("a");
    card.href = "car.html?slug=" + v.slug;
    card.className = "fleet-card bg-white rounded-2xl overflow-hidden border border-gray-200 cursor-pointer block no-underline hover:border-accent/30";

    var imgUrl = v.main_image || v.image || (v.images && v.images[0] && v.images[0].image) || "";
    if (imgUrl && !imgUrl.startsWith("http")) imgUrl = API_BASE + imgUrl;

    var brand = v.brand || v.name.split(" ")[0] || "";
    var model = v.model || v.name.split(" ").slice(1).join(" ") || v.name;
    var year = v.year || "";
    var seats = v.seats || v.passenger_count || "";
    var price = v.price || v.price_per_day || "Цена договорная";
    var catName = v.category_name || (v.category && v.category.name) || "";
    var features = v.features || [];
    var feat1 = features[0] || v.fuel_type || "";
    var feat2 = features[1] || v.transmission || "";

    var tag1 = '<span class="bg-gray-900/60 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">С ВОДИТЕЛЕМ</span>';
    var tag2 = v.is_available !== false
      ? '<span class="bg-accent/90 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">ДОСТУПНО</span>'
      : '';

    var imgTag = imgUrl
      ? '<img src="' + imgUrl + '" alt="' + v.name + '" class="fleet-img w-full h-full object-cover" loading="lazy">'
      : '<div class="w-full h-full bg-gray-100 flex items-center justify-center"><svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0zM3.5 9l1.5-5h14l1.5 5M3.5 9H21M3.5 9l-1 6.5h19L20.5 9"/></svg></div>';

    card.innerHTML =
      '<div class="relative h-40 sm:h-44 overflow-hidden bg-dark-600">' +
      imgTag +
      '<div class="absolute top-2.5 left-2.5 flex gap-1.5 flex-wrap">' + tag1 + tag2 + '</div>' +
      '<div class="absolute bottom-2.5 right-2.5 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">' +
      '<svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' +
      'Ташкент</div>' +
      '</div>' +
      '<div class="p-4">' +
      '<div class="flex items-start justify-between gap-2 mb-1">' +
      '<div>' +
      '<p class="text-[10px] text-accent font-semibold uppercase tracking-wider">' + brand + '</p>' +
      '<h3 class="font-heading text-base sm:text-lg font-bold text-gray-900">' + model + '</h3>' +
      '</div>' +
      '<span class="shrink-0 text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">' + catName + '</span>' +
      '</div>' +
      '<div class="flex items-center flex-wrap gap-0 text-[11px] sm:text-[12px] text-gray-400 mt-2 mb-4">' +
      (year ? '<span class="pr-2 border-r border-gray-200">' + year + '</span>' : '') +
      (seats ? '<span class="px-2 border-r border-gray-200">' + seats + ' мест</span>' : '') +
      (feat1 ? '<span class="px-2 border-r border-gray-200">' + feat1 + '</span>' : '') +
      (feat2 ? '<span class="pl-2">' + feat2 + '</span>' : '') +
      '</div>' +
      '<div class="flex items-center justify-between pt-3 border-t border-gray-100">' +
      '<div>' +
      '<p class="text-[9px] text-gray-500 uppercase tracking-wider">ОТ / ДЕНЬ</p>' +
      '<p class="text-sm font-bold text-gray-900">' + price + '</p>' +
      '</div>' +
      '<div class="flex gap-1.5">' +
      '<span class="text-[11px] font-medium text-gray-600 border border-gray-200 px-3 py-2 rounded-full hover:border-gray-400 transition-colors">Подробнее</span>' +
      '<span class="text-[11px] font-semibold text-white bg-accent px-3 py-2 rounded-full">Заявка</span>' +
      '</div>' +
      '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}

// ─── SERVICES ─────────────────────────────────────────

function loadServices() {
  return apiFetch("/services/directions/").then(function (data) {
    services = getResults(data);
    renderServices();
    return services;
  });
}

function renderServices() {
  var grid = document.getElementById("svcGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (services.length === 0) {
    grid.innerHTML = '<p class="text-gray-500 text-sm col-span-full text-center py-10">Хизматлар топилмади</p>';
    return;
  }

  services.forEach(function (s, i) {
    var card = document.createElement("a");
    card.href = "service.html?slug=" + (s.slug || i);
    card.className = "svc-card group block no-underline bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/30 transition-all duration-300 flex flex-col";

    var imgUrl = s.image || s.icon || "";
    if (imgUrl && !imgUrl.startsWith("http")) imgUrl = API_BASE + imgUrl;

    var num = String(i + 1).padStart(2, "0");
    var title = s.title || s.name || "";
    var desc = s.short_description || s.description || "";

    var imgBlock = imgUrl
      ? '<img src="' + imgUrl + '" alt="' + title + '" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">'
      : '<div class="w-full h-full bg-gray-100 flex items-center justify-center"><svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"/></svg></div>';

    card.innerHTML =
      '<div class="relative h-44 sm:h-48 overflow-hidden shrink-0">' +
      imgBlock +
      '<div class="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent"></div>' +
      '<span class="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1.5 rounded-full">' + num + '</span>' +
      '</div>' +
      '<div class="p-5 sm:p-6 flex flex-col flex-1">' +
      '<h3 class="font-heading font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-accent transition-colors">' + title + '</h3>' +
      '<p class="text-sm text-gray-400 leading-relaxed mb-4 flex-1">' + desc + '</p>' +
      '<div class="flex items-center gap-2 text-accent text-sm font-medium mt-auto">' +
      '<span>Подробнее</span>' +
      '<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>' +
      '</div>' +
      '</div>';

    grid.appendChild(card);
  });

  var svcHeader = document.querySelector("#services .text-accent");
  if (svcHeader) {
    svcHeader.textContent = "УСЛУГИ · " + String(services.length).padStart(2, "0") + " НАПРАВЛЕНИЙ";
  }
}

// ─── CLIENTS ──────────────────────────────────────────

function loadClients() {
  return apiFetch("/clients/list/").then(function (data) {
    clients = getResults(data);
    renderClients();
    return clients;
  });
}

function renderClients() {
  var wrap = document.getElementById("clientsList");
  if (!wrap) return;

  if (clients.length === 0) {
    wrap.innerHTML = '<p class="text-gray-500 text-sm text-center py-10">Мижозлар топилмади</p>';
    return;
  }

  var allHTML = '<div class="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">';
  clients.forEach(function (client) {
    var logoUrl = client.logo || client.image || "";
    if (logoUrl && !logoUrl.startsWith("http")) logoUrl = API_BASE + logoUrl;
    var name = client.name || client.company_name || "";
    allHTML += '<img src="' + logoUrl + '" alt="' + name + '" title="' + name + '" class="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 grayscale hover:grayscale-0">';
  });
  allHTML += '</div>';
  wrap.innerHTML = allHTML;
}

// ─── SITE SETTINGS ────────────────────────────────────

function loadSiteSettings() {
  return apiFetch("/site-settings/").then(function (data) {
    var settings = Array.isArray(data) ? data[0] : (data.results ? data.results[0] : data);
    if (!settings) return;

    if (settings.phone) {
      var phoneEls = document.querySelectorAll('a[href^="tel:"]');
      phoneEls.forEach(function (el) {
        el.href = "tel:" + settings.phone.replace(/\s/g, "");
        el.textContent = settings.phone;
      });
    }
    if (settings.telegram) {
      var tgEls = document.querySelectorAll('a[href*="t.me"]');
      tgEls.forEach(function (el) { el.href = settings.telegram; });
    }
    if (settings.address) {
      var addrEl = document.querySelector("footer .text-sm.space-y-2 p:first-child");
      if (addrEl) addrEl.textContent = settings.address;
    }
    if (settings.email) {
      var emailEl = document.querySelector("footer .text-sm.space-y-2 p:nth-child(3)");
      if (emailEl) emailEl.textContent = settings.email;
    }
  }).catch(function () {});
}

// ─── ORDER SUBMISSION ─────────────────────────────────

function submitOrder(orderData) {
  return fetch(API_BASE + "/orders/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData)
  }).then(function (res) {
    if (!res.ok) return res.json().then(function (e) { throw e; });
    return res.json();
  });
}

// ─── INIT ─────────────────────────────────────────────

function init() {
  loadCategories()
    .then(function () { return loadVehicles(); })
    .catch(function (err) {
      console.warn("Fleet API:", err.message);
      var grid = document.getElementById("grid");
      if (grid) grid.innerHTML = '<p class="text-gray-400 text-sm col-span-full text-center py-10">Маълумотлар юкланмади</p>';
    });

  loadServices()
    .catch(function (err) {
      console.warn("Services API:", err.message);
      var g = document.getElementById("svcGrid");
      if (g) g.innerHTML = '<p class="text-gray-400 text-sm col-span-full text-center py-10">Маълумотлар юкланмади</p>';
    });

  loadClients()
    .catch(function (err) {
      console.warn("Clients API:", err.message);
      var w = document.getElementById("clientsList");
      if (w) w.innerHTML = '<p class="text-gray-400 text-sm text-center py-10">Маълумотлар юкланмади</p>';
    });

  loadSiteSettings();
}

init();
