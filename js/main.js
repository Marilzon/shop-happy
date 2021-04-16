const rootProducts = document.querySelector("#root-products");

const getAPI = (url) => {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (i = 0;i < data.products.length; i++) {
      rootProducts.insertAdjacentHTML('beforeend',
        `
          <div class="card-item">
            <figure>
            <img src="${data.products[i].image}" alt="Product image">
            <figcaption>${data.products[i].name}</figcaption>
            <p>
              ${data.products[i].description}
            </p>
            <smal>de R$${data.products[i].oldPrice.toFixed(2)}</smal>
            <p>Por R$${data.products[i].price.toFixed(2)}</p>
            <small>ou ${data.products[i].installments.count} x de R$${data.products[i].installments.value.toFixed(2)}</small>
            </figure>
          </div>
        `
      );
      console.log(data.products[i].name);
    }
  })
}

getAPI("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1");

/*
const productInterface = `
  <div class="card-item">
    <figure>
      <img src="#" alt="Product image">
      <figcaption>${data.products[i].name}</figcaption>
      <p>
        ${data.products[i].description}
      </p>
      <smal>de R$${data.products[i].oldPrice.toFixed(2)}</smal>
      <p>Por R$${data.products[i].price.toFixed(2)}</p>
      <small>ou ${data.products[i].installments.count} x de R$${data.products[i].installments.valuetoFixed(2)}</small>
    </figure>
  </div>
`;
*/
