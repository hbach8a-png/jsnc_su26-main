
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

// Title will be set from `student.name` below
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

//buoi3

h1.innerHTML = `Danh sách ${student.name}`;

const tbody = document.getElementById("student");
console.log(tbody);
  tbody.innerHTML = `
            <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">1</td>
              <td class="px-4 py-2 border border-gray-300">${student.name}</td>
              <td class="px-4 py-2 border border-gray-300">${student.age}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          `;
//aray danh sach so nhieu
const numbers =[1,2,3,4];
const names = ["bach","bach","bach",1,true];
const students = [
  { id: 1, name: "bach123",
     age: 20,
     email: "a@gmail.com",
     major: "CNTT" },
  { id: 2,
   name: "bach321",
   age: 22,
   email: "b@gmail.com",
   major: "MKT" },
];

//duyet mảng for,foreach,while
//javascript: map
//() => {} : function array
//function sum(a,b){
 // return a + b;
//};
//const sum2 = (a,b) => {
 // return a+b;
//};
tbody.innerHTML = students
  .map((item) => `
    <tr>
      <td>${item.name}</td>
      <td>${item.age}</td>
      <td>${item.email}</td>
      <td>${item.major}</td>
    </tr>
  `)
  .join("");