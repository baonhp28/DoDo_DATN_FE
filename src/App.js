import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Admin from "./MainAdmin";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Employee from "./scenes/employee";
import EmployeeForm from "./scenes/employeeForm";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";
import TBCategory from "./scenes/category/tablecategorie";
import FOCategory from "./scenes/category/formcategories";
import TBPromotion from "./scenes/promotion/tablepromotion";
import FOPromotion from "./scenes/promotion/formpromotinon";
import FormProductpromotion from "./scenes/productpromotion/formproducpromotion";
import TableProductpromotion from "./scenes/productpromotion/tableproductpromotion";
import TableProduct from "./scenes/products/tableproduct";
import FormProduct from "./scenes/products/formproduct";
import FormAttribute from "./scenes/attributes/formAttributes";
import TableAttribute from "./scenes/attributes/tableAttributes";
import FormAttributeOption from "./scenes/attributes_option/formAttributesOption";
import TableAttributeOption from "./scenes/attributes_option/tableAttributeOption";
import TableSkus from "./scenes/skus/tableSkus";
import FormSkus from "./scenes/skus/formSkus";
import FormAttributeSkus from "./scenes/attributes_skus/formAttributeSkus";
import TableAttributeSkus from "./scenes/attributes_skus/tableAttributeSkus";
import PrivateRoute from "./PrivateRoute";

// DATN Components (user-facing)
import Login from './helo1/login.jsx';
import Nav from "./helo1/nav";
import Cart from "./helo1/cart";
import Checkout from "./helo1/checkout";
import About from "./helo1/about_us";
import Contact from "./helo1/contact";
import Service from "./helo1/service-2";
import Faq from "./helo1/faq";
import Loi from "./helo1/404";
import Wishlist from "./helo1/wishlist";
import Compare from "./helo1/compare";
import My_account from "./helo1/my-account";
import Portfolio from "./helo1/portfolio";
import Blog from "./helo1/blog";
import Blog_details from "./helo1/blog_details";
import Shop_left_sideber from './helo1/shopleftsidebar.jsx';
import Product_details from './helo1/product-details.jsx';
// Điều chỉnh đường dẫn cho đúng

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for Admin */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute allowedRoles={["1"]}>
              {" "}
              {/* Sử dụng ID vai trò làm chuỗi */}
              <Admin />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Dashboard />} />
          <Route path="team" element={<Team />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="form" element={<Form />} />
          <Route path="bar" element={<Bar />} />
          <Route path="pie" element={<Pie />} />
          <Route path="line" element={<Line />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="geography" element={<Geography />} />
          <Route path="employee" element={<Employee />} />
          <Route path="tablecategory" element={<TBCategory />} />
          <Route path="category" element={<FOCategory />} />
          <Route path="category/:id" element={<FOCategory />} />

          {/* Product Promotion */}
          <Route
            path="formproductpromotion"
            element={<FormProductpromotion />}
          />
          <Route
            path="formproductpromotion/:id"
            element={<FormProductpromotion />}
          />
          <Route
            path="tableproductpromotion"
            element={<TableProductpromotion />}
          />

          {/* Products */}
          <Route path="tableproduct" element={<TableProduct />} />
          <Route path="formproduct" element={<FormProduct />} />
          <Route path="formproduct/:id" element={<FormProduct />} />

          {/* Promotion */}
          <Route path="tablepromotion" element={<TBPromotion />} />
          <Route path="formpromotion" element={<FOPromotion />} />
          <Route path="formpromotion/:id" element={<FOPromotion />} />

          {/* Attributes */}
          <Route path="tableAttributes" element={<TableAttribute />} />
          <Route path="formAttributes" element={<FormAttribute />} />
          <Route path="formAttributes/:id" element={<FormAttribute />} />

          {/* SKUs */}
          <Route path="tableSkus" element={<TableSkus />} />
          <Route path="formSkus" element={<FormSkus />} />
          <Route path="formSkus/:id" element={<FormSkus />} />

          {/* Attribute-SKUs */}
          <Route path="tableAttributSkus" element={<TableAttributeSkus />} />
          <Route path="formAttributSkus" element={<FormAttributeSkus />} />
          <Route path="formAttributSkus/:id" element={<FormAttributeSkus />} />

          {/* Attributes Option */}
          <Route
            path="tableAttributeOption"
            element={<TableAttributeOption />}
          />
          <Route path="formAttributeOption" element={<FormAttributeOption />} />
          <Route
            path="formAttributeOption/:id"
            element={<FormAttributeOption />}
          />

          <Route path="employeeForm/:id" element={<EmployeeForm />} />
          <Route path="employeeForm" element={<EmployeeForm />} />
        </Route>

        {/* User Routes */}
        <Route element={<MainLayout />}>
        <Route path="/" element={<Nav />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Shop_left_sideber" element={<Shop_left_sideber />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog_details" element={<Blog_details />} />
        <Route path="/404" element={<Loi />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Product_details" element={<Product_details />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/my-account" element={<My_account />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop-left-sidebar" element={<Shop_left_sideber />} />
        <Route path="*" element={<Loi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
