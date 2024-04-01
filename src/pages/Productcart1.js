import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

const ProductCard1 = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard1;