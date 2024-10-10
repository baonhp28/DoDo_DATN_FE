import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import userImg from "../../assets/img/ronaldo.jpg";
import PropTypes from 'prop-types';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 20px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Quản Lý
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                {/* <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={userImg}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                /> */}
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Siuuuuu
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Quản lý
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "0%"}>
            <Item
              title="Trang Chủ"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <SubMenu
              title="Quản lý khách hàng"
              icon={<PeopleOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách khách hàng"
                to="/admin/employee"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />              
            </SubMenu>

            <SubMenu
              title="Quản lý khuyến mãi"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách khuyến mãi"
                to="/admin/tablepromotion"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu khuyến mãi"
                to="/admin/formpromotion"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Quản lý sản phẩm"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách sản phẩm"
                to="/admin/tableproduct"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu sản phẩm"
                to="/admin/formproduct"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Quản lý SP_KM"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách SP_KM"
                to="/admin/tableproductpromotion"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu SP_KM"
                to="/admin/formproductpromotion"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Quản lý loại"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách loại"
                to="/admin/tablecategory"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu loại"
                to="/admin/category"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Quản lý Thuộc Tính"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách thuộc tính"
                to="/admin/tableAttributes"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu thuộc tính"
                to="/admin/formAttributes"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title=" Giá Trị Thuộc Tính"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách giá trị thuộc tính"
                to="/admin/tableAttributeOption"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu giá trị thuộc tính"
                to="/admin/formAttributeOption"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Giá Sản Phẩm"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách"
                to="/admin/tableSkus"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu"
                to="/admin/formSkus"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Liên kết thuộc tính"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách"
                to="/admin/tableAttributSkus"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Biểu mẫu"
                to="/admin/formAttributSkus"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu
              title="Quản lý hóa đơn"
              icon={<PersonOutlinedIcon />}
              style={{ color: colors.grey[300] }}
            >
              <Item
                title="Danh sách hóa đơn"
                to="/admin/invoices"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />              
            </SubMenu>          
        </Box>
      </Menu>
    </ProSidebar>
  </Box>
);
};

export default Sidebar;
