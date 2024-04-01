import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Layout from "./../components/Layout/Layout";
import { Button } from "@mui/material";


// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// export default function SignIn() {
//  const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };


   export default function Signup() {
    const history=useNavigate();

    const [email,setEmailAddress]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }



  return (
    <Layout>
    <Container  component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => { setEmailAddress(e.target.value) }} placeholder="Email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Forgot password?
              </Link> */}
            </Grid>
            <Grid item>
            {/* <Link href="/signup" variant="body2">
                {"Don't have an account? Login Up"}
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      {/* </Box> */}
    </Container>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </Layout>
  );
 }














































 // import React from 'react';
// import Layout from "./../components/Layout/Layout";
// import Banner from "../images/banner.jpeg";

// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';

// const Signup = () => {

//   return (
//     <Layout>
//     <MDBContainer fluid>
//       <br></br><br></br>

//       <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
//         <MDBCardBody>
//           <MDBRow>
//             <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//               <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//               <div className="d-flex flex-row align-items-center mb-4 ">
//                 <MDBIcon fas icon="user me-3" size='lg'/>
//                 <MDBInput label='Your Name' id='form1' type='text' className='w-100'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size='lg'/>
//                 <MDBInput label='Your Email' id='form2' type='email'/>
//               </div>

//               <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size='lg'/>
//                 <MDBInput label='Password' id='form3' type='password'/>
//               </div>

//               {/* <div className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="key me-3" size='lg'/>
//                 <MDBInput label='Repeat your password' id='form4' type='password'/>
//               </div> */}

//               {/* <div className='mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div> */}

//               <MDBBtn className='mb-4' size='lg'>Login</MDBBtn>

//             </MDBCol>

//             <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'> 
//               <MDBCardImage img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'} height={600} width={1300} style={{paddingBottom:'20px'}} fluid/>
//             </MDBCol>

//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//     </Layout>
//   );
// }

// export default Signup;






// image vala


// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import { Container } from "@mui/material";
// import aboutimg from '../images/bannerAbout.jpeg'

// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <Container component="main" maxWidth="lg">
//       <Box
//         sx={{
//           marginTop: 8,
//         }}
//       >
//         <Grid container>
//           <CssBaseline />
//           <Grid
//             item
//             xs={false}
//             sm={4}
//             md={7}
//             sx={{
//               backgroundImage: "url(https://source.unsplash.com/random)",
//               backgroundRepeat: "no-repeat",
//               backgroundColor: (t) =>
//                 t.palette.mode === "light"
//                   ? t.palette.grey[50]
//                   : t.palette.grey[900],
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Grid
//             item
//             xs={12}
//             sm={8}
//             md={5}
//             component={Paper}
//             elevation={6}
//             square
//           >
//             <Box
//               sx={{
//                 my: 8,
//                 mx: 4,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <Typography component="h1" variant="h5">
//                 Sign in
//               </Typography>
//               <Box
//                 component="form"
//                 noValidate
//                 onSubmit={handleSubmit}
//                 sx={{ mt: 1 }}
//               >
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                 />
//                 <TextField
//                   margin="normal"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//                 <FormControlLabel
//                   control={<Checkbox value="remember" color="primary" />}
//                   label="Remember me"
//                 />
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{ mt: 3, mb: 2 }}
//                 >
//                   Sign In
//                 </Button>
//                 <Grid container>
//                   <Grid item xs>
//                     <Link href="#" variant="body2">
//                       Forgot password?
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link href="#" variant="body2">
//                       {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Container>
//   );
// }









//noral and must