import { Waves, TreePine, Wifi, Car, ChefHat, Wine, Mountain, Fish, MapPin, Plane } from "lucide-react";

/** Editorial content of the landing page (German copy). */

export const amenities = [
  { icon: Waves, title: "Saisonaler Außenpool", desc: "Türkisblaues Wasser unter mediterranem Himmel." },
  { icon: TreePine, title: "Garten & Terrasse", desc: "Grüne Rückzugsorte, gemacht für lange Abende." },
  { icon: Wine, title: "Bar", desc: "Hausgemachte Cocktails bei Sonnenuntergang." },
  { icon: Wifi, title: "Kostenfreies WLAN", desc: "Verbunden bleiben — wenn Sie wollen." },
  { icon: Car, title: "Privatparkplatz", desc: "Kostenfrei und sicher direkt vor Ort." },
  { icon: ChefHat, title: "Voll ausgestattete Küche", desc: "Ofen, Mikrowelle, Geschirrspüler, Kaffeemaschine." },
];

export const attractions = [
  { icon: Mountain, name: "Kravica-Wasserfälle", distance: "14 km", note: "Smaragdgrüne Becken & rauschendes Wasser." },
  { icon: MapPin, name: "Brücke Stari Most", distance: "42 km", note: "UNESCO-Welterbe in Mostar." },
  { icon: Plane, name: "Flughafen Mostar", distance: "43 km", note: "Bequeme Anreise & Abreise." },
  { icon: Fish, name: "Wandern & Angeln", distance: "vor Ort", note: "Natur direkt vor der Haustür." },
];

export const stats = [
  { n: "14", u: "km zu den Wasserfällen" },
  { n: "43", u: "km zum Flughafen" },
  { n: "100%", u: "Privatsphäre" },
];

export const kitchenFeatures = [
  "Geschirrspüler",
  "Ofen & Mikrowelle",
  "Kaffeemaschine",
  "Komplettes Geschirr",
];
