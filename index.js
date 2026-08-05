
const h1 = document.getElementById("title");

// Khai báo biến và in ra console
let ten = "Nguyễn Văn A";
let tuoi = 20;
let email = "nguyenvana@gmail.com";
let diaChi = "Hà Nội";

console.log("Tên:", ten);
console.log("Tuổi:", tuoi);
console.log("Email:", email);
console.log("Địa chỉ:", diaChi);

const title = "Laptop - Máy tính";
h1.innerHTML = `Danh sách ${title}`;
const book = {
  title: "Hoa vang tren co xanh",
  author: "nguyen nhat anh",
};
console.log("Book title:", book.title);
console.log("Tác giả:", book.author);
const student = {
  name: "bach",
  age: 20,
  isStudent: true,
};
console.log("Student:", student.name);
console.log("Tuổi sinh viên:", student.age);
;