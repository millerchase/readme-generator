// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// create function for prompting user
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title.');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide some information on how to install application:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide some information on how to use application:'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide some information on how to contribute to application:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide some information on how to test application:'
        },
        {
            type: 'confirm',
            name: 'table-of-content',
            message: 'Would you like to add a table of conent?',
            default: false
        }
    ]);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

promptUser()
    .then(data => console.log(generateMarkdown(data)))
;
