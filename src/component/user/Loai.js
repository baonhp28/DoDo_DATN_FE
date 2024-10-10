import React, { Component } from 'react';
import axios from 'axios';

export default class Loai extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api/categories')
      .then(response => {
        console.log(response.data); // Kiểm tra dữ liệu trả về ở đây
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { categories } = this.state;

    if (categories.length === 0) {
      return <p>Loading...</p>; // Hiển thị thông báo nếu chưa có dữ liệu
    }

    return (
      <div>
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 style={{color: 'Green', border: '2px solid green'}} className="fw-bold h1">Loại Sản Phẩm</h1>            
          </div>
        </div>
        <div className="row">
          {categories.map((category) => (
            <div className="col-3 p-5 mt-3" key={category.id}>
              <a href="#">
                <img
                  src={`/assets/img/${category.img}`}
                  className="image-item"
                  alt={category.categoryName}
                />
              </a>
              <h5 className="text-center mt-3 mb-3">{category.categoryName}</h5>
              <p className="text-center"><a className="btn btn-success" href="/shop">Xem thêm</a></p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
