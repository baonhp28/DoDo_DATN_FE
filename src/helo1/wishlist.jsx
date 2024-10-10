function Wishlist(){
    return(
            
 <div className="">
<div className="site-wrapper">
<nav aria-label="breadcrumb" className="breadcrumb-wrapper">
    <div className="container">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
        </ol>
    </div>
</nav>
<div className="cart_area sp-inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="https://htmldemo.net/petmark/petmark/">				
                  
                            <div className="cart-table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">Image</th>
                                            <th className="pro-title">Product</th>
                                            <th className="pro-price">Price</th>
                                            <th className="pro-quantity">Quantity</th>
                                            <th className="pro-subtotal">Total</th>
                                            <th className="pro-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img src="image/product/home-1/product-1.jpg" alt="Product"/></a></td>
                                            <td className="pro-title"><a href="#">Rinosin Glasses</a></td>
                                            <td className="pro-price"><span>$395.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty">
                                                    <div className="count-input-block">
                                                        <input type="number" className="form-control text-center" value="1" min="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$395.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img src="image/product/home-1/product-2.jpg" alt="Product"/></a></td>
                                            <td className="pro-title"><a href="#">Silacon Glasses</a></td>
                                            <td className="pro-price"><span>$275.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty">
                                                    <div className="count-input-block">
                                                        <input type="number" className="form-control text-center" value="1" min="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$550.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img src="image/product/home-1/product-3.jpg" alt="Product"/></a></td>
                                            <td className="pro-title"><a href="#">Easin Glasses</a></td>
                                            <td className="pro-price"><span>$295.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty">
                                                    <div className="count-input-block">
                                                        <input type="number" className="form-control text-center" value="1" min="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$295.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td className="pro-thumbnail"><a href="#"><img src="image/product/home-1/product-4.jpg" alt="Product"/></a></td>
                                            <td className="pro-title"><a href="#">Macrox Glasses</a></td>
                                            <td className="pro-price"><span>$220.00</span></td>
                                            <td className="pro-quantity">
                                                <div className="pro-qty">
                                                    <div className="count-input-block">
                                                        <input type="number" className="form-control text-center" value="1" min="1"/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="pro-subtotal"><span>$220.00</span></td>
                                            <td className="pro-remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                        </form>	
                    </div>
                </div>
            </div>
        </div>

</div>
</div>
    )
}
export default Wishlist