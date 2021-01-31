let prodcutiveButton = document.getElementById('productiveBtn');
let gamingButton = document.getElementById('gamingBtn');
let productivity = document.getElementById('productivity');
let gaming = document.getElementById('gaming');
let prodcutiveDevices = document.getElementById('productivityDevices');
let gamingDevices = document.getElementById('gamingDevices');
let goBack = document.querySelector(".backButton");
goBack.style.display = "none";


prodcutiveButton.addEventListener('click', function () {
    goBack.style.display = "block";
    gaming.style.display = "none";
    prodcutiveDevices.classList.remove("hidden");
});

gamingButton.addEventListener('click', function () {
    goBack.style.display = "block";
    productivity.style.display = "none";
    gamingDevices.classList.remove("hidden");
});
goBack.addEventListener('click', function(){
    if(productivity.style.display = "none"){
        productivity.style.display = "block";
        prodcutiveDevices.classList.add("hidden");
    } 
    if(gaming.style.display = "none"){
        gaming.style.display = "block";
        gamingDevices.classList.add("hidden");
    }
    goBack.style.display = "none";
});