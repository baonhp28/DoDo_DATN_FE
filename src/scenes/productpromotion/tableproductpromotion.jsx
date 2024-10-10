import { useEffect, useState, useMemo } from 'react';
import { Box, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, InputBase } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import axios from 'axios';
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const Tablepropromotion = ({ onSelectProductpromotion }) => {
    const [searchParams] = useSearchParams();
    const theme = useTheme();
    const navigate = useNavigate();
    const colors = tokens(theme.palette.mode);
    const [productpromotions, setProductpromotions] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/api/productpromotions')
            .then(response => {
                const dataWithId = response.data.map(productpromotion => ({
                    id: productpromotion.id,
                    productId: productpromotion.product?.name || "N/A",
                    promotionId: productpromotion.promotion?.promotionName || "N/A",
                }));
                dataWithId.sort((a, b) => b.id - a.id);
                setProductpromotions(dataWithId);
            })
            .catch(error => {
                console.error('Lỗi khi lấy dữ liệu:', error);
                setError('Có lỗi xảy ra khi lấy dữ liệu');
            });
    }, [searchParams]);

    const handleRowClick = (id) => {
        setSelectedIds(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(selectedId => selectedId !== id)
                : [...prevSelected, id]
        );

        const selectedProductpromotion = productpromotions.find(productpromotion => productpromotion.id === id);
        if (onSelectProductpromotion && selectedProductpromotion) {
            onSelectProductpromotion(selectedProductpromotion);
        }
    };

    const handleEditOrAddProduct = () => {
        if (selectedIds.length === 1) {
            navigate(`/admin/formproductpromotion/${selectedIds[0]}`, {
                state: { mode: "edit" }
            });
        } else {
            navigate(`/admin/formproductpromotion`, { state: { mode: "add" } });
        }
    };

    const handleDeleteProduct = () => {
        if (selectedIds.length > 0) {
            if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} SP_KM ?`)) {
                Promise.all(
                    selectedIds.map(id => axios.delete(`http://localhost:8080/api/productpromotions/${id}`))
                )
                    .then(() => {
                        setProductpromotions(prevProductpromotions => prevProductpromotions.filter(productpromotion => !selectedIds.includes(productpromotion.id)));
                        setSelectedIds([]);
                        toast.success("Đã xóa SP_KM thành công");
                    })
                    .catch(error => {
                        console.error('Lỗi khi xóa sản phẩm:', error);
                        toast.error("Đã xảy ra lỗi khi xóa sản phẩm");
                    });
            }
        } else {
            toast.error("Chưa chọn sản phẩm nào để xóa");
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProductpromotions = useMemo(() =>
        productpromotions.filter(productpromotion => {
            const productName = productpromotion.productId.toLowerCase();
            const promotionName = productpromotion.promotionId.toLowerCase();
            return productName.includes(searchTerm.toLowerCase()) || promotionName.includes(searchTerm.toLowerCase());
        }), [productpromotions, searchTerm]);

    const isSelected = (id) => selectedIds.includes(id);

    return (
        <Box m="20px">
            <Header title="SP_KM" subtitle="Bảng danh sách sản phẩm_khuyến mãi" />

            {error ? (
                <div>Lỗi: {error}</div>
            ) : (
                <>
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
                                onClick={handleEditOrAddProduct}
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
                                onClick={handleDeleteProduct}
                                sx={{ marginRight: '10px' }}
                            >
                                {selectedIds.length > 1 ? "Xóa những mục đã chọn" : "Xóa"}
                            </Button>
                        )}
                    </Box>
                    {productpromotions.length === 0 ? (
                        <div>Không có sản phẩm nào được tìm thấy.</div>
                    ) : (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
                                    <TableRow>
                                        <TableCell />
                                        <TableCell sx={{ color: 'white' }}>ID</TableCell>
                                        <TableCell sx={{ color: 'white' }}>ID khuyến mãi</TableCell>
                                        <TableCell sx={{ color: 'white' }}>ID sản phẩm</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredProductpromotions.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            onClick={() => handleRowClick(row.id)}
                                            sx={{
                                                cursor: 'pointer',
                                                '&:last-child td, &:last-child th': { border: 0 },
                                                backgroundColor: isSelected(row.id) ? colors.primary[300] : 'inherit',
                                                '&:hover': {
                                                    backgroundColor: colors.primary[200],
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
                                            <TableCell>{row.promotionId}</TableCell>
                                            <TableCell>{row.productId}</TableCell>
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

Tablepropromotion.propTypes = {
    onSelectProductpromotion: PropTypes.func
};

export default Tablepropromotion;
