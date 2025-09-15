import { Link, useLocation } from "react-router-dom";
function Header() {
    const location = useLocation();
    return (
        <header id="header">
            <div className="header-top">
                <div className="container">
                    <img
                        src="/images/logo1.jpg"
                        alt="logo"
                    />
                    <nav>
                        <Link to="" >Trang chủ</Link>
                        <Link to="" >Thông tin cá nhân</Link>
                        <Link to="" >Hướng dẫn</Link>
                        <Link to="" >Thông báo</Link>
                        <Link to="/diemdanh/giangvien" >Điểm danh</Link>
                        <Link to="" >Đăng nhập</Link>
                    </nav>
                </div>
            </div>
            {location.pathname == "/" && (
                <div className="header-middle" >
                    <div className="container">
                        <img
                            src="/images/banner2.jpeg"
                            alt=""
                        />
                    </div>
                </div>
            )}
        </header>
    );
}
export default Header;