const resultDisplay = document.getElementById('display')
const firstValue = document.getElementById('value-1')
const secondValue = document.getElementById('value-2')
const add = document.querySelector('.addition')
const sub = document.querySelector('.substract')
const mul = document.querySelector('.multiply')
const div = document.querySelector('.division')
const reset = document.querySelector('.reset')

add.addEventListener('click' , function () {
    if (isNaN(firstValue.value) || isNaN(secondValue.value)) {
        alert('reqem daxil et')
        return;
    }
    resultDisplay.textContent = +firstValue.value + +secondValue.value  
})
sub.addEventListener('click' , function () {
    if (isNaN(firstValue.value) || isNaN(secondValue.value)) {
        alert('reqem daxil et')
        return
    }
    resultDisplay.textContent = +firstValue.value - +secondValue.value  
})
mul.addEventListener('click' , function () {
    if (isNaN(firstValue.value) || isNaN(secondValue.value)) {
        alert('reqem daxil et')
        return
    }
     resultDisplay.textContent = +firstValue.value * +secondValue.value
})
div.addEventListener('click' , function () {
    if (isNaN(firstValue.value) || isNaN(secondValue.value)) {
        alert('reqem daxil et')
        return
    }
    if (+firstValue.value === 0 || +secondValue.value === 0) {
        alert('Sıfıra bölmək olmaz');
        return;
      }
    resultDisplay.textContent = +firstValue.value / +secondValue.value
})
reset.addEventListener('click' , function(){
    resultDisplay.textContent = 0
    firstValue.value = ''
    secondValue.value = ''
})



