import request from "../config/ApiConfig/index";

const loginApi = async ({ username, password }) => {
  try {
    const res = await request({
      method: "POST",
      path: "/api/auth/login",
      data: {
        username,
        password,
      },
    });

    if (!res || !res.employee || !res.token) {
      throw new Error("Phản hồi API không dự kiến");
    }

    const { employee, token } = res;

    return {
      employee,
      token,
      role: employee.role, // Kiểm tra rằng role có trong employee
    };
  } catch (error) {
    console.error("Lỗi API đăng nhập:", error);
    throw error;
  }
};

const getProfile = async () => {
  try {
    const res = await request({
      method: "GET",
      path: "/api/auth/user",
    });

    if (!res || !res.employee || res.employee.role === undefined) {
      throw new Error("Thông tin người dùng không tồn tại hoặc không hợp lệ");
    }

    return {
      employee: res.employee,
      role: res.employee.role,
    };
  } catch (error) {
    console.error("Get Profile API error:", error);
    throw error;
  }
};

export { loginApi, getProfile };
