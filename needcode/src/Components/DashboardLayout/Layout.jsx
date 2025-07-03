import './Layout.css'
import {Link, Outlet} from "react-router-dom";
import {ImUserTie} from "react-icons/im";
import logo from '../../assets/logo.jpg'
import {FaUsers} from "react-icons/fa";
import {FaHeadset, FaLaptopCode, FaUserTie} from "react-icons/fa6";
import {CiLogin} from "react-icons/ci";

export const Layout = () => {
    return (
        <div className="dashboard-layout">
            <div className="dashboard">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <button>
                    <Link className="link" to="/director">
                        <span><ImUserTie/> Director</span>
                    </Link>
                </button>
                <button>
                    <Link className="link" to="/manager">
                        <span><FaUsers/> Manager</span>
                    </Link>
                </button>
                <button>
                    <Link className="link" to="/operator">
                        <span><FaHeadset/> Operator</span>
                    </Link>
                </button>
                <button>
                    <Link className="link" to="/admin">
                        <span><FaUserTie/> Admin</span>
                    </Link>
                </button>
                <button>
                    <Link className="link" to="/developer">
                        <span><FaLaptopCode/> Developer</span>
                    </Link>
                </button>
                <button>
                    <Link className="link" to="/login">
                        <span><CiLogin/> Login</span>
                    </Link>
                </button>
            </div>
            <div className="itemsdashboard">
                <Outlet />
            </div>
        </div>
    );
};
