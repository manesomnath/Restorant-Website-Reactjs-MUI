// import React from "react";
// import Layout from "./../components/Layout/Layout";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import MailIcon from "@mui/icons-material/Mail";
// import CallIcon from "@mui/icons-material/Call";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";

// const Contact = () => {
//   return (
//     <Layout>
//       <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
//         <Typography variant="h4">Contact My Resturant</Typography>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
//           beatae ducimus magni nobis culpa praesentium velit expedita quae,
//           corrupti, pariatur inventore laboriosam consectetur modi impedit
//           error, repudiandae obcaecati doloribus.
//         </p>
//       </Box>
//       <Box
//         sx={{
//           m: 3,
//           width: "600px",
//           ml: 10,
//           "@media (max-width:600px)": {
//             width: "300px",
//           },
//         }}
//       >
//         <TableContainer component={Paper}>
//           <Table aria-label="contact table">
//             <TableHead>
//               <TableRow>
//                 <TableCell
//                   sx={{ bgcolor: "black", color: "white" }}
//                   align="center"
//                 >
//                   CONTACT DETAILS
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 <TableCell>
//                   <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
//                   (tollfree)
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>
//                   <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
//                 </TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>
//                   <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Layout>
//   );
// };

// export default Contact;









import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Layout from "./../components/Layout/Layout";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  return (
    <Layout>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
        }}
      >
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#111",
              
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
    </Layout>
  );
}
export default Contact;
