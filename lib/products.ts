import {
  Shirt,
  Smartphone,
  Car,
  Sofa,
  Plane,
  Gem,
  Building2,
  Ship,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type Category =
  | "Gastronomie"
  | "Mode"
  | "Tech"
  | "Auto"
  | "Maison"
  | "Voyage"
  | "Luxe"
  | "Immobilier"
  | "Extrême";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  merchant: string;
  url: string;
  image?: string;
}

export const CATEGORIES: Category[] = [
  "Gastronomie",
  "Mode",
  "Tech",
  "Auto",
  "Maison",
  "Voyage",
  "Luxe",
  "Immobilier",
  "Extrême",
];

// Icône de secours par catégorie (s'affiche si aucune image n'est trouvée).
export const CATEGORY_ICON: Record<Category, LucideIcon> = {
  Gastronomie: UtensilsCrossed,
  Mode: Shirt,
  Tech: Smartphone,
  Auto: Car,
  Maison: Sofa,
  Voyage: Plane,
  Luxe: Gem,
  Immobilier: Building2,
  Extrême: Ship,
};

// Image par catégorie. Dépose un fichier dans public/images/ pour qu'elle s'affiche.
// Tant que le fichier n'existe pas, la carte montre l'icône (aucune erreur visible).
export const CATEGORY_IMAGE: Record<Category, string> = {
  Gastronomie: "/images/gastronomie.jpg",
  Mode: "/images/mode.jpg",
  Tech: "/images/tech.jpg",
  Auto: "/images/auto.jpg",
  Maison: "/images/maison.jpg",
  Voyage: "/images/voyage.jpg",
  Luxe: "/images/luxe.jpg",
  Immobilier: "/images/immobilier.jpg",
  Extrême: "/images/extreme.jpg",
};

