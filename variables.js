import utm from "prompt-sync";

const prompt = utm();

let first_name = prompt("Enter First Name: ");
let last_name = prompt("Enter Last Name: ");
let age = Number(prompt("Your age: "));
let current_year = Number(prompt("Current year: "));

let earthly_appearance = current_year - age;

console.log(
  first_name +
    last_name +
    ", you are " +
    age +
    " years old and you came to Earth in the year " +
    earthly_appearance
);

let student_name = prompt("Student Name: ");
let student_age = prompt("Age: ");
let department_name = prompt("Department Name: ");
let score = Number(34.72);

console.log(
  "Welcome " +
    student_name +
    " you are in " +
    department_name +
    " department, you are " +
    student_age +
    " years old and your score is " +
    score
);

let user_weight = Number(prompt("Your weight in pounds: "));

let user_weight_in_kg = user_weight * 0.45;

console.log("Your weight in Kilogram is " + user_weight_in_kg + "Kg");
