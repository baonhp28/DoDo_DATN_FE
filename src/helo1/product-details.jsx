import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function Product_details() {
  const { id } = useParams(); // Get the product ID from the route parameters
  const [product, setProduct] = useState(null); // State to store product data
  const [quantity, setQuantity] = useState(1); // State for quantity input

  useEffect(() => {
    // Fetch product details from the backend using Axios
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the product data!", error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
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
        <main className="product-details-section">
        <div className="container">
          <div className="pm-product-details">
            <div className="row">
              <div className="col-md-6">
                
                <div className="image-block">
                <img id="zoom_03" src={`/${product.imageUrl}`} alt={product.productName} />
                  <div id="product-view-gallery" className="elevate-gallery">
                    {/* Example image gallery. Replace the static images with actual product images */}
                    <a href="#" className="gallary-item" data-image={product.imageUrl} data-zoom-image={product.imageUrl}>
                    <img src={`/${product.imageUrl}`} alt={product.productName}  style={{ width: '150px', height: 'auto' }} />
                    </a>
                    {/* Add more images if available */}
                  </div>
                </div>
              </div>

              <div className="col-md-6 mt-5 mt-md-0">
                <div className="description-block">
                  <div className="header-block">
                    <h3>{product.productName}</h3>
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

                  <p className="price">
                    <span className="old-price">{product.oldPrice ? `${product.oldPrice}$` : ''}</span>
                    {product.price}$
                  </p>

                  <div className="product-short-para">
                    <p>{product.description}</p>
                  </div>
                  <div className="status">
                    <i className="fas fa-check-circle"></i>{product.quantity} IN STOCK
                  </div>

                  <form className="add-to-cart">
                    <div className="count-input-block">
                      <input
                        type="number"
                        className="form-control text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                      />
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
                    <p>Categories: <a href="#" className="single-meta">{product.categoryName}</a></p>
                  </div>

                  <div className="share-block-1">
                    <ul className="social-btns">
                      <li><a href="#" className="facebook"><i className="far fa-thumbs-up"></i><span>likes 1</span></a></li>
                      <li><a href="#" className="twitter"><i className="fab fa-twitter"></i> <span>twitter</span></a></li>
                      <li><a href="#" className="google"><i className="fas fa-plus-square"></i> <span>share</span></a></li>
                    </ul>
                  </div>

                  <div className="share-block-2 mt--30">
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

        <section className="review-section pt--60">
          <h2 className="sr-only d-none">Product Review</h2>
          <div className="container">
            <div className="product-details-tab">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">DESCRIPTION</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">REVIEWS (1)</a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <article>
                    <section>
                      <div className="pt--60">
                        <div className="container">
                          <div className="block-title">
                            <h2>RELATED PRODUCTS</h2>
                          </div>
                          <div className="petmark-slick-slider border normal-slider" data-slick-setting='{
                        "autoplay": true,
                        "autoplaySpeed": 3000,
                        "slidesToShow": 5,
                        "arrows": true
                    }' data-slick-responsive='[
                        {"breakpoint":991, "settings": {"slidesToShow": 3}},
                        {"breakpoint":480, "settings": {"slidesToShow": 1, "rows": 1}}
                    ]'>
                            {/* {products.map(product => (
                            <div className="single-slide" key={product.id}>
                                <div className="pm-product">
                                   
                                    <a href={`/Product_details/${product.slug}`} className="image">
                                   <img src={product.imageUrl} alt={product.productName} />
                                </a>
                                        <span className="onsale-badge">Sale!</span>
                                    
                                    <div className="content">
                                    <h3 className="font-weight-500">
                                    <a href={`/Product_details/${product.slug}`} style={{ textDecoration: 'none' }}>
                                            {product.productName}
                                        </a>
                                        </h3>
                                        <div className="price text-red">
                                        <span className="old">${product.price + 50}</span> 
                                        <span>${product.price}</span>
                                        </div>
                                        <div className="btn-block">
                                            <a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}
                          </div>
                        </div>
                      </div>

                    </section>
                  </article>
                </div>


                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="review-wrapper">
                    <h2 className="title-lg mb--20">1 REVIEW FOR AUCTOR GRAVIDA ENIM</h2>
                    <div className="review-comment mb--20">
                      <div className="avatar">
                        <img src="/image/icon-logo/author-logo.png" alt="Reviewer Avatar" />
                      </div>
                      <div className="text">
                        <div className="rating-widget mb--15">
                          <span className="single-rating"><i className="fas fa-star"></i></span>
                          <span className="single-rating"><i className="fas fa-star"></i></span>
                          <span className="single-rating"><i className="fas fa-star"></i></span>
                          <span className="single-rating"><i className="fas fa-star-half-alt"></i></span>
                          <span className="single-rating"><i className="far fa-star"></i></span>
                        </div>
                        <h6 className="author">ADMIN – <span className="font-weight-400">March 23, 2015</span></h6>
                        <p>Lorem et placerat vestibulum...</p>
                      </div>
                    </div>

                  </div>
                  <div className="rating-row pt-2">
                    <p>Your Rating</p>
                    <span className="rating-widget-block">

                    </span>
                    <form className="mt--15 site-form">
                      <div className="row">
                        <div className="col-12">
                          <div className="form-group">
                            <label htmlFor="message">Comment</label>
                            <textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" className="form-control" required />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" className="form-control" required />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input type="url" id="website" className="form-control" />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="submit-btn">
                            <button type="submit" className="btn btn-black">Post Comment</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
</main>
      </div>
    </div>
  )
}
export default Product_details