const inputField = document.querySelector("#commandForm");
const outputField = document.querySelector(".output");
const choices = require('./adventureChoices.json')
let count = 0


const textBasedAdventure = (count, choice = "start") => {
  if (choice == "start") {
    h.textContent = choices.start.description
    h2.textContent = choices.start.choiceA
    h3.textContent = choices.start.choiceB
    return choice = choice.command
  } else {
    //make choice a variable in this part .choice isnt the variable
    h1.textContent = choices.start.choice.description
    h2.textContent = choices.start.choice.choiceA
    h3.textContent = choices.start.choice.choiceB
    return choice = choice.choice.command
  }
}

inputField.addEventListener("submit", function (e) {
  e.preventDefault();

  const command = inputField.command.value;

  createNewLine(command,true)
  choosePath(command)

});

function choosePath(input) {
  const _input = input.toLowerCase()
  if (_input == "path a" || _input == "a") createNewLine("This should take you to path A", false)
  else if (_input == "path b" || _input == "b") createNewLine("This should take you to path B", false)
  else createNewLine("Invalid path!", false)
}

function createNewLine(msg, isCommand) {
  const commandLine = document.createElement("p");

  if (!isCommand) commandLine.classList.add("text")
  
  commandLine.textContent = ((isCommand) ? "> " : "") + msg;
  outputField.appendChild(commandLine);

  inputField.command.value = "";
  inputField.command.scrollIntoView();
  inputField.command.focus();
}