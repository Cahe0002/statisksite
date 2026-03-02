const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);

// console.log(klikKategori);

const container = document.querySelector("#productlist");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}`;
document.querySelector("h2").textContent = klikKategori;

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(data) {
  let markup = "";
  console.log(data);
  data.forEach((product) => {
    console.log(product);
    markup += `
    <a href="productdetails.html?id=${product.id}">
          <article class="cardproduct soldout">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="puma bag"
            />
            <span class="sold">Sold Out</span>
            <h3>${product.productdisplayname}</h3>
            <p class="product">${product.articletype} | ${product.brandname}</p>
            <p>DKK <span class="line">${product.price}</span>,-</p>
            <div class="discount">
              <p>Now DKK <span>795</span>,-</p>
              <p class="sale">${product.discount}%</p>
            </div>
          </article>
        </a>
        `;
  });
  container.innerHTML = markup;
}

getData();
