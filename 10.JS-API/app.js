const BASE_URL = "https://fakestoreapi.com"

function getData(endpoint){
    fetch(`${BASE_URL}/${endpoint}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        drawcard(data)
    })
    .catch((err)=> {
        console.log(err);
        
    })
}

const row = document.querySelector('.row')

function drawcard(arr){
    row.innerHTML = '';
    arr.forEach((element) => {
        const divCard = document.createElement('div')
        divCard.classList.add('col-3')
        divCard.innerHTML += `
         <div class="card" style="padding: 10px; border: 1px solid #ddd; margin: 10px;">
                <img src="${element.image}" alt="${element.title}" style="width: 100%; height: auto;">
                <h5>${element.category}</h5>
                <h2 style="font-size: 16px;">${element.title}</h2>
                <p>${element.description.slice(0, 50)}...</p>
                <p style="font-weight: bold;">$${element.price.toFixed(2)}</p>
                <div class = "btn">
                <button class="delete" data-id = "${element.id}">Delete</button>
            </div>
        `
        row.append(divCard)

        
    });
    const deletebtn = document.querySelectorAll('.delete')
    deletebtn.forEach((btn)=>{
        btn.addEventListener(('click'),function(){
            const deleteBtnId = this.getAttribute('data-id')
            deleteData("products",deleteBtnId,this)

        })
    })

    function deleteData(endpoint,id,button){
        fetch(`${BASE_URL}/${endpoint}/${id}`,{method:"DELETE"})
        .then((res)=>{
            if (res.ok) {
                button.parentElement.parentElement.remove()
            }
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
}

window.addEventListener('DOMContentLoaded',function(){
    getData('products')
})
