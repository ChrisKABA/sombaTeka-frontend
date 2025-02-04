export interface Product {
    id: number;
    name: string;
    rating: number;
    oldPrice?: number;
    currentPrice: number;
    image: string;
    onSale: boolean;
  }