var brandsDataRequest = new XMLHttpRequest();
brandsDataRequest.addEventListener("load", requestComplete);
brandsDataRequest.addEventListener("error", requestError);

function requestComplete(event){
  console.log("Food data has loaded");
  var brandData = JSON.parse(event.target.responseText);
  console.log("Brand Data", brandData);
  showData(brandData);
};

function showData() {
  var brandDiv = document.getElementById("brand");
}

function requestError(event) {
  console.log("There has been an error");
}

brandsDataRequest.open("GET", "brands.json");
brandsDataRequest.send();
