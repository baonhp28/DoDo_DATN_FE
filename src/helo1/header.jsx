// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';


// function Header() {
//     const [isSubMenuOpen, setSubMenuOpen] = useState(false);

//     const handleMenuClick = () => {
//         setSubMenuOpen(!isSubMenuOpen);
//     };
//     return (


//         <div >
//             <div className="site-wrapper">
//                 <header className="header petmark-header-1">
//                     <div className="header-wrapper">

//                         <div className="header-top bg-ash">
//                             <div className="container">
//                                 <div className="row align-items-center">
//                                     <div className="col-sm-6 text-center text-sm-start">
//                                         <p className="font-weight-300">Welcome to Acacia Pet Food</p>
//                                     </div>
//                                     <div className="col-sm-6">
//                                         <div className="header-top-nav right-nav">
//                                             <div className="nav-item slide-down-wrapper">
//                                                 <span>Language:</span><a className="slide-down--btn" href="#" role="button">
//                                                     English<i className="ion-ios-arrow-down"></i>
//                                                 </a>
//                                                 <ul className="dropdown-list slide-down--item">
//                                                     <li><a href="#">En</a></li>
//                                                     <li><a href="#">En</a></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="nav-item slide-down-wrapper">
//                                                 <span>Currency:</span><a className="slide-down--btn" href="#" role="button">
//                                                     USD<i className="ion-ios-arrow-down"></i>
//                                                 </a>
//                                                 <ul className="dropdown-list slide-down--item">
//                                                     <li><a href="#">EUR</a></li>
//                                                 </ul>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="header-middle">
//                             <div className="container">
//                                 <div className="row align-items-center justify-content-center">

//                                     <div className="col-lg-3 col-md-12 col-sm-4">
//                                         <div className="site-brand  text-center text-lg-start">
//                                             <a href="/" className="brand-image">
//                                                 <img src="image/main-logo.png" alt="" />
//                                             </a>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-5 col-md-7 order-3 order-md-2">
//                                         <form className="category-widget">
//                                             <input type="text" name="search" placeholder="Search products " />
//                                             <div className="search-form__group search-form__group--select">
//                                                 <select name="category " id="searchCategory"
//                                                     className="search-form__select nice-select">
//                                                     <option value="all">All Categories</option>
//                                                     <optgroup label="Books, Magazines">
//                                                         <option>Bedroom</option>
//                                                         <option>Kitchen</option>
//                                                         <option>Livingroom</option>
//                                                     </optgroup>
//                                                     <optgroup label="Electronics">
//                                                         <option>Fridge</option>
//                                                         <option>Laptops, Desktops</option>
//                                                         <option>Mobiles, Tablets</option>
//                                                     </optgroup>
//                                                     <optgroup label="Furniture">
//                                                         <option>Accessories</option>
//                                                         <option>Men</option>
//                                                         <option>Women</option>
//                                                     </optgroup>
//                                                     <option value="3">Home, Garden</option>
//                                                     <option value="3">Kids, Baby</option>
//                                                     <option value="3">Sport</option>
//                                                 </select>
//                                             </div>
//                                             <button className="search-submit"><i className="fas fa-search"></i></button>
//                                         </form>
//                                     </div>

//                                     <div className="col-lg-4 col-md-5 col-sm-8 order-2 order-md-3">
//                                         <div className="header-widget-2 text-center text-sm-end ">
//                                             <div className="call-widget">
//                                                 <p>CALL US NOW: <i className="icon ion-ios-telephone"></i><span className="font-weight-mid">+91-012
//                                                     345 678</span></p>
//                                             </div>
//                                             <ul className="header-links">
//                                                 <li>
//                                                     <Link to="/cart">
//                                                         <i className="fas fa-car-alt"></i> Track Your Order
//                                                     </Link>
//                                                 </li>
//                                                 <li>
//                                                     <Link to="/login">
//                                                         <i className="fas fa-user"></i> Register or Sign in
//                                                     </Link>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="header-nav-wrapper">
//                         <div className="container">
//                             <div className="header-bottom-inner">
//                                 <div className="row g-0">

