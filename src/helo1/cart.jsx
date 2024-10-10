function Cart(){
    return(
        <div className="">
        <div className="site-wrapper">
          <nav aria-label="breadcrumb" className="breadcrumb-wrapper">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Cart</li>
              </ol>
            </div>
          </nav>
  
          <div className="cart_area cart-area-padding sp-inner-page--top">
            <div className="container">
              <div className="page-section-title">
                <h1>SHOPPING CART</h1>
              </div>
              <div className="row">
                <div className="col-12">
                  <form action="#" className="">
                    <div className="cart-table table-responsive mb--40">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="pro-remove"></th>
                            <th className="pro-thumbnail">Image</th>
                            <th className="pro-title">Product</th>
                            <th className="pro-price">Price</th>
                            <th className="pro-quantity">Quantity</th>
                            <th className="pro-subtotal">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                            <td className="pro-thumbnail"><a href="#"><img src="image/product/home-1/product-1.jpg" alt="Product" /></a></td>
                            <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                            <td className="pro-price"><span>$395.00</span></td>
                            <td className="pro-quantity">
                              <div className="pro-qty">
                                <div className="count-input-block">
                                  <input type="number" className="form-control text-center" defaultValue="1" min="1" />
                                </div>
                              </div>
                            </td>
                            <td className="pro-subtotal"><span>$395.00</span></td>
                          </tr>
  
                          <tr>
                            <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                            <td className="pro-thumbnail"><a href="#"><img src="image/product/home-1/product-1.jpg" alt="Product" /></a></td>
                            <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                            <td className="pro-price"><span>$395.00</span></td>
                            <td className="pro-quantity">
                              <div className="pro-qty">
                                <div className="count-input-block">
                                  <input type="number" className="form-control text-center" defaultValue="1" min="1" />
                                </div>
                              </div>
                            </td>
                            <td className="pro-subtotal"><span>$395.00</span></td>
                          </tr>
  
                          <tr>
                            <td colSpan="6" className="actions">
                              <div className="coupon-block">
                                <div className="coupon-text">
                                  <label htmlFor="coupon_code">Coupon:</label>
                                  <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Coupon code" />
                                </div>
                                <div className="coupon-btn">
                                  <input type="submit" className="btn-black" name="apply_coupon" value="Apply coupon" />
                                </div>
                              </div>
  
                              <div className="update-block text-end">
                                <input type="submit" className="btn-black" name="update_cart" value="Update cart" />
                                <input type="hidden" id="_wpnonce" name="_wpnonce" value="05741b501f" />
                                <input type="hidden" name="_wp_http_referer" value="/petmark/cart/" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-section-2 sp-inner-page--bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12 mb--15">
						
						<div className="cart-block-title">
							<h2>YOU MAY BE INTERESTED IN…</h2>
						</div>
						<div className="petmark-slick-slider border normal-slider arrow-type-two" data-slick-setting='{
								"autoplay": true,
								"autoplaySpeed": 3000,
								"slidesToShow": 3,
								"arrows": true
						}'
						data-slick-responsive='[
								{"breakpoint":991, "settings": {"slidesToShow": 2} },
								{"breakpoint":768, "settings": {"slidesToShow": 1} }
						]'>

							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-7.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-8.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-9.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-5.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-1.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-3.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-2.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
							<div className="single-slide">
								<div className="pm-product">
									<div className="image">
										<a href="product-details.html"><img src="image/product/home-1/product-1.jpg" alt=""/></a>

										<span className="onsale-badge">Sale!</span>
									</div>
									<div className="content">
										<h3>Convallis quam sit</h3>
										<div className="price text-red">
											<span className="old">$200</span>
											<span>$300</span>
										</div>
										<div className="btn-block">
											<a href="cart.html" className="btn btn-outlined btn-rounded">Add to Cart</a>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

					
					<div className="col-lg-6 col-12 d-flex">
						<div className="cart-summary">
							<div className="cart-summary-wrap">
								<h4><span>Cart Summary</span></h4>
								<p>Sub Total <span className="text-primary">$1250.00</span></p>
								<p>Shipping Cost <span className="text-primary">$00.00</span></p>
								<h2>Grand Total <span className="text-primary">$1250.00</span></h2>
							</div>
							<div className="cart-summary-button">
								<a href="checkout.html" className="checkout-btn c-btn">Checkout</a>
								<button className="update-btn c-btn">Update Cart</button>
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

export default Cart