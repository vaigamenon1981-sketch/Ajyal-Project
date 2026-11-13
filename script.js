const title = document.getElementById("animated-title");

const text = title.textContent;
title.textContent = "";

const letters = Array.from(text);

letters.forEach((character, index) => {
    const span = document.createElement("span");

    span.classList.add("letter");

    if (character === " ") {
        span.innerHTML = "&nbsp;";
    } else {
        span.textContent = character;
    }

    // Each letter appears slightly after the previous one
    span.style.animationDelay = `${index * 0.08}s`;

    title.appendChild(span);
});
const beginButton=
document.getElementById("begin-btn");
const transitionScreen=
document.getElementById("transition");
const sceneOne = document.getElementById("scene-one");
const letter = document.getElementById("letter");
const dialogue = document.getElementById("story-dialogue");
const result = document.getElementById("story-result");

// Store the visitor's choices for the final artwork
const journey = [];

beginButton.addEventListener("click", () => {
    transitionScreen.classList.add("active");

    setTimeout(() => {
        sceneOne.hidden = false;
        document.querySelector(".welcome").hidden = true;

        transitionScreen.classList.remove("active");
        window.scrollTo(0, 0);
    }, 3500);
});

letter.addEventListener("click", () => {
    dialogue.hidden = false;
    letter.disabled = true;
    setTimeout(()=>{
        dialogue.scrollIntoView({
            behavior:"smooth",
            block:"center"
        });
    },100);
});

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.dataset.choice;

        journey.push({
            chapter: 1,
            choice: choice
        });
        const magicThread=
        document.getElementById("magic-thread");
        magicThread.classList.add("appear");

        dialogue.hidden = true;

        if (choice === "return") {
            result.textContent =
                "You decide to search for the owner. " +
                "A golden thread glimmers beside the bench...";
        } else {
            result.textContent =
                "You place the letter somewhere safe. " +
                "A faint golden thread shimmers in the evening light...";
        }
        setTimeout(()=>{
            result.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });
        },150);

        console.log("Your journey:", journey);
    });
});
// CHAPTER TWO

const continueTwo = document.getElementById("continue-two");
const sceneTwo = document.getElementById("scene-two");
const woman = document.getElementById("woman");
const dialogueTwo = document.getElementById("dialogue-two");
const resultTwo = document.getElementById("result-two");
const threadTwo = document.getElementById("thread-two");
const nextChapter = document.getElementById("next-chapter");

// Show the Continue button after Chapter One's choice
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        continueTwo.hidden = false;
    });
});

continueTwo.addEventListener("click", () => {

    // Fade Chapter One away
    sceneOne.classList.add("fade-out");

    setTimeout(() => {

        // Hide Chapter One
        sceneOne.hidden = true;

        // Reveal Chapter Two
        sceneTwo.hidden = false;

        // Move to the top of the new scene
        window.scrollTo(0, 0);

        // Fade Chapter Two into view
        sceneTwo.classList.add("fade-in");

    }, 800);
});

const helpButton = document.getElementById("help-button");

