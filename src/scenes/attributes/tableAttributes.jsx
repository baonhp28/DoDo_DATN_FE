import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, InputBase } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import useTheme riêng
import { tokens } from "../../theme";
import Header from "../../component/Header";
import axios from 'axios';
import { useSearchParams, useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Attributes = ({ onSelectAttribute }) => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [attributes, setAttributes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/attributes')
      .then(response => {
        const dataWithId = response.data.map(attribute => ({
          id: attribute.id,
          name: attribute.name,
        }));
        dataWithId.sort((a, b) => b.id - a.id);
        setAttributes(dataWithId);

        const id = params.id || searchParams.get("id") || null;
        if (id) {
          const initialSelection = dataWithId.find(attribute => attribute.id === id);
          if (initialSelection) {
            setSelectedIds([initialSelection.id]);
            if (onSelectAttribute) {
              onSelectAttribute(initialSelection);
            }
          }
        }
      })
      .catch(error => {
        console.error('Lỗi khi tải dữ liệu:', error);
        setError(error.message);
      });
  }, [searchParams, params.id, onSelectAttribute]);

  const handleRowClick = (id) => {
    setSelectedIds(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(selectedId => selectedId !== id)
        : [...prevSelected, id]
    );
    const selectedAttribute = attributes.find(attribute => attribute.id === id);
    if (onSelectAttribute && selectedAttribute) {
      onSelectAttribute(selectedAttribute);
    }
  };

  const handleEditOrAddAttribute = () => {
    if (selectedIds.length === 1) {
      navigate(`/admin/formAttributes/${selectedIds[0]}`, { state: { mode: "edit" } });
    } else {
      navigate(`/admin/formAttributes`, { state: { mode: "add" } });
    }
  };

  const handleDeleteAttribute = () => {
    if (selectedIds.length > 0) {
      if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} thuộc tính?`)) {
        Promise.all(
          selectedIds.map(id => axios.delete(`http://localhost:8080/api/attributes/${id}`))
        )
          .then(() => {
            setAttributes(prevAttributes => prevAttributes.filter(attribute => !selectedIds.includes(attribute.id)));
            setSelectedIds([]);
            toast.success("Đã xóa thuộc tính thành công");
          })
          .catch(error => {
            console.error('Lỗi khi xóa thuộc tính:', error);
            toast.error("Đã xảy ra lỗi khi xóa thuộc tính");
          });
      }
    } else {
      toast.error("Chưa chọn thuộc tính nào để xóa");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredAttributes = attributes.filter(attribute =>
    attribute.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSelected = (id) => selectedIds.includes(id);

  return (
    <Box m="20px">
      <Header title="Thuộc tính" subtitle="Bảng danh sách thuộc tính" />
      {error ? (
        <div>Lỗi: {error}</div>
      ) : (
        <>
          <Box display="flex" mb="20px" width="250px" height="35px">
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
                onClick={handleEditOrAddAttribute}
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
                onClick={handleDeleteAttribute}
                sx={{ marginRight: '10px' }}
              >
                {selectedIds.length > 1 ? "Xóa những mục đã chọn" : "Xóa"}
              </Button>
            )}
          </Box>
          {attributes.length === 0 ? (
            <div>Không có thuộc tính nào được tìm thấy.</div>
          ) : (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
                  <TableRow>
                    <TableCell />
                    <TableCell sx={{ color: 'white' }}>ID</TableCell>
                    <TableCell sx={{ color: 'white' }}>Tên thuộc tính</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAttributes.map((row) => (
                    <TableRow
                      key={row.id}
                      onClick={() => handleRowClick(row.id)}
                      sx={{
                        cursor: 'pointer',
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </>
      )}
      <ToastContainer />
    </Box>
  );
};

Attributes.propTypes = {
  onSelectAttribute: PropTypes.func,
};

export default Attributes;
