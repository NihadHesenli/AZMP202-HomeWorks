import { setDataLocalStorage ,getDataFromLocalStorage } from "./storage.js";

const userNameOrEmai = document.getElementById('username-email')
const form = document.querySelector('form')
const paswordInput = document.getElementById('pw')

const allUser = getDataFromLocalStorage('users') || [];

form.addEventListener('submit' , function(submit){
    submit.preventDefault()
    const nameOrEmail = userNameOrEmai.value.trim();
    const password = paswordInput.value.trim();

    const foundedUser = allUser.find((user)=> user.password=== password && (user.userName === nameOrEmail || user.email === nameOrEmail))

    if (foundedUser) {
        setDataLocalStorage('users')
        window.location.replace('home-page.html')
    }else{
        alert('Bele bir istofadeci tapilmadi')
    }

})