//Prototypes

//1.
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};
Object.setPrototypeOf(table, head);

let bed = {
  sheet: 1,
  pillow: 2,
};
Object.setPrototypeOf(bed, table);

let pockets = {
  money: 2000,
};
Object.setPrototypeOf(pockets, bed);

console.log(pockets.pen);
console.log(bed.glasses);
console.log(pockets.glasses);
console.log(head.glasses); //This way is faster
//Did not use _proto_ due to no longer recomendation

//2.
let animal = {
  eat() {
    return (this.full = true);
  },
};

let rabbit = {
  //   __proto__: animal, !depricated!
};

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit.eat()); //Animal gets the full property

//Classes

//3.
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

let clock = new Clock({ template: "h:m:s" });
// clock.start();

//4.
let user = {
  name: "John",
  age: 30,
};

const count = (obj) => {
  return Object.keys(obj).length;
};
console.log(count(user)); //arrow function

let countObjects = Object.keys(user).length; //my way
console.log(countObjects);

//5.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let sal of Object.values(salaries)) {
    sum += sal;
  }
  return salaries === null ? 0 : sum;
}
console.log(sumSalaries(salaries));

//Destructuring assignment

//6.
let userNew = {
  name: "John",
  years: 30,
};

let { name, years: age, isAdmin = false } = userNew;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

//Map and Set

//7.
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
console.log(unique(values));

//8.
let map = new Map();
map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);
