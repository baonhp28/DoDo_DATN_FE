// import { useEffect, useState } from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import Header from "../../component/Header";
// import { useNavigate } from "react-router-dom";

// const Employee = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       alert("Vui lòng đăng nhập.");
//       navigate("/login");
//       return; // Ngăn không cho tiếp tục
//     }

//     fetch("http://localhost:8080/api/admin/users", {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setEmployees(data);
//         } else {
//           throw new Error("Invalid user data received from the API.");
//         }
//       })
//       .catch((error) => {
//         console.error("Lỗi xảy ra:", error);
//         alert("Bạn không có quyền truy cập.");
//       });
//   }, [navigate]);

//   const handleRowClick = (id) => {
//     navigate(`/admin/employee/${id}`); // Chuyển hướng đến form thông tin với ID
//   };

//   return (
//     <Box m="20px">
//       <Header title="Khách Hàng" subtitle="Danh sách khách hàng" />

//       <Box m="40px 0 0 0" height="75vh">
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>Tên người dùng</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Họ và tên</TableCell>
//                 <TableCell>Giới tính</TableCell>
//                 <TableCell>Số điện thoại</TableCell>
//                 <TableCell>Trạng thái</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {employees.map((employee) => (
//                 <TableRow key={employee.id} onClick={() => handleRowClick(employee.id)} style={{ cursor: 'pointer' }}>
//                   <TableCell>{employee.id}</TableCell>
//                   <TableCell>{employee.username}</TableCell>
//                   <TableCell>{employee.email}</TableCell>
//                   <TableCell>{employee.fullName}</TableCell>
//                   <TableCell>{employee.gender ? "Nam" : "Nữ"}</TableCell>
//                   <TableCell>{employee.phone}</TableCell>
//                   <TableCell>{employee.status ? "Hoạt động" : "Khóa"}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </Box>
//   );
// };

// export default Employee;


import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import Header from "../../component/Header";
import { useNavigate } from "react-router-dom";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Vui lòng đăng nhập.");
      navigate("/login");
      return;
    }

    fetch("http://localhost:8080/api/admin/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setEmployees(data);
        } else {
          throw new Error("Dữ liệu người dùng không hợp lệ từ API.");
        }
      })
      .catch((error) => {
        console.error("Lỗi xảy ra:", error);
        alert("Bạn không có quyền truy cập.");
      });
  }, [navigate]);

  const handleRowClick = (id, currentStatus) => {
    console.log("Current status:", currentStatus); // Kiểm tra giá trị
    setEditingEmployeeId(id);
    setSelectedStatus(currentStatus ? "Hoạt động" : "Ngừng hoạt động");
  };

  const handleStatusChange = (event) => {
    const newValue = event.target.value;
    console.log("Selected status:", newValue); // Log để kiểm tra giá trị
    setSelectedStatus(newValue);
  };


  const handleSave = (id) => {
    const token = localStorage.getItem("token");

    console.log("ID:", id);
    console.log("Selected status:", selectedStatus); // Kiểm tra giá trị
    const updatedStatus = selectedStatus === "Hoạt động" ? true : false;
    console.log("ID:", id);
    console.log("Updated Status:", updatedStatus);
    console.log("Token:", token);

    fetch(`http://localhost:8080/api/admin/users/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: updatedStatus }), // Gửi boolean
    })
      .then((response) => {
        console.log("Response status:", response.status); // Log thêm thông tin phản hồi
        if (!response.ok) {
          throw new Error("Cập nhật thất bại.");
        }
        return response.json();
      })
      .then((data) => {
        console.log("API response:", data); // Xem kết quả trả về từ API
        alert("Cập nhật thành công!");

        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) =>
            employee.id === id ? { ...employee, status: updatedStatus } : employee
          )
        );
        setEditingEmployeeId(null);
      })
      .catch((error) => {
        console.error("Lỗi xảy ra:", error);
        alert("Cập nhật thất bại.");
      });
  };


  return (
    <Box m="20px">
      <Header title="Khách Hàng" subtitle="Danh sách khách hàng" />

      <Box m="40px 0 0 0" height="75vh">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Tên người dùng</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Họ và tên</TableCell>
                <TableCell>Giới tính</TableCell>
                <TableCell>Số điện thoại</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell>Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow key={employee.id} onClick={() => handleRowClick(employee.id, employee.status)} style={{ cursor: 'pointer' }}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.username}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.fullName}</TableCell>
                  <TableCell>{employee.gender ? "Nam" : "Nữ"}</TableCell>
                  <TableCell>{employee.phone}</TableCell>
                  <TableCell>
                    {editingEmployeeId === employee.id ? (
                      <Select value={selectedStatus} onChange={handleStatusChange}>
                        <MenuItem value="Hoạt động">Hoạt động</MenuItem>
                        <MenuItem value="Ngừng hoạt động">Ngừng hoạt động</MenuItem>
                      </Select>
                    ) : employee.status ? "Hoạt động" : "Ngừng hoạt động"}
                  </TableCell>

                  <TableCell>
                    {editingEmployeeId === employee.id && (
                      <Button onClick={() => handleSave(employee.id)}>Lưu</Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Employee;
