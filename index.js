let cartCount = 0;

const products = [
{
name:"Apple iPhone 16",
price:"₹79,900",
desc:"Latest Apple smartphone.",
image:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab"
},
{
name:"POCO C32",
price:"₹8,999",
desc:"Budget Android smartphone.",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
},
{
name:"Bluetooth Headphones",
price:"₹1,999",
desc:"Wireless Bluetooth headphones.",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},
{
name:"Android Smart Watch",
price:"₹2,999",
desc:"Fitness and smart notifications.",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},
{
name:"Redmi Note 10",
price:"₹12,999",
desc:"Popular Redmi smartphone.",
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505"
}
];

const container = document.getElementById("products");

products.forEach(product => {
container.innerHTML += `
<div class="card">
<img src="${product.image}">
<h2>${product.name}</h2>
<p>${product.desc}</p>
<h3>${product.price}</h3>
<button onclick="addCart()">Add To Cart</button>
</div>
`;
});

function addCart(){
cartCount++;
document.getElementById("cart").innerText = cartCount;
}

function toggleTheme(){
document.body.classList.toggle("dark");
}