const questionBox = document.querySelector(".questionBox")
const resultBox = document.querySelector(".resultBox")
const nobtn = document.querySelector("#nobtn")

const showResult = () => {
    questionBox.classList.remove("questionBox")
    questionBox.classList.add("inActive")
    resultBox.classList.add("active")

}

const runAway = () => {
    const marginnum = Math.floor(Math.random() * 150)
    console.log(marginnum)
    nobtn.style.margin = `${marginnum}px`;

}