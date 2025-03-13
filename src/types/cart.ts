export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface Cart {
  products: Product[];
  total: number;
}
