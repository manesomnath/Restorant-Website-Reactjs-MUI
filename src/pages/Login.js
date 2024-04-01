import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Layout from "./../components/Layout/Layout";



import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";




// export default function SignInSide() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

function Login() {

  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  history("/",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
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
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={submit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"
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
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
    <br></br>
    <br></br>
    <br></br>
    </Layout>
  );
}

export default Login;





















// import React, { useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"
// import Layout from "./../components/Layout/Layout";
// import {
//   MDBContainer,
//   MDBInput,
//   MDBCheckbox,
//   MDBCardImage,
//   MDBBtn,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';
// function Login() {
//     const history=useNavigate();

//         const [email,setEmail]=useState('')
//         const [password,setPassword]=useState('')
    
//         async function submit(e){
//             e.preventDefault();
    
//             try{
    
//                 await axios.post("http://localhost:8000/",{
//                     email,password
//                 })
//                 .then(res=>{
//                     if(res.data==="exist"){
//                         history("/",{state:{id:email}})
//                     }
//                     else if(res.data==="notexist"){
//                         alert("User have not sign up")
//                     }
//                 })
//                 .catch(e=>{
//                     alert("wrong details")
//                     console.log(e);
//                 })
    
//             }
//             catch(e){
//                 console.log(e);
    
//             }
    
//         }
//   return (
//     <Layout>
//     <MDBContainer className="p-3 my-5 d-flex flex-column w-50"><br></br><br></br>

//       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
//       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>

//       {/* <div className="d-flex justify-content-between mx-3 mb-4">
//         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
//         <a href="!#">Forgot password?</a>
//       </div> */}

//       <MDBBtn className="mb-4" onClick={submit}>Sign in</MDBBtn>

//       <div className="text-center">
//         <p>Not a member? <a href="/Signup">Signup</a></p>
//         <p>or sign up with:</p>

//         <div className='d-flex justify-content-between mx-auto' style={{width: '20%'}}>
//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='facebook-f' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='twitter' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='google' size="sm"/>
//           </MDBBtn>

//           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
//             <MDBIcon fab icon='github' size="sm"/>
//           </MDBBtn>

//           <MDBCardImage img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'} height={500} width={1300} style={{paddingBottom:'20px'}} fluid/>

//         </div>
//       </div>

//     </MDBContainer>
//     </Layout>
//   );
// }

// export default Login;



// // import React, { useState } from "react"
// // import axios from "axios"
// // import { useNavigate, Link } from "react-router-dom"
// // import {
// //   MDBContainer,
// //   MDBInput,
// //   MDBCheckbox,
// //   MDBBtn,
// //   MDBIcon
// // }
// // from 'mdb-react-ui-kit';
// // function Login() {
// //     const history=useNavigate();

// //         const [email,setEmail]=useState('')
// //         const [password,setPassword]=useState('')
    
// //         async function submit(e){
// //             e.preventDefault();
    
// //             try{
    
// //                 await axios.post("http://localhost:8000/",{
// //                     email,password
// //                 })
// //                 .then(res=>{
// //                     if(res.data=="exist"){
// //                         history("/",{state:{id:email}})
// //                     }
// //                     else if(res.data=="notexist"){
// //                         alert("User have not sign up")
// //                     }
// //                 })
// //                 .catch(e=>{
// //                     alert("wrong details")
// //                     console.log(e);
// //                 })
    
// //             }
// //             catch(e){
// //                 console.log(e);
    
// //             }
    
// //         }
// //   return (
// //     <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

// //       <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
// //       <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"/>

// //       <div className="d-flex justify-content-between mx-3 mb-4">
// //         <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
// //         <a href="!#">Forgot password?</a>
// //       </div>

// //       <MDBBtn className="mb-4" onClick={submit}>Sign in</MDBBtn>

// //       <div className="text-center">
// //         <p>Not a member? <a href="/Signup">Signup</a></p>
// //         <p>or sign up with:</p>

// //         <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
// //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
// //             <MDBIcon fab icon='facebook-f' size="sm"/>
// //           </MDBBtn>

// //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
// //             <MDBIcon fab icon='twitter' size="sm"/>
// //           </MDBBtn>

// //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
// //             <MDBIcon fab icon='google' size="sm"/>
// //           </MDBBtn>

// //           <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
// //             <MDBIcon fab icon='github' size="sm"/>
// //           </MDBBtn>

// //         </div>
// //       </div>

// //     </MDBContainer>
    
// //   );
// // }

// // export default Login;