import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../theme"; // Xóa import không cần thiết
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { deleteCookie } from "../../services/cookie";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const handleLogout = () => {
    deleteCookie("token");
    localStorage.clear();
    sessionStorage.clear();
    deleteCookie("role");
    localStorage.removeItem("userName");
    window.location.href = "/"; // Chuyển hướng về trang chủ sau khi đăng xuất
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      {/* Đã xóa phần này vì không sử dụng */}
      {/* <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Tìm kiếm..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <div className="dropdown">
            <Link className="nav-icon position-relative text-decoration-none"
              to="#"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span style={{ color: "gray" }}>
                <PersonOutlinedIcon />
              </span>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
