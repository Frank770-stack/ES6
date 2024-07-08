// console.log(city);
// var city = "Berlin";
// console.log(city);
// if (true) {
//   let city = "China";
// }
// console.log(city);
// const date = "web";
// date = "bed";
const pounds = [11, 21, 16];
const avg = pounds.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) {
    return total / array.length;
  } else {
    return total;
  }
}, 0);
console.log(avg);
// let newObject = {
//   name: "Daniel",
//   name: "John",
// };

// let student1 = { name: "John" };
// let student2 = { name: "Mary" };
// let newObject = {
//   student1,
//   student2,
// };
let student1 = { name: "John" };
let student2 = { name: "Mary" };
let newObject = {
  ...student1,
  ...student2,
  name: "Daniel",
};
console.log(newObject);
