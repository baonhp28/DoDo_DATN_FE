import { useState, useEffect } from 'react';
import { Box, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Formproductpromotion = ({ onProductpromotionUpdated, selectedProductpromotion }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [initialValues, setInitialValues] = useState({
        promotionID: "",
        id: ""
    });

    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(response => setProducts(response.data || []))
            .catch(error => console.error('Lỗi khi tải danh mục sản phẩm:', error));

        axios.get('http://localhost:8080/api/promotions')
            .then(response => setPromotions(response.data || []))
            .catch(error => console.error('Lỗi khi tải danh mục khuyến mãi:', error));

        if (id) {
            axios.get(`http://localhost:8080/api/productpromotions/${id}`)
                .then(response => {
                    const productpromotion = response.data;
                    setInitialValues({
                        promotionID: productpromotion.promotion?.promotionID || "",
                        id: productpromotion.product?.id || ""
                    });
                })
                .catch(error => console.error('Lỗi khi tải dữ liệu:', error));
        } else {
            setInitialValues({
                promotionID: selectedProductpromotion?.promotionID || "",
                id: selectedProductpromotion?.id || "",
            });
        }

    }, [id, selectedProductpromotion]);

    const handleFormSubmit = (values) => {
        console.log('Submitting:', values);
    
        const productPromotionDTO = {
            id: id || 0,
            product: { id: values.id || "" },
            promotion: { promotionID: values.promotionID || "" }
        };
    
        const request = id
            ? axios.put(`http://localhost:8080/api/productpromotions/${id}`, productPromotionDTO, { headers: { 'Content-Type': 'application/json' } })
            : axios.post(`http://localhost:8080/api/productpromotions`, productPromotionDTO, { headers: { 'Content-Type': 'application/json' } });
    
        request
            .then(response => {
                toast.success(id ? "Cập nhật SP_KM thành công" : "Thêm SP_KM thành công", {
                    autoClose: 1500,
                    onClose: () => {
                        setTimeout(() => {
                            onProductpromotionUpdated?.(response.data);
                            navigate("/admin/tableproductpromotion");
                        }, 100);
                    }
                });
            })
            .catch(error => {
                console.error('Lỗi khi xử lý sản phẩm:', error);
                const errorMessage = error.response?.data?.message || error.message || "Đã xảy ra lỗi khi xử lý sản phẩm";
                toast.error(errorMessage);
            });
    };

    return (
        <Box p="2%" m="20px" mt="-25px">
            <Formik
                initialValues={initialValues}
                validationSchema={yup.object().shape({
                    promotionID: yup.string().required("Vui lòng chọn khuyến mãi!"),
                    id: yup.string().required("Vui lòng chọn sản phẩm!"),
                })}
                onSubmit={handleFormSubmit}
                enableReinitialize
            >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                    <Form>
                        <Box display="grid" gap="30px" mt="30px">
                            <div className='row'>
                                <div className='col-2'></div>
                                <div className='col-7'>
                                    <FormControl fullWidth m="250px" error={!!touched.id && !!errors.id} style={{ marginBottom: '20px' }}>
                                        <InputLabel>Chọn sản phẩm</InputLabel>
                                        <Field
                                            as={Select}
                                            name="id"
                                            value={products.some(product => product.id === values.id) ? values.id : ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {products.map(product => (
                                                <MenuItem key={product.id} value={product.id}>
                                                    {product.name}
                                                </MenuItem>
                                            ))}
                                        </Field>
                                        <FormHelperText>{touched.id && errors.id}</FormHelperText>
                                    </FormControl>
                                    <FormControl fullWidth m="250px" error={!!touched.promotionID && !!errors.promotionID}>
                                        <InputLabel>Chọn khuyến mãi</InputLabel>
                                        <Field
                                            as={Select}
                                            name="promotionID"
                                            value={promotions.some(promotion => promotion.promotionID === values.promotionID) ? values.promotionID : ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {promotions.map(promotion => (
                                                <MenuItem key={promotion.promotionID} value={promotion.promotionID}>
                                                    {promotion.promotionName}
                                                </MenuItem>
                                            ))}
                                        </Field>
                                        <FormHelperText>{touched.promotionID && errors.promotionID}</FormHelperText>
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        color="secondary"
                                        variant="contained"
                                        sx={{ mt: 2 }}
                                    >
                                        {id ? "Cập nhật" : "Thêm"}
                                    </Button>
                                </div>
                            </div>
                        </Box>
                        <ToastContainer />
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

Formproductpromotion.propTypes = {
    onProductpromotionUpdated: PropTypes.func,
    selectedProductpromotion: PropTypes.shape({
        promotionID: PropTypes.string,
        id: PropTypes.string,
    })
};

export default Formproductpromotion;
