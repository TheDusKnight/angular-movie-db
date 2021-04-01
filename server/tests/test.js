// const user = {
//   firstName: 'Angela',
//   lastName: 'Davis',
//   role: 'Professor',
// };

// console.log(user.name);

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const dateObj = new Date('2021-03-01T17:10:51.977Z');
const month = monthNames[dateObj.getMonth()];
const day = dateObj.getDate();
const year = dateObj.getFullYear();
const time = dateObj.toLocaleTimeString();

console.log(year);
console.log(month);
console.log(day);
console.log(time);
