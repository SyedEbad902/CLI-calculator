// import { log } from "console";
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter 1st number",
        type: "number",
        name: "firstNum",
    },
    {
        message: "Enter 2nd number",
        type: "number",
        name: "secondNum",
    },
    {
        message: "Select operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNum / answer.secondNum);
}
