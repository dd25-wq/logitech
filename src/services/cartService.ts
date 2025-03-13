import { Cart } from '../types/cart';

export const fetchCartData = async (): Promise<Cart> => {
  try {
    const response = await fetch('https://dummyjson.com/carts/1');
    const data = await response.json();
    return {
      products: data.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity
      })),
      total: data.total
    };
  } catch (error) {
    console.error('Error fetching cart data:', error);
    return { products: [], total: 0 };
  }
}; 