//                                     <div className="col-lg-3 col-md-8">

//                                         <div className="category-nav-wrapper bg-blue">
//                                             <div className="category-nav">
//                                                 <h2 className="category-nav__title primary-bg" id="js-cat-nav-title"><i
//                                                     className="fa fa-bars"></i>
//                                                     <span>All Categories</span></h2>


//                                             </div>
//                                         </div>

//                                         <div className="category-mobile-menu"></div>
//                                     </div>

//                                     <div className="col-lg-7 d-none d-lg-block">
//                                         <nav className="main-navigation">
//                                             <ul className="mainmenu">
//                                                 <li className="mainmenu__item">
//                                                     <Link to="/" className="no-underline">
//                                                         Home
//                                                     </Link>
//                                                 </li>
//                                                 <li className="mainmenu__item ">
//                                                 {/* menu-item-has-children */}
//                                                     <Link className="no-underline" onClick={handleMenuClick}>
//                                                         Pages
//                                                     </Link>
//                                                     {isSubMenuOpen && (
//                                                         <ul className="sub-menu">
//                                                             <li>
//                                                                 <Link to="/about">About Us</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/contact">Contact</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/service">Services</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/faq">Faq</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/404">404</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/cart">Cart</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/checkout">Checkout</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/wishlist">Wishlist</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/compare">Compare</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/my-account">My Account</Link>
//                                                             </li>
//                                                             <li>
//                                                                 <Link to="/login">Login & Registration</Link>
//                                                             </li>
//                                                         </ul>
//                                                     )}
//                                                 </li>
//                                                   {/* <li class="mainmenu__item menu-item-has-children">
//                                         <a href="#" class="no-underline" >Pages</a>

//                                         <ul class="sub-menu">
//                                             <li class="menu-item-has-children">
//                                             <Link to="/about">About Us</Link>
//                                             </li>
//                                             <li class="menu-item-has-children">
//                                             <Link to="/contact">Contact</Link>
//                                             </li>
//                                             <li class="menu-item-has-children">
//                                             <Link to="/service">Services</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/faq">Faq</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/404">404</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/cart">Cart</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/checkout">Checkout</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/wishlist">Wishlist</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/compare">Compare</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/my-account">My Account</Link>
//                                             </li>
//                                             <li>
//                                             <Link to="/login">Login & Registration</Link>
//                                             </li>
//                                         </ul>

//                                     </li> */}
//                                                 <li className="mainmenu__item">
//                                                     <Link to="/portfolio" className="no-underline">
//                                                         Portfolio
//                                                     </Link>
//                                                 </li>
//                                                 <li className="mainmenu__item">
//                                                     <Link to="/blog" className="no-underline">
//                                                         Blog
//                                                     </Link>

//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </div>

//                                     <div className="col-lg-2 col-6 offset-6 offset-md-0 col-md-3 order-3">
//                                         <div className="cart-widget-wrapper slide-down-wrapper">
//                                             <div className="cart-widget slide-down--btn">
//                                                 <div className="cart-icon">
//                                                     <i className="ion-bag"></i>
//                                                     <span className="cart-count-badge">
//                                                         1
//                                                     </span>
//                                                 </div>
//                                                 <div className="cart-text">
//                                                     <Link to="/cart" className="d-block">Your cart</Link>
//                                                     <strong><span className="amount"><span
//                                                         className="currencySymbol">$</span>40.00</span></strong>
//                                                 </div>
//                                             </div>
//                                             <div className="slide-down--item ">
//                                                 <div className="cart-widget-box">
//                                                     <ul className="cart-items">
//                                                         <li className="single-cart">
//                                                             <a href="#" className="cart-product">
//                                                                 <div className="cart-product-img">
//                                                                     <img src="image/product/cart-product.jpg"
//                                                                         alt="Selected Products" />
//                                                                 </div>
//                                                                 <div className="product-details">
//                                                                     <h4 className="product-details--title"> Ras Neque Metus</h4>
//                                                                     <span className="product-details--price">1 x $120.00</span>
//                                                                 </div>
//                                                                 <span className="cart-cross">x</span>
//                                                             </a>
//                                                         </li>
//                                                         <li className="single-cart">
//                                                             <div className="cart-product__subtotal">
//                                                                 <span className="subtotal--title">Subtotal</span>
//                                                                 <span className="subtotal--price">$200</span>
//                                                             </div>
//                                                         </li>
//                                                         <li className="single-cart">
//                                                             <div className="cart-buttons">
//                                                                 <Link to="/cart" className="btn btn-outlined">View Cart</Link>
//                                                                 <a href="checkout.html" className="btn btn-outlined">Check Out</a>
//                                                             </div>
//                                                         </li>
//                                                     </ul>

