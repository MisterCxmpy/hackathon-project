const inputField = document.querySelector("#commandForm");
const outputField = document.querySelector(".output");
let count = 0
let choice = "A"

const choices = {
  "start": {
      "description": "As you begin your journey,you notice that the forest seems endless, with trees as far as the eye can see. The map is your only guide, and you soon realize that it is not very detailed. You must rely on your instincts and knowledge of survival to make it out of the forest.You decide to follow a small trail you see in the distance, hoping it will lead you somewhere. As you walk along the trail, you hear a strange noise coming from the bushes. You pause for a moment and listen. It sounds like something is moving around in there. Out jumps a rabbit, with relief you move on and decide you next move.",
      "choiceA": "A - Do you ignore the rabbit and walk on?",
      "choiceB": "B - Do you follow the rabbit's direction?",
      "A":{
          "description": "You decide to ignore the rabbit and make your way, step by step a sense of dread fills you mind as the forest grows to a deafining silence. As you realise the rabbit must have been running from something it turns the corner, an ORC!.",
          "choiceA": "A - Do you run",
          "choiceB": "B - Do you hide",
          "A": {
              "description": "You had heard the stories about orcs, but never thought you'd come face to face with one. As you ran through the forest, your heart pounds in your chest, you can hear the orc's heavy footsteps behind you. Glancing over your shoulder you see the massive creature gaining on you, its sharp teeth bared in a snarl.",
              "choiceA":"A - Dive in the river",
              "choiceB": "B - Look for another way",
              "A":{"description": "The river was faster than you could have imagined. You died!"},
              "B":"By luck you see a cave to the east and run in side. It leads to a bright opening, an exit. You live!"
          },
          "B":{"Description": "You try to hide from the orc in the dense forest. With a keen sense of smell it picks you out from the bushes. You died!"}
      },
      "B": {
          "description": "You decide to continue on the trail, ignoring the noise. The trail soon leads you to a clearing, and you see a cabin in the distance. It looks old and abandoned. You wonder if anyone has ever lived there. You approach the cabin and notice that the door is slightly open.",
          "choiceA": "A - Enter the cabin?",
          "choiceB": "B - Ignore the cabin and continue on the trail?",
          "A": {
              "description": "You enter the cabin and notice that there are a few items inside. There is a rusty old chest in the corner, a bookshelf with a few books, and a fireplace with some firewood. You explore the room for a bit and find a diary on the bookshelf. It looks like it belonged to the previous owner of the cabin. You open it up and start reading. The diary tells the story of a person who got lost in the forest just like you did. They built the cabin to survive and eventually found a way out. You feel relieved knowing that there is a way out of the forest. You decide to take the diary with you and continue on your journey.",
              "choiceA": "A - Do you follow the cabin owner's path?",
              "choiceB": "B - Do you follor your own path?",
              "A": {"desription": "You died!"},
              "B":{"description": "You opt for you own path through the forest, You Live!"}
          },
          "B": {
              "description": "As you walked deeper into the forest, the air grows colder and the sky darkenes. The trees loomed above you like giants, casting long shadows across the forest floor. you realized too late that you have strayed from the path and are now lost in the dense woods. Panic set in as you stumble through the underbrush, trying to find your way back to safety. Suddenly, he hear a low growl from behind you. You spin around to face the source of the noise and find yourself face to face... you.",
              "choiceA": "A - Do you fight",
              "choiceB": "B - Do you make peace",
              "A":{"description": "You make the first move, swinging and clawing with all your might barely surviving as the victor. You limp your way along and find an exit. You Live?"},
              "B":{"description": "With trepidation you approach the figure and attempt to make peace, it does the same. It is you trapped in this forest looking to escape. You both continue on towards the horizon and chance upon an exit. You live!"}

          }
      }
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

  if (count < 1) {
    if (_input == "path a" || _input == "a") {
      input = "A"
      createNewLine(`${choices.start[input].description}`, false)
      createNewLine(`${choices.start[input].choiceA}`, false)
      createNewLine(`${choices.start[input].choiceB}`, false)
      choice1 = "A"
      count += 1
    }
    else if (_input == "path b" || _input == "b") {
      input = "B"
      createNewLine(`${choices.start[input].description}`, false)
      createNewLine(`${choices.start[input].choiceA}`, false)
      createNewLine(`${choices.start[input].choiceB}`, false)
      choice1 = "B"
      count += 1
    }
    else createNewLine("Invalid path!", false)
  } else if (count == 1) {
    if (_input == "path a" || _input == "a") {
      input = "A"
      createNewLine(`${choices.start[choice1][input].description}`, false)
      createNewLine(`${choices.start[choice1][input].choiceA}`, false)
      createNewLine(`${choices.start[choice1][input].choiceB}`, false)
      choice2 = "A"
      count += 1
    }
    else if (_input == "path b" || _input == "b") {
      input = "B"
      createNewLine(`${choices.start[choice1][input].description}`, false)
      createNewLine(`${choices.start[choice1][input].choiceA}`, false)
      createNewLine(`${choices.start[choice1][input].choiceB}`, false)
      choice2 = "B"
      count += 1
    }
    else createNewLine("Invalid path!", false)
    
  } else if (count == 2) {
    if (_input == "path a" || _input == "a") {
      input = "A"
      createNewLine(`${choices.start[choice1][choice2][input].description}`, false)
      createNewLine(`${choices.start[choice1][choice2][input].choiceA}`, false)
      createNewLine(`${choices.start[choice1][choice2][input].choiceB}`, false)
      choice3 = "A"
      count += 1
    }
    else if (_input == "path b" || _input == "b") {
      input = "B"
      createNewLine(`${choices.start[choice1][choice2][input].description}`, false)
      createNewLine(`${choices.start[choice1][choice2][input].choiceA}`, false)
      createNewLine(`${choices.start[choice1][choice2][input].choiceB}`, false)
      choice3 = "B"
      count = 0
    }
    else createNewLine("Invalid path!", false)
    
  }
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
