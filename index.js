const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js'); 

console.log('----------README GENERATOR----------')
inquirer.prompt([
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}}
    },
    {
        type: 'input',
        message: 'Please enter your description.',
        name: 'description',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'input',
        message: 'What are the installation steps?',
        name: 'installation',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'input',
        message: 'How is your application used?',
        name: 'usage',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'input',
        message: 'Who were the contributors to this project if any?',
        name: 'credit',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'input',
        message: 'What are the steps to run tests?',
        name: 'test',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'list',
        message: 'Please enter license for the project.',
        name: 'license',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License', 'BSD 2-Clause License'],validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => {if(value){return true}else {return 'Please enter a valid response.'}},
    },
]).then(data => {
    console.table(data)
    function writeToFile(fileName, data) {

    }

})