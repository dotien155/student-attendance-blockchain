
const { Pool } = require("pg");

// Khai báo cấu hình kết nối DB
const pool = new Pool({
  user: "postgres",         
  host: "localhost",        
  database: "ql_diemdanh_dtu", // tên database 
  password: "1234567890", // mật khẩu PostgreSQL
  port: 5432,               // port mặc định của PostgreSQL
});

// Kiểm tra kết nối
pool.connect()
  .then(() => console.log("✅ Kết nối PostgreSQL thành công"))
  .catch(err => console.error("❌ Lỗi kết nối DB:", err));

module.exports = pool;
