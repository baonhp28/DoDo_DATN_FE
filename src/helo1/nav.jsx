function Nav(){
    return(
            

<div className="site-wrapper">
        <section>
        <div className=" petmark-slick-slider  home-slider dot-position-1" data-slick-setting='{
        "autoplay": true,
        "autoplaySpeed": 8000,
        "slidesToShow": 1,
        "dots": true
    }'
        >
            <div className="single-slider home-content bg-image" style={{ backgroundImage: "url('image/bg-images/home-1/slider-1.jpg')" }}>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-6">

                            <h2>Thức ăn ngon <br/> with benifits</h2>

                            <h4 className="mt--30">100% made in U.S.A chicken breast jerky</h4>

                            <div className="slider-btn mt--30">
                                <a href="//Product_details" className="btn btn-outlined--primary btn-rounded">Shop Now</a>
                            </div>

                        </div>
                    </div>

                </div>
                <span className="herobanner-progress"></span>
            </div>
            <div className="single-slider home-content bg-image" style={{ backgroundImage: "url('image/bg-images/home-1/slider-2.jpg')" }} >
          
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg-6">

                            <h3>Friends & Family</h3>
                            <h1 className="text-primary">SAVE 25% OFF</h1>
                            <h4 className="mt--20">Flea & ticks Product for Cats</h4>

                            <div className="slider-btn mt--30">
                                <a href="shop.html" className="btn btn-outlined--primary btn-rounded">Shop Now</a>
                            </div>

                        </div>
                    </div>
                </div>
                <span className="herobanner-progress"></span>
            </div>
        </div>
    </section>
    
    <div className="container pt--50">
        <div className="policy-block border-four-column">
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="policy-block-single">
                        <div className="icon">
                            <span className="ti-truck"></span>
                        </div>
                        <div className="text">
                            <h3>Free Delivery</h3>
                            <p>On orders of $200+</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="policy-block-single">
                        <div className="icon">
                            <span className="ti-credit-card"></span>
                        </div>
                        <div className="text">
                            <h3>Cod</h3>
                            <p>Cash on Delivery</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="policy-block-single">
                        <div className="icon">
                            <span className="ti-gift"></span>
                        </div>
                        <div className="text">
                            <h3>Free Gift Box</h3>
                            <p>Buy a Gift</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="policy-block-single">
                        <div className="icon">
                            <span className="ti-headphone-alt"></span>
                        </div>
                        <div className="text">
                            <h3>Free Support 24/7</h3>
                            <p>Online 24hrs a Day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="pt--50">
        <div className="container">
            <div className="block-title">
                <h2>NEW PRODUCTS</h2>
            </div>
            <div className="petmark-slick-slider border normal-two-column-slider"
                 data-slick-setting='{
                "autoplaySpeed": 3000,
                "slidesToShow": 2,
                "arrows": true
            }'
                 data-slick-responsive='[
                {"breakpoint":991, "settings": {"slidesToShow": 1} },
                {"breakpoint":575, "settings": {"slidesToShow": 1} }
            ]'>
                <div className="single-slide">
                    <div className="pm-product product-type-list">
                        <a href="/Product_details" className="image">
                            <img src="image/product/home-1/product-1.jpg" alt=""/>
                        </a>
                        <div className="content">
                            <h3 className="font-weight-500"><a href="#">Convallis quam sit Convallis quam sit Convallis quam sit</a></h3>
                            <div className="price text-red mb-3">
                                <span className="old">$200</span>
                                <span>$300</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                tristique auctor.</p>
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="2023/12/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="pm-product product-type-list">
                        <a href="/Product_details" className="image">
                            <img src="image/product/home-1/product-2.jpg" alt=""/>
                        </a>
                        <div className="content">
                            <h3 className="font-weight-500"><a href="#" style={{ textDecoration: 'none' }}>Convallis quam sit</a></h3>
                            <div className="price text-red mb-3">
                                <span className="old">$200</span>
                                <span>$300</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                tristique auctor.</p>
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="2023/12/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="pm-product product-type-list">
                        <a href="/Product_details" className="image">
                            <img src="image/product/home-1/product-3.jpg" alt=""/>
                        </a>
                        <div className="content">
                            <h3 className="font-weight-500"><a href="#" style={{ textDecoration: 'none' }}>Convallis quam sit</a></h3>
                            <div className="price text-red mb-3">
                                <span className="old">$200</span>
                                <span>$300</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                tristique auctor.</p>
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="2023/12/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-slide">
                    <div className="pm-product product-type-list">
                        <a href="/Product_details" className="image">
                            <img src="image/product/home-1/product-4.jpg" alt=""/>
                        </a>
                        <div className="content">
                            <h3 className="font-weight-500"><a href="#" style={{ textDecoration: 'none' }}>Convallis quam sit</a></h3>
                            <div className="price text-red mb-3">
                                <span className="old">$200</span>
                                <span>$300</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
                                tristique auctor.</p>
                            <div className="count-down-block">
                                <div className="product-countdown" data-countdown="2023/12/12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="category-section pt--50">
        <div className="container">
            <div className="block-title">
                <h2>TOP CATEGORIES THIS WEEK</h2>
            </div>
            <div className="category-block">
                <div className="row g-0">
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="category-block-single">
                            <a href="shop.html" className="icon">
                                <img src="image/product/home-1/category-1.png" alt=""/>
                            </a>
                            <h3><a href="shop.html" style={{ textDecoration: 'none' }}>Dog Food</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="category-block-single">
                            <a href="shop.html" className="icon">
                                <img src="image/product/home-1/category-2.png" alt=""/>
                            </a>
                            <h3><a href="shop.html" style={{ textDecoration: 'none' }}>Cat Food</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="category-block-single">
                            <a href="shop.html" className="icon">
                                <img src="image/product/home-1/category-3.png" alt=""/>
                            </a>
                            <h3><a href="shop.html" style={{ textDecoration: 'none' }}>Fish Food</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="category-block-single">
                            <a href="shop.html" className="icon">
                                <img src="image/product/home-1/category-4.png" alt=""/>
                            </a>
                            <h3><a href="shop.html" style={{ textDecoration: 'none' }}>Bird Food</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="category-block-single">
                            <a href="shop.html" className="icon">
                                <img src="image/product/home-1/category-5.png" alt=""/>
                            </a>
                            <h3><a href="shop.html" style={{ textDecoration: 'none' }}>Reptile Food</a></h3>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-6">
                        <div className="category-block-single">
                            <a href="shop.html" className="icon">
                                <img src="image/product/home-1/category-6.png" alt=""/>
                            </a>
                            <h3><a href="shop.html" style={{ textDecoration: 'none' }}>Small Pet Food</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <div className="modal fade modal-quick-view" id="quickModal" tabIndex="-1" role="dialog" aria-labelledby="quickModal"
         aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="pm-product-">
                    <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close">

                    </button>
                    <div className="row">
                       
                        <div className="col-md-6">
                            <div className="image-block">
                                
                                <img id="zoom_03" src="image/product/product-/product--1.jpg"
                                     data-zoom-image="image/product/product-/product--1.jpg" alt=""/>

                               
                                <div id="product-view-gallery" className="elevate-gallery">
                                  
                                    <a href="#" className="gallary-item"
                                       data-image="image/product/product-/product--1.jpg"
                                       data-zoom-image="image/product/product-/product--1.jpg">
                                        <img src="image/product/product-/product--1.jpg" alt=""/>
                                    </a>
                                   
                                    <a href="#" className="gallary-item"
                                       data-image="image/product/product-/product--2.jpg"
                                       data-zoom-image="image/product/product-/product--2.jpg">
                                        <img src="image/product/product-/product--2.jpg" alt=""/>
                                    </a>
                                   
                                    <a href="#" className="gallary-item"
                                       data-image="image/product/product-/product--3.jpg"
                                       data-zoom-image="image/product/product-/product--3.jpg">
                                        <img src="image/product/product-/product--3.jpg" alt=""/>
                                    </a>
                                    
                                    <a href="#" className="gallary-item"
                                       data-image="image/product/product-/product--4.jpg"
                                       data-zoom-image="image/product/product-/product--4.jpg">
                                        <img src="image/product/product-/product--4.jpg" alt=""/>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 mt-lg-0">
                            <div className="description-block">
                                <div className="header-block">
                                    <h3>Diam vel neque</h3>
                                </div>
                               
                                <p className="price"><span className="old-price">250$</span>300$</p>
                              
                                <div className="rating-block d-flex  mt--10 mb--15">
                                    <p className="rating-text"><a href="#comment-form">See all features</a></p>
                                </div>
                               
                                <div className="product-short-para">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec
                                        est
                                        tristique auctor. Donec non est at libero vulputate rutrum.
                                    </p>
                                </div>
                                <div className="status">
                                    <i className="fas fa-check-circle"></i>300 IN STOCK
                                </div>
                              
                                <form action="https://htmldemo.net/petmark/petmark/" className="add-to-cart">
                                    <div className="count-input-block">
                                        <input type="number" className="form-control text-center" value="1" min="1"/>
                                    </div>
                                    <div className="btn-block">
                                        <a href="#" className="btn btn-rounded btn-outlined--primary">Add to cart</a>
                                    </div>
                                </form>
                              
                                <div className="share-block-2 mt--30">
                                    <h4>SHARE THIS PRODUCT</h4>
                                    <ul className="social-btns social-btns-3">
                                        <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#" className="google"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#" className="pinterest"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
    <section className="pt--50 space-db--30">
        <h2 className="d-none">Promotion Block
        </h2>
        <div className="container">
            <a className="promo-image overflow-image">
                <img src="image/product/promo-product-image-huge.jpg" alt=""/>
            </a>
        </div>
    </section>
    
    <div className="pt--50">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="block-title">
                        <h2>TOP CATEGORIES THIS WEEK</h2>
                    </div>
                   
                    <div className="petmark-slick-slider border grid-column-slider" data-slick-setting='{
                            "autoplay": true,
                            "autoplaySpeed": 3000,
                            "slidesToShow": 3,
                            "rows" :2,
                            "arrows": true
                        }'
                         data-slick-responsive='[
                            {"breakpoint":991, "settings": {"slidesToShow": 3} },
                            {"breakpoint":768, "settings": {"slidesToShow": 2} },
                            {"breakpoint":480, "settings": {"slidesToShow": 1,"rows" :1} }
                        ]'>

                    
                    </div>
                </div>


                <div className="col-lg-6 pt--50 pt-lg-0">
                    <div className="block-title">
                        <h2>NEW PRODUCTS</h2>
                    </div>
                 
                    <div className="petmark-slick-slider border one-column-slider two-row" data-slick-setting='{
                            "autoplaySpeed": 3000,
                            "slidesToShow": 1,
                            "rows" :2,
                            "arrows": true
                        }'
                         data-slick-responsive='[
                            {"breakpoint":991, "settings": {"slidesToShow": 1} },
                            {"breakpoint":575, "settings": {"slidesToShow": 1} }
                        ]'>
                        <div className="single-slide">
                            <div className="pm-product product-type-list">
                                <a href="/Product_details" className="image">
                                    <img src="image/product/home-1/product-1.jpg" alt=""/>
                                </a>
                                <div className="content">
                                    <h3>Convallis quam sit</h3>
                                    <div className="price text-red">
                                        <span className="old">$200</span>
                                        <span>$300</span>
                                    </div>
                                    <div className="rating-widget mt--20">
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star-half-alt"></i></a>
                                        <a href="#" className="single-rating"><i className="far fa-star"></i></a>
                                    </div>
                                    <div className="btn-block">
                                        <a href="/cart" className="btn btn-outlined btn-rounded btn-mid">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="pm-product product-type-list">
                                <a href="/Product_details" className="image">
                                    <img src="image/product/home-1/product-8.jpg" alt=""/>
                                </a>
                                <div className="content">
                                    <h3>Convallis quam sit</h3>
                                    <div className="price text-red">
                                        <span className="old">$200</span>
                                        <span>$300</span>
                                    </div>
                                    <div className="rating-widget mt--20">
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star-half-alt"></i></a>
                                        <a href="#" className="single-rating"><i className="far fa-star"></i></a>
                                    </div>
                                    <div className="btn-block">
                                        <a href="/cart" className="btn btn-outlined btn-rounded btn-mid">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="pm-product product-type-list">
                                <a href="/Product_details" className="image">
                                    <img src="image/product/home-1/product-3.jpg" alt=""/>
                                </a>
                                <div className="content">
                                    <h3>Convallis quam sit</h3>
                                    <div className="price text-red">
                                        <span className="old">$200</span>
                                        <span>$300</span>
                                    </div>
                                    <div className="rating-widget mt--20">
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star-half-alt"></i></a>
                                        <a href="#" className="single-rating"><i className="far fa-star"></i></a>
                                    </div>
                                    <div className="btn-block">
                                        <a href="/cart" className="btn btn-outlined btn-rounded btn-mid">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-slide">
                            <div className="pm-product product-type-list">
                                <a href="/Product_details" className="image">
                                    <img src="image/product/home-1/product-4.jpg" alt=""/>
                                </a>
                                <div className="content">
                                    <h3>Convallis quam sit</h3>
                                    <div className="price text-red">
                                        <span className="old">$200</span>
                                        <span>$300</span>
                                    </div>
                                    <div className="rating-widget mt--20">
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                                        <a href="#" className="single-rating"><i className="fas fa-star-half-alt"></i></a>
                                        <a href="#" className="single-rating"><i className="far fa-star"></i></a>
                                    </div>
                                    <div className="btn-block">
                                        <a href="/cart" className="btn btn-outlined btn-rounded btn-mid">Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
 
    <div className="pt--50">
        <div className="container">

            <div className="slider-header-block tab-header d-flex">
                <div className="block-title">
                    <h2>TOP CATEGORIES THIS WEEK</h2>
                </div>


                <ul className="pm-tab-nav nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                           aria-controls="home"
                           aria-selected="true">Dry Kibbles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                           aria-controls="profile"
                           aria-selected="false">Wet Dog Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab"
                           aria-controls="contact"
                           aria-selected="false">Puppy Food</a>
                    </li>
                </ul>
            </div>


          
                       </div>
                       </div>

  
    <section className="pt--50 space-db--30">
        <h2 className="d-none">Promotion Block
        </h2>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4">
                    <a className="promo-image overflow-image">
                        <img src="image/product/promo-product-image-2.jpg" alt=""/>
                    </a>
                </div>
                <div className="col-lg-4 col-md-4">
                    <a className="promo-image overflow-image  promo-small ">
                        <img src="image/product/promo-product-image-sm.jpg" alt=""/>
                    </a>
                    <a className="promo-image overflow-image  promo-small ">
                        <img src="image/product/promo-product-image-sm-2.jpg" alt=""/>
                    </a>
                </div>
                <div className="col-lg-4 col-md-4">
                    <a className="promo-image overflow-image">
                        <img src="image/product/promo-product-image.jpg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    </section>
   
    <div className="pt--50">
        <div className="container">

            <div className="block-title">
                <h2>TOP CATEGORIES THIS WEEK</h2>
            </div>
           
              </div>
              </div>
    
    <div className="pt--50">
        <div className="container">
            <div className="block-title">
                <h2>TOP CATEGORIES THIS WEEK</h2>
            </div>
           

              </div>
              </div>
              </div>
             
        
        
    )
}
export default Nav