const addButton = document.getElementById('add-button')
addButton.addEventListener('click', ()=>{
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    if (title && price && description && image) {
        const productCardJS = document.createElement('div')
        productCardJS.className = 'product-card';
        productCardJS.innerHTML = `
        <img src="${image}" alt="Product">
        <div class="details">
          <h3>${title}</h3>
           <p>${description}</p>
        <p class="price">${price}</p>
        </div>
        <div class="actions">
        <button class="details-btn">Details</button>
        <button class="delete-btn">Delete</button>
        </div>
        `
        const productsList = document.getElementById('products');
        productsList.appendChild(productCardJS)

        const deleteButton = productCardJS.querySelectorAll('.delete-btn')
        deleteButton.forEach((deleteButton) =>{
            deleteButton.addEventListener('click' , ()=>{
                productCardJS.remove()
            })
        })
        

        document.getElementById('title').value = ''
        document.getElementById('price').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image').value = '';
    }else{
        alert('butun xanalari doldurun')
    }
})


