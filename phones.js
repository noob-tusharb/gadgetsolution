const iphoneButton = document.getElementById("iphone-btn");
const samsungButton = document.getElementById("samsung-btn");
const pocoButton = document.getElementById("poco-btn");
const oneplusButton = document.getElementById("oneplus-btn");
const iphone = document.getElementById("iphone");
const samsung = document.getElementById("samsung");
const poco = document.getElementById("poco");
const onePlus = document.getElementById("one-plus");
let goBack = document.querySelector(".backButton");
let iphoneDevices = document.querySelector("#AppleDevices");
let samsungDevices = document.querySelector("#SamsungDevices");
let pocoDevices = document.querySelector("#PocoDevices");
let onePlusDevices = document.querySelector("#OnePlusDevices");
// Hiding the BACK button
goBack.style.display = "none";

iphoneButton.addEventListener('click', function () {
    goBack.style.display = "block";
    samsung.style.display = "none";
    poco.style.display = "none";
    onePlus.style.display = "none";
    iphoneDevices.classList.remove("hidden");
});

samsungButton.addEventListener('click', function () {
    goBack.style.display = "block";
    iphone.style.display = "none";
    poco.style.display = "none";
    onePlus.style.display = "none";
    samsungDevices.classList.remove("hidden");
});

pocoButton.addEventListener('click', function () {
    goBack.style.display = "block";
    iphone.style.display = "none";
    samsung.style.display = "none";
    onePlus.style.display = "none";
    pocoDevices.classList.remove("hidden");
});

oneplusButton.addEventListener('click', function () {
    goBack.style.display = "block";
    iphone.style.display = "none";
    poco.style.display = "none";
    samsung.style.display = "none";
    onePlusDevices.classList.remove("hidden");
});

goBack.addEventListener('click', function(){
    if(iphone.style.display = "none"){
        iphone.style.display = "block";
        iphoneDevices.classList.add("hidden");
    } 
    if(samsung.style.display = "none"){
        samsung.style.display = "block";
        samsungDevices.classList.add("hidden");
    }
    if(poco.style.display = "none"){
        poco.style.display = "block";
    pocoDevices.classList.add("hidden");
    }
    if(onePlus.style.display = "none"){
        onePlus.style.display = "block";
    onePlusDevices.classList.add("hidden");
    }
    goBack.style.display = "none";
});
    