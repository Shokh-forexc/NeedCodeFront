import './Login.css';
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [isActive, setIsActive] = useState(true);
    const [loginName, setLoginName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [regUsername, setRegUsername] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPassword, setRegPassword] = useState("");
    const [regRole, setRegRole] = useState("");
    const [regError, setRegError] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (loginName === "admin" && loginPassword === "1234") {
            Swal.fire({
                title: "Admin sifatida kirdingiz!",
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/admin"), 1000);
            return;
        }

        if (loginName === "developer" && loginPassword === "1234") {
            Swal.fire({
                title: 'Developer sahifasiga xush kelibsiz!',
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/developer"), 1000);
            return;
        }

        if (loginName === "operator" && loginPassword === "1234") {
            Swal.fire({
                title: 'Operator sahifasiga xush kelibsiz!',
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/operator"), 1000);
            return;
        }

        if (loginName === "director" && loginPassword === "1234") {
            Swal.fire({
                title: 'Director sahifasiga xush kelibsiz!',
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/director"), 1000);
            return;
        }

        if (loginName === "manager" && loginPassword === "1234") {
            Swal.fire({
                title: 'Manager sahifasiga xush kelibsiz!',
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
            });
            setTimeout(() => navigate("/manager"), 1000);
            return;
        }

        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (
            savedUser &&
            loginName === savedUser.name &&
            loginPassword === savedUser.password
        ) {
            setLoginError("");
            Swal.fire({
                title: "Muvaffaqiyatli!",
                icon: "success",
                timer: 1000,
                showConfirmButton: false,
            });

            setTimeout(() => {
                if (savedUser.role === "director") navigate("/director");
                else if (savedUser.role === "admin") navigate("/admin");
                else if (savedUser.role === "developer") navigate("/developer");
                else if (savedUser.role === "operator") navigate("/operator");
                else navigate("/");
            }, 1000);
        } else {
            Swal.fire({
                icon: "error",
                title: "Nimadir xato ketdi",
                text: "Login yoki parol noto‘g‘ri!",
            });
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!regUsername || !regEmail || !regPassword || !regRole) {
            setRegError("Barcha maydonlarni to‘ldiring!");
            return;
        }

        const existingUser = JSON.parse(localStorage.getItem("user"));
        if (
            existingUser &&
            regUsername === existingUser.name &&
            regEmail === existingUser.email
        ) {
            setRegError("Bu foydalanuvchi allaqachon mavjud!");
            return;
        }

        const newUser = {
            name: regUsername,
            email: regEmail,
            password: regPassword,
            role: regRole,
        };

        localStorage.setItem("user", JSON.stringify(newUser));
        setRegError("");
        alert("Ro‘yxatdan muvaffaqiyatli o‘tdingiz!");
        setIsActive(false);
    };

    return (
        <div className="big-login">
            <div className={`login-container ${isActive ? "active" : ""}`}>
                <div className="form-box login">
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="name"
                                value={loginName}
                                onChange={(e) => setLoginName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="forgot-link">
                            <a href="#">Forgot password</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                        {loginError && <p className="error">{loginError}</p>}
                    </form>
                </div>
                <div className="form-box register">
                    <form onSubmit={handleRegister}>
                        <h1>Registration</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="username"
                                value={regUsername}
                                onChange={(e) => setRegUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                placeholder="email"
                                value={regEmail}
                                onChange={(e) => setRegEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                placeholder="password"
                                value={regPassword}
                                onChange={(e) => setRegPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-box">
                            <select
                                value={regRole}
                                onChange={(e) => setRegRole(e.target.value)}
                                required
                            >
                                <option value="">-- Select Role --</option>
                                <option value="developer">Developer</option>
                                <option value="admin">Admin</option>
                                <option value="director">Director</option>
                                <option value="operator">Operator</option>
                            </select>
                        </div>
                        <button type="submit" className="btn">Register</button>
                        {regError && <p className="error">{regError}</p>}
                    </form>
                </div>
                <div className="toggle-box">
                    <div className="toggle-panel toggle-left">
                        <h1>Hello Welcome!</h1>
                        <p>Don't have an account?</p>
                        <button onClick={() => setIsActive(true)} className="btn register-btn">Register</button>
                    </div>

                    <div className="toggle-panel toggle-right">
                        <h1>Welcome Back!</h1>
                        <p>Already have an account?</p>
                        <button onClick={() => setIsActive(false)} className="btn login-btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
