let url = "https://652a4c7c4791d884f1fcbfd1.mockapi.io/product"

function getAlluser() {
    let userTable = document.querySelector(".user-table");
  
    let str = "";
  
    let resObj = fetch(url);
  
    let mydata = resObj.then((data) => {
      return data.json();
    });
  
    mydata.then((finaldata) => {
      let usersArray = finaldata;
  
      usersArray.map((element) => {
        str += `<li>
        <h2 class="cart-name"></h2>
        <p class="cart-price"></p>
    </li>`;
      });
      userTable.innerHTML = str;
    });
  }
  
  
  getAlluser();

  document.getElementById("btn-submit").addEventListener("click", createUser);


  function createUser(e) {
    e.preventDefault();
    let cartName = document.querySelector(".cart-name").innerHTML
    let cartPrice = document.querySelector(".cart-price").innerHTML
 
    let newUser = {
      name: nameNew,
      email: emailNew,
      number: numberNew,
    };
  
    let fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    };
  
    fetch(url, fetchOption)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        getAlluser();
      })
      .catch((e) => {
        console.log(e);
      });
  }
  