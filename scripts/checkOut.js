let userAddress = (e) => {
  e.preventDefault();
  let data = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    address: document.getElementById("address").value,
    aptNo: document.getElementById("apartment").value,
    pincode: document.getElementById("pinCode").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    phoneNum: document.getElementById("phoneNumber").value,
  };
  localStorage.setItem("shippingAddress", JSON.stringify(data));
  location.href = "shiping.html";
};

document.getElementById("submit").addEventListener("click", userAddress);

let userData = document.getElementById("showUserData");
let user = JSON.parse(localStorage.getItem("user"));
if (user === null) {
  userData.innerText = "demo@xyz.com";
} else {
  userData.innerHTML = `${user.fname} ${user.lname} (${user.email}) `;
}

let logout = document.getElementById("logOut");
logout.addEventListener("click", () => {
  location.replace("./login.html");
});
// Return to cart
let returncart = document.getElementById("returnCart");
returncart.addEventListener("click", () => {
  location.href = "../cart.html";
});
/*User Data extract */

let fristName = document.getElementById("fname");
let lastName = document.getElementById("lname");
if (!user) {
  fristName.value = null;
  lastName.value = null;
} else {
  fristName.value = user.fname;
  lastName.value = user.lname;
}
