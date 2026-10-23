function searchMedicine(){

const medicine =
document
.getElementById("medicine")
.value;

document
.getElementById("result")
.innerHTML=

"Approx Price ₹120";

}

function findPharmacy(){

navigator.geolocation
.getCurrentPosition(
(pos)=>{

window.open(

`https://www.google.com/maps/search/pharmacy/@${pos.coords.latitude},${pos.coords.longitude},15z`

);

});

}
