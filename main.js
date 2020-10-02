let person1 = [
  {
    name: 'Ichabod Duiguid',
    age: 46,
    children: 2,
    country: 'Paraguay',
    canProgram: false,
  },
];
let person2 = [
  {
    name: 'Carey Goggan',
    age: 41,
    children: 3,
    country: 'China',
    canProgram: false,
  },
];

let person3 = [
  {
    name: 'Dian Beeswing',
    age: 26,
    children: 2,
    country: 'Indonesia',
    canProgram: true,
  },
];
let person4 = [
  {
    name: 'Inglebert Goneau',
    age: 45,
    children: 3,
    country: 'Indonesia',
    canProgram: true,
  },
];
let person5 = [
  {
    name: 'Constanta Phizacklea',
    age: 29,
    children: 3,
    country: 'Uruguay',
    canProgram: false,
  },
];

// Manipulating data

// Ex 1
function age() {
  // Is the first person older than the last person?🤔
  if (person1.age <= person5.age) {
    document.getElementById('ex1').innerHTML = 'person one is younger';
  } else {
    document.getElementById('ex1').innerHTML =
      'person five is younger than person one';
  }
}
// function called
age();

// Ex 2
function kids() {
  // Who has more kids, person 1 or perosn 3?🤔
  if (person1.children === person3.children) {
    document.getElementById('ex2').innerHTML =
      'Person 1 and person 3 have the same amount of children!';
  } else if (person1.children < person3.children) {
    document.getElementById('ex2').innerHTML =
      'Person 3 has more children than person 1!';
  } else if (person1.children >= person3.children)
    document.getElementById('ex2').innerHTML =
      'Person 1 has more children than person 3!';
}
// function called
kids();

// Ex 3
function canProgram() {
  // Can person 1 and person 4 progam?
  if (person4.canProgram === true && person1.canProgram === true) {
    console.log('Yay!');
  } else console.log('LMGTFY');
}

// Checking for the price with a switch statement
// Ex 4
// A switch statement that asks the price for
const expr = 'Pinapple';
switch (expr) {
  case 'Apples':
    console.log('Apples are $0.59 a pound.');
    break;
  case 'Grapes':
  case 'Pineapple':
    console.log('Grapes and Pineapples are $2.79 a pound.');
    // expected output: "Grapes and Pinapples are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

// The story of Mr. Tempo and his lunch

// ex 5
// using template literals to make a story
let mrTempo = `Template literal`;
let likeEat = `fried fish`;
let noLikeEat = `fried apples`;
let pref = `Apples`;

console.log(
  `Mr. Tempo is a ${mrTempo} and it likes to eat ${likeEat} but not ${noLikeEat} as he thinks that ${pref} should be eaten fresh.`
);
