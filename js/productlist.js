const endpoint = "https://kea-alt-del.dk/t7/api/products/";

const container = document.querySelector("#productlist");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
  data.forEach((product) => {
    container.innerHTML += `
    <a class=product-container href="product.html">
    <article class="cardproduct soldout">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="puma bag"/>
    <span class="sold">${product.soldout}</span>
    <h3>Grey Puma Backpack${product.productdisplayname}</h3>
    <p class="product">${product.articletype} | ${product.brandname}</p>
    <p>DKK <span class="line">${product.price}</span>,-</p>
    <p>Now DKK 795,-></p>
    <p class="sale">${product.discount}</p>
    </article>
    </a>`;
  });
}

getData();
