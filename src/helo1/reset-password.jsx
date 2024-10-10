import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const [resetPasswordData, setResetPasswordData] = useState({ token: "", newPassword: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleResetPasswordChange = (e) => {
        const { name, value } = e.target;
        setResetPasswordData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleResetPasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/auth/reset-password', resetPasswordData);
            setSuccess("Password reset successful. You can now log in with your new password.");
            setError("");
            navigate('/login'); // Navigate to the login page after successful password reset
        } catch (error) {
            console.error("Reset password error:", error);
            const errorMessage = error.response?.data?.message || "Failed to reset password. Please try again.";
            setError("Error: " + errorMessage);
            setSuccess("");
        }
    };

    return (
        <main className="page-section">
            <div className="form-container">
                <header className="entry-header">
                    <h1 className="entry-title">Reset Password</h1>
                </header>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                        <form onSubmit={handleResetPasswordSubmit}>
                            <h4 className="login-title">Reset Password</h4>
                            <div className="col-md-12 col-12 mb--20">
                                <label>Token *</label>
                                <input
                                    name="token"
                                    value={resetPasswordData.token}
                                    onChange={handleResetPasswordChange}
                                    className="mb-0"
                                    type="text"
                                />
                            </div>
                            <div className="col-md-12 col-12 mb--20">
                                <label>New Password *</label>
                                <input
                                    name="newPassword"
                                    value={resetPasswordData.newPassword}
                                    onChange={handleResetPasswordChange}
                                    className="mb-0"
                                    type="password"
                                />
                            </div>
                            <div className="col-md-12">
                                <button type="submit" className="btn btn-black">
                                    Reset Password
                                </button>
                            </div>
                        </form>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ResetPassword;
