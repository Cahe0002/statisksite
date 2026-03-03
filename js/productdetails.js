const idDetails = new URLSearchParams(window.location.search).get("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${idDetails}`;

const container = document.querySelector("main");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(details) {
  console.log(details);
  container.innerHTML = `<a href="productlist.html?category=${details.category}">
        <h3>Back</h3>
      </a> <section class="product-img-text" ${details.soldout && "soldout"}">
        <div>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${details.id}.webp"
            alt="${details.productdisplayname}"
          />
          <span class="sold">Sold Out</span>
        </div>
        <div class="product-text">
          <h2>${details.productdisplayname}</h2>
          <p>Type: ${details.articletype}</p>
          <p>Category: ${details.category}</p>
          <p>Brandname: ${details.brandname}</p>
          <p>Price: ${details.price},-</p>
          <button>Buy now</button>
        </div>
      </section>`;
}

getData();
