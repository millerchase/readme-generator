// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// create function for prompting user
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Enter GitHub username. (Required)',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username.');
        }
      }
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: (nameInput) => {
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
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter a description of your project.');
        }
      }
    },
    {
      type: 'input',
      name: 'deployedLink',
      message: 'Enter link to deployed application if applicable'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Would you like to add a licenses?',
      choices: [
        'apache',
        'boost',
        'BSD',
        'eclipse',
        'GNU',
        'IBM',
        'ISC',
        'MIT',
        'unlicense',
        'WTFPL'
      ]
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter your name to add to copyright?'
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
      type: 'input',
      name: 'email',
      message: 'Enter contact email if applicable'
    },
    {
      type: 'confirm',
      name: 'tableOfContent',
      message: 'Would you like to add a table of content?',
      default: false
    }
  ]);
}

// TODO: Create a function to initialize app
function init() {
  promptUser().then((data) => {
    console.log(data);
    writeToFile('./dist/README.md', generateMarkdown(data));
  });
}

// Function call to initialize app
init();
