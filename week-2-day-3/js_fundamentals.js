const greet = (name = "Guest") => `Hello ${name}`;

const square = num => num * num;

const add = (a, b) => a + b;

const multiply = (...nums) =>
    nums.reduce((acc, num) => acc * num, 1);

const mergeArrays = (arr1, arr2) =>
    [...arr1, ...arr2];

const getUser = (name, age) => ({
    name,
    age
});

const isEven = num => num % 2 === 0;

const findMax = (...nums) => Math.max(...nums);

const reverseString = str =>
    str.split("").reverse().join("");

const calculateTotal = (...prices) =>
    prices.reduce((sum, price) => sum + price, 0);

const fetchMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise Resolved");
        }, 2000);
    });
};

fetchMessage()
    .then(data => console.log(data))
    .catch(error => console.log(error));

const getPosts = async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        console.log(data.slice(0, 5));

    } catch(error) {
        console.log("Error:", error);
    }
};

getPosts();