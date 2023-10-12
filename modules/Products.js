const Products = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  let res = await data.json();
  let products = res.map((elem) => {
    return `<div class="col-5">
        <div class="product">
          <h5>${elem.title.substring(0, 50)}</h5>
          <p class="text-truncate">
            ${elem.description}
          </p>
          <img src=${elem.image} class="img-fluid w-50 d-block mx-auto" style="height:400px" alt="">
          <div class="d-flex justify-content-between">
            <span class="text-capitalize">category:${elem.categorey}</span>
            <span class="text-capitalize">price:${elem.price}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span class="text-capitalize">rate:${elem.rating.rate}</span>
            <span class="text-capitalize">count:${elem.rating.count}</span>
          </div>
        </div>
      </div>`;
  });
  document.querySelector(".products .row").innerHTML=products.join("");
};
export default Products;
