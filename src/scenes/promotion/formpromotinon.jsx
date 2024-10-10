import { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../component/Header";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import PropTypes from 'prop-types'; // Import PropTypes

const Form = ({ onPromotionUpdated }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(max-width:600px)");
  const [initialValues, setInitialValues] = useState({
    promotionName: "",
    percents: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/promotions/${id}`)
        .then(response => {
          const promotion = response.data;
          if (promotion) {
            setInitialValues({
              promotionName: promotion.promotionName || "",
              percents: promotion.percents || "",
              startDate: promotion.startDate || "",
              endDate: promotion.endDate || "",
            });
          }
        })
        .catch(error => {
          console.error('Lỗi khi tải dữ liệu:', error);
          toast.error("Lỗi khi tải dữ liệu");
        });
    }
  }, [id]);

  const handleFormSubmit = async (values) => {
    const nameExists = await checkPromotionNameExists(values.promotionName);
    if (nameExists) {
        toast.error("Tên khuyến mãi đã tồn tại.");
        return;
    }
    try {
      const formattedValues = {
        ...values,
        startDate: values.startDate ? moment(values.startDate).format('yyyy-MM-DDTHH:mm:ss') : null,
        endDate: values.endDate ? moment(values.endDate).format('yyyy-MM-DDTHH:mm:ss') : null,
      };
      console.log("Dữ liệu gửi đi:", formattedValues);

      const request = id
        ? axios.put(`http://localhost:8080/api/promotions/${id}`, formattedValues)
        : axios.post(`http://localhost:8080/api/promotions`, formattedValues);

      request
        .then(response => {
          toast.success(id ? "Cập nhật khuyến mãi thành công" : "Thêm khuyến mãi thành công", {
            autoClose: 1500,
            onClose: () => {
              setTimeout(() => {
                if (onPromotionUpdated) {
                  onPromotionUpdated(response.data);
                }
                navigate("/admin/tablepromotion");
              }, 100);
            }
          });
        })
        .catch(error => {
          console.error('Lỗi khi xử lý khuyến mãi:', error.response ? error.response.data : error.message);
          toast.error("Đã xảy ra lỗi khi xử lý khuyến mãi");
        });
    } catch (error) {
      console.error('Lỗi khi xử lý dữ liệu:', error);
      toast.error("Lỗi khi xử lý dữ liệu");
    }
  };

  return (
    <Box p="2%" m="20px" mt="-25px">
      <Header title="Khuyến Mãi" subtitle={id ? "Chỉnh sửa khuyến mãi" : "Thêm khuyến mãi"} />

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
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0,1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <h5>Tên khuyến mãi: </h5>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.promotionName}
                name="promotionName"
                error={!!touched.promotionName && !!errors.promotionName}
                helperText={touched.promotionName && errors.promotionName}
                sx={{ gridColumn: "span 4" }}
              />
              <h5>Phần trăm khuyến mãi: </h5>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.percents}
                name="percents"
                error={!!touched.percents && !!errors.percents}
                helperText={touched.percents && errors.percents}
                sx={{ gridColumn: "span 4" }}
              />
              <h5>Ngày bắt đầu:</h5>
              <TextField
                fullWidth
                variant="filled"
                type="datetime-local"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.startDate}
                name="startDate"
                error={!!touched.startDate && !!errors.startDate}
                helperText={touched.startDate && errors.startDate}
                sx={{ gridColumn: "span 4" }}
                InputProps={{
                  readOnly: !!id, // Nếu có ID (đang chỉnh sửa) thì không cho phép chỉnh sửa
                }}
              />
              <h5>Ngày kết thúc: </h5>
              <TextField
                fullWidth
                variant="filled"
                type="datetime-local"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.endDate}
                name="endDate"
                error={!!touched.endDate && !!errors.endDate}
                helperText={touched.endDate && errors.endDate}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                {id ? "Cập nhật khuyến mãi" : "Thêm khuyến mãi"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <ToastContainer />
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  promotionName: yup.string().required("Vui lòng không bỏ trống!"),
  percents: yup.number().typeError("Phần trăm khuyến mãi phải là số").required("Vui lòng không bỏ trống!")
    .min(0, "Phầm trăm khuyến mãi không được bé hơn 0")
    .max(100, "Phầm trăm khuyến mãi không được lớn hơn 100")
    .integer("Phần trăm khuyến mãi phải là số nguyên"),
  startDate: yup.date()
    .nullable()
    .required("Vui lòng không bỏ trống!")
    .typeError("Ngày bắt đầu không hợp lệ!")
    .test(
      "is-future-date",
      "Ngày bắt đầu phải là ngày hôm sau trở đi",
      function (value) {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Đặt thời gian hiện tại là 00:00:00
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1); // Tăng thêm 1 ngày để được ngày mai
        return value >= tomorrow;
      }
    ),
  endDate: yup.date()
    .nullable()
    .required("Vui lòng không bỏ trống!")
    .typeError("Ngày kết thúc không hợp lệ!")
    .test(
      "is-after-start-date",
      "Ngày kết thúc phải lớn hơn ngày bắt đầu",
      function (value) {
        const { startDate } = this.parent;
        return !startDate || !value || new Date(value) > new Date(startDate);
      }
    ),
});

const checkPromotionNameExists = async (promotionName) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/promotions/check?name=${promotionName}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi kiểm tra tên khuyến mãi:", error);
    return false;
  }
};

Form.propTypes = {
  onPromotionUpdated: PropTypes.func,
};

export default Form;
