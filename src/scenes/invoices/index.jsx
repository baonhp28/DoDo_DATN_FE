import {
  Box,
  useTheme,
  MenuItem,
  Select,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Checkbox,
} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import request from "../../config/ApiConfig/index";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [invoices, setInvoices] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [status, setStatus] = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await request({
          method: "GET",
          path: "/api/orders",
        });

        const formattedData = response.map((invoice) => ({
          id: invoice.orderId,
          orderId: invoice.orderId,
          username: invoice.user.username,
          employee: invoice?.username || "N/A",
          payment: invoice?.payment?.paymentName || "N/A",
          orderDate: new Date(invoice.orderDate).toLocaleDateString(),
          totalAmount: invoice.totalAmount,
          shippingFee: invoice.shippingFee.toFixed(2),
          status: invoice.status,
          orderDetails: invoice.orderDetails || [],
          address: invoice.address || "N/A",
          phone: invoice.phone,
        }));

        setInvoices(formattedData);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleUpdateStatus = async () => {
    try {
      if (selectedIds.length === 0) {
        alert("Vui lòng chọn ít nhất một hóa đơn.");
        return;
      }

      if (!status) {
        alert("Vui lòng chọn trạng thái.");
        return;
      }

      const ordersToUpdate = invoices
        .filter((invoice) => selectedIds.includes(invoice.id))
        .map((invoice) => ({
          orderId: invoice.id,
          status: status,
        }));

      await request({
        method: "POST",
        path: "/api/orders/updateStatus",
        data: ordersToUpdate,
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Refresh the invoices
      const response = await request({
        method: "GET",
        path: "/api/orders",
      });

      const formattedData = response.map((invoice) => ({
        id: invoice.orderId,
        orderId: invoice.orderId,
        username: invoice.user.username,
        employee: invoice?.username || "N/A",
        payment: invoice?.payment?.paymentName || "N/A",
        orderDate: new Date(invoice.orderDate).toLocaleDateString(),
        totalAmount: invoice.totalAmount,
        shippingFee: invoice.shippingFee.toFixed(2),
        status: invoice.status,
        orderDetails: invoice.orderDetails || [],
        address: invoice.address || "N/A",
        phone: invoice.phone,
      }));

      setInvoices(formattedData);
      setSelectedIds([]);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleViewDetails = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleCloseDetails = () => {
    setSelectedInvoice(null);
  };

  const sortAttributes = (attributes) => {
    const order = ["màu", "RAM", "dung lượng"];
    return attributes.sort((a, b) => {
      const aIndex = order.indexOf(a.attributeOption.value.toLowerCase());
      const bIndex = order.indexOf(b.attributeOption.value.toLowerCase());
      return aIndex - bIndex;
    });
  };

  const calculateTotalAmount = (orderDetails) => {
    return orderDetails.reduce(
      (total, detail) => total + detail.skus.price * detail.quantity,
      0
    );
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <Box m="20px">
      <Header title="Hóa Đơn" subtitle="Danh sách hóa đơn" />
      <Box display="flex" alignItems="center" mb="20px">
        <Typography variant="h6" sx={{ mr: "20px" }}>
          Cập nhật trạng thái:
        </Typography>
        <Select
          value={status}
          onChange={handleStatusChange}
          displayEmpty
          inputProps={{ "aria-label": "Select Status" }}
        >
          <MenuItem value="" disabled="true">
            Chọn trạng thái
          </MenuItem>
          <MenuItem value="Chờ xác nhận">Chờ xác nhận</MenuItem>
          <MenuItem value="Đang vận chuyển">Đang vận chuyển</MenuItem>
          <MenuItem value="Đã nhận">Đã nhận</MenuItem>
          <MenuItem value="Đã hủy">Đã hủy</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdateStatus}
          sx={{ ml: "20px" }}
        >
          Cập nhật trạng thái
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        sx={{
          "& .MuiTableContainer-root": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedIds(invoices.map((invoice) => invoice.id));
                      } else {
                        setSelectedIds([]);
                      }
                    }}
                    checked={selectedIds.length === invoices.length}
                  />
                </TableCell>
                <TableCell>Mã</TableCell>
                <TableCell>Tài khoản</TableCell>
                <TableCell>Tên khách hàng</TableCell>
                <TableCell>Địa chỉ</TableCell>
                <TableCell>Tổng tiền</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Chi tiết</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow
                  key={invoice.id}
                  onClick={() => handleSelectRow(invoice.id)}
                  selected={selectedIds.includes(invoice.id)}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: selectedIds.includes(invoice.id)
                      ? colors.primary[700]
                      : "inherit",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedIds.includes(invoice.id)}
                      onChange={() => handleSelectRow(invoice.id)}
                    />
                  </TableCell>
                  <TableCell>{invoice.orderId}</TableCell>
                  <TableCell>{invoice.username}</TableCell>
                  <TableCell>{invoice.employee}</TableCell>
                  <TableCell>{invoice.address}</TableCell>
                  <TableCell>{invoice.totalAmount}</TableCell>
                  <TableCell>{invoice.status}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleViewDetails(invoice)}>
                      <InfoIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {selectedInvoice && (
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            zIndex: 1300,
          }}
        >
          <Typography variant="h4" component="div">
            <h4>
              <strong>Chi tiết hóa đơn</strong>
            </h4>
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <strong>Họ tên:</strong> {selectedInvoice.employee}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <strong>Số điện thoại:</strong> {selectedInvoice.phone || "N/A"}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <strong>Địa chỉ:</strong> {selectedInvoice.address || "N/A"}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <strong>Phí ship:</strong> {selectedInvoice.shippingFee} VND
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1rem" }}>
              <strong>Phương thức thanh toán:</strong>{" "}
              {selectedInvoice.payment || "N/A"}
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tên sản phẩm</TableCell>
                <TableCell>Cấu hình</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell>Đơn giá</TableCell>
                <TableCell>Thành tiền</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedInvoice.orderDetails.map((detail) => (
                <TableRow key={detail.id}>
                  <TableCell>
                    <Typography>
                      {detail.skus?.product?.name || "N/A"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {sortAttributes(detail.skus?.attributesSkus || []).map(
                      (attribute) => (
                        <Typography key={attribute.id}>
                          {attribute.attributeOption?.attributes?.name || "N/A"}
                          : {attribute.attributeOption?.value || "N/A"}
                        </Typography>
                      )
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography>{detail.quantity || "N/A"}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{detail.skus.price || "N/A"}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {detail.skus.price * detail.quantity || "N/A"}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography sx={{ fontSize: "1rem", mt: 3 }}>
            <h6>
              <strong>Tổng: </strong>{" "}
              <strong>
                {formatCurrency(
                  calculateTotalAmount(selectedInvoice.orderDetails)
                )}
              </strong>
            </h6>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, float: "inline-end" }}
            onClick={handleCloseDetails}
          >
            Đóng
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Invoices;
