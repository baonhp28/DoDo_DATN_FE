import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../assets/css/templatemo.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChiTietSP = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [skus, setSkus] = useState([]);
    const [selectedSku, setSelectedSku] = useState({});
    const [imgProduct, setImgProduct] = useState(require('../../assets/img/iphone-15-den-1.jpg'));
    const [colorImages, setColorImages] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
            .then(response => {
                const productData = response.data;
                setProduct(productData);
                setImgProduct(productData.imgUrl ? `/assets/img/${productData.imgUrl}` : require('../../assets/img/iphone-15-den-1.jpg'));

                axios.get(`http://localhost:8080/api/skus/product/${id}`)
                    .then(skusResponse => {
                        const skus = skusResponse.data;
                        setSkus(skus);
                        setSelectedSku(skus[0] || {});

                        const colorImgs = skus.map(sku => 
                            sku.attributesSkus
                                .filter(attr => attr.attributeOption.attributes.name === 'Màu')
                                .map(attr => attr.attributeOption.img)
                        ).flat();
                        setColorImages([...new Set(colorImgs)]);
                    })
                    .catch(error => {
                        console.error('Lỗi khi tải dữ liệu SKU:', error);
                        toast.error("Lỗi khi tải dữ liệu SKU.");
                    });
            })
            .catch(error => {
                console.error('Lỗi khi tải dữ liệu sản phẩm:', error);
                toast.error("Lỗi khi tải dữ liệu sản phẩm.");
            });
    }, [id]);

    const handleSkuChange = (sku) => {
        setSelectedSku(sku);
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const handleAddToCart = async (productId, skuId) => {
        const userId = localStorage.getItem("userId");
        if (!userId) {
            console.error("Không tìm thấy mã người dùng trong localStorage.");
            toast.error("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng.");
            return;
        }

        console.log("Gửi yêu cầu với:", { userId, productId, skuId, quantity: 1 });

        try {
            const response = await axios.post(
                `http://localhost:8080/api/orders/cart/add/${userId}/${skuId}/${productId}/1`
            );

            if (response.status === 201) {
                console.log("Dữ liệu phản hồi API:", response.data);
                toast.success("Thêm giỏ hàng thành công.");
            } else {
                console.error("Thêm sản phẩm vào giỏ hàng thất bại:", response.statusText);
                toast.error("Thêm giỏ hàng thất bại.");
            }
        } catch (error) {
            console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
            toast.error("Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.");
        }
    };

    return (
        <div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid mt-3 mb-3" style={{ width: '70%', marginLeft: '80px' }} src={imgProduct} alt="Card image cap" id="product-detail" />
                        </div>
                        <div className="colors">
                            <h6>Màu sắc:</h6>
                            <ul className="list-unstyled d-flex">
                                {colorImages.map((img, index) => (
                                    <li key={index} style={{ marginRight: '10px' }}>
                                        <img
                                            src={`/assets/img/${img}`}
                                            alt={`color-${index}`}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                cursor: 'pointer',
                                                border: selectedColor === img ? '5px solid blue' : '1px solid #ddd'
                                            }}
                                            onClick={() => handleColorSelect(img)}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="fw-bold fs-2" style={{color: 'blue' }}>{product.name}</h1>
                                <p className="fw-bold fs-3" style={{ fontWeight: '900', color: '#ff5733' }}>
                                    Giá: {selectedSku.price?.toLocaleString() || 'N/A'} VND
                                </p>
                                <ul className="list-unstyled d-flex mb-1">
                                    <li>
                                        <i className="text-warning fa fa-star" />
                                        <i className="text-warning fa fa-star" />
                                        <i className="text-warning fa fa-star" />
                                        <i className="text-muted fa fa-star" />
                                        <i className="text-muted fa fa-star" />
                                    </li>
                                </ul>
                                <h6 className='pt-3'>Mô tả:</h6>
                                <p>{product.description}</p>
                                <h6>Thông số sản phẩm:</h6>
                                <ul className="list-unstyled pb-3">
                                    {skus.map(sku => {
                                        const sortedAttributes = sku.attributesSkus
                                            .filter(attr => attr.attributeOption.attributes.name === 'Ram' || attr.attributeOption.attributes.name === 'Dung lượng')
                                            .sort((a, b) => {
                                                if (a.attributeOption.attributes.name === 'Ram') return -1;
                                                if (b.attributeOption.attributes.name === 'Dung lượng') return 1;
                                                return 0;
                                            });

                                        return (
                                            <li
                                                key={sku.id}
                                                className={`sku-option ${selectedSku.id === sku.id ? 'selected' : ''}`}
                                                onClick={() => handleSkuChange(sku)}
                                                style={{
                                                    border: '1px solid #ddd',
                                                    padding: '10px',
                                                    margin: '5px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {sortedAttributes.map((attr, index) => (
                                                    <span key={attr.id} className="attribute">
                                                        {attr.attributeOption.value}
                                                        {index < sortedAttributes.length - 1 && '  '}
                                                    </span>
                                                ))}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="row pb-3">
                                    <div className="col d-grid">
                                        <button type="button" className="btn btn-success btn-lg" onClick={() => handleAddToCart(product.id, selectedSku.id)}>Thêm vào giỏ hàng</button>
                                    </div>
                                    <div className="col d-grid">
                                      
                                    </div>
                                </div>
                                {/* Thông báo success message đã chuyển sang dùng toast */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ChiTietSP;
