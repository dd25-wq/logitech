import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CartItem from './CartItem';
import { fetchCartData } from '../services/cartService';
import { Cart as CartType } from '../types/cart';

const Cart: React.FC = () => {
  const [cart, setCart] = useState<CartType>({ products: [], total: 0 });
  const [initialCart, setInitialCart] = useState<CartType>({ products: [], total: 0 });
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = async () => {
    try {
      const data = await fetchCartData();
      setCart(data);
      setInitialCart(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const handleRemove = (id: number) => {
    const updatedProducts = cart.products.filter(product => product.id !== id);
    const newTotal = updatedProducts.reduce((sum, product) => sum + product.price, 0);
    setCart({
      products: updatedProducts,
      total: newTotal
    });
  };

  const handleReset = () => {
    setCart(initialCart);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Shopping Cart
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Cart contains {cart.products.length} products
          </Typography>
        </Box>
        <Typography variant="h5">
          Total: ${cart.total.toFixed(2)}
        </Typography>
      </Box>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 2
      }}>
        {cart.products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onRemove={handleRemove}
          />
        ))}
      </Box>

      <hr />

      <Button
        variant="contained"
        color="primary"
        onClick={handleReset}
        sx={{ mt: 4 }}
      >
        Reset
      </Button>
    </Container>
  );
};

export default Cart; 