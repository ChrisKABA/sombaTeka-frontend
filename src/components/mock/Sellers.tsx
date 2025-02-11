export interface Seller {
    id: number;
    fullName: string;
    rating: number;
    description: string;
    image: string;
    specialty: string;
    joinedDate: string;
    totalSales: number;
  }
  
  export const Sellers: Seller[] = [
    {
      id: 1,
      fullName: "Dorothee Madiya",
      rating: 4.5,
      description: "Passionnée par l'horlogerie depuis plus de 10 ans, elle saura vous guider dans le choix de la montre parfaite. Spécialisée dans les montres connectées et de luxe.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
      specialty: "Montres & Accessoires",
      joinedDate: "2022",
      totalSales: 1234
    },
    {
      id: 2,
      fullName: "Jean-Marc Kabongo",
      rating: 4.8,
      description: "Expert en électronique avec 15 ans d'expérience. Spécialisé dans les smartphones haut de gamme et les gadgets innovants.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      specialty: "Électronique",
      joinedDate: "2021",
      totalSales: 2156
    },
    {
      id: 3,
      fullName: "Sarah Mutombo",
      rating: 4.6,
      description: "Créatrice de mode passionnée, elle sélectionne avec soin les meilleures pièces de prêt-à-porter. Son expertise en tendances fait d'elle une référence.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop",
      specialty: "Mode & Vêtements",
      joinedDate: "2023",
      totalSales: 876
    },
    {
      id: 4,
      fullName: "Patrick Mukendi",
      rating: 4.9,
      description: "Ancien chef cuisinier reconverti dans la vente d'ustensiles de cuisine. Son expertise pratique garantit des conseils précieux pour les passionnés de cuisine.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      specialty: "Cuisine & Arts de la table",
      joinedDate: "2021",
      totalSales: 1567
    },
    {
      id: 5,
      fullName: "Marie Kalonda",
      rating: 4.7,
      description: "Spécialiste en cosmétiques naturels et soins de beauté. Son approche holistique de la beauté aide ses clients à trouver les produits parfaits pour leur routine.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      specialty: "Beauté & Bien-être",
      joinedDate: "2022",
      totalSales: 1890
    },
    {
      id: 6,
      fullName: "David Lukusa",
      rating: 4.4,
      description: "Passionné de tech et gaming, il conseille sur les meilleurs équipements gaming et composants PC. Son expertise technique est reconnue par la communauté.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      specialty: "Gaming & Informatique",
      joinedDate: "2023",
      totalSales: 945
    }
  ];