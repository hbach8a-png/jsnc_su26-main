
// $ PHP
// let

// let name = "tuananh";
// let age = 20;
// let isStudying = true;

// const birtDay = 2006

// console.log(name);

// // kiểu dữ liệu
// let greeting1 = "Hello";
// let greeting2 = "Xin chào";

// // Number
// let age = 20;
// let score = 10;

// // Boolean
// let isStudent = true;
// let isLoggedIn = false;

// console.log(greeting1);
// alert("Xin chào JavaScript");

const h1 = document.getElementById("title");
h1.innerHTML = "Danh sách sản phẩm";
console.log(h1);

const title = "Laptop-Máy tính";
h1.innerHTML = `Danh sách ${title}`;

// Khai báo biến
let ten = "Nguyễn Văn A";
let tuoi = 20;
let email = "nguyenvana@gmail.com";
let diaChi = "Hà Nội";

// In ra console
console.log("Tên:", ten);
console.log("Tuổi:", tuoi);
console.log("Email:", email);
console.log("Địa chỉ:", diaChi);

const people = {
  name: "Huy Bach",
  age: 20,
};

document.getElementById("title").innerHTML = `
<h2>${people.name}</h2>
<p>Tuổi: ${people.age}</p>
`;

// object
const student = {
  name: "bach",
  age: 20,
  isStudent: true,
};
console.log("Student:", student.name);
console.log("Tuổi sinh viên:", student.age);

const book = {
  title: "Hoa vang tren co xanh",
  author: "nguyen nhat anh",
  cover: "",
};

console.log("Book title:", book.title);
console.log("Tác giả:", book.author);

document.getElementById("title").innerHTML = `
<h2>${people.name}</h2>
<p>Tuổi: ${people.age}</p>
<h3>${student.name}</h3>
<p>Tuổi: ${student.age}</p>
<h3>${book.title}</h3>
<p>Tác giả: ${book.author}</p>
`;