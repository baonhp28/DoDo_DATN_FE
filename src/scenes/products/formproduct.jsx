import { useEffect, useState } from 'react';
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import Header from '../../component/Header';
import PropTypes from 'prop-types';

const FormProduct = ({ onProductUpdated, selectedProduct }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [initialValues, setInitialValues] = useState({
        name: "",
        description: "",
        imgUrl: "",
        createdAt: "",
        updatedAt: "",
        categoryId: ""
    });
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/categories')
            .then(response => {
                setCategories(Array.isArray(response.data) ? response.data : []);
            })
            .catch(error => {
                console.error('Lỗi khi tải danh mục:', error);
            });

        if (id) {
            axios.get(`http://localhost:8080/api/products/${id}`)
                .then(response => {
                    const product = response.data;
                    setInitialValues({
                        name: product.name || "",
                        description: product.description || "",
                        imgUrl: product.imgUrl || "",
                        createdAt: product.createdAt
                            ? moment(product.createdAt).format('YYYY-MM-DDTHH:mm')
                            : "",
                        updatedAt: moment().format('YYYY-MM-DDTHH:mm'),
                        categoryId: product.category && product.category.categoryId
                            ? product.category.categoryId
                            : "",
                    });
                    setIsEdit(true);
                })
                .catch(error => {
                    console.error('Lỗi khi tải dữ liệu:', error);
                });
        } else {
            setInitialValues({
                name: selectedProduct?.name || "",
                description: selectedProduct?.description || "",
                imgUrl: selectedProduct?.imgUrl || "",
                createdAt: moment().format('YYYY-MM-DDTHH:mm'),
                updatedAt: "",
                categoryId: selectedProduct?.categoryId || "",
            });
            setIsEdit(false);
        }
    }, [id, selectedProduct]);

    const handleFormSubmit = async (values) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('categoryId', values.categoryId);
        if (values.imgUrl instanceof File) {
            formData.append('imgUrl', values.imgUrl);
        }

        if (isEdit) {
            formData.append('createdAt', values.createdAt);
        }

        const request = id
            ? axios.put(`http://localhost:8080/api/products/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            : axios.post(`http://localhost:8080/api/products`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

        request
            .then(response => {
                toast.success(id ? "Cập nhật sản phẩm thành công" : "Thêm sản phẩm thành công", {
                    autoClose: 1500,
                    onClose: () => {
                        setTimeout(() => {
                            if (onProductUpdated) {
                                onProductUpdated(response.data);
                            }
                            navigate("/admin/tableproduct");
                        }, 100);
                    }
                });
            })
            .catch(error => {
                console.error('Lỗi khi xử lý sản phẩm:', error);
                toast.error("Đã xảy ra lỗi khi xử lý sản phẩm");
            });
    };

    return (
        <Box p="2%" m="20px" mt="-25px">
            <Header title="Sản Phẩm" subtitle={id ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"} />

            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                enableReinitialize
            >
                {({ values, handleChange, handleBlur, setFieldValue }) => (
                    <Form>
                        <Box display="grid" gap="30px">
                            <div className='row'>
                                <div className='col-5'>
                                    <h5>Tên sản phẩm:</h5>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        name="name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.name}
                                        style={{ marginBottom: '20px' }}
                                    />

                                    <FormControl fullWidth m="250px"  >
                                        <InputLabel>Chọn Loại</InputLabel>
                                        <Field
                                            as={Select}
                                            name="categoryId"
                                            value={values.categoryId || ""}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            {categories.map(category => (
                                                <MenuItem key={category.categoryId} value={category.categoryId}>
                                                    {category.categoryName}
                                                </MenuItem>
                                            ))}
                                        </Field>
                                    </FormControl>
                                </div>
                            </div>
                            <div className='row'>
                                {isEdit && (
                                    <>
                                        <div className='col-5 '>
                                            <h5>Ngày tạo:</h5>
                                            <Field
                                                as={TextField}
                                                fullWidth
                                                variant="filled"
                                                type="datetime-local"
                                                name="createdAt"
                                                disabled
                                                value={values.createdAt || ""}
                                                sx={{ gridColumn: "span 2" }}
                                            />
                                            <h5>Ngày cập nhật:</h5>
                                            <Field
                                                as={TextField}
                                                fullWidth
                                                variant="filled"
                                                type="datetime-local"
                                                name="updatedAt"
                                                disabled
                                                value={values.updatedAt || ""}
                                                sx={{ gridColumn: "span 2" }}
                                            />
                                        </div>
                                        <div className='col-2'></div>
                                    </>
                                )}
                                <div className='col-5' >
                                    {values.imgUrl && typeof values.imgUrl === 'string' && (
                                        <img
                                            src={`/assets/img/${values.imgUrl}`}
                                            alt="Hình ảnh sản phẩm"
                                            width={200}
                                            height={200}
                                        />
                                    )}
                                    <h5>Hình ảnh:</h5>
                                    <Input
                                        type="file"
                                        name="imgUrl"
                                        onChange={(event) => {
                                            const file = event.currentTarget.files[0];
                                            if (file) {
                                                setFieldValue("imgUrl", file);
                                            }
                                        }}
                                        onBlur={handleBlur}
                                        inputProps={{ accept: 'image/jpg, image/png' }}
                                        style={{ marginBottom: '20px' }}
                                    />
                                </div>

                                <div className='col-12' >
                                    <h5 >Mô tả:</h5>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        name="description"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.description}
                                        multiline
                                        rows={4}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                </div>
                            </div>
                        </Box>
                        <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            sx={{ mt: 2 }}
                        >
                            {id ? "Cập nhật" : "Thêm"}
                        </Button>
                        <ToastContainer />
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

FormProduct.propTypes = {
    onProductUpdated: PropTypes.func,
    selectedProduct: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        imgUrl: PropTypes.string,
        categoryId: PropTypes.string
    })
};

export default FormProduct;
