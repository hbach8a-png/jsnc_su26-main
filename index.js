
const h1 = document.getElementById("title");

// Bài 1: Khai báo biến và in ra console
let ten = "Nguyễn Văn A";
let tuoi = 20;
let email = "nguyenvana@gmail.com";
let diaChi = "Hà Nội";

console.log("Tên:", ten);
console.log("Tuổi:", tuoi);
console.log("Email:", email);
console.log("Địa chỉ:", diaChi);

// Bài 2: Hiển thị lên HTML
const title = "Laptop - Máy tính";
h1.innerHTML = `Danh sách ${title}`;

// Bài 3: Object book
const book = {
  title: "Hoa vang tren co xanh",
  author: "nguyen nhat anh",
};

console.log("Book title:", book.title);
console.log("Tác giả:", book.author);

// Bài 4: Object student
const student = {
  name: "bach",
  age: 20,
  isStudent: true,
};

console.log("Student:", student.name);
console.log("Tuổi sinh viên:", student.age);

// Hiển thị tất cả lên HTML
h1.innerHTML = `
  <h2>Huy Bach</h2>
  <p>Tuổi: 20</p>
  <h3>${student.name}</h3>
  <p>Tuổi: ${student.age}</p>
  <h3>${book.title}</h3>
  <p>Tác giả: ${book.author}</p>
`;