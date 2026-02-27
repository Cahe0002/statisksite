const container = document.querySelector("#productlist");
const endpoint = `https://kea-alt-del.dk/t7/api/products`;

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
    <a href="product.html">
          <article class="cardproduct soldout">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="puma bag"
            />
            <span class="sold">Sold Out</span>
            <h3>${product.productdisplayname}</h3>
            <p class="product">Backback | Puma</p>
            <p>DKK <span class="line">${product.price}</span>,-</p>
            <div class="discount">
              <p>Now DKK 795,-</p>
              <p class="sale">25%</p>
            </div>
          </article>
        </a>
        `;
  });
  container.innerHTML = markup;
}

getData();
