// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attendance {
    address public owner;
    mapping(address => bool) public students;   // Danh sách sinh viên
    mapping(address => bool) public attendance; // Điểm danh trong buổi học

    constructor() {
        owner = msg.sender; // người deploy là admin (giảng viên)
    }

    // Thêm sinh viên
    function addStudent(address _student) public {
        require(msg.sender == owner, "Chi co giao vien moi duoc them sinh vien");
        students[_student] = true;
    }

    // Sinh viên điểm danh
    function markAttendance() public {
        require(students[msg.sender], "Ban khong co trong danh sach sinh vien");
        attendance[msg.sender] = true;
    }

    // Kiểm tra sinh viên đã điểm danh chưa
    function checkAttendance(address _student) public view returns (bool) {
        return attendance[_student];
    }
}
