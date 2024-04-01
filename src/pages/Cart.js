// 

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import { styled } from "@mui/material/styles";
// import React, { useState, useEffect } from "react";

// const StyledBox = styled("div")({
//   paddingRight: "70px",
//   paddingLeft: "70px",
//   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//   backgroundColor: "#FFFFFF",
//   border: "1px solid black",
//   minHeight: "200px"
// });

// const AddToCard = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((result) => setData(result))
//       .catch((e) => console.log(e));
//   }, []);

  
//   const addToCardHandleClick = (id) => {
//     setData(
//     //   data.map((item: any) => {
//     //     const tempItem = data.find((item: any) => item === id);
//     //     if (!tempItem) return [...item, { id }];
//     //   })
//     );
//   };



//   return (
//     <Card sx={{ maxWidth: 700, minHeight: "300px" }}>
//       <CardContent>
//         <Box
//           sx={{
//             display: "flex",
//             gap: "30px",
//             justifyContent: "center",
//             overflow: "auto"
//           }}
//         >
//           <StyledBox sx={{ minWidth: "100px" }}></StyledBox>//The selected item should appear here after clicking
//           <Box
//             sx={{
//               alignSelf: "center",
//               gap: "10px"
//             }}
//           >
//             <Button
//               variant="outlined"
//            onClick={() => addToCardHandleClick(null)} //instead of null should be correct property
//             >
//               Move
//             </Button>
//           </Box>
//           <StyledBox>
//             {data &&
//               data.map((item) => (
//                 <ul key={item.id} style={{ listStyle: "none" }}>
//                   <li>{item.name}</li>
//                 </ul>
//               ))}
//           </StyledBox>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };
// export default Card;

import { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";

import CartPage from "./CartPage";
import Layout from "./../components/Layout/Layout";


// import Menu from './Menu';

const initialProducts = [
  {
    id: 4,
    name: "Sauth thali",
    price: 399,
    description: "Special-Sauth",
    image: "../sauth thali.jpg",
  },
  {
    id: 6,
    name: "MaharajaThali",
    price: 499,
    description: "Biggest Thali",
    image: "../maharaja-thali.jpg",
  },
  {
    
    id: 1,
    name: "R1",
    price: 190,
    description: "fvdbdb",
    image: "/R1.jpg",
  },
  {
    
    id: 2,
    name: "R",
    price: 299,
    description: "bjhbkj",
    image: "/R.jpg",
  },
  {
    id: 3,
    name: "Thali Food India",
    price: 270,
    description: "Indian Food",
    image: "../thalifoodindia.jpg",
  },
  {
    
    id: 12,
    name: "Marathi-Thali",
    price: 299,
    description: "Latest model smartphone",
    image: "/marathi.jpg",
  },

  {
    id: 5,
    name: "Paneer",
    price: 125,
    description: "Special Paneer",
    image: "../paneer.jpg",
  },
  
  {
    id: 7,
    name: "MalavaniThali",
    price: 289,
    description: "Special-Malavani",
    image: "../MalavaniThali.jpg",
  },
  {
    id: 8,
    name: "Gujrati",
    price: 280,
    description: "Special-Gujarati",
    image: "../gujrati.jpg",
  },
  {
    
    id: 9,
    name: "Marathi-Thali",
    price: 299,
    description: "Marathi thali ",
    image: "/marathi.jpg",
  },
  {
    
    id: 10,
    name: "Marathi-Thali",
    price: 299,
    description: "Latest model smartphone",
    image: "/marathi.jpg",
  },
  {
    id: 11,
    name: "Biryani",
    price: 110,
    description: "Special-Biryani",
    image: "../Biryani.jpg",
  },
  
  // Add more products as needed
];

const ProductCard = ({ product, onAdd }) => (
  <Card raised>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body1">INR : {product.price.toFixed(2)}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" onClick={() => onAdd(product)}>
        Add to Cart
      </Button>
    </CardActions>
  </Card>
);

const ShoppingCartOverview = ({ cartItems }) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Shopping Cart
    </Typography>
    <Divider />
    <List>
      {cartItems.map((item, index) => (
        <ListItem key={index} divider>
          {/* <ListItemText
            primary={item.name}
            secondary={Quantity: ${item.quantity}}
          /> */}
          <Typography variant="body2">
            INR : {(item.price * item.quantity).toFixed(2)}
          </Typography>
        </ListItem>
      ))}
    </List>
    <Typography variant="h6">
      Total : INR : 
      {cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)}
    </Typography>
  </Paper>
);

const Cart = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(
        (item) => item.id === productToAdd.id
      );
      if (productExists) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  return (
    <Layout>
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} onAdd={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <ShoppingCartOverview cartItems={cart} />
          <CartPage cartItems={cart} />
        </Grid>
        
      </Grid>
    </Box>
    </Layout>
  );
};

export default Cart
