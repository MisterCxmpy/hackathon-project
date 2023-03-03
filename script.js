
function textBasedAdventure() {
    h1.textContent = start.description
    h2.textContent = start.choiceA
    h3.textContent = start.choiceB
    return choice1 = AorB
}

function textBasedAdventure2(choice1) {
    h1.textContent = start.(choice1).description
    h2.textContent = start.(choice1).choiceA
    h3.textContent = start.(choice1).choiceB
    return choice2 = choice1.choice2
}

function textBasedAdventure3(choice2) {
    h1.textContent = start.(choice2).description
    h2.textContent = start.(choice2).choiceA
    h3.textContent = start.(choice2).choiceB
    return choice3 = choice2.choice3
}

function textBasedAdventureEnd(choice3) {
    h1.textContent = start.(choice3).description
}
