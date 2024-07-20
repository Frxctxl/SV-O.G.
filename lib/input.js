const { default: inquirer } = require("inquirer");

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
  inputs.push(input.letters);
  inputs.push(input.shape);
  await handleColor(input.color);
  await handleColor(input.textColor);
  console.log(inputs);
}

module.exports = handleInput;
