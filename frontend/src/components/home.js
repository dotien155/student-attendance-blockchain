function Home() {
    return (
      <div>
        <div className="content-top">
          <h1>Chào mừng đến với DTU Attendance</h1>
          <p>Hệ thống điểm danh thông minh dành cho học sinh, sinh viên, ứng</p>
          <p>dụng công nghệ Blockchain giúp quản lý minh bạch, chính xác và tiện lợi hơn</p>
        </div>
  
        <div className="content-middle">
          <div className="feature">
            <span className="icon">🖱️</span>
            <p>Check-in<br />nhanh chóng</p>
          </div>
  
          <div className="feature">
            <span className="icon">📊</span>
            <p>Dễ dàng theo dõi <br />và quản lý dữ liệu</p>
          </div>
  
          <div className="feature">
            <span className="icon">🚀</span>
            <p>Thông báo khi<br />sinh viên “miss” buổi học</p>
          </div>
  
          <div className="feature">
            <span className="icon">❤️</span>
            <p>Đảm bảo sự minh bạch<br />cho sinh viên</p>
          </div>
        </div>
  
        {/* <div className="content-bottom">
        </div> */}
      </div>
  
    )
  }
  export default Home;