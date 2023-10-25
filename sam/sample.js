let arr = [1,2,3]

export const hello = () => {
   return arr
  };

console.log(arr)


let details = ""



export const func = () => {
 
    
    document.querySelectorAll(".product").forEach(e=>{
        e.addEventListener("click",(s)=>{
            e.querySelector(".icon").classList.add("active")
            details = e.querySelector("h1").innerHTML 
            console.log(e.querySelector("h1").innerHTML )
        })
    })
    
    return "product 1"


}