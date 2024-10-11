import { useEffect, useState } from 'react';
import { Box, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, InputBase } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import axios from 'axios';
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import PropTypes from 'prop-types';

const Promotions = ({ onSelectPromotion }) => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [promotions, setPromotions] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/promotions')
      .then(response => {
        const formatDateTime = (datetime) => {
          return datetime ? moment(datetime).format('YYYY-MM-DD HH:mm:ss') : "N/A";
        };

        const dataWithId = response.data.map(promotion => ({
          id: promotion.promotionID,
          name: promotion.promotionName,
          percents: promotion.percents,
          startDate: formatDateTime(promotion.startDate),
          endDate: formatDateTime(promotion.endDate),
        }));

        dataWithId.sort((a, b) => b.id - a.id);
        setPromotions(dataWithId);

        const id = params.id || searchParams.get("id") || null;
        if (id) {
          const initialSelection = dataWithId.find(promotion => promotion.id === id);
          if (initialSelection) {
            setSelectedIds([initialSelection.id]);
            if (onSelectPromotion) {
              onSelectPromotion(initialSelection);
            }
          }
        }
      });
  }, [searchParams, params.id, onSelectPromotion]);

  const handleRowClick = (id) => {
    setSelectedIds(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(selectedId => selectedId !== id)
        : [...prevSelected, id]
    );

    const selectedPromotion = promotions.find(promotion => promotion.id === id);
    if (onSelectPromotion && selectedPromotion) {
      onSelectPromotion(selectedPromotion);
    }
  };

  const handleEditOrAddPromotion = () => {
    if (selectedIds.length === 1) {
      navigate(`/admin/formpromotion/${selectedIds[0]}`, { state: { mode: "edit" } });
    } else {
      navigate(`/admin/formpromotion`, { state: { mode: "add" } });
    }
  };

  const handleDeletePromotion = () => {
    if (selectedIds.length > 0) {
      if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} khuyến mãi?`)) {
        Promise.all(
          selectedIds.map(id => axios.delete(`http://localhost:8080/api/promotions/${id}`))
        )
          .then(() => {
            setPromotions(prevPromotions => prevPromotions.filter(promotion => !selectedIds.includes(promotion.id)));
            setSelectedIds([]);
            toast.success("Đã xóa khuyến mãi thành công");
          });
      }
    } else {
      toast.error("Chưa chọn khuyến mãi nào để xóa");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPromotions = promotions.filter(promotion =>
    promotion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSelected = (id) => selectedIds.includes(id);

  return (
    <Box m="20px">
      <Header title="Khuyến mãi" subtitle="Bảng danh sách khuyến mãi" />
      
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        mb="20px"
        width="250px"
        height="35px"
      >
        <InputBase
          sx={{ ml: 1, flex: 1, py: 1 }}
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </Box>
      
      <Box display="flex" justifyContent="flex-end" mb="20px">
        {selectedIds.length <= 1 && (
          <Button
            type="button"
            color="secondary"
            variant="contained"
            onClick={handleEditOrAddPromotion}
            sx={{ marginRight: '10px' }}
          >
            {selectedIds.length === 1 ? "Sửa" : "Thêm mới"}
          </Button>
        )}
        {selectedIds.length > 0 && (
          <Button
            type="button"
            color="secondary"
            variant="contained"
            onClick={handleDeletePromotion}
            sx={{ marginRight: '10px' }}
          >
            {selectedIds.length > 1 ? "Xóa những mục đã chọn" : "Xóa"}
          </Button>
        )}
      </Box>

      {promotions.length === 0 ? (
        <div>Không có khuyến mãi nào được tìm thấy.</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
              <TableRow>
                <TableCell />
                <TableCell sx={{ color: 'white' }}>ID</TableCell>
                <TableCell sx={{ color: 'white' }}>Tên khuyến mãi</TableCell>
                <TableCell sx={{ color: 'white' }}>Phần trăm khuyến mãi</TableCell>
                <TableCell sx={{ color: 'white' }}>Ngày bắt đầu</TableCell>
                <TableCell sx={{ color: 'white' }}>Ngày kết thúc</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredPromotions.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => handleRowClick(row.id)}
                  sx={{
                    cursor: 'pointer',
                    '&:last-child td, &:last-child th': { border: 0 },
                    backgroundColor: isSelected(row.id) ? colors.primary[900] : 'inherit',
                    '&:hover': {
                      backgroundColor: colors.primary[900],
                    },
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected(row.id)}
                      onChange={() => handleRowClick(row.id)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.percents}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <ToastContainer />
    </Box>
  );
};

Promotions.propTypes = {
  onSelectPromotion: PropTypes.func,
};

export default Promotions;
