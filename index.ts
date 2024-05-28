#! \usr\bin\env node
import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.blue("\t*** Welcome to Quiz project!!***\t"));

let ans= await inquirer.prompt(
    [
        {
            name: "name",
            type: "input",
            message: (chalk.green("Please enter your name!"))
        }
    ]
);
console.log(chalk.green(" \t Starting your quiz. Best of luck! \t"));
let name= ans.name;

const quiz:{
    question_1:string;
    question_2:string;
    question_3:string;
    question_4:string;
    question_5:string;
}  = await inquirer.prompt(
    [
        {
          name: "question_1",
          type: "list",
          message:(chalk.yellow("What is typescript primarily used for?")),
          choices: ["Memory Management", "Dynamic typing", "Static typing"],
        },
        {
            name: "question_2",
            type: "list",
            message:(chalk.yellow("Which of the following is not a valid typescript date type?")),
            choices: ["Any", "Dynamic", "Tuples"],
          },
          {
            name: "question_3",
            type: "list",
            message:(chalk.yellow("How do you define a custom type in typescript?")),
            choices: ["Interface", "Any", "typedef"],
          },
          {
            name: "question_4",
            type: "list",
            message:(chalk.yellow("Which symbol is used for concatenate in typescript?")),
            choices: ["$", "*", "+"]
          },
          {
            name: "question_5",
            type: "list",
            message:(chalk.yellow("How do you define a optional parameter in typescript function?")),
            choices: ["name:string", "name?:string", "name&:string"],
          },

    ]
)
let score:number = 0


switch(quiz.question_1){
    case "Static typing":
    console.log(chalk.green("Question 1: Correct!"));
    ++score;
    break;
    default:
       console.log(chalk.red("Question 1: Incorrect!"));
}
switch(quiz.question_2){
    case "Dynamic":
    console.log(chalk.green("Question 2: Correct!"));
    ++score;
    break;
    default:
       console.log(chalk.red("Question 2: Incorrect!"));
}
switch(quiz.question_3){
    case "Interface":
    console.log(chalk.green("Question 3: Correct!"));
    ++score;
    break;
    default:
       console.log(chalk.red("Question 3: Incorrect!"));
}
switch(quiz.question_4){
    case "+":
    console.log(chalk.green("Question 4: Correct!"));
    ++score;
    break;
    default:
       console.log(chalk.red("Question 4: Incorrect!"));
}
switch(quiz.question_5){
    case "name?:string":
    console.log(chalk.green("Question 5: Correct!"));
    ++score;
    break;
    default:
       console.log(chalk.red("Question 5: Incorrect!"));
}

console.log(chalk.yellow(`${ans.name}, your score is ${score}`));
console.log(chalk.blue("\t*** Thank you for using Quiz system!***\t"));