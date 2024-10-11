import { useEffect, useState } from "react";
import {
    Box, Button, MenuItem, Select, FormControl, InputLabel, FormHelperText
} from "@mui/material"; // Remove Typography from here
import { Formik, Form } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../component/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';  // Import PropTypes


const AttributeSkusForm = ({ onAttributeUpdated, selectedAttributeOption }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(max-width:600px)");
    const [initialValues, setInitialValues] = useState({
        skusId: "",
        attributeOptionId: ""
    });
    const [skus, setSkus] = useState([]);
    const [attributeOptions, setAttributeOptions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const [attributeOptionsResponse, skusResponse] = await Promise.all([
                axios.get("http://localhost:8080/api/attribute-options"),
                axios.get("http://localhost:8080/api/skus")
            ]);

            setAttributeOptions(attributeOptionsResponse.data);
            setSkus(skusResponse.data);

            if (id) {
                const attributeSkusResponse = await axios.get(`http://localhost:8080/api/attribute-skus/${id}`);
                setInitialValues({
                    skusId: attributeSkusResponse.data.skusId,
                    attributeOptionId: attributeSkusResponse.data.attributeOptionId
                });
            } else if (selectedAttributeOption) {
                setInitialValues({
                    skusId: selectedAttributeOption.skusId,
                    attributeOptionId: selectedAttributeOption.attributeOptionId
                });
            }
        };

        fetchData();
    }, [id, selectedAttributeOption]);

    const handleFormSubmit = async (values) => {
        const url = id
            ? `http://localhost:8080/api/attribute-skus/${id}`
            : "http://localhost:8080/api/attribute-skus";
        const method = id ? 'PUT' : 'POST';

        const response = await axios({
            method: method,
            url: url,
            data: {
                skusId: values.skusId,
                attributeOptionId: values.attributeOptionId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        toast.success(id ? "Cập nhật thành công" : "Thêm thành công", {
            autoClose: 1500,
            onClose: () => {
                setTimeout(() => {
                    if (onAttributeUpdated) {
                        onAttributeUpdated(response.data);
                    }
                    navigate("/admin/tableAttributSkus");
                }, 100);
            }
        });
    };

    return (
        <Box m="20px">
            <Header title="Liên Kết Thuộc Tính" subtitle={id ? "Chỉnh sửa liên kết thuộc tính" : "Thêm liên kết thuộc tính"} />

            <Formik
                initialValues={initialValues}
                validationSchema={yup.object().shape({
                    skusId: yup.string().required("Trường này là bắt buộc"),
                    attributeOptionId: yup.string().required("Trường này là bắt buộc")
                })}
                onSubmit={handleFormSubmit}
            >
                {({ values, handleChange, handleBlur, errors, touched }) => (
                    <Form>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{ "& > div": { gridColumn: isNonMobile ? "span 4" : "span 2" } }}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="skusId-label">Mã SKU</InputLabel>
                                <Select
                                    labelId="skusId-label"
                                    id="skusId"
                                    name="skusId"
                                    value={values.skusId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.skusId && errors.skusId)}
                                >
                                    {skus.map(sku => (
                                        <MenuItem key={sku.id} value={sku.id}>
                                            {sku.code}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {touched.skusId && errors.skusId && (
                                    <FormHelperText error>{errors.skusId}</FormHelperText>
                                )}
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="attributeOptionId-label">Thuộc tính</InputLabel>
                                <Select
                                    labelId="attributeOptionId-label"
                                    id="attributeOptionId"
                                    name="attributeOptionId"
                                    value={values.attributeOptionId}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={Boolean(touched.attributeOptionId && errors.attributeOptionId)}
                                >
                                    {attributeOptions.map(option => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {touched.attributeOptionId && errors.attributeOptionId && (
                                    <FormHelperText error>{errors.attributeOptionId}</FormHelperText>
                                )}
                            </FormControl>
                        </Box>

                        <Box display="flex" justifyContent="flex-end" mt="20px">
                            <Button type="submit" variant="contained" color="primary">
                                {id ? "Cập nhật" : "Thêm mới"}
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>

            <ToastContainer />
        </Box>
    );
};

AttributeSkusForm.propTypes = {
    onAttributeUpdated: PropTypes.func,
    selectedAttributeOption: PropTypes.shape({
        skusId: PropTypes.string,
        attributeOptionId: PropTypes.string
    })
};

export default AttributeSkusForm;
