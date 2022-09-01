const inquirer = require("inquirer")

inquirer.prompt([
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Please enter your description.',
        name: 'description',
      },
      {
        type: 'list',
        message: 'Please enter license for the project.',
        name: 'license',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD', 'BSD']
      },
      {
        type: 'input',
        message: 'What are the installation steps',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What are the steps to run tests?',
        name: 'description',
      },
    ]).then(data => {
    console.table(data)
})