let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let tab1 = [];
let tab2 = [];
let tab3 = [];

// for (let i of num) {
// if(i % 2 === 0){
//   tab1.push(i);
// }
// }

// for (let i of num) {
// if(i % 3 === 0){
//   tab2.push(i);
// }
// }

function highOrder(callfun) {
  for (let i of num) {
    callfun(i);
  }
}

highOrder((i) => {
  if (i % 2 === 0) {
    tab1.push(i);
  }
});

highOrder((i) => {
  if (i % 3 === 0) {
    tab2.push(i);
  }
});

highOrder((i) => {
  if (i % 4 === 0) {
    tab3.push(i);
  }
});

console.log("tab1 =", tab1);
console.log("tab2 =", tab2);
console.log("tab3 =", tab3);
