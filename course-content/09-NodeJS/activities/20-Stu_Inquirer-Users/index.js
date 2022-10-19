const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages'
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'communication'
        },
    ])
    .then((response) => {
        console.log(response.name, response.languages, response.communication);
        var info = response.name + response.languages + response.communication;
        fs.appendFile('log.txt', `${response.name}, ${response.languages}, ${response.communication}\n`, (err) =>
        err ? console.error(err) : console.log('Info logged'));
    });