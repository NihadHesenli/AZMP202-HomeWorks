const addButton = document.getElementById('add-button')
const productsList = document.getElementById('products-list');
addButton.addEventListener('click', ()=>{
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    if (title && price && description && image) {
        const productCard = document.createElement('div')
        productCard.className = 'product-card'
        productCard.innerHTML = `
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
        productsList.appendChild(productCard)

        document.getElementById('title').value = ''
        document.getElementById('price').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image').value = '';
    }else{
        alert('butun xanalari doldurun')
    }
})
