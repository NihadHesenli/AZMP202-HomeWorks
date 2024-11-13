
// task-2 mezmunun oxumadan kod yazmaqa basladim hamisin JS de sonra gordum ki css ilede yazmaqi demisdim :(

const container = document.createElement('div')
document.body.append(container)
container.setAttribute('class', 'container')
container.style.maxWidth = '65%'
container.style.margin = '0 auto'

const bigImg = document.createElement('img')
bigImg.src= "https://picsum.photos/960/360";
bigImg.style.width = '100%'
container.append(bigImg)

const cardsDiv = document.createElement('div')
cardsDiv.setAttribute( 'class', 'cards')
cardsDiv.style.display = 'flex'
cardsDiv.style.justifyContent = 'space-around'
cardsDiv.style.columnGap = '50px'
cardsDiv.style.marginTop = '45px'
container.append(cardsDiv)

const cardDiv1 = document.createElement('div')
const cardDiv2 = document.createElement('div')
const cardDiv3 = document.createElement('div')
cardDiv1.setAttribute('class' , 'card')
cardDiv2.setAttribute('class' , 'card')
cardDiv3.setAttribute('class' , 'card')
cardsDiv.append(cardDiv1)
cardsDiv.append(cardDiv2)
cardsDiv.append(cardDiv3)


const smallImg1 = document.createElement('img')
const smallImg2 = document.createElement('img')
const smallImg3 = document.createElement('img')
smallImg1.src  = 'https://picsum.photos/290/180';
smallImg1.style.width= '100%'
smallImg1.style.border = '5px solid gray'
smallImg2.src = 'https://picsum.photos/290/180';
smallImg2.style.width= '100%'
smallImg2.style.border = '5px solid gray'
smallImg3.src = 'https://picsum.photos/290/180';
smallImg3.style.width= '100%'
smallImg3.style.border = '5px solid gray'
cardDiv1.append(smallImg1)
cardDiv2.append(smallImg2)
cardDiv3.append(smallImg3)

const headText1 = document.createElement('h3')
const headText2 = document.createElement('h3')
const headText3 = document.createElement('h3')
const headText1Em = document.createElement('em')
const headText2Em = document.createElement('em')
const headText3Em = document.createElement('em')
headText1.append(headText1Em)
headText2.append(headText2Em)
headText3.append(headText3Em)
headText1Em.textContent = "Nese bir yazi"
headText2Em.textContent = "Nese bir yazi"
headText3Em.textContent = "Nese bir yazi"
headText1.style.fontSize = '16px'
headText2.style.fontSize = '16px'
headText3.style.fontSize = '16px'
headText1.style.color = 'gray'
headText2.style.color = 'gray'
headText3.style.color = 'gray'
cardDiv1.append(headText1)
cardDiv2.append(headText2)
cardDiv3.append(headText3)

const paragText1 = document.createElement('p')
const paragText2 = document.createElement('p')
const paragText3 = document.createElement('p')
paragText1.textContent = 'lorem ipusm dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.'
paragText2.textContent = 'lorem ipusm dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.'
paragText3.textContent = 'lorem ipusm dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor.'
paragText1.style.color = 'gray'
paragText2.style.color = 'gray'
paragText3.style.color = 'gray'
cardDiv1.append(paragText1)
cardDiv2.append(paragText2)
cardDiv3.append(paragText3)

const readMoreDiv1 = document.createElement('div')
const readMoreDiv2 = document.createElement('div')
const readMoreDiv3 = document.createElement('div')
readMoreDiv1.style.display = 'flex'
readMoreDiv2.style.display = 'flex'
readMoreDiv3.style.display = 'flex'
readMoreDiv1.style.justifyContent = 'flex-end'
readMoreDiv2.style.justifyContent = 'flex-end'
readMoreDiv3.style.justifyContent = 'flex-end'
readMoreDiv1.style.alignItems = 'center'
readMoreDiv2.style.alignItems = 'center'
readMoreDiv3.style.alignItems = 'center'
readMoreDiv1.style.color = 'orange'
readMoreDiv2.style.color = 'orange'
readMoreDiv3.style.color = 'orange'
readMoreDiv1.style.gap = '10px'
readMoreDiv2.style.gap = '10px'
readMoreDiv3.style.gap = '10px'
cardDiv1.append(readMoreDiv1)
cardDiv2.append(readMoreDiv2)
cardDiv3.append(readMoreDiv3)

const readMoreText1 = document.createElement('p')
const readMoreText2 = document.createElement('p')
const readMoreText3 = document.createElement('p')
readMoreText1.textContent = 'Read More'
readMoreText2.textContent = 'Read More'
readMoreText3.textContent = 'Read More'
readMoreDiv1.append(readMoreText1)
readMoreDiv2.append(readMoreText2)
readMoreDiv3.append(readMoreText3)

const readMoreIcon1 = document.createElement('i')
const readMoreIcon2 = document.createElement('i')
const readMoreIcon3 = document.createElement('i')
readMoreIcon1.setAttribute('class' , 'fa-solid fa-chevron-right')
readMoreIcon2.setAttribute('class' , 'fa-solid fa-chevron-right')
readMoreIcon3.setAttribute('class' , 'fa-solid fa-chevron-right')
readMoreDiv1.append(readMoreIcon1)
readMoreDiv2.append(readMoreIcon2)
readMoreDiv3.append(readMoreIcon3)
