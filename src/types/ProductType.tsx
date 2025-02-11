export interface Product {
    id: number;
    name: string;
    rating: number;
    oldPrice?: number;
    currentPrice: number;
    image: string;
    onSale: boolean;
    description: string;
    status: 'published' | 'hidden';
    stock: number;
    weight: number;
    category: string;
    supplier: string;
  }