const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Could you describe your project, please?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'How do you install this thing?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information? Please tell.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Who, if anyone, can contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of License?',
        choices: ['None', 'MIT', 'Apache', 'GPL'],
        default: 'None',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What\'s your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s your email?'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log('We did it, bro! We made you a README!')
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then(answers => writeToFile('README.md', generateMarkdown(answers)))
}

init();