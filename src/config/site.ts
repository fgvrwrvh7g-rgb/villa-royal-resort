/**
 * Central place for all business/contact data of the site.
 * Change values here — every section picks them up automatically.
 */

export const site = {
  name: "Villa Royal Resort",
  location: "Lisice · Bosnien & Herzegowina",
  phone: {
    display: "063 470 073",
    href: "tel:+38763470073",
  },
  bookingUrl:
    "https://www.booking.com/hotel/ba/villa-royal-resort-lisice.de.html?aid=356938&label=metagha-link-LUBA-hotel-15550562_dev-desktop_los-1_bw-1_dow-Thursday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-21404706195_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20260528_ppt-_lp-2070_r-13841522247042945965&sid=ed8a556ebbe58c9af7dca972952f52f7&all_sr_blocks=1555056204_426800443_2_0_0&checkin=2026-05-28&checkout=2026-05-29&dest_id=15550562&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1555056204_426800443_2_0_0&hpos=1&matching_block_id=1555056204_426800443_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1555056204_426800443_2_0_0__10000&srepoch=1779903091&srpvid=0ef27b35d15902c3&type=total&ucfs=1&",
  nav: [
    { href: "#villa", label: "Die Villa" },
    { href: "#ausstattung", label: "Ausstattung" },
    { href: "#umgebung", label: "Umgebung" },
    { href: "#kontakt", label: "Kontakt" },
  ],
} as const;
