const bigBox = document.querySelectorAll(".bigBox");
console.log(bigBox);
const rounds = document.querySelectorAll(".round");

const changeSlide = (idx) => {
    document.querySelector(".bigBox.active")?.classList.remove("active")
    document.querySelector(".round.active")?.classList.remove("active")
    rounds[idx].classList.add("active")
    bigBox[idx].classList.add("active")
}

rounds.forEach((round, index) => {
    round.addEventListener("click", () => {
        changeSlide(index)
    })
})

const changeFunc = () => {
    let idx = 0;

    setInterval(() => {
        if (idx > 4) {
            idx = 0
        }
        changeSlide(idx)
        idx++

    }, 5000);
}

changeFunc()