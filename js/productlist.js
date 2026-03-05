const klikKategori = new URLSearchParams(window.location.search).get(
  "category",
);

// console.log(klikKategori);

const container = document.querySelector("#productlist");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}&limit=30`;
document.querySelector("h2").textContent = klikKategori;

document
  .querySelectorAll("#filter button")
  .forEach((knap) => knap.addEventListener("click", filter));

document
  .querySelectorAll("#sorter button")
  .forEach((knap) => knap.addEventListener("click", sorter));

let allData;
let udsnit;

function sorter(event) {
  if (event.target.dataset.price) {
    const dir = event.target.dataset.price;
    if (dir == "acc") {
      udsnit.sort((a, b) => a.price - b.price);
    } else {
      udsnit.sort((a, b) => b.price - a.price);
    }
  } else {
    const dir = event.target.dataset.text;
    if (dir == "az") {
      udsnit.sort((a, b) =>
        a.productdisplayname.localeCompare(b.productdisplayname, "da"),
      );
    } else {
      udsnit.sort((a, b) =>
        b.productdisplayname.localeCompare(a.productdisplayname, "da"),
      );
    }
  }
  showProducts(udsnit);
}

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      allData = udsnit = data;
      showProducts(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "All") {
    udsnit = allData;
  } else {
    udsnit = allData.filter((product) => product.gender == valgt);
  }
  showProducts(udsnit);
}

function showProducts(data) {
  let markup = "";
  console.log(data);
  data.forEach((product) => {
    console.log(product);
    markup += `
    <a href="productdetails.html?id=${product.id}">
          <article class="cardproduct ${product.soldout && "soldout"}">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="puma bag"
            />
            <span class="sold">Sold Out</span>
            <h3>${product.productdisplayname}</h3>
            <p class="product">${product.articletype} | ${product.brandname}</p>
            <p>DKK <span class="${product.discount && "line"}">${product.price}</span>,-</p>
            ${
              product.discount
                ? `<div class="discount">
              <p>Now DKK <span>${Math.round(product.price - (product.price * product.discount) / 100)}</span>,-</p>
             <p class="sale">${product.discount}%</p>`
                : ""
            }
            </div>
          </article>
        </a>
        `;
  });
  container.innerHTML = markup;
}

getData();
