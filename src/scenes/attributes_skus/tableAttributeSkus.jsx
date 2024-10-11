import { useEffect, useState, useMemo } from 'react';
import { Box, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, InputBase, CircularProgress } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../component/Header";
import request from '../../config/ApiConfig/index';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const AttributeOptions = ({ onSelectAttributeOption }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const colors = tokens(theme.palette.mode);
    const [skus, setSkus] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedIds, setSelectedIds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [skusResponse, attributeOptionsResponse, attributeSkusResponse] = await Promise.all([
                    request({ method: 'GET', path: '/api/skus' }),
                    request({ method: 'GET', path: '/api/attribute-options' }),
                    request({ method: 'GET', path: '/api/attribute-skus' })
                ]);

                const attributeOptionsMap = attributeOptionsResponse.reduce((map, attribute) => {
                    if (attribute.id && attribute.value) {
                        map[attribute.id] = attribute.value;
                    }
                    return map;
                }, {});

                const skusMap = skusResponse.reduce((map, sku) => {
                    if (sku.id && sku.code) {
                        map[sku.id] = sku.code;
                    }
                    return map;
                }, {});

                const dataWithId = attributeSkusResponse.map(option => {
                    const skusCode = option.skusId && Object.prototype.hasOwnProperty.call(skusMap, option.skusId)
                        ? skusMap[option.skusId]
                        : 'N/A';

                    const attributeValue = option.attributeOptionId && Object.prototype.hasOwnProperty.call(attributeOptionsMap, option.attributeOptionId)
                        ? attributeOptionsMap[option.attributeOptionId]
                        : 'N/A';

                    return {
                        id: option.id || 'N/A',
                        skusCode,
                        attributeValue
                    };
                }).filter(option => option.id !== 'N/A');

                // Sắp xếp dữ liệu theo thứ tự giảm dần của `id`
                const sortedDataWithId = dataWithId.sort((a, b) => b.id - a.id);

                setSkus(sortedDataWithId);
                setLoading(false);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDeleteAttributeOption = () => {
        if (selectedIds.length > 0) {
            if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} SKU không?`)) {
                Promise.all(
                    selectedIds.map(id => request({
                        method: 'DELETE',
                        path: `/api/attribute-skus/${id}`,
                    }))
                )
                    .then(() => {
                        setSkus(prevOptions => prevOptions.filter(option => !selectedIds.includes(option.id)));
                        setSelectedIds([]);
                        toast.success("Xóa thành công các SKU");
                    })
                    .catch(error => {
                        console.error('Lỗi khi xóa các SKU:', error);
                        toast.error("Đã xảy ra lỗi khi xóa các SKU");
                    });
            }
        } else {
            toast.error("Không có SKU nào được chọn để xóa");
        }
    };

    const handleEditOrAddProduct = () => {
        if (selectedIds.length === 1) {
            navigate(`/admin/formAttributSkus/${selectedIds[0]}`, {
                state: { mode: "edit" }
            });
        } else {
            navigate(`/admin/formAttributSkus`, { state: { mode: "add" } });
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredOptions = useMemo(() =>
        skus.filter(option =>
            option.skusCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            option.attributeValue.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [skus, searchTerm]
    );

    const handleRowClick = (id) => {
        setSelectedIds(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(selectedId => selectedId !== id)
                : [...prevSelected, id]
        );

        const selectedOption = skus.find(option => option.id === id);
        if (onSelectAttributeOption && selectedOption) {
            onSelectAttributeOption(selectedOption);
        }
    };

    const isSelected = (id) => selectedIds.includes(id);

    return (
        <Box m="20px">
            <Header title="Liên Kết Thuộc Tính" subtitle="Danh sách liên kết thuộc tính" />

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
                            onClick={handleDeleteAttributeOption}
                            sx={{ marginRight: '10px' }}
                        >
                            {selectedIds.length > 1 ? "Xóa những mục đã chọn" : "Xóa"}
                        </Button>
                    )}
                </Box>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
                                <TableRow>
                                    <TableCell />
                                    <TableCell sx={{ color: 'white' }}>ID</TableCell>
                                    <TableCell sx={{ color: 'white' }}>Mã SKU</TableCell>
                                    <TableCell sx={{ color: 'white' }}>Tên thuộc tính</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredOptions.map((row) => (
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
                                        <TableCell>{row.skusCode}</TableCell>
                                        <TableCell>{row.attributeValue}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </>
            <ToastContainer />
        </Box>
    );
};

AttributeOptions.propTypes = {
    onSelectAttributeOption: PropTypes.func
};

export default AttributeOptions;
