const products = [
    {
        name: "Product 1",
        description: "Product 1 description",
        price: "$50",
        image: "https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T03_cat.webp&w=1920&q=90"
    },
    {
        name: "Product 2",
        description: "Product 2 description",
        price: "$75",
        image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
    },
    {
        name: "Product 3",
        description: "Product 3 description",
        price: "$100",
        image: "https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg"
    }
];

const productContainer = document.getElementById('product-container');

for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    card.appendChild(img);

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const productName = document.createElement('h3');
    productName.textContent = product.name;
    cardContent.appendChild(productName);

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    cardContent.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.className = 'price';
    productPrice.textContent = product.price;
    cardContent.appendChild(productPrice);

    card.appendChild(cardContent);
    productContainer.appendChild(card);
}