//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="col-12 d-flex d-lg-none order-2 mobile-absolute-menu">

//                                         <div className="mobile-menu"></div>

//                                     </div>
//                                 </div>
//                             </div>


//                             <div className="row">

//                             </div>
//                         </div>
//                         <div className="fixed-header sticky-init">
//                             <div className="container">
//                                 <div className="row align-items-center">
//                                     <div className="col-lg-3">

//                                         <a className="sticky-logo" href="index.html">
//                                             <img src="image/main-logo.png" alt="logo" />
//                                         </a>

//                                     </div>
//                                     <div className="col-lg-9">



//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>






//             </div>
//             <script src="%PUBLIC_URL%/js/plugins.js"></script>
//             <script src="%PUBLIC_URL%/js/ajax-mail.js"></script>
//             <script src="%PUBLIC_URL%/js/custom.js"></script>
//         </div>
//     );
// }
// export default Header
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div>
            <div className="site-wrapper">
                <header className="header petmark-header-1">
                    <div className="header-wrapper">
                        <div className="header-top bg-ash">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-sm-6 text-center text-sm-start">
                                        <p className="font-weight-300">Welcome to Acacia Pet Food</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="header-top-nav right-nav">
                                            <div className="nav-item slide-down-wrapper">
                                                <span>Language:</span>
                                                <a className="slide-down--btn" style={{ textDecoration: 'none' }} href="#" role="button">
                                                    English<i className="ion-ios-arrow-down"></i>
                                                </a>
                                                <ul className="dropdown-list slide-down--item">
                                                    <li><a href="#" style={{ textDecoration: 'none' }}>En</a></li>
                                                    <li><a href="#" style={{ textDecoration: 'none' }}>En</a></li>
                                                </ul>
                                            </div>
                                            <div className="nav-item slide-down-wrapper">
                                                <span>Currency:</span>
                                                <a className="slide-down--btn" style={{ textDecoration: 'none' }} href="#" role="button">
                                                    USD<i className="ion-ios-arrow-down"></i>
                                                </a>
                                                <ul className="dropdown-list slide-down--item">
                                                    <li><a href="#" style={{ textDecoration: 'none' }}>EUR</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-middle">
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-3 col-md-12 col-sm-4">
                                        <div className="site-brand text-center text-lg-start">
                                            <a href="/" className="brand-image">
                                                <img src="/image/main-logo.png" alt="" />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-lg-5 col-md-7 order-3 order-md-2">
                                        <form className="category-widget">
                                            <input type="text" name="search" placeholder="Search products" />
                                            <div className="search-form__group search-form__group--select">
                                                <select name="category" id="searchCategory" className="search-form__select nice-select">
                                                    <option value="all">All Categories</option>
                                                    {categories.map((category) => (
                                                        <option key={category.id} value={category.id}>
                                                            {category.categoryName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button className="search-submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="col-lg-4 col-md-5 col-sm-8 order-2 order-md-3">
                                        <div className="header-widget-2 text-center text-sm-end">
                                            <div className="call-widget">
                                                <p>CALL US NOW: <i className="icon ion-ios-telephone"></i><span className="font-weight-mid">+91-012 345 678</span></p>
                                            </div>
                                            <ul className="header-links">
                                                <li>
                                                    <Link to="/cart" style={{ textDecoration: 'none' }}>
                                                        <i className="fas fa-car-alt"></i> Track Your Order
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/login" style={{ textDecoration: 'none' }}>
                                                        <i className="fas fa-user"></i> Register or Sign in
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-nav-wrapper">
                        <div className="container">
                            <div className="header-bottom-inner">
                                <div className="row g-0">
                                    <div className="col-lg-3 col-md-8">
                                        <div className="category-nav-wrapper bg-blue">
                                            <div className="category-nav">
                                                <h2 className="category-nav__title primary-bg" id="js-cat-nav-title">
                                                    <i className="fa fa-bars"></i>
                                                    <span>All Categories</span>
                                                </h2>
                                                <ul className="category-nav__menu" id="js-cat-nav">
                                                    {categories.map(category => (
                                                        <li key={category.id} className="category-nav__menu__item">
                                                            <a href="shop.html" style={{ textDecoration: 'none' }}>
                                                                {category.categoryName}
                                                            </a>
                                                            {/* If you have subcategories, you can render them here */}
                                                            <div className="category-nav__submenu">
                                                                <div className="category-nav__submenu--inner">
                                                                    <ul>
                                                                        {/* Example of rendering subcategories if available */}
                                                                        {/* You can modify this part based on your data structure */}
                                                                        {/* <li><a href="shop.html">Subcategory Name</a></li> */}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7 d-none d-lg-block">
                                        <nav className="main-navigation">
                                            <ul className="mainmenu">
                                                <li className="mainmenu__item">
                                                    <Link to="/" className="no-underline" >Home</Link>
                                                </li>
                                                <li className="mainmenu__item menu-item-has-children">
                                                    <Link className="no-underline">
                                                        Pages
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li ><Link className="no-underline" to="/about">About Us</Link></li>
                                                        <li><Link className="no-underline" to="/contact">Contact</Link></li>
                                                        <li><Link className="no-underline" to="/service">Services</Link></li>
                                                        <li><Link className="no-underline" to="/faq">Faq</Link></li>
                                                        <li><Link className="no-underline" to="/404">404</Link></li>
                                                        <li><Link className="no-underline" to="/cart">Cart</Link></li>
                                                        <li><Link className="no-underline" to="/checkout">Checkout</Link></li>
                                                        <li><Link className="no-underline" to="/wishlist">Wishlist</Link></li>
                                                        <li><Link className="no-underline" to="/compare">Compare</Link></li>
                                                        <li><Link className="no-underline" to="/my-account">My Account</Link></li>
                                                        <li><Link className="no-underline" to="/login">Login & Registration</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="mainmenu__item">
                                                    <Link to="/portfolio" className="no-underline">Portfolio</Link>
                                                </li>
                                                <li className="mainmenu__item">
                                                    <Link to="/portfolio" className="no-underline">Portfolio</Link>
                                                </li>
                                                <li className="mainmenu__item">
                                                    <Link to="/portfolio" className="no-underline">Portfolio</Link>
                                                </li>

                                                <li className="mainmenu__item">
                                                    <Link className="no-underline" to="/login">Login & Registration</Link>
                                                </li>
                                                <li className="mainmenu__item">
                                                    <Link to="/blog" className="no-underline">Blog</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>


                                    <div className="col-lg-2 col-6 offset-6 offset-md-0 col-md-3 order-3">
                                        <div className="cart-widget-wrapper slide-down-wrapper">
                                            <div className="cart-widget slide-down--btn">
                                                <div className="cart-icon">
                                                    <i className="ion-bag"></i>
                                                    <span className="cart-count-badge">1</span>
                                                </div>
                                                <div className="cart-text">
                                                    <Link to="/cart" className="d-block" style={{ textDecoration: 'none' }}>Your cart</Link>
                                                    <strong><span className="amount"><span className="currencySymbol">$</span>40.00</span></strong>
                                                </div>
                                            </div>
                                            <div className="slide-down--item">
                                                <div className="cart-widget-box">
                                                    <ul className="cart-items">
                                                        <li className="single-cart">
                                                            <a href="#" className="cart-product">
                                                                <div className="cart-product-img">
                                                                    <img src="image/product/cart-product.jpg" alt="Selected Products" />
                                                                </div>
                                                                <div className="product-details">
                                                                    <h4 className="product-details--title"> Ras Neque Metus</h4>
                                                                    <span className="product-details--price">1 x $120.00</span>
                                                                </div>
                                                                <span className="cart-cross">x</span>
                                                            </a>
                                                        </li>
                                                        <li className="single-cart">
                                                            <div className="cart-product__subtotal">
                                                                <span className="subtotal--title">Subtotal</span>
                                                                <span className="subtotal--price">$200</span>
                                                            </div>
                                                        </li>
                                                        <li className="single-cart">
                                                            <div className="cart-buttons">
                                                                <Link to="/cart" className="btn btn-outlined">View Cart</Link>
                                                                <a href="checkout.html" className="btn btn-outlined">Check Out</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fixed-header sticky-init">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-8">
                                        <div className="category-nav-wrapper bg-blue">
                                            <div className="category-nav">
                                                <h2 className="category-nav__title primary-bg" id="js-cat-nav-title">
                                                    <i className="fa fa-bars"></i>
                                                    <span>All Categories</span>
                                                </h2>
                                                <ul className="category-nav__menu" id="js-cat-nav">
                                                    <li className="category-nav__menu__item has-children">
                                                        <a href="shop.html">Fashion</a>
                                                        <div className="category-nav__submenu">
                                                            <div className="category-nav__submenu--inner">
                                                                <ul>
                                                                    <li><a href="shop.html">Health &amp; Beauties</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="category-nav__menu__item has-children">
                                                        <a href="shop.html">Electronics</a>
                                                        <div className="category-nav__submenu mega-menu three-column">
                                                            <div className="category-nav__submenu--inner">
                                                                <h3 className="category-nav__submenu__title">Television</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">LED TV</a></li>
                                                                    <li><a href="shop.html">LCD TV</a></li>
                                                                    <li><a href="shop.html">Curved TV</a></li>
                                                                    <li><a href="shop.html">Plasma TV</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="category-nav__submenu--inner">
                                                                <h3 className="category-nav__submenu__title">Refrigerator</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">LG</a></li>
                                                                    <li><a href="shop.html">Samsung</a></li>
                                                                    <li><a href="shop.html">Toshiba</a></li>
                                                                    <li><a href="shop.html">Panasonic</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="category-nav__submenu--inner">
                                                                <h3 className="category-nav__submenu__title">Air Conditioners</h3>
                                                                <ul>
                                                                    <li><a href="shop.html">Samsung</a></li>
                                                                    <li><a href="shop.html">Panasonic</a></li>
                                                                    <li><a href="shop.html">Sanaky</a></li>
                                                                    <li><a href="shop.html">Toshiba</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="category-nav__menu__item">
                                                        <a href="shop.html">Baby</a>
                                                    </li>
                                                    <li className="category-nav__menu__item has-children">
                                                        <a href="shop.html">Mobile</a>
                                                        <div className="category-nav__submenu">
                                                            <div className="category-nav__submenu--inner">
                                                                <ul>
                                                                    <li><a href="shop.html">Apple</a></li>
                                                                    <li><a href="shop.html">Samsung</a></li>
                                                                    <li><a href="shop.html">Nokia</a></li>
                                                                    <li><a href="shop.html">Walton</a></li>
                                                                    <li><a href="shop.html">Sony</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="category-nav__menu__item">
                                                        <a href="shop.html">Furniture</a>
                                                        <div className="category-nav__submenu">
                                                            <div className="category-nav__submenu--inner">
                                                                <ul>
                                                                    <li><a href="shop.html">Apple</a></li>
                                                                    <li><a href="shop.html">Samsung</a></li>
                                                                    <li><a href="shop.html">LG</a></li>
                                                                    <li><a href="shop.html">Sony</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="category-nav__menu__item">
                                                        <a href="shop.html">Sport</a>
                                                    </li>
                                                    <li className="category-nav__menu__item">
                                                        <a href="shop.html">Gift, Parties</a>
                                                    </li>
                                                    <li className="category-nav__menu__item">
                                                        <a href="shop.html">Accessories</a>
                                                    </li>
                                                    <li className="category-nav__menu__item hidden-lg-menu-item">
                                                        <a href="shop.html">Samsung</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-7 d-none d-lg-block">
                                        <nav className="main-navigation">
                                            <ul className="mainmenu">
                                                <li className="mainmenu__item">
                                                    <Link to="/" className="no-underline" >Home</Link>
                                                </li>
                                                <li className="mainmenu__item menu-item-has-children">
                                                    <Link className="no-underline">
                                                        Pages
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li ><Link className="no-underline" to="/about">About Us</Link></li>
                                                        <li><Link className="no-underline" to="/contact">Contact</Link></li>
                                                        <li><Link className="no-underline" to="/service">Services</Link></li>
                                                        <li><Link className="no-underline" to="/faq">Faq</Link></li>
                                                        <li><Link className="no-underline" to="/404">404</Link></li>
                                                        <li><Link className="no-underline" to="/cart">Cart</Link></li>
                                                        <li><Link className="no-underline" to="/checkout">Checkout</Link></li>
                                                        <li><Link className="no-underline" to="/wishlist">Wishlist</Link></li>
                                                        <li><Link className="no-underline" to="/compare">Compare</Link></li>
                                                        <li><Link className="no-underline" to="/my-account">My Account</Link></li>
                                                        <li><Link className="no-underline" to="/login">Login & Registration</Link></li>
                                                    </ul>
                                                </li>


                                                <li className="mainmenu__item">
                                                    <Link to="/portfolio" className="no-underline">Portfolio</Link>
                                                </li>

                                                <li className="mainmenu__item">
                                                    <Link className="no-underline" to="/login">Login & Registration</Link>
                                                </li>
                                                <li className="mainmenu__item">
                                                    <Link to="/blog" className="no-underline">Blog</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>


                                    <div className="col-lg-2 col-6 offset-6 offset-md-0 col-md-3 order-3">
                                        <div className="cart-widget-wrapper slide-down-wrapper">
                                            <div className="cart-widget slide-down--btn">
                                                <div className="cart-icon">
                                                    <i className="ion-bag"></i>
                                                    <span className="cart-count-badge">1</span>
                                                </div>
                                                <div className="cart-text">
                                                    <Link to="/cart" className="d-block">Your cart</Link>
                                                    <strong><span className="amount"><span className="currencySymbol">$</span>40.00</span></strong>
                                                </div>
                                            </div>
                                            <div className="slide-down--item">
                                                <div className="cart-widget-box">
                                                    <ul className="cart-items">
                                                        <li className="single-cart">
                                                            <a href="#" className="cart-product">
                                                                <div className="cart-product-img">
                                                                    <img src="image/product/cart-product.jpg" alt="Selected Products" />
                                                                </div>
                                                                <div className="product-details">
                                                                    <h4 className="product-details--title"> Ras Neque Metus</h4>
                                                                    <span className="product-details--price">1 x $120.00</span>
                                                                </div>
                                                                <span className="cart-cross">x</span>
                                                            </a>
                                                        </li>
                                                        <li className="single-cart">
                                                            <div className="cart-product__subtotal">
                                                                <span className="subtotal--title">Subtotal</span>
                                                                <span className="subtotal--price">$200</span>
                                                            </div>
                                                        </li>
                                                        <li className="single-cart">
                                                            <div className="cart-buttons">
                                                                <Link to="/cart" className="btn btn-outlined">View Cart</Link>
                                                                <a href="checkout.html" className="btn btn-outlined">Check Out</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
