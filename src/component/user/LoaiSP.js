import axios from "axios";
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import "../../assets/css/templatemo.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";

export default class LoaiSP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      filteredProducts: [],
      searchQuery: "",
      openItem: null,
      currentPage: 1,
      productsPerPage: 6,
      sortOption: "Nổi bật",
      successMessage: "thêm thành công", // Đưa vào state của constructor
    };

    // Ràng buộc phương thức
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.startVoiceSearch = this.startVoiceSearch.bind(this);
    this.stopVoiceSearch = this.stopVoiceSearch.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchProducts();
  }

  fetchCategories() {
    axios
      .get("http://localhost:8080/api/categories")
      .then((response) => {
        const categories = response.data;
        console.log("Categories:", categories);

        const fetchProductsPromises = categories.map((category) => {
          if (category.categoryId) {
            return axios
              .get(`http://localhost:8080/api/products/category/${category.categoryId}`)
              .then((productsResponse) => ({
                ...category,
                products: productsResponse.data,
              }));
          }
          return Promise.resolve({ ...category, products: [] });
        });

        Promise.all(fetchProductsPromises)
          .then((categoriesWithProducts) => {
            console.log("Categories with Products:", categoriesWithProducts);
            this.setState({ categories: categoriesWithProducts });
          })
          .catch((error) => {
            console.error("Error fetching products for categories:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }


  fetchProducts() {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        const products = response.data;
        const fetchSkusPromises = products.map((product) =>
          axios
            .get(`http://localhost:8080/api/skus/product/${product.id}`)
            .then((skusResponse) => {
              const skus = skusResponse.data;
              return {
                ...product,
                skus,
                selectedSkuId: skus[0]?.id || null,
                selectedSkuPrice: skus[0]?.price || 0,
              };
            })
        );

        Promise.all(fetchSkusPromises)
          .then((productsWithSkus) => {
            this.setState({
              products: productsWithSkus,
              filteredProducts: productsWithSkus,
            });
          })
          .catch((error) => {
            console.error("Error fetching SKUs:", error);
            toast.error("Lỗi khi tải dữ liệu SKU.");
          });
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        toast.error("Lỗi khi tải dữ liệu sản phẩm.");
      });
  }

  handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    this.setState({ searchQuery: query });

    if (query) {
      const filteredProducts = this.state.products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      this.setState({ filteredProducts, currentPage: 1 }, this.sortProducts);
    } else {
      this.setState(
        { filteredProducts: this.state.products, currentPage: 1 },
        this.sortProducts
      );
    }
  };

  handleToggle(categoryId) {
    this.setState((prevState) => ({
      openItem: prevState.openItem === categoryId ? null : categoryId,
    }));
  }

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  handleSortChange = (event) => {
    this.setState({ sortOption: event.target.value }, this.sortProducts);
  };

  handleSkuChange = (productId, skuId, price) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === productId
          ? { ...product, selectedSkuId: skuId, selectedSkuPrice: price }
          : product
      ),
      filteredProducts: prevState.filteredProducts.map((product) =>
        product.id === productId
          ? { ...product, selectedSkuId: skuId, selectedSkuPrice: price }
          : product
      ),
    }));
  };

  handleAddToCart = async (productId, skuId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID not found in localStorage.");
      window.location.href = "/login";
      return;
    }

    console.log("Sending request with:", {
      userId,
      productId,
      skuId,
      quantity: 1,
    });

    try {
      const response = await axios.post(
        `http://localhost:8080/api/orders/cart/add/${userId}/${skuId}/${productId}/1`
      );

      if (response.status === 201) {
        console.log("API Response Data:", response.data);
        toast.success(" thêm giỏ hàng thành công!");
      } else {
        console.error("Failed to add product to cart:", response.statusText);
        toast.error("Thêm sản phẩm vào giỏ hàng thất bại.");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Lỗi khi thêm sản phẩm vào giỏ hàng.");
    }
  };

  sortProducts = () => {
    const { filteredProducts, sortOption } = this.state;
    let sortedProducts = [...filteredProducts];

    sortedProducts.sort((a, b) => {
      const priceA = a.selectedSkuPrice || 0;
      const priceB = b.selectedSkuPrice || 0;

      switch (sortOption) {
        case "Nổi bật":
          return 0;

        case "Giảm giá":
          const discountA = a.skus[0]?.discount || 0;
          const discountB = b.skus[0]?.discount || 0;
          return discountB - discountA;

        case "Thấp đến cao":
          return priceA - priceB;

        case "Cao đến thấp":
          return priceB - priceA;

        default:
          return 0;
      }
    });

    this.setState({ filteredProducts: sortedProducts });
  };

  startVoiceSearch() {
    // Kiểm tra xem SpeechRecognition có được hỗ trợ không
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      // alert("Web Speech API không được hỗ trợ trên trình duyệt của bạn.");
      toast.error("Web Speech API không được hỗ trợ trên trình duyệt của bạn.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "vi-VN";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      this.setState({ recognizing: true });
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      this.setState({ searchQuery: transcript }, () => {
        this.handleSearch({ target: { value: transcript } });
      });
    };

    recognition.onerror = (event) => {
      console.error("Lỗi nhận diện giọng nói:", event.error);
      this.stopVoiceSearch();
    };

    recognition.onend = () => {
      this.setState({ recognizing: false });
    };

    recognition.start();
  }

  stopVoiceSearch() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.stop();
    }
  }

  render() {
    const {
      categories,
      filteredProducts,
      searchQuery,
      openItem,
      currentPage,
      productsPerPage,
      sortOption,
      recognizing,
    } = this.state;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              {this.state.categories.map((category) => (
                <li className="pb-3" key={category.categoryId}>
                  <a
                    className={`d-flex justify-content-between h3 text-decoration-none ${this.state.openItem === category.categoryId ? "" : "collapsed"
                      }`}
                    onClick={() => this.handleToggle(category.categoryId)}
                    style={{ cursor: "pointer" }}
                  >
                    {category.categoryName}
                    <i
                      className={`fa fa-fw ${this.state.openItem === category.categoryId
                          ? "fa-chevron-circle-up"
                          : "fa-chevron-circle-down"
                        } mt-1`}
                    ></i>
                  </a>
                  <ul
                    className={`collapse ${this.state.openItem === category.categoryId ? "show" : ""
                      } list-unstyled pl-3`}
                  >
                    {category.products &&
                      category.products.map((product) => (
                        <li key={product.id}>
                          <Link
                            className="text-decoration-none"
                            to={`/chitiet/${product.id}`}
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>


          <div className="col-lg-9">
            <div className="row mb-4">
              <div className="col-md-6">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm sản phẩm..."
                    value={searchQuery}
                    onChange={this.handleSearch}
                  />
                  <IconButton
                    color="primary"
                    onClick={this.startVoiceSearch}
                    disabled={recognizing}
                    style={{ marginLeft: "10px" }}
                  >
                    <MicIcon />
                  </IconButton>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex">
                  <select
                    className="form-control"
                    value={sortOption}
                    onChange={this.handleSortChange}
                  >
  
                    <option value="Thấp đến cao">Thấp đến cao</option>
                    <option value="Cao đến thấp">Cao đến thấp</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {currentProducts.map((product) => (
                <div className="p-3 col-md-4" key={product.id}>
                  <div style={{
                    display: 'flex',
                    flexdirection: 'column',
                    height: '100%'
                  }}
                    className="card mb-4 product-wap rounded-0">
                    <div style={{
                      height: '100%',
                      display: 'flex',
                      flexdirection: 'column',
                      overflow: 'hidden',
                    }}
                      className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src={`http://localhost:8080/assets/img/${product.imgUrl}`}
                        alt={product.name}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="btn btn-success text-white mt-2"
                              to={`/chitiet/${product.id}`}
                            >
                              <i className="far fa-eye" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div style={{
                      flexgrow: '1',
                      display: 'flex',
                      flexdirection: 'column',
                      justifycontent: 'space-between',
                    }}
                      className="card-body">
                      <Link
                        to={`/chitiet/${product.id}`}
                        className="h3 text-decoration-none"
                      >
                        {product.name}
                      </Link>
                      <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-warning fa fa-star" />
                          <i className="text-muted fa fa-star" />
                        </li>
                      </ul>
                      <div className="sku-options">
                        {product.skus &&
                          product.skus.map((sku) => {
                            const sortedAttributes = sku.attributesSkus
                              .filter(
                                (attr) =>
                                  attr.attributeOption.attributes.name ===
                                  "Ram" ||
                                  attr.attributeOption.attributes.name ===
                                  "Dung lượng"
                              )
                              .sort((a, b) => {
                                if (a.attributeOption.attributes.name === "Ram")
                                  return -1;
                                if (
                                  b.attributeOption.attributes.name ===
                                  "Dung lượng"
                                )
                                  return 1;
                                return 0;
                              });

                            return (
                              <div
                                key={sku.id}
                                className={`sku-option ${product.selectedSkuId === sku.id
                                    ? "selected"
                                    : ""
                                  }`}
                                onClick={() =>
                                  this.handleSkuChange(
                                    product.id,
                                    sku.id,
                                    sku.price
                                  )
                                }
                              >
                                {sortedAttributes.map((attr, index) => (
                                  <span key={attr.id} className="attribute">
                                    {attr.attributeOption.value}
                                    {index < sortedAttributes.length - 1 &&
                                      "  "}
                                  </span>
                                ))}
                              </div>
                            );
                          })}
                      </div>

                      <p className="text-center mt-3 mb-0">
                        Giá: {product.selectedSkuPrice.toLocaleString()} VNĐ
                      </p>

                      <button
                        className="btn btn-success text-white mt-2"
                        onClick={() =>
                          this.handleAddToCart(
                            product.id,
                            product.selectedSkuId
                          )
                        }
                      >
                        <i className="fas fa-cart-plus" />
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => this.handlePageChange(currentPage - 1)}
                  >
                    Trước
                  </button>
                </li>
                {[...Array(totalPages).keys()].map((page) => (
                  <li
                    key={page + 1}
                    className={`page-item ${currentPage === page + 1 ? "active" : ""
                      }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => this.handlePageChange(page + 1)}
                    >
                      {page + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${currentPage === totalPages ? "disabled" : ""
                    }`}
                >
                  <button
                    className="page-link"
                    onClick={() => this.handlePageChange(currentPage + 1)}
                  >
                    Sau
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
