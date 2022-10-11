let myTable = document.querySelector("#table");

let headers = ["Name", "Roll No", "Class"];
headers.push("Subject");

let Student = [
  {
    name: "Muhammad Naeem",
    rollno: 0012,
    class: "Mphil",
    subject: "BSCS",
  },
  {
    name: "Muhammad Ahsan",
    rollno: 0922,
    class: "Intermediate",
    subject: "ICS",
  },
  {
    name: "Muhammad Ahmad",
    rollno: 1542,
    class: "Matric",
    subject: "Quran Majeed",
  },
  {
    name: "Muhammad Ali",
    rollno: 2312,
    class: "Mphil",
    subject: "Artificial Inteligence",
  },
  {
    name: "Layeba",
    rollno: 0442,
    class: "BS Houner",
    subject: "BS English",
  },
];
// Change the value of the object
Student[4].name = "Muhammad Umer";

let table = document.createElement("table");
let headerRow = document.createElement("tr");

headers.forEach((text) => {
  let header = document.createElement("th");
  let textNode = document.createTextNode(text);
  header.appendChild(textNode);
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

Student.forEach((std) => {
  let row = document.createElement("tr");

  Object.values(std).forEach((text) => {
    let cell = document.createElement("td");
    let data = document.createTextNode(text);
    cell.appendChild(data);
    row.appendChild(cell);
  });
  table.appendChild(row);
});

myTable.appendChild(table);
