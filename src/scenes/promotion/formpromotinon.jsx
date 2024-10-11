import { useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
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

      <form onSubmit={handleFormSubmit}>
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
            value={initialValues.promotionName}
            name="promotionName"
            sx={{ gridColumn: "span 4" }}
          />
          <h5>Phần trăm khuyến mãi: </h5>
          <TextField
            fullWidth
            variant="filled"
            type="number"
            value={initialValues.percents}
            name="percents"
            sx={{ gridColumn: "span 4" }}
          />
          <h5>Ngày bắt đầu:</h5>
          <TextField
            fullWidth
            variant="filled"
            type="datetime-local"
            value={initialValues.startDate}
            name="startDate"
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
            value={initialValues.endDate}
            name="endDate"
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display="flex" justifyContent="center" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            {id ? "Cập nhật khuyến mãi" : "Thêm khuyến mãi"}
          </Button>
        </Box>
      </form>
      <ToastContainer />
    </Box>
  );
};

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
