var employeeES5 = {
    name: "Praveen",
    age: 22,
    salary: 25000
};

function employeeInfo(emp) {
    return "Employee: " + emp.name + ", Age: " + emp.age;
}

console.log(employeeInfo(employeeES5));


const employee = {
    name: "Praveen",
    age: 22,
    salary: 25000
};

const employeeInfoES6 = ({ name, age }) =>
    `Employee: ${name}, Age: ${age}`;

console.log(employeeInfoES6(employee));


const numbers = [10, 20, 30, 40, 50];


const doubled = numbers.map(num => num * 2);
console.log("Map:", doubled);


const greaterThan25 = numbers.filter(num => num > 25);
console.log("Filter:", greaterThan25);


const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("Reduce:", total);


const [first, second] = numbers;

console.log("First:", first);
console.log("Second:", second);


const { name, salary } = employee;

console.log("Name:", name);
console.log("Salary:", salary);


const button = document.getElementById("showBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.innerHTML = `
        <h3>Employee Details</h3>
        <p>Name: ${name}</p>
        <p>Salary: ₹${salary}</p>
        <p>Total Dataset Sum: ${total}</p>
    `;
});