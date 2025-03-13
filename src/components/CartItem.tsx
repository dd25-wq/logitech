import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';
import { Product } from '../types/cart';

interface CartItemProps {
  product: Product;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove }) => {
  return (
    <Paper
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box sx={{ alignSelf: 'flex-start', marginBottom: 2 }}>
        <Typography variant="h6" component="h3">
          {product.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          ${product.price.toFixed(2)}
        </Typography>
      </Box>
      <Button
        sx={{ alignSelf: 'flex-end' }}
        variant="contained"
        color="error"
        size="small"
        onClick={() => onRemove(product.id)}
      >
        Remove
      </Button>
    </Paper>
  );
};

export default CartItem;
