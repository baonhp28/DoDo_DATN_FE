import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    fullname: "",
    birthday: "",
    gender: true,
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [resetPasswordData, setResetPasswordData] = useState({
    verificationCode: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e, form) => {
    const { name, value } = e.target;
    form(name, value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      const roleID = response.data.user.role?.id;
      localStorage.setItem("role", roleID);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setSuccess("Đăng nhập thành công");
      setError("");

      // Chuyển hướng
      if (roleID === 1) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Đăng nhập thất bại. Vui lòng thử lại.";
      setError(errorMessage);
      setSuccess("");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/register", registerData);
      setSuccess("Đăng ký thành công");
      setError("");
      setIsLogin(true); // Quay lại form đăng nhập sau khi đăng ký thành công
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Đăng ký thất bại. Vui lòng thử lại.";
      setError(errorMessage);
      setSuccess("");
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/auth/forgot-password", {
        email: forgotPasswordEmail,
      });
      setSuccess(
        "Email đặt lại mật khẩu đã được gửi. Vui lòng kiểm tra hộp thư đến của bạn."
      );
      setError("");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Gửi email đặt lại mật khẩu không thành công. Vui lòng thử lại.";
      setError("Lỗi: " + errorMessage);
      setSuccess("");
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8080/api/auth/reset-password",
        resetPasswordData
      );
      setSuccess(
        "Đặt lại mật khẩu thành công. Bạn có thể đăng nhập bằng mật khẩu mới."
      );
      setError("");
      setIsResetPassword(false);
      setIsLogin(true);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Đặt lại mật khẩu không thành công. Vui lòng thử lại.";
      setError("Lỗi: " + errorMessage);
      setSuccess("");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
    setIsResetPassword(false);
    setError("");
    setSuccess("");
  };

  const showForgotPasswordForm = () => {
    setIsForgotPassword(true);
    setIsLogin(false);
    setIsResetPassword(false);
    setError("");
    setSuccess("");
  };

  const showResetPasswordForm = () => {
    setIsResetPassword(true);
    setIsLogin(false);
    setIsForgotPassword(false);
    setError("");
    setSuccess("");
  };

  const username = localStorage.getItem("username");

  return (
    <main className="page-section">
      <div className="auth-container">
        {/* Container cho Hình ảnh và Form */}
        <div className="image-form-wrapper">
          {/* Hình ảnh bên trái */}
          <div className="image-container">
            <img
              src="/image/login/image_2.jpg"
              alt="Auth Page"
              className="auth-image"
            />
          </div>

          <div className="form-container">
            <header className="entry-header">
              <h1 className="entry-title">
                {username
                  ? "Chào mừng, " + username
                  : isResetPassword
                  ? "Đặt Lại Mật Khẩu"
                  : isForgotPassword
                  ? "Quên Mật Khẩu"
                  : isLogin
                  ? "Đăng Nhập"
                  : "Đăng Ký"}
              </h1>
            </header>
            {username ? (
              <div className="welcome-message">
                <p>Chào mừng, {username}!</p>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("username");
                    navigate("/"); // Chuyển hướng đến trang chính
                  }}
                  className="btn btn-black"
                >
                  Đăng Xuất
                </button>
              </div>
            ) : (
              <>
                {isResetPassword ? (
                  <div className="form-center">
                    <form onSubmit={handleResetPasswordSubmit}>
                      <div className="mb--20">
                        <label>Mã Xác Nhận *</label>
                        <input
                          name="verificationCode"
                          value={resetPasswordData.verificationCode}
                          onChange={(e) =>
                            handleChange(e, (name, value) =>
                              setResetPasswordData((prev) => ({
                                ...prev,
                                [name]: value,
                              }))
                            )
                          }
                          className="mb-0"
                          type="text"
                        />
                      </div>
                      <div className="mb--20">
                        <label>Mật Khẩu Mới *</label>
                        <input
                          name="newPassword"
                          value={resetPasswordData.newPassword}
                          onChange={(e) =>
                            handleChange(e, (name, value) =>
                              setResetPasswordData((prev) => ({
                                ...prev,
                                [name]: value,
                              }))
                            )
                          }
                          className="mb-0"
                          type="password"
                        />
                        <div className="mb--20">
                          <label>Nhập Lại Mật Khẩu *</label>
                          <input
                            name="confirmPassword"
                            value={resetPasswordData.confirmPassword}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setResetPasswordData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="password"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-black">
                        Xác Nhận
                      </button>
                    </form>
                  </div>
                ) : isForgotPassword ? (
                  <div className="form-center">
                    <form onSubmit={handleForgotPasswordSubmit}>
                      <div className="mb--20">
                        <label>Email *</label>
                        <input
                          value={forgotPasswordEmail}
                          onChange={(e) =>
                            setForgotPasswordEmail(e.target.value)
                          }
                          className="mb-0"
                          type="email"
                          placeholder="Nhập email của bạn"
                        />
                      </div>
                      <button type="submit" className="btn btn-black">
                        Gửi
                      </button>
                      <p className="text-center mt-4">
                        <a href="#0" onClick={showResetPasswordForm}>
                          Nhập mã xác nhận để đặt lại mật khẩu
                        </a>
                      </p>
                    </form>
                  </div>
                ) : isLogin ? (
                  <div className="form-center">
                    <form onSubmit={handleLoginSubmit}>
                      <div className="mb--20">
                        <label>Tên đăng nhập *</label>
                        <input
                          name="username"
                          value={loginData.username}
                          onChange={(e) =>
                            handleChange(e, (name, value) =>
                              setLoginData((prev) => ({
                                ...prev,
                                [name]: value,
                              }))
                            )
                          }
                          className="mb-0"
                          type="text"
                          placeholder="Nhập tên đăng nhập của bạn"
                        />
                      </div>
                      <div className="mb--20">
                        <label>Mật khẩu *</label>
                        <input
                          name="password"
                          value={loginData.password}
                          onChange={(e) =>
                            handleChange(e, (name, value) =>
                              setLoginData((prev) => ({
                                ...prev,
                                [name]: value,
                              }))
                            )
                          }
                          className="mb-0"
                          type="password"
                          placeholder="Nhập mật khẩu của bạn"
                        />
                      </div>
                      <button type="submit" className="btn btn-black">
                        Đăng Nhập
                      </button>
                    </form>
                    <p className="text-center mt-4">
                      <a href="#0" onClick={showForgotPasswordForm}>
                        Quên mật khẩu?
                      </a>
                    </p>
                    <p className="text-center mt-4">
                      Chưa có tài khoản?{" "}
                      <a href="#0" onClick={toggleForm}>
                        Đăng ký ngay!
                      </a>
                    </p>
                  </div>
                ) : (
                  <div className="form-center">
                  <form onSubmit={handleRegisterSubmit}>
                    <div className="form-row">
                      <div className="form-column">
                        <div className="mb--20">
                          <input
                            name="fullname"
                            value={registerData.fullname}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="text"
                            placeholder="Họ và tên"
                          />
                        </div>
                        <div className="mb--20">
                          <label>Ngày sinh *</label>
                          <input
                            name="birthday"
                            value={registerData.birthday}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="date"
                          />
                        </div>
                        <div className="mb--20">
                          <input
                            name="phone"
                            value={registerData.phone}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="text"
                            placeholder="Số điện thoại"
                          />
                        </div>
                        <div className="mb--20">
                          <input
                            name="username"
                            value={registerData.username}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="text"
                            placeholder="Tên đăng nhập"
                          />
                        </div>
                      </div>
                      <div className="form-column">
                      <div className="mb--20">
                          <input
                            name="email"
                            value={registerData.email}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb--20">
                          <label>Giới tính *</label>
                          <select
                            name="gender"
                            value={registerData.gender}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value === "true",
                                }))
                              )
                            }
                          >
                            <option value={true}>Nam</option>
                            <option value={false}>Nữ</option>
                          </select>
                        </div>
                       
                        <div className="mb--20">
                          <input
                            name="password"
                            value={registerData.password}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="password"
                            placeholder="Mật khẩu"
                          />
                        </div>
                        <div className="mb--20">
                          <input
                            name="confirmPassword"
                            value={registerData.confirmPassword}
                            onChange={(e) =>
                              handleChange(e, (name, value) =>
                                setRegisterData((prev) => ({
                                  ...prev,
                                  [name]: value,
                                }))
                              )
                            }
                            className="mb-0"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                          />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-black">
                      Đăng Ký
                    </button>
                  </form>
              
                
                
                  <p className="text-center mt-4">
                    Đã có tài khoản?{" "}
                    <a href="#0" onClick={toggleForm}>
                      Đăng nhập ngay!
                    </a>
                  </p>
                </div>
                
                )}
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
