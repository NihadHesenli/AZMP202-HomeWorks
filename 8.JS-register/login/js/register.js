import { setDataLocalStorage ,getDataFromLocalStorage } from "./storage.js";

const nameInput = document.getElementById('user-name')
const emailInput = document.getElementById('email')
const form = document.querySelector('form')
const paswordInput = document.getElementById('pw')

const allUser = getDataFromLocalStorage('users') || [];

form.addEventListener('submit' , function(submit){
    submit.preventDefault()
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = paswordInput.value.trim();

    if (name !== '' && email !== '' && password !== '') {
        const user = {
            id: Date.now(),
            userName : name,
            email : email,
            password : password,
            
        }
        allUser.push(user)
        setDataLocalStorage('users', allUser)
        window.location.replace('sign-in.html')
        
    }else{
        alert('Xanaları bos qoyma')
        return;
    }
    
    form.reset()
})