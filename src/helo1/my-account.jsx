import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function My_account() {
	const [showModal, setShowModal] = useState(false);
	const [selectedProvince, setSelectedProvince] = useState('');
	const [selectedDistrict, setSelectedDistrict] = useState('');
	const [selectedWard, setSelectedWard] = useState('');
	const [provinces, setProvinces] = useState([]);
	const [districts, setDistricts] = useState([]);
	const [wards, setWards] = useState([]);
	const [addresses, setAddresses] = useState([]);

	// Trạng thái cho địa chỉ mới
	const [newAddress, setNewAddress] = useState({
		name: '',
		phone: '',
		detailedAddress: '',
		province: '',
		district: '',
		ward: ''
	});

	const handleProvinceChange = (event) => {
		setSelectedProvince(event.target.value);
		setSelectedDistrict(''); // Reset huyện
		setSelectedWard(''); // Reset xã
	};
	const handleDistrictChange = (event) => {
		setSelectedDistrict(event.target.value);
	};
	
	const handleWardChange = (event) => {
		setSelectedWard(event.target.value);
	};


	const handleShow = () => setShowModal(true);
	const handleClose = () => {
		setShowModal(false);
		setNewAddress({ name: '', phone: '', detailedAddress: '', province: '', district: '', ward: '' });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewAddress((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSaveAddress = async () => {


		console.log('Giá trị gửi đi:', {
			name: newAddress.name,
			phone: newAddress.phone,
			detailedAddress: newAddress.detailedAddress,
			province: selectedProvince,
			district: selectedDistrict,
			ward: selectedWard,
		});


		const token = localStorage.getItem('token');
		console.log('Token:', token);

		if (!token) {
			alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
			return;
		}


		try {
			const response = await axios.post('http://localhost:8080/api/addresses', {
				name: newAddress.name,
				phone: newAddress.phone,
				detailedAddress: newAddress.detailedAddress,
				province: selectedProvince,
				district: selectedDistrict,
				ward: selectedWard,
			}, {
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			});
			console.log('selectedProvince:', selectedProvince);
console.log('selectedDistrict:', selectedDistrict);
console.log('selectedWard:', selectedWard);

			console.log('Địa chỉ đã được lưu:', response.data);
			setAddresses((prev) => [...prev, response.data]);
			handleClose(); // Đóng modal
		} catch (error) {
			console.error('Error saving address:', error);
			if (error.response) {
				console.error('Chi tiết lỗi từ máy chủ:', error.response.data);
				alert(`Không thể lưu địa chỉ: ${error.response.data.message}`);
			}
			else {
				alert('Không thể lưu địa chỉ. Vui lòng thử lại sau.');
			}
		}
	};




	const handleSelectDefaultAddress = (id) => {
		// Logic để đánh dấu địa chỉ là mặc định
		console.log('Địa chỉ mặc định đã được chọn:', id);
		// Bạn có thể gọi API để cập nhật địa chỉ mặc định ở đây
	};
	const handleDeleteDefaultAddress = async (id) => {
		const token = localStorage.getItem('token');
		console.log('Token:', token);
	
		if (!token) {
			alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
			return;
		}
		
		try {
			const response = await axios.delete(`http://localhost:8080/api/addresses/${id}`, {
				headers: {
					'Authorization': `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
			});
	
			// Cập nhật danh sách địa chỉ sau khi xóa
			setAddresses((prev) => prev.filter(address => address.id !== id));
	
			console.log('Địa chỉ đã được xóa:', response.data);
		} catch (error) {
			console.error('Error deleting address:', error);
			if (error.response) {
				console.error('Chi tiết lỗi từ máy chủ:', error.response.data);
				alert(`Không thể xóa địa chỉ: ${error.response.data.message}`);
			} else {
				alert('Không thể xóa địa chỉ. Vui lòng thử lại sau.');
			}
		}
	};
	
	useEffect(() => {
		const fetchProvinces = async () => {
			const token = localStorage.getItem('token');
			if (!token) {
				alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
				return;
			}

			try {
				const response = await axios.get('http://localhost:8080/api/addresses/provinces', {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
				setProvinces(response.data);
			} catch (error) {
				console.error('Error fetching provinces:', error);
				alert('Không thể lấy danh sách tỉnh. Vui lòng thử lại sau.');
			}
		};

		fetchProvinces();
	}, []);

	useEffect(() => {
		const fetchDistricts = async () => {
			const token = localStorage.getItem('token');
			if (!token) {
				alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
				return;
			}

			if (selectedProvince) {
				try {
					const response = await axios.get(`http://localhost:8080/api/addresses/districts/${selectedProvince}`, {
						headers: {
							'Authorization': `Bearer ${token}`
						}
					});
					setDistricts(response.data);
				} catch (error) {
					console.error('Error fetching districts:', error);
					alert('Không thể lấy danh sách huyện. Vui lòng thử lại sau.');
				}
			} else {
				setDistricts([]);
			}
		};
		fetchDistricts();
	}, [selectedProvince]);

	useEffect(() => {
		const fetchWards = async () => {
			const token = localStorage.getItem('token');
			if (!token) {
				alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
				return;
			}
			if (selectedDistrict) {
				try {
					const response = await axios.get(`http://localhost:8080/api/addresses/wards/${selectedDistrict}`, {
						headers: {
							'Authorization': `Bearer ${token}`
						}
					});
					setWards(response.data);
				} catch (error) {
					console.error('Error fetching wards:', error);
					alert('Không thể lấy danh sách xã. Vui lòng thử lại sau.');
				}
			} else {
				setWards([]);
			}
		};
		fetchWards();
	}, [selectedDistrict]);

	useEffect(() => {
		const fetchAddresses = async () => {
			const token = localStorage.getItem('token');
			if (!token) {
				alert('Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tục.');
				return;
			}

			try {
				const response = await axios.get('http://localhost:8080/api/addresses', {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
				if (Array.isArray(response.data.addresses)) {
					setAddresses(response.data.addresses);
				} else {
					console.error('Dữ liệu không phải là mảng:', response.data);
					alert('Dữ liệu địa chỉ không hợp lệ.');
				}
			} catch (error) {
				console.error('Error fetching addresses:', error);
				alert('Không thể lấy danh sách địa chỉ. Vui lòng thử lại sau.');
			}
		};

		fetchAddresses();
	}, []);

	return (

		<div className="">
			<div className="site-wrapper">
				<nav aria-label="breadcrumb" className="breadcrumb-wrapper">
					<div className="container">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a href="index.html">Home</a></li>
							<li className="breadcrumb-item active" aria-current="page">My Accoun</li>
						</ol>
					</div>
				</nav>

				<div className="page-section sp-inner-page">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="row">

									<div className="col-lg-3 col-12">
										<div className="myaccount-tab-menu nav" role="tablist">
											<a href="#dashboad" className="active" data-bs-toggle="tab"><i className="fas fa-tachometer-alt"></i>
												Dashboard</a>

											<a href="#orders" data-bs-toggle="tab"><i className="fa fa-cart-arrow-down"></i> Orders</a>

											<a href="#download" data-bs-toggle="tab"><i className="fas fa-download"></i> Download</a>

											<a href="#payment-method" data-bs-toggle="tab"><i className="fa fa-credit-card"></i> Payment
												Method</a>

											{/* <a href="#address-edit" data-bs-toggle="tab"><i className="fa fa-map-marker"></i> address</a> */}

											<a href="#TEST" data-bs-toggle="tab"><i className="fa fa-map-marker"></i> address</a>

											<a href="#account-info" data-bs-toggle="tab"><i className="fa fa-user"></i> Account Details</a>

											<a href="login-register.html"><i className="fas fa-sign-out-alt"></i> Logout</a>
										</div>
									</div>

									<div className="col-lg-9 col-12 mt--30 mt-lg-0">
										<div className="tab-content" id="myaccountContent">

											<div className="tab-pane fade show active" id="dashboad" role="tabpanel">
												<div className="myaccount-content">
													<h3>Dashboard</h3>

													<div className="welcome mb-20">
														<p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
													</div>

													<p className="mb-0">From your account dashboard. you can easily check &amp; view your
														recent orders, manage your shipping and billing addresses and edit your
														password and account details.</p>
												</div>
											</div>

											<div className="tab-pane fade" id="orders" role="tabpanel">
												<div className="myaccount-content">
													<h3>Orders</h3>

													<div className="myaccount-table table-responsive text-center">
														<table className="table table-bordered">
															<thead className="thead-light">
																<tr>
																	<th>No</th>
																	<th>Name</th>
																	<th>Date</th>
																	<th>Status</th>
																	<th>Total</th>
																	<th>Action</th>
																</tr>
															</thead>

															<tbody>
																<tr>
																	<td>1</td>
																	<td>Mostarizing Oil</td>
																	<td>Aug 22, 2018</td>
																	<td>Pending</td>
																	<td>$45</td>
																	<td><a href="cart.html" className="btn">View</a></td>
																</tr>
																<tr>
																	<td>2</td>
																	<td>Katopeno Altuni</td>
																	<td>July 22, 2018</td>
																	<td>Approved</td>
																	<td>$100</td>
																	<td><a href="cart.html" className="btn">View</a></td>
																</tr>
																<tr>
																	<td>3</td>
																	<td>Murikhete Paris</td>
																	<td>June 12, 2017</td>
																	<td>On Hold</td>
																	<td>$99</td>
																	<td><a href="cart.html" className="btn">View</a></td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>

											<div className="tab-pane fade" id="download" role="tabpanel">
												<div className="myaccount-content">
													<h3>Downloads</h3>

													<div className="myaccount-table table-responsive text-center">
														<table className="table table-bordered">
															<thead className="thead-light">
																<tr>
																	<th>Product</th>
																	<th>Date</th>
																	<th>Expire</th>
																	<th>Download</th>
																</tr>
															</thead>

															<tbody>
																<tr>
																	<td>Mostarizing Oil</td>
																	<td>Aug 22, 2018</td>
																	<td>Yes</td>
																	<td><a href="#" className="btn">Download File</a></td>
																</tr>
																<tr>
																	<td>Katopeno Altuni</td>
																	<td>Sep 12, 2018</td>
																	<td>Never</td>
																	<td><a href="#" className="btn">Download File</a></td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>

											<div className="tab-pane fade" id="payment-method" role="tabpanel">
												<div className="myaccount-content">
													<h3>Payment Method</h3>

													<p className="saved-message">You Can`t Saved Your Payment Method yet.</p>
												</div>
											</div>
											<div className="tab-pane fade" id="TEST" role="tabpanel">
												<div className="myaccount-content">
													<h3>Địa chỉ</h3>
													<button className="btn btn-primary" onClick={handleShow}>Thêm địa chỉ mới</button>
													<div className="myaccount-table table-responsive text-center mt-3">
														<table className="table table-bordered">
															<thead className="thead-light">
																<tr>
																	<th>No</th>
																	<th>Tên</th>
																	<th>Số điện thoại</th>
																	<th>Địa chỉ chi tiết</th>
																
																	<th>Thao tác</th>
																</tr>
															</thead>
															<tbody>
																{addresses.length > 0 ? (
																	addresses.map((address, index) => (
																		<tr key={address.id}>
																			<td>{index + 1}</td>
																			<td>{address.name}</td>
																			<td>{address.phone}</td>
																			<td>{address.detailedAddress}</td>
																			
																			<td>
																				<button onClick={() => handleSelectDefaultAddress(address.id)}>Chọn làm địa chỉ mặc định</button>
																				
																			</td>
																			<td>
																			<button onClick={() => handleDeleteDefaultAddress(address.id)}>Xóa</button>
																			</td>
																		</tr>
																	))
																) : (
																	<tr>
																		<td colSpan="8">Không có địa chỉ nào</td>
																	</tr>
																)}
															</tbody>
														</table>

														{/* Modal thêm địa chỉ */}
														<Modal show={showModal} onHide={handleClose} dialogClassName="modal-dialog-centered">
															<Modal.Header closeButton>
																<Modal.Title>Thêm địa chỉ mới</Modal.Title>
															</Modal.Header>
															<Modal.Body>
																<Form>
																	<Form.Group controlId="name">
																		<Form.Label>Tên</Form.Label>
																		<Form.Control
																			type="text"
																			placeholder="Nhập tên"
																			name="name"
																			value={newAddress.name}
																			onChange={handleInputChange}
																		/>
																	</Form.Group>

																	<Form.Group controlId="phone">
																		<Form.Label>Số điện thoại</Form.Label>
																		<Form.Control
																			type="text"
																			placeholder="Nhập số điện thoại"
																			name="phone"
																			value={newAddress.phone}
																			onChange={handleInputChange}
																		/>
																	</Form.Group>

																	<Form.Group controlId="province">
																		<Form.Label>Tỉnh</Form.Label>
																		<select value={selectedProvince} onChange={handleProvinceChange}>
																			<option>Chọn tỉnh</option>
																			{provinces.length > 0 ? (
																				provinces.map(province => (
																					<option key={province.ProvinceID} value={province.ProvinceID}>
																						{province.ProvinceName}
																					</option>
																				))
																			) : (
																				<option value="">Không có tỉnh nào</option>
																			)}
																		</select>
																	</Form.Group>

																	<Form.Group controlId="district">
																		<Form.Label>Huyện</Form.Label>
																		<select
																			value={selectedDistrict}
																			onChange={handleDistrictChange}
																			disabled={!selectedProvince}
																		>
																			<option>Chọn huyện</option>
																			{districts.length > 0 ? (
																				districts.map(district => (
																					<option key={district.DistrictID} value={district.DistrictID}>
																						{district.DistrictName}
																					</option>
																				))
																			) : (
																				<option value="">Không có huyện nào</option>
																			)}
																		</select>
																	</Form.Group>

																	<Form.Group controlId="ward">
																		<Form.Label>Xã</Form.Label>
																		<select
																			value={selectedWard}
																			onChange={handleWardChange}
																			disabled={!selectedDistrict}
																		>
																			<option>Chọn xã</option>
																			{wards.length > 0 ? (
																				wards.map(ward => (
																					<option key={ward.WardCode} value={ward.WardCode}>
																						{ward.WardName}
																					</option>
																				))
																			) : (
																				<option value="">Không có xã nào</option>
																			)}
																		</select>
																	</Form.Group>

																	<Form.Group controlId="detailedaddress">
																		<Form.Label>Đường và số nhà</Form.Label>
																		<Form.Control
																			type="text"
																			placeholder="Địa chỉ cụ thể của bạn"
																			name="detailedAddress"
																			value={newAddress.detailedAddress}
																			onChange={handleInputChange}
																		/>
																	</Form.Group>
																</Form>
															</Modal.Body>
															<Modal.Footer>
																<Button variant="secondary" onClick={handleClose}>
																	Đóng
																</Button>
																<Button variant="primary" onClick={handleSaveAddress}>
																	Lưu địa chỉ
																</Button>
															</Modal.Footer>
														</Modal>
													</div>
												</div>
											</div>



											<div className="tab-pane fade" id="address-edit" role="tabpanel">
												<div className="myaccount-content">
													<h3>Billing Address</h3>

													<address>
														<p><strong>Alex Tuntuni</strong></p>
														<p>1355 Market St, Suite 900 <br />
															San Francisco, CA 94103</p>
														<p>Mobile: (123) 456-7890</p>
													</address>

													<a href="#" className="theme-btn"><i className="fa fa-edit"></i>Edit Address</a>
												</div>
											</div>

											<div className="tab-pane fade" id="account-info" role="tabpanel">
												<div className="myaccount-content">
													<h3>Account Details</h3>

													<div className="account-details-form">
														<form action="#">
															<div className="row">
																<div className="col-lg-6 col-12 mb-30">
																	<input id="first-name" placeholder="First Name" type="text" />
																</div>

																<div className="col-lg-6 col-12 mb-30">
																	<input id="last-name" placeholder="Last Name" type="text" />
																</div>

																<div className="col-12 mb-30">
																	<input id="display-name" placeholder="Display Name" type="text" />
																</div>

																<div className="col-12 mb-30">
																	<input id="email" placeholder="Email Address" type="email" />
																</div>

																<div className="col-12 mb-30"><h4>Password change</h4></div>

																<div className="col-12 mb-30">
																	<input id="current-pwd" placeholder="Current Password" type="password" />
																</div>

																<div className="col-lg-6 col-12 mb-30">
																	<input id="new-pwd" placeholder="New Password" type="password" />
																</div>

																<div className="col-lg-6 col-12 mb-30">
																	<input id="confirm-pwd" placeholder="Confirm Password" type="password" />
																</div>

																<div className="col-12">
																	<button className="theme-btn">Save Changes</button>
																</div>

															</div>
														</form>
													</div>
												</div>
											</div>

										</div>
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
export default My_account