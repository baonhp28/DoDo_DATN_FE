function Shop_left_sideber(){
  
     
    return(
            
 <div className="">
<div className="site-wrapper">
<div className="modal fade modal-quick-view" id="quickModal" tabIndex="-1" role="dialog" aria-labelledby="quickModal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="pm-product-details">
            <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
            <div className="row">
              <div className="col-md-6">
                <div className="image-block">
                  <img
                    id="zoom_03"
                    src="image/product/product-details/product-details-1.jpg"
                    data-zoom-image="image/product/product-details/product-details-1.jpg"
                    alt=""
                  />
                  <div id="product-view-gallery" className="elevate-gallery">
                    <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-1.jpg" data-zoom-image="image/product/product-details/product-details-1.jpg">
                      <img src="image/product/product-details/product-details-1.jpg" alt="" />
                    </a>
                    <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-2.jpg" data-zoom-image="image/product/product-details/product-details-2.jpg">
                      <img src="image/product/product-details/product-details-2.jpg" alt="" />
                    </a>
                    <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-3.jpg" data-zoom-image="image/product/product-details/product-details-3.jpg">
                      <img src="image/product/product-details/product-details-3.jpg" alt="" />
                    </a>
                    <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-4.jpg" data-zoom-image="image/product/product-details/product-details-4.jpg">
                      <img src="image/product/product-details/product-details-4.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-lg-0">
                <div className="description-block">
                  <div className="header-block">
                    <h3>Diam vel neque</h3>
                  </div>
                  <p className="price">
                    <span className="old-price">250$</span>300$
                  </p>
                  <div className="rating-block d-flex mt--10 mb--15">
                    <p className="rating-text">
                      <a href="#comment-form">See all features</a>
                    </p>
                  </div>
                  <div className="product-short-para">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.</p>
                  </div>
                  <div className="status">
                    <i className="fas fa-check-circle"></i>300 IN STOCK
                  </div>
                  <form action="https://htmldemo.net/petmark/petmark/" className="add-to-cart">
                    <div className="count-input-block">
                      <input type="number" className="form-control text-center" defaultValue="1" min="1" />
                    </div>
                    <div className="btn-block">
                      <a href="#" className="btn btn-rounded btn-outlined--primary">
                        Add to cart
                      </a>
                    </div>
                  </form>
                  <div className="share-block-2 mt--30">
                    <h4>SHARE THIS PRODUCT</h4>
                    <ul className="social-btns social-btns-3">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="google">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="pinterest">
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
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
    <nav aria-label="breadcrumb" className="breadcrumb-wrapper">
  <div className="container">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active" aria-current="page">Shop</li>
    </ol>
  </div>
</nav>
<main className="section-padding shop-page-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-xl-9 order-lg-2 mb--40">
      {/* <div className="shop-toolbar mb--30">
      <div className="row align-items-center">
        <div className="col-5 col-md-3 col-xl-4">
          <div className="product-view-mode">
            <a
              href="#"
              className={`sortting-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => handleViewModeChange('list')}
            >
              <i className="fas fa-list"></i>
            </a>
            <a
              href="#"
              className={`sortting-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => handleViewModeChange('grid')}
            >
              <i className="fas fa-th"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-9 col-xl-8 mt-3 mt-md-0 pe-md-0">
          <div className="sorting-selection">
            <div className="row align-items-center ps-md-0 pe-md-0 g-0">
              <div className="col-sm-6 col-md-7 col-xl-8 d-flex align-items-center justify-content-md-end">
                <span>Sort By:</span>
                <select
                  id="input-sort"
                  className="form-control nice-select sort-select"
                  value={sortOption}
                  onChange={handleSortChange}
                >
                  <option value="default" selected="selected">Default Sorting</option>
                  <option value="name-asc">Sort By:Name (A - Z)</option>
                  <option value="name-desc">Sort By:Name (Z - A)</option>
                  <option value="price-asc">Sort By:Price (Low &gt; High)</option>
                  <option value="price-desc">Sort By:Price (High &gt; Low)</option>
                  <option value="rating-highest">Sort By:Rating (Highest)</option>
                  <option value="rating-lowest">Sort By:Rating (Lowest)</option>
                  <option value="model-asc">Sort By:Model (A - Z)</option>
                  <option value="model-desc">Sort By:Model (Z - A)</option>
                </select>
              </div>
              <div className="col-md-5 col-xl-4 col-sm-6 text-sm-end mt-sm-0 mt-3">
                <span>
                  Showing 1–20 of 52 results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
<div className="shop-product-wrap grid with-pagination row border grid-four-column  me-0 ms-0 g-0">
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-1.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-10.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-2.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-3.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-4.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            
            
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-5.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-6.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
            
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-7.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 col-sm-6">
    <div className="pm-product  ">
      <a href="product-details.html" className="image"  >
        <img src="image/product/home-1/product-7.jpg" alt=""/>
      </a>
      <div className="hover-conents">
        <ul className="product-btns">
          <li><a href="wishlist.html"  ><i className="ion-ios-heart-outline"></i></a></li>
          <li><a href="compare.html"  ><i className="ion-ios-shuffle"></i></a></li>
          <li><a href="#" data-bs-toggle="modal" data-bs-target="#quickModal"  ><i className="ion-ios-search"></i></a></li>
        </ul>
      </div>
      <div className="content">
        <h3 className="font-weight-500"><a href="product-details.html">Convallis quam sit</a></h3>
        <div className="price text-red">
          <span className="old">$200</span>
          <span>$300</span>
        </div>
        <div className="btn-block grid-btn">
          <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
        </div>
        <div className="card-list-content ">
          <div className="rating-widget mt--20">
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
            <a href="#" className="single-rating"><i className="far fa-star"></i></a>
          </div>
          <article>
            <h2 className="sr-only d-none">Shop Post Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> Nam fringilla augue nec est tristique
              auctor.</p>
          </article>
          <div className="btn-block d-flex">
            <a href="cart.html" className="btn btn-outlined btn-rounded btn-mid"  >Add to Cart</a>
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
        <div className="mt--30">
          <div className="pagination-widget">
    <div className="site-pagination">
        <a href="#" className="single-pagination">|&lt;</a>
        <a href="#" className="single-pagination">&lt;</a>
        <a href="#" className="single-pagination active">1</a>
        <a href="#" className="single-pagination">2</a>
        <a href="#" className="single-pagination">&gt;</a>
        <a href="#" className="single-pagination">&gt;|</a>
    </div>
</div>
   
        </div>
    </div>
    <div className="col-lg-4 col-xl-3 order-lg-1">
        <div className="sidebar-widget">
            <div className="single-sidebar">
                <h2 className="sidebar-title">PRODUCT CATEGORIES</h2>
                <ul className="sidebar-filter-list">
                    <li><a href="#" data-count="(5)">Accessories</a></li>
                    <li><a href="#" data-count="(13)">Bedroom</a></li>
                    <li><a href="#" data-count="(13)">Decor & Furniture</a></li>
                    <li><a href="#" data-count="(12)">Electronics & Computer</a></li>
                    <li><a href="#" data-count="(4)">Fashion & clothings</a></li>
                    <li><a href="#" data-count="(14)">Furniture</a></li>
                    <li><a href="#" data-count="(7)">Home, Garden & Tools</a></li>
                    <li><a href="#" data-count="(4)">Laptops & Desktops</a></li>
                    <li><a href="#" data-count="(3)">Livingroom</a></li>
                    <li><a href="#" data-count="(6)">Men</a></li>
                    <li><a href="#" data-count="(7)">Mobiles & Tablets</a></li>
                    <li><a href="#" data-count="(7)">Sport & Outdoors</a></li>
                    <li><a href="#" data-count="(0)">Toy, Kids & Baby</a></li>
                    <li><a href="#" data-count="(9)">Uncategorized</a></li>
                    <li><a href="#" data-count="(4)">Women</a></li>
                </ul>
            </div>
            <div className="single-sidebar">
                <h2 className="sidebar-title">Color</h2>
                <ul className="sidebar-filter-list">
                    <li><a href="#" data-count="(4)">Gold</a></li>
        
                </ul>
            </div>
            <div className="single-sidebar">
                <h2 className="sidebar-title">FILTER BY PRICE</h2>
                <div className="range-slider pt--10">
                    <div className="pm-range-slider"></div>
                    <div className="slider-price">
                        <p>
                            <input type="text" id="amount" readOnly/>
                            <a href="#" className="btn btn--primary">Filter</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="single-sidebar">
                <h2 className="sidebar-title">FILTER BY PRICE</h2>
                <a href="product-details.html" className="sidebar-product pm-product product-type-list">
                    <div className="image"  >
                        <img src="image/product/home-1/product-7.jpg" alt=""/>
                    </div>
        
                    <div className="content">
                        <h3>Convallis quam sit</h3>
                        <div className="rating-widget">
                            <span className="single-rating"><i className="fas fa-star"></i></span>
                            <span className="single-rating"><i className="fas fa-star"></i></span>
                            <span className="single-rating"><i className="fas fa-star"></i></span>
                            <span className="single-rating"><i className="fas fa-star-half-alt"></i></span>
                            <span className="single-rating"><i className="far fa-star"></i></span>
                        </div>
                        <div className="price text-red">
                            <span className="old">$200</span>
                            <span>$300</span>
                        </div>
                    </div>
                </a>
                <a href="product-details.html" className="sidebar-product pm-product product-type-list">
                    <div className="image"  >
                        <img src="image/product/home-1/product-7.jpg" alt=""/>
                    </div>
        
                    <div className="content">
                        <h3>Convallis quam sit</h3>
                        <div className="rating-widget">
                            <span className="single-rating"><i className="fas fa-star"></i></span>
                            <span className="single-rating"><i className="fas fa-star"></i></span>
                            <span className="single-rating"><i className="fas fa-star"></i></span>
                            <span className="single-rating"><i className="fas fa-star-half-alt"></i></span>
                            <span className="single-rating"><i className="far fa-star"></i></span>
                        </div>
                        <div className="price text-red">
                            <span className="old">$200</span>
                            <span>$300</span>
                        </div>
                    </div>
                </a>
            </div>
        
            <div className="single-sidebar">
                <h2 className="sidebar-title">TAGS</h2>
                <ul className="sidebar-tag-list">
                    <li><a href="#"> Chilled</a></li>
                    <li><a href="#">Dark</a></li>
                    <li> <a href="#">Euro</a></li>
                    <li><a href="#">Fashion</a></li>
                    <li><a href="#">Food</a></li>
                    <li><a href="#">Hardware</a></li>
                    <li><a href="#">Hat</a></li>
                    <li><a href="#">Hipster</a></li>
                    <li><a href="#">Holidays</a></li>
                    <li><a href="#">Light</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">Place</a></li>
                    <li><a href="#">T-Shirt</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Video-2</a></li>
                    <li><a href="#">White</a></li>
                </ul>
            </div>
        </div>
    </div>
  </div>
  </div>
</main>

  

</div>
</div>
    )
}
export default Shop_left_sideber