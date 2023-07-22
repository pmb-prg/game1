/*---------------button--------------------*/
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
/*--------------player--------------------*/
const bot = document.querySelector(".bot");
const you = document.querySelector(".you");
/*-----------------------------------------*/
const massage = document.querySelector(".massage");
const textMass = document.querySelector(".text-mass");
const btnMass = document.querySelector(".btn-mass");


btnMass.addEventListener("click", () => {
    massage.style.display = "none";
})



function randomSelect() {
    const botChose = ["image/rock2.png", "image/paper2.png", "image/scissors2.png"];
    let random = "";
    random = botChose[Math.floor(Math.random() * botChose.length)];
    bot.src = `${random}`;
    bot.style.animation = "none";
    you.style.animation = "none"
    return;
}

function animation() {
    you.src = "image/rock.png";
    bot.src = "image/rock2.png";
    bot.style.animation = "shake 3s infinite";
    you.style.animation = "shake2 3s infinite";
    return;
}





function condition(b, y) {
    if ((b === "image/rock2.png" && y === "image/rock.png") ||
        (b === "image/paper2.png" && y === "image/paper.png") ||
        (b === "image/scissors2.png" && y === "image/scissors.png")) {
        massage.style.display = "flex";
        textMass.innerText = "Equal";
        textMass.style.color = "black";
    }
    if ((b === "image/rock2.png" && y === "image/paper.png") ||
        (b === "image/paper2.png" && y === "image/scissors.png") ||
        (b === "image/scissors2.png" && y === "image/rock.png")) {
        massage.style.display = "flex";
        textMass.innerText = "You Win";
        textMass.style.color = "green";
    }
    if ((b === "image/rock2.png" && y === "image/scissors.png") ||
        (b === "image/paper2.png" && y === "image/rock.png") ||
        (b === "image/scissors2.png" && y === "image/paper.png")) {
        massage.style.display = "flex";
        textMass.innerText = "You Lose";
        textMass.style.color = "red";
    }
}

rock.addEventListener("click", function() {
    animation();
    setTimeout(() => {
        randomSelect();
        you.src = "image/rock.png";
        condition(bot.getAttribute("src"), you.getAttribute("src"));
    }, 3600);

    console.log()
});
paper.addEventListener("click", function() {
    animation();
    setTimeout(() => {
        randomSelect();
        you.src = "image/paper.png";
        condition(bot.getAttribute("src"), you.getAttribute("src"));
    }, 3600);

});
scissors.addEventListener("click", function() {
    animation();
    setTimeout(() => {
        randomSelect();
        you.src = "image/scissors.png";
        condition(bot.getAttribute("src"), you.getAttribute("src"));
    }, 3600);

});