function openChapterTwoDialogue() {
    dialogueTwo.hidden = false;
    woman.disabled = true;
    helpButton.hidden = true;

    setTimeout(() => {
        dialogueTwo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
}

// Visitors can click either the woman or the help button
woman.addEventListener("click", openChapterTwoDialogue);
helpButton.addEventListener("click", openChapterTwoDialogue);

// Chapter Two decisions
document.querySelectorAll(".choice-two").forEach(button => {
    button.addEventListener("click", () => {

        const choice = button.dataset.choice;

        journey.push({
            chapter: 2,
            choice: choice
        });

        threadTwo.classList.add("appear");

        dialogueTwo.hidden = true;

        if (choice === "carry") {
            resultTwo.textContent =
                "You carry her bags home. " +
                "Her grateful smile lights up the evening. " +
                "Another golden thread begins to glow.";
        } else {
            resultTwo.textContent =
                "You find someone nearby who can help. " +
                "Together, you make her journey easier. " +
                "Another golden thread begins to glow.";
        }

        nextChapter.hidden = false;

        setTimeout(() => {
            resultTwo.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 150);

        console.log("Your journey:", journey);
    });
});// CHAPTER THREE

const sceneThree = document.getElementById("scene-three");
const approachChild = document.getElementById("approach-child");
const dialogueThree = document.getElementById("dialogue-three");
const resultThree = document.getElementById("result-three");
const threadThree = document.getElementById("thread-three");
const continueFour = document.getElementById("continue-four");

// Transition from Chapter Two to Chapter Three
nextChapter.addEventListener("click", () => {

    sceneTwo.classList.add("fade-out");

    setTimeout(() => {
        sceneTwo.hidden = true;
        sceneThree.hidden = false;

        window.scrollTo(0, 0);

        sceneThree.classList.add("fade-in");
    }, 800);
});

// Approach the child
approachChild.addEventListener("click", () => {
    dialogueThree.hidden = false;
    approachChild.hidden = true;

    setTimeout(() => {
        dialogueThree.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});

// Chapter Three choices
document.querySelectorAll(".choice-three").forEach(button => {
    button.addEventListener("click", () => {

        const choice = button.dataset.choice;

        journey.push({
            chapter: 3,
            choice: choice
        });

        threadThree.classList.add("appear");
        document.querySelector(".playground-world")
    .classList.add("moment-created");
        dialogueThree.hidden = true;

        if (choice === "invite") {
            resultThree.textContent =
                "You invite the child to join a game. " +
                "Their hesitant smile grows into laughter. " +
                "A third golden thread begins to shine.";
        } else {
            resultThree.textContent =
                "You sit beside the child and listen. " +
                "Sometimes, simply being there is enough " +
                "to make someone feel they belong. " +
                "A third golden thread begins to shine.";
        }

        continueFour.hidden = false;

        setTimeout(() => {
            resultThree.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 150);
    });
});
// CHAPTER FOUR

const sceneFour = document.getElementById("scene-four");
const helpBird = document.getElementById("help-bird");
const dialogueFour = document.getElementById("dialogue-four");
const resultFour = document.getElementById("result-four");
const threadFour = document.getElementById("thread-four");
const continueFive = document.getElementById("continue-five");

// Transition from Chapter Three to Chapter Four

continueFour.addEventListener("click", () => {

    sceneThree.classList.add("fade-out");

    setTimeout(() => {
        sceneThree.hidden = true;
        sceneFour.hidden = false;

        window.scrollTo(0, 0);

        sceneFour.classList.add("fade-in");
    }, 800);
});

// Help the little bird button

helpBird.addEventListener("click", () => {

    dialogueFour.hidden = false;
    helpBird.hidden = true;

    setTimeout(() => {
        dialogueFour.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});

// Chapter Four choices

document.querySelectorAll(".choice-four").forEach(button => {

    button.addEventListener("click", () => {

        const choice = button.dataset.choice;

        // Record the choice for our final artwork
        journey.push({
            chapter: 4,
            choice: choice
        });

        // Reveal the fourth golden thread
        threadFour.classList.add("appear");

        document.querySelector(".garden-world")
            .classList.add("moment-created");

        dialogueFour.hidden = true;

        if (choice === "water") {
            resultFour.textContent =
                "You fill the little bird's water dish. " +
                "A small act of care brings comfort " +
                "to a quiet corner of the garden.";
        } else {
            resultFour.textContent =
                "You keep the area peaceful and ask " +
                "a trusted adult for help. " +
                "Even the smallest life deserves kindness.";
        }

        // Show the button for Chapter Five
        continueFive.hidden = false;

        // Let the visitor see the golden thread grow
        sceneFour.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Then show the result
        setTimeout(() => {
            resultFour.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 2700);

        console.log("Your journey:", journey);
    });
});
// CHAPTER FIVE

const sceneFive = document.getElementById("scene-five");
const helpFriends = document.getElementById("help-friends");
const dialogueFive = document.getElementById("dialogue-five");
const resultFive = document.getElementById("result-five");
const threadFive = document.getElementById("thread-five");
const revealArtwork = document.getElementById("reveal-artwork");

// Transition from Chapter Four to Chapter Five

continueFive.addEventListener("click", () => {

    sceneFour.classList.add("fade-out");

    setTimeout(() => {

        sceneFour.hidden = true;
        sceneFive.hidden = false;

        window.scrollTo(0, 0);

        sceneFive.classList.add("fade-in");

    }, 800);
});

// Help the friends button

helpFriends.addEventListener("click", () => {

    dialogueFive.hidden = false;
    helpFriends.hidden = true;

    setTimeout(() => {
        dialogueFive.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 100);
});

// Chapter Five choices

document.querySelectorAll(".choice-five").forEach(button => {

    button.addEventListener("click", () => {

        const choice = button.dataset.choice;

        journey.push({
            chapter: 5,
            choice: choice
        });

        threadFive.classList.add("appear");

        document.querySelector(".bridge-world")
            .classList.add("moment-created");

        dialogueFive.hidden = true;

        if (choice === "encourage") {
            resultFive.textContent =
                "You encourage them to speak honestly. " +
                "A few gentle words begin to mend " +
                "the distance between them.";
        } else {
            resultFive.textContent =
                "You listen to both friends without judgment. " +
                "Feeling understood gives them the courage " +
                "to reconnect.";
        }

        revealArtwork.hidden = false;

        // Show the golden thread before scrolling down
        sceneFive.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        setTimeout(() => {
            resultFive.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 2700);

        console.log("Your complete journey:", journey);
    });
});
// GRAND FINALE

const finale = document.getElementById("finale");
const finalMessage = document.getElementById("final-message");
const replayFinale = document.getElementById("replay-finale");

let finaleTimer;

// Start or replay the magical reveal
function playFinale() {

    clearTimeout(finaleTimer);

    finale.classList.remove("playing", "finished");

    // Reset animations so replay works
    void finale.offsetWidth;

    finale.classList.add("playing");

    finaleTimer = setTimeout(() => {
        finale.classList.add("finished");

        finalMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 10000);
}

// Reveal the artwork after Chapter Five
revealArtwork.addEventListener("click", () => {

    sceneFive.classList.add("fade-out");

    setTimeout(() => {
        sceneFive.hidden = true;
        finale.hidden = false;

        window.scrollTo(0, 0);

        playFinale();
    }, 800);
});

// Replay the animation
replayFinale.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

    playFinale();
});