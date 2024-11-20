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


    if (email !== '' && pw !== '') {
        
        loginBtn.addEventListener('click' , function(){
            const user = {
                id : Date.now(),
                email : email,
                pw : pw,
                isLogged : false,
            }
    
            users.push(user)
            setDataLocalStorage('users' , users)
        })
    }else{
        alert('xanalari bos saxlama')
        return;
    }
    
    form.reset()
})