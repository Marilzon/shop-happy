const products = fetch("server/api.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

console.log(products);
