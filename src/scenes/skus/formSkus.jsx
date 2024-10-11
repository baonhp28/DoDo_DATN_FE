// import { useEffect, useState } from "react";
// import {
//   Box, Button, MenuItem, Select, FormControl, InputLabel, TextField
// } from "@mui/material";
// import { Formik } from "formik";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../component/Header";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import PropTypes from 'prop-types';

// const FormSkus = ({ onSkuUpdated, selectedSku }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const isNonMobile = useMediaQuery("(max-width:600px)");
//   const [initialValues, setInitialValues] = useState({
//     product: "",
//     code: "",
//     price: "",
//   });
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Load product list
//     axios.get("http://localhost:8080/api/products")
//       .then(response => {
//         setProducts(response.data || []);
//       })
//       .catch(error => {
//         console.error('Error loading product list:', error);
//         toast.error("Error loading product list");
//       });

//     // Load SKU data for editing if id exists
//     if (id) {
//       axios.get(`http://localhost:8080/api/skus/${id}`)
//         .then(response => {
//           const sku = response.data;
//           if (sku) {
//             setInitialValues({
//               product: sku.productId || "", // Product ID
//               code: sku.code || "",
//               price: sku.price || "",
//             });
//           }
//         })
//         .catch(error => {
//           console.error('Error loading SKU data:', error);
//           toast.error("Error loading SKU data");
//         });
//     } else if (selectedSku) {
//       setInitialValues({
//         product: selectedSku.productId || "", // Product ID
//         code: selectedSku.code || "",
//         price: selectedSku.price || "",
//       });
//     }
//   }, [id, selectedSku]);

//   const handleFormSubmit = async (values) => {
//     const formData = new FormData();
//     formData.append('product', values.product);
//     formData.append('code', values.code);
//     formData.append('price', values.price);

//     const codeExists = await checkSkusCodeExists(values.code);
//     if (codeExists) {
//       toast.error("SKU code already exists.");
//       return;
//     }

//     const request = id
//       ? axios.put(`http://localhost:8080/api/skus/${id}`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       })
//       : axios.post(`http://localhost:8080/api/skus`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//     request
//       .then(response => {
//         toast.success(id ? "Updated successfully" : "Added successfully", {
//           autoClose: 1500,
//           onClose: () => {
//             setTimeout(() => {
//               if (onSkuUpdated) {
//                 onSkuUpdated(response.data); // Call callback to notify parent component
//               }
//               navigate("/admin/tableSkus");
//             }, 100);
//           }
//         });
//       })
//       .catch(error => {
//         console.error('Error processing SKU:', error);
//         toast.error("An error occurred while processing the SKU");
//       });
//   };

//   return (
//     <Box p="2%" m="20px" mt="-25px">
//       <Header title="SKU Pricing" subtitle={id ? "Edit SKU" : "Add SKU"} />

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         enableReinitialize
//       >
//         {({
//           values,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0,1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
//                 <InputLabel id="product-select-label">Product</InputLabel>
//                 <Select
//                   labelId="product-select-label"
//                   id="product"
//                   name="product"
//                   value={values.product}
//                   onChange={handleChange}
//                   displayEmpty
//                 >
//                   {products.map((product) => (
//                     <MenuItem key={product.id} value={product.id}>{product.name}</MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>

//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="SKU Code"
//                 onChange={handleChange}
//                 value={values.code}
//                 name="code"
//                 sx={{ gridColumn: "span 4" }}
//               />

//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="number"
//                 label="Price"
//                 onChange={handleChange}
//                 value={values.price}
//                 name="price"
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="center" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 {id ? "Update" : "Add"}
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//       <ToastContainer />
//     </Box>
//   );
// };

// const checkSkusCodeExists = async (skusCode) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/api/skus/check?code=${skusCode}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error checking SKU code:", error);
//     return false;
//   }
// };

// // Add prop types for the component
// FormSkus.propTypes = {
//   onSkuUpdated: PropTypes.func,
//   selectedSku: PropTypes.shape({
//     productId: PropTypes.string,
//     code: PropTypes.string,
//     price: PropTypes.number
//   })
// };

// export default FormSkus;
