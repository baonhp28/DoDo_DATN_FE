function Product_details(){
    return(
<div className="elevet-enable">
<div className="site-wrapper">
<nav aria-label="breadcrumb" className="breadcrumb-wrapper">
    <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Product Details</li>
        </ol>
    </div>
  </nav>
  <div className="container">
    <div className="pm-product-details">
      <div className="row">
       
        <div className="col-md-6">
          <div className="image-block">

            <img id="zoom_03" src="image/product/product-details/product-details-1.jpg" data-zoom-image="image/product/product-details/product-details-1.jpg" alt=""/>

            
            <div id="product-view-gallery" className="elevate-gallery">
            
              <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-1.jpg"
                data-zoom-image="image/product/product-details/product-details-1.jpg">
                <img src="image/product/product-details/product-details-1.jpg" alt=""/>
              </a>
              
              <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-2.jpg"
                data-zoom-image="image/product/product-details/product-details-2.jpg">
                <img src="image/product/product-details/product-details-2.jpg" alt=""/>
              </a>
              
              <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-3.jpg"
                data-zoom-image="image/product/product-details/product-details-3.jpg">
                <img src="image/product/product-details/product-details-3.jpg" alt=""/>
              </a>
              
              <a href="#" className="gallary-item" data-image="image/product/product-details/product-details-4.jpg"
                data-zoom-image="image/product/product-details/product-details-4.jpg">
                <img src="image/product/product-details/product-details-4.jpg" alt=""/>
              </a>

            </div>
          </div>
        </div>
        <div className="col-md-6 mt-5 mt-md-0">
          <div className="description-block">
            <div className="header-block">
                <h3>Diam vel neque</h3>
                <div className="navigation">
                  <a href="#"><i className="ion-ios-arrow-back"></i></a>
                  <a href="#"><i className="ion-ios-arrow-forward"></i></a>
                </div>
            </div>
           
            <div className="rating-block d-flex  mt--10 mb--15">
              <div className="rating-widget">
                <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                <a href="#" className="single-rating"><i className="fas fa-star"></i></a>
                <a href="#" className="single-rating"><i className="fas fa-star-half-alt"></i></a>
                <a href="#" className="single-rating"><i className="far fa-star"></i></a>
              </div>
              <p className="rating-text"><a href="#comment-form">(1 customer review)</a></p>
            </div>
           
            <p className="price"><span className="old-price">250$</span>300$</p>
           
            <div className="product-short-para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
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
           
            <div className="btn-options">
              <a href="wishlist.html"><i className="ion-ios-heart-outline"></i>Add to Wishlist</a>
              <a href="compare.html"><i className="ion-ios-shuffle"></i>Add to Compare</a>
            </div>
            
            <div className="product-meta mt--30">
              <p>Ctagories: <a href="#" className="single-meta">Bedroom</a>, <a href="#" className="single-meta">Decor
                  & Furniture</a></p>
              <p>Tags: <a href="#" className="single-meta">Food</a></p>
            </div>

            <div className="share-block-1">
              <ul className="social-btns">
                <li><a href="#" className="facebook"><i className="far fa-thumbs-up"></i><span>likes 1</span></a></li>
                <li><a href="#" className="twitter"><i className="fab fa-twitter"></i> <span>twitter</span></a></li>
                <li><a href="#" className="google"><i className="fas fa-plus-square"></i> <span>share</span></a></li>
              </ul>
            </div>
          
            <div className="share-block-2  mt--30">
              <h4>SHARE THIS PRODUCT</h4>
              <ul className="social-btns social-btns-2">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
    </div>
    </div>
    )
}
export default Product_details