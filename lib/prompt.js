const { default: inquirer } = require("inquirer");
const handleInput = require("./input");

function logoPrompt() {
  console.log(`
Lets get started!
`)
  return inquirer.prompt(
    [
      {
        name: 'letters',
        message: 'Enter 3 letters to input'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like?',
        choices: [
          'Triangle',
          'Circle',
          'Square'
        ]
      },
      {
        type: 'list',
        name: 'color',
        message: 'Would you like to enter a background color name or a hex code?',
        choices: [
          'Name',
          'Hex'
        ]
      },
      {
        type: 'list',
        name: 'textColor',
        message: 'Would you like to enter a text color name or hex code?',
        choices: [
          'Name',
          'Hex'
        ]
      }
    ]
  ).then(answers => {
    handleInput(answers);
  })
}

module.exports = logoPrompt;
