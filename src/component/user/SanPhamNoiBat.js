import React, { Component } from 'react';
import axios from 'axios';

export default class SanPhamNoiBat extends Component {
    state = {
        products: [],
        isLoading: true,
        error: null
    };

    componentDidMount() {
        // Gọi API để lấy sản phẩm bán chạy
        axios.get('http://localhost:8080/api/products/top-selling-products')
            .then(response => {
                this.setState({
                    products: response.data,
                    isLoading: false
                });
            })
            .catch(error => {
                console.error('There was an error fetching the top-selling products!', error);
                this.setState({
                    isLoading: false,
                    error: error.message
                });
            });
    }

    render() {
        const { products, isLoading, error } = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error}</p>;
        }

        return (
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <hr></hr>
                        <h1 style={{ color: '' }} className=" h1">Sản Phẩm Bán Chạy</h1>
                        <hr></hr>
                        {/* <p>Những sản phẩm bán chạy trong tuần.</p> */}
                        <p className='pb-2'></p>
                    </div>
                </div>
                <div className="row">
                    {products.map(product => (
                        <div key={product.productId} className="col-12 col-md-3 mb-3 SP">
                            <div style={{
                                display: 'flex',
                                flexdirection: 'column',
                                height: '100%'
                            }}
                                className="card">
                                <a href={`/chitiet/${product.productId}`}>
                                    <img
                                        style={{
                                            objectfit: 'cover', /* Đảm bảo hình ảnh không bị kéo dãn */
                                            width: '100%',
                                            height: '400px'
                                        }}
                                        src={`http://localhost:8080/assets/img/${product.productImage}`}
                                        className="card-img-top pictu" alt={product.productName} />
                                </a>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexdirection: 'column',
                                        justifycontent: 'space-between'
                                    }}
                                    className="card-body">
                                <a href={`/chitiet/${product.productId}`} className="h3 text-decoration-none text-dark">{product.productName}</a>
                                <a style={{ textDecoration: 'none' }} href={`/chitiet/${product.productId}`} className="text-muted">Chi tiết</a>
                            </div>
                        </div>
                        </div>
                    ))}
            </div>
            </div >
        );
    }
}
