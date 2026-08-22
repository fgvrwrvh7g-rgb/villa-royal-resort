/* Villa Royal Resort — Vanilla-JS Version */
(function () {
  "use strict";

  var BOOKING_URL =
    "https://www.booking.com/hotel/ba/villa-royal-resort-lisice.de.html?aid=356938&label=metagha-link-LUBA-hotel-15550562_dev-desktop_los-1_bw-1_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21404706195_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260528_ppt-_lp-2070_r-13841522247042945965&sid=ed8a556ebbe58c9af7dca972952f52f7&all_sr_blocks=1555056204_426800443_2_0_0&checkin=2026-05-28&checkout=2026-05-29&dest_id=15550562&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1555056204_426800443_2_0_0&hpos=1&matching_block_id=1555056204_426800443_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1555056204_426800443_2_0_0__10000&srepoch=1779903091&srpvid=0ef27b35d15902c3&type=total&ucfs=1&";
  var PHONE_DISPLAY = "063 470 073";
  var PHONE_HREF = "tel:+38763470073";

  var amenities = [
    { icon: "waves", title: "Saisonaler Außenpool", desc: "Türkisblaues Wasser unter mediterranem Himmel." },
    { icon: "tree-pine", title: "Garten & Terrasse", desc: "Grüne Rückzugsorte, gemacht für lange Abende." },
    { icon: "wine", title: "Bar", desc: "Hausgemachte Cocktails bei Sonnenuntergang." },
    { icon: "wifi", title: "Kostenfreies WLAN", desc: "Verbunden bleiben — wenn Sie wollen." },
    { icon: "car", title: "Privatparkplatz", desc: "Kostenfrei und sicher direkt vor Ort." },
    { icon: "chef-hat", title: "Voll ausgestattete Küche", desc: "Ofen, Mikrowelle, Geschirrspüler, Kaffeemaschine." },
  ];

  var attractions = [
    { icon: "mountain", name: "Kravica-Wasserfälle", distance: "14 km", note: "Smaragdgrüne Becken & rauschendes Wasser." },
    { icon: "map-pin", name: "Brücke Stari Most", distance: "42 km", note: "UNESCO-Welterbe in Mostar." },
    { icon: "plane", name: "Flughafen Mostar", distance: "43 km", note: "Bequeme Anreise & Abreise." },
    { icon: "fish", name: "Wandern & Angeln", distance: "vor Ort", note: "Natur direkt vor der Haustür." },
  ];

  var kitchenFeatures = ["Geschirrspüler", "Ofen & Mikrowelle", "Kaffeemaschine", "Komplettes Geschirr"];

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* Links & Kontakt */
  Array.prototype.forEach.call(document.querySelectorAll("[data-booking]"), function (a) {
    a.href = BOOKING_URL;
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-phone]"), function (a) {
    a.href = PHONE_HREF;
    a.textContent = PHONE_DISPLAY;
  });
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* Ausstattung */
  var amenityHost = document.querySelector("[data-amenities]");
  if (amenityHost) {
    amenityHost.innerHTML = amenities
      .map(function (a, i) {
        return (
          '<div class="reveal" data-delay="' +
          i * 60 +
          '"><div class="amenity"><i data-lucide="' +
          a.icon +
          '"></i><h3>' +
          esc(a.title) +
          "</h3><p>" +
          esc(a.desc) +
          "</p></div></div>"
        );
      })
      .join("");
  }

  /* Umgebung */
  var attractionHost = document.querySelector("[data-attractions]");
  if (attractionHost) {
    attractionHost.innerHTML = attractions
      .map(function (a, i) {
        return (
          '<div class="reveal" data-delay="' +
          i * 80 +
          '"><div class="attraction"><i data-lucide="' +
          a.icon +
          '"></i><div class="attraction-body"><div class="attraction-top"><h3>' +
          esc(a.name) +
          '</h3><span class="attraction-dist">' +
          esc(a.distance) +
          '</span></div><p class="attraction-note">' +
          esc(a.note) +
          "</p></div></div></div>"
        );
      })
      .join("");
  }

  /* Küchen-Liste */
  var kitchenHost = document.querySelector("[data-kitchen]");
  if (kitchenHost) {
    kitchenHost.innerHTML = kitchenFeatures
      .map(function (f) {
        return '<li><span class="dot"></span>' + esc(f) + "</li>";
      })
      .join("");
  }

  /* Lucide-Icons rendern */
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  /* Scroll-Reveal */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var delay = parseInt(el.getAttribute("data-delay") || "0", 10);
          setTimeout(function () {
            el.classList.add("is-visible");
          }, delay);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 },
    );
    Array.prototype.forEach.call(reveals, function (el) {
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(reveals, function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Hero-Parallax */
  var hero = document.getElementById("hero");
  var heroMedia = document.querySelector("[data-hero-media]");
  var heroContent = document.querySelector("[data-hero-content]");
  var ticking = false;

  function onScroll() {
    if (!hero || !heroMedia || !heroContent) return;
    var h = hero.offsetHeight || 1;
    var p = Math.min(Math.max(window.scrollY / h, 0), 1);
    heroMedia.style.transform = "translateY(" + p * 30 + "%) scale(" + (1 + p * 0.15) + ")";
    heroContent.style.opacity = String(Math.max(1 - p / 0.8, 0));
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(onScroll);
    },
    { passive: true },
  );
  onScroll();
})();