// Catalogue France. Prix indicatifs en euros.
// En production : remplacé par les flux d'affiliation (Amazon Partenaires FR, Awin).
// Pour ajouter un produit : copie une ligne et change les valeurs. id doit être unique.
export const PRODUCTS: Product[] = [
  // --- Gastronomie
  { id: 51, name: "Baguette tradition", category: "Gastronomie", price: 1.2, merchant: "Boulangerie", url: "https://www.google.com/search?q=boulangerie" },
  { id: 52, name: "Croissant au beurre", category: "Gastronomie", price: 1.3, merchant: "Boulangerie", url: "https://www.google.com/search?q=boulangerie" },
  { id: 53, name: "Big Mac", category: "Gastronomie", price: 5, merchant: "McDonald's", url: "https://www.mcdonalds.fr" },
  { id: 54, name: "Kebab", category: "Gastronomie", price: 7, merchant: "Restaurant", url: "https://www.google.com/search?q=kebab" },
  { id: 55, name: "Plateau de fromages", category: "Gastronomie", price: 25, merchant: "La Fromagerie", url: "https://www.google.com/search?q=fromagerie" },
  { id: 56, name: "Plateau d'huîtres (douzaine)", category: "Gastronomie", price: 35, merchant: "Poissonnerie", url: "https://www.google.com/search?q=huitres" },
  { id: 57, name: "Menu étoilé Michelin", category: "Gastronomie", price: 250, merchant: "Guide Michelin", url: "https://guide.michelin.com/fr" },
  { id: 58, name: "Caviar Beluga (250 g)", category: "Gastronomie", price: 800, merchant: "Kaviari", url: "https://www.kaviari.fr" },
  { id: 59, name: "Bouteille de Pétrus", category: "Gastronomie", price: 4000, merchant: "Millésima", url: "https://www.millesima.fr" },
  { id: 60, name: "Truffe blanche d'Alba (kg)", category: "Gastronomie", price: 5000, merchant: "Maison de la Truffe", url: "https://www.maison-de-la-truffe.com", image: "/images/produits/truffe.jpg" },
  { id: 61, name: "Pizza recouverte d'or", category: "Gastronomie", price: 1000, merchant: "Restaurant de luxe", url: "https://www.google.com/search?q=gold+pizza" },
  { id: 62, name: "Dîner privé avec un chef étoilé", category: "Gastronomie", price: 3500, merchant: "Chef à domicile", url: "https://www.google.com/search?q=chef+a+domicile" },

  // --- Mode
  { id: 1, name: "Chaussettes coton (lot de 5)", category: "Mode", price: 9, merchant: "Uniqlo", url: "https://www.uniqlo.com/fr" },
  { id: 2, name: "T-shirt col rond", category: "Mode", price: 15, merchant: "Uniqlo", url: "https://www.uniqlo.com/fr" },
  { id: 3, name: "Montre Casio", category: "Mode", price: 50, merchant: "Casio", url: "https://www.casio.com" },
  { id: 4, name: "Sweat à capuche", category: "Mode", price: 60, merchant: "H&M", url: "https://www2.hm.com/fr_fr" },
  { id: 5, name: "Nike Air Force 1", category: "Mode", price: 119, merchant: "Nike", url: "https://www.nike.com/fr" },
  { id: 6, name: "Sac à dos Eastpak", category: "Mode", price: 65, merchant: "Eastpak", url: "https://www.eastpak.com" },
  { id: 7, name: "Jean Levi's 501", category: "Mode", price: 110, merchant: "Levi's", url: "https://www.levi.com/FR/fr_FR" },
  { id: 8, name: "Lunettes Ray-Ban", category: "Mode", price: 160, merchant: "Ray-Ban", url: "https://www.ray-ban.com" },
  { id: 9, name: "Air Jordan 1", category: "Mode", price: 200, merchant: "Nike", url: "https://www.nike.com/fr" },
  { id: 10, name: "Manteau en laine", category: "Mode", price: 350, merchant: "Sandro", url: "https://fr.sandro-paris.com" },

  // --- Tech
  { id: 11, name: "Casque Sony WH-1000XM5", category: "Tech", price: 380, merchant: "Fnac", url: "https://www.fnac.com" },
  { id: 12, name: "AirPods Pro 2", category: "Tech", price: 279, merchant: "Apple", url: "https://www.apple.com/fr" },
  { id: 13, name: "Steam Deck", category: "Tech", price: 569, merchant: "Steam", url: "https://store.steampowered.com" },
  { id: 14, name: "iPad Air", category: "Tech", price: 699, merchant: "Apple", url: "https://www.apple.com/fr" },
  { id: 15, name: "PlayStation 5 Pro", category: "Tech", price: 799, merchant: "Darty", url: "https://www.darty.com" },
  { id: 16, name: "Drone DJI", category: "Tech", price: 1000, merchant: "DJI", url: "https://www.dji.com" },
  { id: 17, name: "iPhone 16 Pro Max", category: "Tech", price: 1479, merchant: "Apple", url: "https://www.apple.com/fr", image: "/images/produits/iphone.jpg" },
  { id: 18, name: "TV OLED 65″", category: "Tech", price: 1800, merchant: "Boulanger", url: "https://www.boulanger.com" },
  { id: 19, name: "MacBook Pro 16″", category: "Tech", price: 2999, merchant: "Apple", url: "https://www.apple.com/fr" },

  // --- Maison
  { id: 20, name: "Machine à café Nespresso", category: "Maison", price: 200, merchant: "Nespresso", url: "https://www.nespresso.com/fr" },
  { id: 21, name: "Table à manger", category: "Maison", price: 450, merchant: "IKEA", url: "https://www.ikea.com/fr" },
  { id: 22, name: "Aspirateur Dyson", category: "Maison", price: 500, merchant: "Dyson", url: "https://www.dyson.fr" },
  { id: 23, name: "Matelas Emma", category: "Maison", price: 600, merchant: "Emma", url: "https://www.emma-matelas.fr" },
  { id: 24, name: "Réfrigérateur", category: "Maison", price: 900, merchant: "Darty", url: "https://www.darty.com" },
  { id: 25, name: "Canapé 3 places", category: "Maison", price: 1290, merchant: "Maisons du Monde", url: "https://www.maisonsdumonde.com" },

  // --- Auto
  { id: 26, name: "Vélo électrique", category: "Auto", price: 1499, merchant: "Decathlon", url: "https://www.decathlon.fr" },
  { id: 27, name: "Scooter 125", category: "Auto", price: 3500, merchant: "Yamaha", url: "https://www.yamaha-motor.eu/fr" },
  { id: 28, name: "Renault Clio neuve", category: "Auto", price: 20000, merchant: "Renault", url: "https://www.renault.fr" },
  { id: 29, name: "Tesla Model 3", category: "Auto", price: 42000, merchant: "Tesla", url: "https://www.tesla.com/fr_fr" },
  { id: 30, name: "Porsche 911 Carrera", category: "Auto", price: 132000, merchant: "Porsche", url: "https://www.porsche.com/france" },
  { id: 31, name: "Bugatti Chiron", category: "Auto", price: 3200000, merchant: "Bugatti", url: "https://www.bugatti.com", image: "/images/produits/bugatti.jpg" },

  // --- Voyage
  { id: 32, name: "Vol A/R Paris-New York", category: "Voyage", price: 550, merchant: "Air France", url: "https://www.airfrance.fr" },
  { id: 33, name: "Nuit en hôtel 5 étoiles", category: "Voyage", price: 400, merchant: "Booking", url: "https://www.booking.com" },
  { id: 34, name: "Croisière (7 nuits)", category: "Voyage", price: 2500, merchant: "MSC", url: "https://www.msccroisieres.fr" },
  { id: 35, name: "Tour du monde 1ʳᵉ classe", category: "Voyage", price: 30000, merchant: "Air France", url: "https://www.airfrance.fr" },
  { id: 36, name: "Jet privé Cessna Citation", category: "Voyage", price: 9000000, merchant: "Cessna", url: "https://cessna.txtav.com" },

  // --- Luxe
  { id: 37, name: "Champagne Dom Pérignon", category: "Luxe", price: 200, merchant: "Dom Pérignon", url: "https://www.domperignon.com" },
  { id: 38, name: "Bouteille Château Margaux", category: "Luxe", price: 700, merchant: "Millésima", url: "https://www.millesima.fr" },
  { id: 39, name: "Rolex Submariner", category: "Luxe", price: 11000, merchant: "Rolex", url: "https://www.rolex.com", image: "/images/produits/rolex.jpg" },
  { id: 40, name: "Sac Hermès Birkin", category: "Luxe", price: 11000, merchant: "Hermès", url: "https://www.hermes.com/fr" },
  { id: 41, name: "Collier Cartier", category: "Luxe", price: 25000, merchant: "Cartier", url: "https://www.cartier.fr" },

  // --- Immobilier
  { id: 42, name: "Place de parking à Paris", category: "Immobilier", price: 35000, merchant: "SeLoger", url: "https://www.seloger.com" },
  { id: 43, name: "Studio à Lyon", category: "Immobilier", price: 160000, merchant: "SeLoger", url: "https://www.seloger.com" },
  { id: 44, name: "Maison à Marseille", category: "Immobilier", price: 420000, merchant: "SeLoger", url: "https://www.seloger.com" },
  { id: 45, name: "Appartement Paris 16e", category: "Immobilier", price: 2800000, merchant: "Barnes", url: "https://www.barnes-international.com" },
  { id: 46, name: "Château en Bourgogne", category: "Immobilier", price: 4500000, merchant: "Le Figaro Propriétés", url: "https://proprietes.lefigaro.fr" },

  // --- Extrême
  { id: 47, name: "Yacht de 30 mètres", category: "Extrême", price: 18000000, merchant: "Ferretti", url: "https://www.ferretti-yachts.com", image: "/images/produits/yacht.jpg" },
  { id: 48, name: "Île privée", category: "Extrême", price: 70000000, merchant: "Private Islands", url: "https://www.privateislandsonline.com" },
  { id: 49, name: "Œuvre majeure (enchères)", category: "Extrême", price: 100000000, merchant: "Christie's", url: "https://www.christies.com" },
  { id: 50, name: "Club de Ligue 1 (majoritaire)", category: "Extrême", price: 250000000, merchant: "Transfermarkt", url: "https://www.transfermarkt.fr" },
];
