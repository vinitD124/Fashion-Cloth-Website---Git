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
     <h3 >${productObj.productname}</h3>
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


let isGender = "m"



let womenContainer = document.querySelector(".product-container-two")
let menContainer = document.querySelector(".product-container")
womenContainer.style.display = "none"

let filterFemaleBtn = document.querySelector(".filter-female")
let filtemaleBtn = document.querySelector(".filter-male")

filtemaleBtn.classList.add("active")

filterFemaleBtn.addEventListener("click",()=>{
    menContainer.style.display = "none"
    womenContainer.style.display = "flex"
    filterFemaleBtn.classList.add("active")
    filtemaleBtn.classList.remove("active")
    isGender = "f"
})

filtemaleBtn.addEventListener("click",()=>{
    menContainer.style.display = "flex"
    womenContainer.style.display = "none"
    filtemaleBtn.classList.add("active")
    filterFemaleBtn.classList.remove("active")
    isGender = "m"
})


document.querySelector(".filter-price").addEventListener("change",()=>{

 


    function PriceFilter(productGenderClass){

        const products = document.querySelectorAll(`.${productGenderClass} .product`);
        const productArray = Array.from(products);
        if (document.querySelector(".filter-price").value === "Low To High"){
            productArray.sort((a, b) => {
                const priceA = parseInt(a.textContent.match(/\d+/));
                const priceB = parseInt(b.textContent.match(/\d+/));
                return priceA - priceB;
              });
            
            
              const container = document.querySelector(`.${productGenderClass}`);
              container.innerHTML = '';
            
            
              productArray.forEach(product => {
                container.appendChild(product);
              })
        }
    
        else if(document.querySelector(".filter-price").value === "High To Low"){
            productArray.sort((a, b) => {
                const priceA = parseInt(a.textContent.match(/\d+/)[0]);
                const priceB = parseInt(b.textContent.match(/\d+/)[0]);
                return priceB - priceA ;
              });
            
            
              const container = document.querySelector(`.${productGenderClass}`);
              container.innerHTML = '';
            
            
              productArray.forEach(product => {
                container.appendChild(product);
              })
        }
    
        else if (document.querySelector(".filter-price").value === "Set Price Low/High"){
            return
        }
    

    }

    if (isGender === "m"){
        PriceFilter("product-container-one")
    }

    else{
        PriceFilter("product-container-two")
    }
   

})




const products = document.querySelectorAll('.product');
    const productArray = Array.from(products);


      
 const  checkerRemover = (removeName) =>{
    products.forEach(e=>{
      if (e.querySelector("h3").innerHTML === removeName){
         console.log(e.querySelector(".heart i").classList.remove("active"))
      } 
    })

    
 }

const checkerRemover2 = (prname) =>{
  document.querySelectorAll(".like-content").forEach(e=>{
    if(e.querySelector(".cont-div").dataset.name === prname){
      e.remove()
    }
  })
} 

    productArray.forEach(e=>{
      
e.querySelector(".heart").querySelector("i").addEventListener("click",(ele)=>{

  
  if(ele.target.classList[2] === "active"){
    ele.target.classList.remove("active")
    let prname = e.querySelector("h3").innerHTML
    console.log(document.querySelector(".like-ul").childNodes.length)
    if(document.querySelector(".like-ul").childNodes.length === 2){
      document.querySelector(".dot").classList.remove("active")
    } 
    checkerRemover2(prname)
  } 
  else{
    
    if ((document.querySelector(".like-ul").childNodes.length) > 0 ){
      document.querySelector(".dot").classList.add("active")
    }
  
    ele.target.classList.add("active")
    let str = ""
    let pname = e.querySelector("h3").innerHTML
    let imgSrc = e.querySelector("img").src
    let ulCont = document.querySelector(".like-ul")
    let newLi = document.createElement("li")

    str += `
    <div class="cont-div" data-name="${pname}" >
    <div class="like-left"><img src="${imgSrc}" alt=""></div>
    <div class="like-right"><h4 class="h4-text">${pname}
    </h4>
   
    <div class="star">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
    </div>
    </div>
    </div>
    <i  class='remove-heart bx bxs-heart'></i>
  `
    

  newLi.innerHTML = str
  newLi.classList.add("like-content")





  let removeBtn = newLi.querySelector(".remove-heart")

  removeBtn.addEventListener("click",()=>{
    let removeName = newLi.querySelector(".cont-div").dataset.name

    if(document.querySelector(".like-ul").childNodes.length === 2){
      document.querySelector(".dot").classList.remove("active")
    } 
    checkerRemover(removeName)

  })
  



  newLi.querySelector(".remove-heart").addEventListener("click",()=>{
    newLi.remove()
        

  })
    
  ulCont.appendChild(newLi)



  }
  
    

})




})







document.querySelector(".heart-btn").addEventListener("click",()=>{
  document.querySelector(".like-container").classList.add("active")
})


document.querySelector(".close-btn").addEventListener("click",()=>{
  document.querySelector(".like-container").classList.remove("active")
})

document.querySelector(".like-ul").querySelectorAll(".like-content").forEach(e1=>{
  console.log(e1)
})

