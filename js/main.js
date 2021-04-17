const rootProducts = document.querySelector("#root-products");
const showMoreProducts = document.querySelector("#show-more-products");

const getAPI = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (i = 0; i < data.products.length; i++) {
        rootProducts.insertAdjacentHTML('beforeend',
          `
          <div class="card-item">
            <figure>
            <img src="${data.products[i].image}" alt="Product image">
            <figcaption>${data.products[i].name}</figcaption>
            <p>
              ${data.products[i].description}
            </p>
            <small>de R$${data.products[i].oldPrice.toFixed(2)}</small>
            <p><strong>Por R$${data.products[i].price.toFixed(2)}</strong></p>
            <small>ou ${data.products[i].installments.count} x de R$${data.products[i].installments.value.toFixed(2)}</small>
            <button class="button-control">Comprar</button>
            </figure>
          </div>
        `
        );
      }
    })
}

getAPI("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1");

showMoreProducts.onclick = function () {
  getAPI("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=2");
  showMoreProducts.disabled = true;
  showMoreProducts.style.cursor = "not-allowed";
}
