const inputField = document.querySelector("#commandForm");
const outputField = document.querySelector(".output");

inputField.addEventListener("submit", function (e) {
  e.preventDefault();

  const command = inputField.command.value;

  createNewLine(command, choicea, choiceb, true)
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