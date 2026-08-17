/* ============================================================
   माऊली होलसेल साडी सेंटर — script.js
   ============================================================

   ✏️ EDIT HERE #1 — WhatsApp number
   Replace YOUR_NUMBER_HERE with your WhatsApp number in full
   international format, WITHOUT "+", spaces, or dashes.
   Example for an Indian number 98765 43210 → "919876543210"
*/
const WHATSAPP_NUMBER = "9819108041";

/* ✏️ EDIT HERE #2 — Phone number for the Call Now button.
   Use the format tel: expects, e.g. "+919876543210" */
const PHONE_NUMBER = "9819108041";

/* ✏️ EDIT HERE #4 — Google Maps "share" link for the Google Maps button
   (Maps → Share → Copy link). This is separate from the embed iframe
   in index.html, which needs the "Embed a map" URL instead. */
const GOOGLE_MAPS_LINK = "Shop no 4, Shevati aasha apartment Deriwali TQ, Dist, Panvel, Deriwali, Maharashtra 410221";



(function () {
  "use strict";

  /* ------------------------------------------------------------
     Helpers to build WhatsApp / tel links
     ------------------------------------------------------------ */
  function buildWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  }

  const GENERIC_MESSAGE = "नमस्कार, मुझे माऊली होलसेल साडी सेंटर के Products की जानकारी चाहिए।";

  function productMessage(productName) {
    return `नमस्कार, मुझे ${productName} की कीमत और उपलब्धता की जानकारी चाहिए।`;
  }

  /* ------------------------------------------------------------
     Wire up generic WhatsApp buttons (header, hero, footer, FAB, CTA)
     ------------------------------------------------------------ */
  document.querySelectorAll(".js-whatsapp-generic").forEach((el) => {
    el.setAttribute("href", buildWhatsAppUrl(GENERIC_MESSAGE));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ------------------------------------------------------------
     Wire up product-specific WhatsApp buttons
     ------------------------------------------------------------ */
  document.querySelectorAll(".js-whatsapp-product").forEach((btn) => {
    const productName = btn.getAttribute("data-product") || "Product";
    btn.addEventListener("click", () => {
      window.open(buildWhatsAppUrl(productMessage(productName)), "_blank", "noopener");
    });
  });

  /* ------------------------------------------------------------
     Wire up Call Now buttons
     ------------------------------------------------------------ */
  document.querySelectorAll(".js-call-btn").forEach((el) => {
    el.setAttribute("href", `tel:${PHONE_NUMBER}`);
  });

  /* ------------------------------------------------------------
     Wire up Google Maps buttons
     ------------------------------------------------------------ */
  document.querySelectorAll(".js-maps-btn").forEach((el) => {
    el.setAttribute("href", GOOGLE_MAPS_LINK);
  });

  /* ------------------------------------------------------------
     Sticky header shadow on scroll (subtle, cheap)
     ------------------------------------------------------------ */
  const header = document.getElementById("site-header");
  let lastScroll = 0;
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      if (y > 8 && lastScroll <= 8) {
        header.style.boxShadow = "0 6px 20px rgba(74,18,40,0.12)";
      } else if (y <= 8 && lastScroll > 8) {
        header.style.boxShadow = "none";
      }
      lastScroll = y;
    },
    { passive: true }
  );

  /* ------------------------------------------------------------
     Mobile hamburger navigation
     ------------------------------------------------------------ */
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");
  const navOverlay = document.getElementById("nav-overlay");

  function openNav() {
    mainNav.classList.add("is-open");
    navOverlay.classList.add("is-visible");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "मेनू बंद करें");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    mainNav.classList.remove("is-open");
    navOverlay.classList.remove("is-visible");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "मेनू खोलें");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("is-open");
    isOpen ? closeNav() : openNav();
  });

  navOverlay.addEventListener("click", closeNav);

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ------------------------------------------------------------
     Gallery filtering
     ------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      galleryItems.forEach((item) => {
        const cats = (item.getAttribute("data-cat") || "").split(" ");
        const show = filter === "all" || cats.includes(filter);
        item.classList.toggle("is-hidden", !show);
      });
    });
  });

  /* ------------------------------------------------------------
     Lightbox
     ------------------------------------------------------------ */
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.getElementById("lightbox-close");

  function openLightbox(src, alt) {
    lightboxImg.setAttribute("src", src);
    lightboxImg.setAttribute("alt", alt || "");
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.setAttribute("src", "");
    document.body.style.overflow = "";
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const full = item.getAttribute("data-full");
      const img = item.querySelector("img");
      openLightbox(full, img ? img.getAttribute("alt") : "");
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ------------------------------------------------------------
     Footer year
     ------------------------------------------------------------ */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
