let progress = document.querySelector(".vprogress")
let input = document.querySelector(".inputvalue")
let maxvalue = document.querySelector(".maxvalue")
let result = 0
let max = 0


function slide() {
    if (max > 0 && result > max) {
        alert(Error)
        
    }
    else {
        progress.style.width = `${(result / max) * 100}%`
    }

}

input.addEventListener("keyup", function () {
    result = parseInt(input.value, 10)
    slide()
})
maxvalue.addEventListener("keyup", function () {
    max = parseInt(maxvalue.value, 10)
    slide()
})
