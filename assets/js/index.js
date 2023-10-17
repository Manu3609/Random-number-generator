const numbersContainer = document.querySelector(".numbers")
const numbers = document.querySelectorAll(".number")
const form = document.querySelector(".box form")
const minInput = document.querySelector("#minInput")
const maxInput = document.querySelector("#maxInput")
const minNegativeText = document.querySelector(".negativeText#min")
const maxNegativeText = document.querySelector(".negativeText#max")
const minErrorText = document.querySelector(".errorText#min")
const maxErrorText = document.querySelector(".errorText#max")
const minLabel = document.querySelector("#minLabel")
const maxLabel = document.querySelector("#maxLabel")

let arrayNumber = []
let x = 0
let y = 0
let min = 0
let max = 0
numbersContainer.classList.remove("isGenerated")
const randomNumber = (min, max) => {
    arrayNumber = []
    for (i = 0; i < 4; i ++ ) {
        x = (Math.floor(Math.random() * (max - min + 1)) + Math.floor(min))
        if (x < 10) {
            if (i == 0) {
                y = "0" + x
                arrayNumber[i] = y
                numbers[4].innerHTML = "0" + x
            } else {
                arrayNumber[i] = "0" + x
                numbers[i].innerHTML = "0" + x
            }
            setTimeout(() => {
                numbers[0].innerHTML = y
            }, 200)
        } else {
            if (i == 0) {
                y = x
                arrayNumber[i] = x
                numbers[4].innerHTML = x
            } else {
                arrayNumber[i] = x
                numbers[i].innerHTML = x
            }
            setTimeout(() => {
                numbers[0].innerHTML = y
            }, 200)
        }
    }
    setTimeout(() => {numbersContainer.classList.remove("isGenerated")}, 1000)
}
form.addEventListener("submit", (e) => {
    min = Math.floor(minInput.value)
    max = Math.floor(maxInput.value)
    e.preventDefault()
    if (min >= max) {
        minErrorText.classList.add("show")
        maxErrorText.classList.remove("show")
        minLabel.classList.add("error")
        maxLabel.classList.add("error")
        minInput.classList.add("error")
        maxInput.classList.add("error")
        minNegativeText.classList.remove("show")
        maxNegativeText.classList.remove("show")
        numbers[0].innerHTML = "- -"
        return
    } else {
        minErrorText.classList.remove("show")
        maxErrorText.classList.remove("show")
        minLabel.classList.remove("error")
        maxLabel.classList.remove("error")
        minInput.classList.remove("error")
        maxInput.classList.remove("error")
        minNegativeText.classList.remove("show")
        maxNegativeText.classList.remove("show")
    }
    if (min < 0) {
        minErrorText.classList.remove("show")
        maxErrorText.classList.remove("show")
        minLabel.classList.add("error")
        maxLabel.classList.remove("error")
        minInput.classList.add("error")
        maxInput.classList.remove("error")
        minNegativeText.classList.add("show")
        maxNegativeText.classList.remove("show")
        numbers[0].innerHTML = "- -"
        return
    } else {
        minErrorText.classList.remove("show")
        maxErrorText.classList.remove("show")
        minLabel.classList.remove("error")
        maxLabel.classList.remove("error")
        minInput.classList.remove("error")
        maxInput.classList.remove("error")
        minNegativeText.classList.remove("show")
        maxNegativeText.classList.remove("show")
    }
    if (max < 0) {
        minErrorText.classList.remove("show")
        maxErrorText.classList.remove("show")
        minLabel.classList.remove("error")
        maxLabel.classList.add("error")
        minInput.classList.remove("error")
        maxInput.classList.add("error")
        minNegativeText.classList.remove("show")
        maxNegativeText.classList.add("show")
        numbers[0].innerHTML = "- -"
        return
    } else {
        minErrorText.classList.remove("show")
        maxErrorText.classList.remove("show")
        minLabel.classList.remove("error")
        maxLabel.classList.remove("error")
        minInput.classList.remove("error")
        maxInput.classList.remove("error")
        minNegativeText.classList.remove("show")
        maxNegativeText.classList.remove("show")
    }
    randomNumber(min, max)
    numbersContainer.classList.add("isGenerated")
    console.log(arrayNumber + " min:" + min + " max:" + max)
})