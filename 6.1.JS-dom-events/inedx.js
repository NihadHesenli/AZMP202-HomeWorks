const addButton = document.getElementById('add-button')
addButton.addEventListener('click', ()=>{
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    
        const productCardJS = document.createElement('div')
        productCardJS.className = 'product-card';
        productCardJS.innerHTML = `
        <img src="${image}" alt="Product">
        <div class="details">
          <h3>${title}</h3>
           <p>${description}</p>
        <p class="price">$${price}</p>
        </div>
        <div class="actions">
        <button class="details-btn">Details</button>
        <button class="delete-btn">Delete</button>
        </div>
        `
        const productsList = document.getElementById('products');
        productsList.appendChild(productCardJS)

        
        
        document.getElementById('title').value = ''
        document.getElementById('price').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image').value = '';
        
    })
    
const productsList = document.getElementById('products');
productsList.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-btn')) {
        const productCard = event.target.closest('.product-card'); 
        if (productCard) {
            productCard.remove(); 
        }
    }
    
});

const product = document.querySelectorAll('.product-card')

product.forEach((elem) =>{
    const inputTitle = document.getElementById('search-input')
    inputTitle.addEventListener('input' , ()=>{
        const filteredProducts = elem;
    })

})



 
