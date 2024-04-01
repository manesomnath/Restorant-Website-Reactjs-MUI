// CartPage.jsx
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const CartPage = ({ cartItems }) => {
  return (
    <List>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.image} />
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={`Quantity: ${item.quantity}`} />
          </ListItem>
        ))
      )}
    </List>
  );
};

export default CartPage;
