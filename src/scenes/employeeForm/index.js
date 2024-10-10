import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Avatar, Radio, RadioGroup, FormControl, FormControlLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import PropTypes from 'prop-types';

// Tạo component Radio tùy chỉnh
const CustomRadio = styled(Radio)({
  color: "#000000", // Màu mặc định
  "&.Mui-checked": {
    color: "#007bff", // Màu khi được chọn
  },
});

// Định nghĩa component Header (hoặc import nếu đã có định nghĩa ở nơi khác)
const Header = ({ title, subtitle }) => (
  <Box mb="20px">
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
    <Typography variant="h6" color="textSecondary">
      {subtitle}
    </Typography>
  </Box>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    username: "",
    password: "",
    email: "",
    fullname: "",
    phoneNumber: "",
    profilePicture: "",
    createdAt: "",
    updatedAt: "",
    status: "active",
    gender: "male",
    role: "manager",
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/api/employees/${id}`)
        .then((response) => {
          const employee = response.data;
          if (employee) {
            setInitialValues({
              username: employee.username || "",
              password: employee.password || "",
              email: employee.email || "",
              fullname: employee.fullname || "",
              phoneNumber: employee.phoneNumber || "",
              profilePicture: employee.profilePicture || "",
              createdAt: employee.createdAt
                ? new Date(employee.createdAt).toISOString().split("T")[0]
                : "",
              updatedAt: employee.updatedAt
                ? new Date(employee.updatedAt).toISOString().split("T")[0]
                : "",
              status: employee.status ? "active" : "inactive",
              gender: employee.gender ? "male" : "female",
              role: employee.role ? "manager" : "employee",
            });
            setImagePreview(employee.profilePicture || "");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id]);

  const handleFormSubmit = (values) => {
    const formattedValues = {
      ...values,
      createdAt: values.createdAt
        ? new Date(values.createdAt).toISOString()
        : "",
      updatedAt: values.updatedAt
        ? new Date(values.updatedAt).toISOString()
        : "",
      status: values.status === "active",
      gender: values.gender === "male",
      role: values.role === "manager",
    };

    console.log("Formatted Values:", formattedValues); // Debugging line

    const apiCall = id
      ? axios.put(`http://localhost:8080/api/employees/${id}`, formattedValues)
      : axios.post(`http://localhost:8080/api/employees`, formattedValues);

    apiCall
      .then((response) => {
        console.log("API Response:", response); // Log API response for debugging
        toast.success(
          id ? "Cập nhật nhân viên thành công!" : "Thêm nhân viên thành công!"
        );
        setTimeout(() => {
          navigate("/admin/employee");
        }, 1500);
      })
      .catch((error) => {
        console.error(
          id ? "Error updating employee:" : "Error adding employee:",
          error.response ? error.response.data : error.message
        );
        toast.error(
          id ? "Cập nhật nhân viên thất bại!" : "Thêm nhân viên thất bại!"
        );
      });
  };

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setInitialValues({
        ...initialValues,
        profilePicture: reader.result,
      });
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById("profilePictureInput").click();
  };

  const handleBackClick = () => {
    navigate("/admin/employee");
  };

  return (
    <Box p="2%" m="20px">
      <Header
        title="Khách Hàng"
        subtitle={id ? "Thông tin chi tiết" : "Thông tin chi tiết"}
      />

      <Box mt="30px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          enableReinitialize
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mb="20px"
              >
                <Avatar
                  src={imagePreview ? `http://localhost:8080/assets/img/${imagePreview}` : "/default-profile.jpg"}
                  sx={{ width: 100, height: 100, cursor: "pointer" }}
                  onClick={handleImageClick}
                />
                <input
                  type="file"
                  id="profilePictureInput"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Box>

              <Box p={2} sx={{ backgroundColor: "", borderRadius: 1 }}>
                <Typography variant="h6">Tên đăng nhập:</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username}
                  name="username"
                  id="username"
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                />

                <Typography variant="h6">Ngày tạo:</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.createdAt}
                  name="createdAt"
                  id="createdAt"
                  error={!!touched.createdAt && !!errors.createdAt}
                  helperText={touched.createdAt && errors.createdAt}
                  InputLabelProps={{ shrink: true }}
                  disabled
                />

                <Typography variant="h6">Ngày cập nhật:</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="date"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.updatedAt}
                  name="updatedAt"
                  id="updatedAt"
                  error={!!touched.updatedAt && !!errors.updatedAt}
                  helperText={touched.updatedAt && errors.updatedAt}
                  InputLabelProps={{ shrink: true }}
                  disabled
                />

                <Typography variant="h6">Trạng thái:</Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    name="status"
                    id="status"
                    value={values.status}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="inactive"
                      control={<CustomRadio />}
                      label="Khóa"
                    />
                    <FormControlLabel
                      value="active"
                      control={<CustomRadio />}
                      label="Hoạt động"
                    />
                  </RadioGroup>
                </FormControl>

                <Typography variant="h6">Vai trò:</Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    name="role"
                    id="role"
                    value={values.role}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="manager"
                      control={<CustomRadio />}
                      label="Quản lý"
                    />
                    <FormControlLabel
                      value="employee"
                      control={<CustomRadio />}
                      label="Nhân viên"
                    />
                  </RadioGroup>
                </FormControl>

                <Button
                  style={{ backgroundColor: 'white', color: 'black' }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {id ? "Cập nhật" : "Thêm"}
                </Button>
                <Button
                  style={{ backgroundColor: 'white', color: 'black', marginLeft: '10px' }}
                  variant="contained"
                  onClick={handleBackClick}
                >
                  Quay lại
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <ToastContainer />
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  username: yup.string().required("Tên đăng nhập là bắt buộc"),
  password: yup.string().required("Mật khẩu là bắt buộc"),
  email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  fullname: yup.string().required("Tên đầy đủ là bắt buộc"),
  phoneNumber: yup.string().required("Số điện thoại là bắt buộc"),
  profilePicture: yup.string(),
  createdAt: yup.string(),
  updatedAt: yup.string(),
  status: yup.string().required("Trạng thái là bắt buộc"),
  gender: yup.string().required("Giới tính là bắt buộc"),
  role: yup.string().required("Vai trò là bắt buộc"),
});

export default Form;
