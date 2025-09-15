import { Link } from "react-router-dom";

function MenuLeftGiangVien() {
    return (
        <div className="sidebar">
          <ul>
            <li className="menu-item home">
              <Link to="/">🏠 Trang chủ</Link>
            </li>
            <li className="menu-item profile">
              <Link to="/profile">👤 Thông tin cá nhân</Link>
            </li>
            <li className="menu-item guide">
              <Link to="/guide">📖 Hướng dẫn</Link>
            </li>
            <li className="menu-item notifications">
              <Link to="/notifications">🔔 Thông báo</Link>
            </li>
            <li className="menu-item diemdanh">
              <Link to="/diemdanh">📝 Điểm danh</Link>
            </li>
            <li className="menu-item login">
              <Link to="/diemdanh/giangvien">🔑 Đăng nhập</Link>
            </li>
          </ul>
        </div>
      );
}

export default MenuLeftGiangVien;
