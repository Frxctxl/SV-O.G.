const { default: inquirer } = require("inquirer");
const fs = require('fs').promises;

const shapes = require('./shapes.js');

const inputs = [];

async function handleColor(val) {
  if (val == 'Name') {
    await inquirer.prompt([{
      type: 'list',
      name: 'color',
      message: 'What color would you like?',
      choices: [
        'CadetBlue',
        'Cornsilk',
        'DeepPink',
        'DarkSlateBlue',
        'IndianRed'
      ]
    }]).then((ans) => {
      inputs.push(ans)
    })
    return
  }
  await inquirer.prompt([
    {
      name: 'color',
      message: 'Please enter a color',
    }
  ]).then((ans) => {
    inputs.push(ans)
  })
}

async function handleInput(input) {
  let logo
  inputs.push(input.letters);
  inputs.push(input.shape);
  await handleColor(input.color);
  await handleColor(input.textColor);
  switch (inputs[1]) {
    case 'Triangle':
      logo = new shapes.Triangle(inputs);
      break;
    case 'Square':
      logo = new shapes.Square(inputs)
      break;
    case 'Circle':
      logo = new shapes.Circle(inputs);
      break;
    default:
      break;
  }
  fs.writeFile('./examples/logo.svg', logo.getSVG());
}
module.exports = handleInput;
