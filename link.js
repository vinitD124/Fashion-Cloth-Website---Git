let arr = [
  { productname: "Regular Brown T-shirts", price: "75$" , src : "images/new Product/A-one.jpg"},
  { productname: "Regular Purple Hoodies", price: "30$",src : "images/new Product/B-one.jpg" },
  { productname: "Regular Brown Shirt", price: "50$",src : "images/new Product/C-one.jpg" },
  { productname: "Regual Green T-shirt", price: "85$",src : "images/new Product/D-one.jpg" },
  { productname: "Regular Cream Hoodie", price: "35$",src : "images/new Product/E-one.jpg" },
  { productname: "Regular Grey Shirt", price: "45$",src : "images/new Product/K-one.jpg" },
  { productname: "Regular Red Shirt", price: "85$",src : "images/new Product/H-one.jpg" },
  { productname: "Regular Brown Shirt", price: "65$",src : "images/new Product/J-one.jpg" },
];

function createProduct() {
  arr.forEach((productObj , index) => {
    let productContainer = document.querySelector(".product-container");

    let product = document.createElement("div");
    product.classList.add("product");

    let str = "";

    str += `  <img class="imgre" src="${productObj.src}" alt="">
<div class="product-desc">
   <span>Fashion</span>
   <h3>${productObj.productname}</h3>
   <div class="star">
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
   </div>
   <h4 class="product-price-male">${productObj.price}</h4>
   <div class="btn-button">
     <button class="heart"><i class='bx bxs-heart' ></i></button>
     <button class="addcart"><i class='cart bx bx-cart'></i></button>
     </div>
</div>`;
  
    product.innerHTML = str;

    let imgr = product.querySelector(".imgre")
    
    imgr.addEventListener("click",()=>{
        redirectToProductPage(index);
    })


    productContainer.appendChild(product);
  });
}

function redirectToProductPage(index) {
    const selectedProduct = arr[index];
    const productUrl = `product.html?productname=${selectedProduct.productname}&price=${selectedProduct.price}&imgSrc=${selectedProduct.src}`;
    
    window.location.href = productUrl;
  }

createProduct() 


let arr2 = [
  { productname: "Sheer tie-front top", price: "75$",src : "images/new Product/L-one.jpg" },
  { productname: "V-neck bodysuit", price: "35$",src : "images/new Product/M-one.jpg" },
  { productname: "Cropped vest top", price: "45$",src : "images/new Product/N-one.jpg" },
  { productname: "Henley top", price: "65$",src : "images/new Product/P-one.jpg" },
  { productname: "Satin vest top", price: "40$",src : "images/new Product/Q-one.jpg" },
  { productname: "Pleated top", price: "25$",src : "images/new Product/R-one.jpg" },
  { productname: "Fitted T-shirt", price: "75$",src : "images/new Product/S-one.jpg" },
  { productname: "Padded bustier", price: "80$",src : "images/new Product/T-one.jpg" },
]


function createProduct2() {
  arr2.forEach((productObj , index) => {
    let productContainer = document.querySelector(".product-container-two");

    let product = document.createElement("div");
    product.classList.add("product");

    let str = "";

    str += ` <img class="imgre" src="${productObj.src}" alt="">
<div class="product-desc">
   <span>Fashion</span>
   <h3>${productObj.productname}</h3>
   <div class="star">
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
     <i class="fas fa-star"></i>
   </div>
   <h4>${productObj.price}</h4>
   <div class="btn-button">
   <button class="heart"><i class='bx bxs-heart' ></i></button>
   <button class="addcart"><i class='cart bx bx-cart'></i></button>
     </div>
</div>`;
    product.innerHTML = str;
    
   
    let imgr = product.querySelector(".imgre")
    
    imgr.addEventListener("click",()=>{
        redirectToProductPage(index);
    })



    productContainer.appendChild(product);
  });
}

function redirectToProductPage2(index) {
    const selectedProduct = arr2[index];
    const productUrl = `product.html?productname=${selectedProduct.productname}&price=${selectedProduct.price}&imgSrc=${selectedProduct.src}`;
    
    window.location.href = productUrl;
  }

createProduct2() 


const products = document.querySelectorAll('.product');
    const productArray = Array.from(products);

    productArray.forEach(e=>{
      
e.querySelector(".heart").querySelector("i").addEventListener("click",(ele)=>{

  if (  e.querySelector(".heart").querySelector("i").style.color === "red"){
    e.querySelector(".heart").querySelector("i").style.color = "grey" 
    
  }
  else{

    e.querySelector(".heart").querySelector("i").style.color = "red" 
  }

})



})  