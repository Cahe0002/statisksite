const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const container = document.querySelector("#linkcontainer");

function getData() {
  fetch(endpoint)
    .then((respons) => respons.json())
    .then(showData);
}

function showData(data) {
  console.log(data);
  data.forEach((element) => {
    container.innerHTML += `<a class="catCard" href="productlist.html?category=${element.category}">${element.category}</a>`;
  });
}

getData();
