// Required packages
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// Array of questions
const questions = [{
    type: 'input',
    message: "What is your project title?",
    name: 'title',
    validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } }
},
{
    type: 'input',
    message: 'Please enter your description.',
    name: 'description',
    validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } },
},
{
    type: 'input',
    message: 'What are the installation steps?',
    name: 'installation',
    validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } },
},
{
    type: 'input',
    message: 'How is your application used?',
    name: 'usage',
    validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } },
},
{
    type: 'input',
    message: 'Who were the contributors to this project if any?',
    name: 'credit',
    // validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
},
{
    type: 'input',
    message: 'What are the steps to run tests?',
    name: 'test',
   // validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } },
},
{
    type: 'list',
    message: 'Please enter license for the project.',
    name: 'license',
    choices: ['Apache_2.0', 'Boost_Software_License_1.0', 'BSD_3-Clause_License', 'BSD_2-Clause_License'], validate: (value) => { if (value) { return true } else { return 'Please enter a valid response.' } },
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
    // validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    // validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
},];

// Function to write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Your README file has been succesfully generated!')
    );
}

// Function to generate README
function init() {
    console.log('----------README GENERATOR----------')
    
    inquirer.prompt(questions).then(data => {
        console.table(data)
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
