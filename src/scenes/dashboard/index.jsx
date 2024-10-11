import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  IconButton,
} from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../component/Header";
import StatBox from "../../component/StatBox";
import request from "../../config/ApiConfig";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [reports, setReports] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [years, setYears] = useState([]);

  const months = [
    { value: "1", label: "Tháng 1" },
    { value: "2", label: "Tháng 2" },
    { value: "3", label: "Tháng 3" },
    { value: "4", label: "Tháng 4" },
    { value: "5", label: "Tháng 5" },
    { value: "6", label: "Tháng 6" },
    { value: "7", label: "Tháng 7" },
    { value: "8", label: "Tháng 8" },
    { value: "9", label: "Tháng 9" },
    { value: "10", label: "Tháng 10" },
    { value: "11", label: "Tháng 11" },
    { value: "12", label: "Tháng 12" },
  ];

  const fetchProductCount = async () => {
    try {
      const response = await request({
        method: "GET",
        path: "/api/statistics/products",
      });
      console.log("Product Count:", response);
      setProductCount(response);
    } catch (error) {
      console.error("Error fetching product count:", error);
    }
  };

  const fetchOrderCount = async () => {
    try {
      const response = await request({
        method: "GET",
        path: "/api/statistics/orders",
      });
      console.log("Order Count:", response);
      setOrderCount(response);
    } catch (error) {
      console.error("Error fetching order count:", error);
    }
  };

  const fetchCustomerCount = async () => {
    try {
      const response = await request({
        method: "GET",
        path: "/api/statistics/customers",
      });
      console.log("Customer Count:", response);
      setCustomerCount(response);
    } catch (error) {
      console.error("Error fetching customer count:", error);
    }
  };

  const fetchRevenue = async () => {
    try {
      const response = await request({
        method: "GET",
        path: "/api/statistics/revenue",
      });
      console.log("Revenue:", response);
      setRevenue(response);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  const fetchMonthlySalesData = async () => {
    try {
      const response = await request({
        method: "GET",
        path: `/api/statistics/monthlySales?month=${month}&year=${year}`,
      });
      console.log("Monthly Sales Data:", response);
      const formattedData = response.map((item) => ({
        name: item[0],
        quantity: item[1],
        revenue: item[2],
      }));
      setReports(formattedData);
    } catch (error) {
      console.error("Error fetching monthly sales data:", error);
      setReports([]);
    }
  };

  const handleSearch = () => {
    fetchMonthlySalesData();
  };

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    setMonth(currentMonth.toString());
    setYear(currentYear.toString());

    fetchProductCount();
    fetchOrderCount();
    fetchCustomerCount();
    fetchRevenue();
  }, []);

  useEffect(() => {
    const generateYears = (startYear, endYear) => {
      const yearsArray = [];
      for (let year = startYear; year <= endYear; year++) {
        yearsArray.push({ value: year.toString(), label: year.toString() });
      }
      return yearsArray;
    };

    const currentYear = new Date().getFullYear();
    const startYear = 2020;
    const futureYears = 10;
    const endYear = currentYear + futureYears;
    setYears(generateYears(startYear, endYear));
  }, []);

  const handlePreviousMonth = () => {
    let newMonth = parseInt(month) - 1;
    let newYear = parseInt(year);
    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }
    setMonth(newMonth.toString());
    setYear(newYear.toString());
  };

  const handleNextMonth = () => {
    let newMonth = parseInt(month) + 1;
    let newYear = parseInt(year);
    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }
    setMonth(newMonth.toString());
    setYear(newYear.toString());
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Trang chủ" subtitle="Bảng điều khiển > Trang chủ" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={productCount}
            subtitle="Sản phẩm"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={orderCount}
            subtitle="Đơn hàng"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={customerCount}
            subtitle="Khách hàng"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={revenue}
            subtitle="Doanh thu"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* Add your content here */}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          {/* Add your content here */}
        </Box>
      </Box>

      {/* MONTHLY SALES REPORT */}
      <Box mt="40px">
        <Typography variant="h4" gutterBottom>
          Báo cáo bán hàng theo tháng
        </Typography>
        <Box display="flex" alignItems="center" mb="20px">
          <IconButton onClick={handlePreviousMonth}>
            <ArrowLeftIcon />
          </IconButton>
          <TextField
            select
            label="Tháng"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            variant="outlined"
            style={{ marginRight: "10px", width: "120px" }}
          >
            {months.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Năm"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            variant="outlined"
            style={{ marginRight: "10px", width: "120px" }}
          >
            {years.map((yearOption) => (
              <MenuItem key={yearOption.value} value={yearOption.value}>
                {yearOption.label}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="contained" onClick={handleSearch}>
            Tìm kiếm
          </Button>
          <IconButton onClick={handleNextMonth}>
            <ArrowRightIcon />
          </IconButton>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Tên sản phẩm</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell>Doanh thu</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report, index) => (
                <TableRow key={index}>
                  <TableCell>{report.name}</TableCell>
                  <TableCell>{report.quantity}</TableCell>
                  <TableCell>{report.revenue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
