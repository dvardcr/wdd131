// Activity 1 - List Mapping
const steps = ["one", "two", "three"];

const listTemplate = (step) => {
    return `<li>${step}</li>`;
};

const stepsHtml = steps.map(listTemplate).join("");
document.querySelector("#myList").innerHTML = stepsHtml;

// Activity 2 - Map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;

// Filter Short Words
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter((word) => word.length < 6);

// Improved Lucky Number
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

console.log(luckyIndex); // for testing
console.log(gpa); // for testing
console.log(shortWords); // for testing

// Understanding

let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// Filter
let namesB = names.filter(name => name.charAt(0) === 'B');

// Map
let nameLengths = names.map((name) => name.length);

// Reduce
let nameReduce = names.reduce((total, name) => total + name.length, 0) / names.length;

console.log(namesB);
console.log(nameLengths);
console.log(nameReduce);


// Quiz

let courseName = "Social Studies"
let stuFirstName = "Diego"

console.log(`Welcome to the ${courseName} ${stuFirstName}!`);