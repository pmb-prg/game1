/*---------------button--------------------*/
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
/*--------------player--------------------*/
const bot = document.querySelector(".bot");
const you = document.querySelector(".you");



const botChose = ["image/rock2.png", "image/paper2.png", "image/scissors2.png"];
let random = "";




function Condition() {
    if (you.src === "image/rock.png") {
        console.log("work");

    }
    return;
}
Condition();
rock.addEventListener("click", function() {
    you.src = "image/rock.png";
    bot.src = "image/rock2.png";
    bot.style.animation = "shake 3s infinite";
    you.style.animation = "shake2 3s infinite";

    setTimeout(() => {
        random = botChose[Math.floor(Math.random() * botChose.length)];
        bot.src = `${random}`;
        bot.style.animation = "none";
        you.style.animation = "none"
        you.src = "image/rock.png";
    }, 3600);

})

paper.addEventListener("click", function() {
    you.src = "image/rock.png";
    bot.src = "image/rock2.png";
    bot.style.animation = "shake 3s infinite";
    you.style.animation = "shake2 3s infinite";

    setTimeout(() => {
        random = botChose[Math.floor(Math.random() * botChose.length)];
        bot.src = `${random}`;
        bot.style.animation = "none";
        you.style.animation = "none"
        you.src = "image/paper.png";
    }, 3600);
})

scissors.addEventListener("click", function() {
    you.src = "image/rock.png";
    bot.src = "image/rock2.png";
    bot.style.animation = "shake 3s infinite";
    you.style.animation = "shake2 3s infinite";

    setTimeout(() => {
        random = botChose[Math.floor(Math.random() * botChose.length)];
        bot.src = `${random}`;
        bot.style.animation = "none";
        you.style.animation = "none"
        you.src = "image/scissors.png";
    }, 3600);
})