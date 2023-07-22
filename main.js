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
    if ((b === "http://127.0.0.1:5500/image/rock2.png" && y === "http://127.0.0.1:5500/image/rock.png") ||
        (b === "http://127.0.0.1:5500/image/paper2.png" && y === "http://127.0.0.1:5500/image/paper.png") ||
        (b === "http://127.0.0.1:5500/image/scissors2.png" && y === "http://127.0.0.1:5500/image/scissors.png")) {
        massage.style.display = "flex";
        textMass.innerText = "Equal";
        textMass.style.color = "black";
    }
    if ((b === "http://127.0.0.1:5500/image/rock2.png" && y === "http://127.0.0.1:5500/image/paper.png") ||
        (b === "http://127.0.0.1:5500/image/paper2.png" && y === "http://127.0.0.1:5500/image/scissors.png") ||
        (b === "http://127.0.0.1:5500/image/scissors2.png" && y === "http://127.0.0.1:5500/image/rock.png")) {
        massage.style.display = "flex";
        textMass.innerText = "You Win";
        textMass.style.color = "green";
    }
    if ((b === "http://127.0.0.1:5500/image/rock2.png" && y === "http://127.0.0.1:5500/image/scissors.png") ||
        (b === "http://127.0.0.1:5500/image/paper2.png" && y === "http://127.0.0.1:5500/image/rock.png") ||
        (b === "http://127.0.0.1:5500/image/scissors2.png" && y === "http://127.0.0.1:5500/image/paper.png")) {
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
        condition(bot.src, you.src);
    }, 3600);

});
paper.addEventListener("click", function() {
    animation();
    setTimeout(() => {
        randomSelect();
        you.src = "image/paper.png";
        condition(bot.src, you.src);
    }, 3600);

});
scissors.addEventListener("click", function() {
    animation();
    setTimeout(() => {
        randomSelect();
        you.src = "image/scissors.png";
        condition(bot.src, you.src);
    }, 3600);

});