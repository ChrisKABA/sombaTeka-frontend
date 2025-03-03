import type { Product } from "../../types/ProductType"

export let products: Product[] = [
  {
    id: 1,
    name: "Collection of Washing Ma…",
    rating: 4,
    currentPrice: 115.00,
    image: "/imageProduit/washing.png",
    onSale: false,
    description : "Découvrez notre collection de machines à laver modernes, alliant performance et efficacité énergétique pour un lavage impeccable.",
    status: "published",
    stock: 10,
    weight: 2,
    category: "Électroménager",
    supplier: "LG",
  },
  {
    id: 2,
    name: "Latest Touch",
    rating: 3,
    oldPrice: 67.0,
    currentPrice: 34.9,
    image: "/imageProduit/phone.png",
    onSale: true,
    description : "Le dernier smartphone à la pointe de la technologie, offrant un design élégant et des fonctionnalités avancées à un prix abordable.",
    status: "published",
    stock: 15,
    weight: 10,
    category: "Téléphonie",
    supplier: "Samsung",
  },
  {
    id: 3,
    name: "LG Refrigerator",
    rating: 2,
    oldPrice: 99.00,
    currentPrice: 88.00,
    image: "/imageProduit/Regifrerator.png",
    onSale: true,
    description : "Réfrigérateur LG spacieux avec un design élégant, idéal pour garder vos aliments frais tout en ajoutant une touche moderne à votre cuisine.",
    status: "published",
    stock: 15,
    weight: 20,
    category: "Téléphonie",
    supplier: "Samsung"
  },
  {
    id: 4,
    name: "Modern Bluetooth",
    rating: 3,
    currentPrice: 111.0,
    image: "/imageProduit/bluetooth.png",
    onSale: false,
    description : "Enceinte Bluetooth moderne offrant un son de haute qualité et une connectivité sans fil pour profiter de votre musique partout.",
    status: "published",
    stock: 5,
    weight: 1,
    category: "Téléphonie",
    supplier: "Samsung"
  },
  {
    id: 5,
    name: "LG Double Dor",
    rating: 3,
    oldPrice: 88.0,
    currentPrice: 45.0,
    image: "/imageProduit/fridge.jpg",
    onSale: true,
    description : "Réfrigérateur à double porte LG, combinant style et fonctionnalité, parfait pour les familles qui ont besoin d'espace de stockage.",
    status: "published",
    stock: 7,
    weight: 6,
    category: "Frigo",
    supplier: "LG"

  },
  {
    id: 6,
    name: "LED Samsung TV",
    rating: 4,
    oldPrice: 101.0,
    currentPrice: 88.0,
    image: "/imageProduit/tv.jpg",
    onSale: true,
    description : "Profitez d'une expérience de visionnage immersive avec ce téléviseur LED Samsung, offrant des couleurs vives et des images nettes.",
    status: "published",
    stock: 13,
    weight: 5,
    category: "Téléphonie",
    supplier: "Samsung"
  },
  {
    id: 7,
    name: "sony Bluetooth Speaker",
    rating: 4,
    oldPrice: 85.0,
    currentPrice: 80.0,
    image: "/imageProduit/sony-bluetooth.png",
    onSale: true,
    description : "Enceinte Bluetooth Sony, idéale pour écouter votre musique préférée avec un son puissant et des basses profondes.",
    status: "published",
    stock: 20,
    weight: 1,
    category: "Bluetooth",
    supplier: "Sony"
  },
  {
    id: 8,
    name: "big screen samsung LED …",
    rating: 5,
    currentPrice: 110.00,
    image: "/imageProduit/tv-led.png",
    onSale: false,
    description : "Plongez dans vos films et émissions préférés avec ce grand écran LED Samsung, offrant une qualité d'image exceptionnelle.",
    status: "published",
    stock: 13,
    weight: 3,
    category: "Tv",
    supplier: "Samsung"
    
  },
  {
    id: 9,
    name: "headphone multi collecti…",
    rating: 4,
    oldPrice: 85.0,
    currentPrice: 80.0,
    image: "/imageProduit/headphone.png",
    onSale: true,
    description : "Casque audio multi-usage, conçu pour un confort optimal et une qualité sonore supérieure, parfait pour les mélomanes.",
    status: "published",
    stock: 10,
    weight: 1,
    category: "Téléphonie",
    supplier: "Samsung"
  },
]

export const addProduct = (newProduct: Product) => {
  products = [...products, newProduct];
};

// export { products }

