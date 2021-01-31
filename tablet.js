const ipadButton = document.getElementById("appleBtn");
const samsungButton = document.getElementById("samsungBtn");
let apple = document.getElementById("apple");
let samsung = document.getElementById("samsung");
let goBack = document.querySelector(".backButton");
let appleDevices = document.querySelector("#AppleTablets");
let samsungDevices = document.querySelector("#SamsungTablets");
// Hiding the BACK button
goBack.style.display = "none";

ipadButton.addEventListener('click', function () {
    goBack.style.display = "block";
    samsung.style.display = "none";
    appleDevices.classList.remove("hidden");
});

samsungButton.addEventListener('click', function () {
    goBack.style.display = "block";
    apple.style.display = "none";
    samsungDevices.classList.remove("hidden");
});

goBack.addEventListener('click', function(){
    if(apple.style.display = "none"){
        apple.style.display = "block";
        appleDevices.classList.add("hidden");
    } 
    if(samsung.style.display = "none"){
        samsung.style.display = "block";
        samsungDevices.classList.add("hidden");
    }
    goBack.style.display = "none";
});