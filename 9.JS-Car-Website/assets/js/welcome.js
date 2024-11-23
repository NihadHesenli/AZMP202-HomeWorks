import { setDataLocalStorage , getDataFromLocalStorage } from "./ls.js";

const emailInput = document.querySelector('.email-input')
const pwInput = document.querySelector('.pw-input')
const form = document.querySelector('form')
const loginBtn = document.querySelector('.login-btn')

const users = getDataFromLocalStorage('users') || [];


form.addEventListener('submit',function(submit){
    submit.preventDefault()
    const email = emailInput.value.trim()
    const pw = pwInput.value.trim()

    const registeredUser = users.find((user)=>{
        return user.email === email && user.pw === pw
    })

    if (registeredUser) {
        users.isLogged = true;
        setDataLocalStorage('users',users)
        window.location.replace('main.html')
    }else{
        alert('Bele bir istifadeci tapilmadi!')
    }
    form.reset()
})