import { useEffect, useState } from 'react'; 
import { Box, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, InputBase } from "@mui/material"; 
import { tokens } from "../../theme"; 
import Header from "../../component/Header"; 
import axios from 'axios'; 
import { useSearchParams, useParams, useNavigate } from "react-router-dom"; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import PropTypes from 'prop-types'; 

const Category = ({ onSelectCategory }) => {
    const [searchParams] = useSearchParams(); 
    const params = useParams(); 
    const theme = useTheme(); 
    const navigate = useNavigate(); 
    const colors = tokens(theme.palette.mode); 
    const [categories, setCategories] = useState([]); 
    const [selectedIds, setSelectedIds] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(''); 

    useEffect(() => {
        // Lấy danh sách các loại từ API
        axios.get('http://localhost:8080/api/categories')
            .then(response => {
                // Xử lý dữ liệu nhận được từ API
                const dataWithId = response.data.map(category => ({
                    id: category.categoryId,  
                    name: category.categoryName, 
                    img: category.img, 
                    description: category.description 
                }));

                dataWithId.sort((a, b) => b.id - a.id); // Sắp xếp các loại theo ID giảm dần

                setCategories(dataWithId); // Cập nhật danh sách các loại

                const id = params.id || searchParams.get("id") || null; 
                if (id) {
                    const initialSelection = dataWithId.find(category => category.id === id); 
                    if (initialSelection) {
                        setSelectedIds([initialSelection.id]); 
                        if (onSelectCategory) {
                            onSelectCategory(initialSelection); 
                        }
                    }
                }
            })
            .catch(error => {
                console.error('Lỗi khi tải dữ liệu:', error);
            });
    }, [searchParams, params.id, onSelectCategory]); 

    useEffect(() => {
        const timer = setTimeout(() => {
        }, 5000);

        return () => clearTimeout(timer); 
    }, [categories]); 

    const handleRowClick = (id) => {
        setSelectedIds(prevSelected =>
            prevSelected.includes(id)
                ? prevSelected.filter(selectedId => selectedId !== id) 
                : [...prevSelected, id] 
        );

        const selectedCategory = categories.find(category => category.id === id); 
        if (onSelectCategory && selectedCategory) {
            onSelectCategory(selectedCategory); 
        }
    };

    const handleEditOrAddCategory = () => {
        if (selectedIds.length === 1) {
            navigate(`/admin/category/${selectedIds[0]}`, { state: { mode: "edit" } }); 
        } else {
            navigate(`/admin/category`, { state: { mode: "add" } }); 
        }
    };

    const handleDeleteCategory = () => {
        if (selectedIds.length > 0) {
            if (window.confirm(`Bạn có chắc chắn muốn xóa ${selectedIds.length} loại?`)) {
                Promise.all(
                    selectedIds.map(id => axios.delete(`http://localhost:8080/api/categories/${id}`)) 
                )
                    .then(() => {
                        console.log("Đã xóa các loại thành công");
                        setCategories(prevCategories => prevCategories.filter(category => !selectedIds.includes(category.id))); 
                        setSelectedIds([]); 
                        toast.success("Đã xóa loại thành công"); 
                    })
                    .catch(error => {
                        console.error('Lỗi khi xóa loại:', error);
                        toast.error("Đã xảy ra lỗi khi xóa loại"); 
                    });
            }
        } else {
            toast.error("Chưa chọn loại nào để xóa"); 
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value); 
    };

    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    const isSelected = (id) => selectedIds.includes(id); 

    return (
        <Box m="20px">
            <Header title="Loại" subtitle="Bảng danh sách loại" /> 

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
                        onClick={handleEditOrAddCategory} 
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
                        onClick={handleDeleteCategory} 
                        sx={{ marginRight: '10px' }}
                    >
                        {selectedIds.length > 1 ? "Xóa những mục đã chọn" : "Xóa"} 
                    </Button>
                )}
            </Box>
            {categories.length === 0 ? (
                <div>Không có loại nào được tìm thấy.</div> 
            ) : (
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: colors.blueAccent[700] }}>
                            <TableRow>
                                <TableCell /> 
                                <TableCell sx={{ color: 'white' }}>ID</TableCell> 
                                <TableCell sx={{ color: 'white' }}>Tên loại</TableCell> 
                                <TableCell sx={{ color: 'white' }}>Mô tả</TableCell> 
                                <TableCell sx={{ color: 'white' }}>Hình ảnh</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredCategories.map((category) => (
                                <TableRow
                                    key={category.id}
                                    sx={{
                                        backgroundColor: isSelected(category.id) ? colors.grey[300] : 'transparent', 
                                        '&:last-child td, &:last-child th': { border: 0 },
                                    }}
                                    onClick={() => handleRowClick(category.id)} 
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox checked={isSelected(category.id)} /> 
                                    </TableCell>
                                    <TableCell>{category.id}</TableCell> 
                                    <TableCell>{category.name}</TableCell> 
                                    <TableCell>{category.description}</TableCell> 
                                    <TableCell>
                                        <img src={category.img} alt={category.name} style={{ width: '50px', height: '50px' }} /> 
                                    </TableCell>
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

Category.propTypes = {
    onSelectCategory: PropTypes.func, 
};

export default Category; 
