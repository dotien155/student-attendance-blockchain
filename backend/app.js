// Import thư viện express
const express = require("express");

// Tạo ứng dụng express
const app = express();

// Cho phép nhận dữ liệu JSON từ request
app.use(express.json());

// import routes
const api = require("./routes/api");
app.use("/class", api);

// Lắng nghe tại port 3000
app.listen(3000, () => {
  console.log("Server chạy tại http://localhost:3000");
});



