#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 5000;
let myPen = 1234;
console.log("welcone to maaz with hameed - ATM machine");
let pinAnswers = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswers.pin === myPen) {
    console.log("pin is correct,login successfully!");
    console.log(`Current account Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation:",
            choices: ["deposit", "withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ]);
        if (amount.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amount.amount;
            console.log(`${amount.amount} withdraw successfully`);
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect");
}
