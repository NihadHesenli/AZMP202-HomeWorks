import { setDataLocalStorage , getDataFromLocalStorage } from "./ls.js";

const emailInput = document.querySelector('.email-input')
const pwInput = document.querySelector('.pw-input')
const form = document.querySelector('form')

const users = getDataFromLocalStorage('users') || [];


form.addEventListener('submit',function(submit){
    submit.preventDefault()
    const email = emailInput.value.trim()
    const pw = pwInput.value.trim()


    const bool = users.some((user)=>{
        return user.email === email 
        
    })

    if (!bool) {
        if (email !== '' && pw !== '') {
                const user = {
                    id : Date.now(),
                    email : email,
                    pw : pw,
                    isLogged : false,
                    basket : []
                }
                users.push(user)
                setDataLocalStorage('users' , users)
                
                Swal.fire({
                    title: "Qeydiyat olundu!",
                    icon: "success",
                    timer: 1500
                }).then(()=>{
                    window.location.replace('welcome.html')
                  })
        
        }else{
            alert('xanalari bos saxlama')
            return;
        }
    }else{
        alert('Bele bir istifadeci movcuddu')
    }
        form.reset()
})