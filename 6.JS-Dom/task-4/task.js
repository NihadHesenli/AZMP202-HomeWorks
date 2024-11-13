const openButton = document.querySelector('#open')
const closeButton = document.querySelector('#close')
const sidebar = document.querySelector('#sidebar')

openButton.addEventListener('click' , () =>{
    sidebar.style.left = '0'
})

closeButton.addEventListener('click' , ()=>{
    sidebar.style.left = '-400px'
})