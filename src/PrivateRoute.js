import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ allowedRoles, children }) => {
  const location = useLocation();
  const userRole = localStorage.getItem("role"); // Lấy vai trò từ localStorage

  console.log("User Role:", userRole); // Log để kiểm tra vai trò người dùng

  // Kiểm tra nếu người dùng không có quyền truy cập vào route này
  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Nếu người dùng có quyền, render component con
  return children;
};

PrivateRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
