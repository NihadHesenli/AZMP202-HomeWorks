const increaseElement = document.getElementsByClassName('increase')[0]
const decreaseElemetn = document.getElementsByClassName('decrease')[0]
const textElement = document.getElementsByClassName('text')[0]
let fontSize = 16

increaseElement.addEventListener('click', function() {
    fontSize += 2
    textElement.style.fontSize = fontSize + 'px'
    if (fontSize > 32) {
        fontSize = 32
    }
});

decreaseElemetn.addEventListener('click', function(){
    fontSize -= 2
    textElement.style.fontSize = fontSize + 'px'
    if (fontSize < 10) {
        fontSize = 10
    }
})

const inputColorSelector = document.getElementById('colorInput')
const applyButton = document.getElementsByClassName('apply')[0]


applyButton.addEventListener('click' , function(){
    textElement.style.color = inputColorSelector.value
    if (textElement.style.color = inputColorSelector.value) {
        alert('basqa bir reng yaz')
    }
})