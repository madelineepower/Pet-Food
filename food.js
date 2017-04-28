var dataRequest = new XMLHttpRequest();
dataRequest.addEventListener("load", requestComplete);
dataRequest.addEventListener("error", requestError);

function requestComplete(event){
  console.log("Food data has loaded");
  var dogFoodData = JSON.parse(event.target.responseText);
  console.log("Brand Data", dogFoodData);
  showData(dogFoodData);
}

function showData(dogFoodData) {
  var dogbrandDiv = document.getElementById("dog-brands");
  var brands = dogFoodData.dog_brands;
  var foodData = "";

   for (var i = 0; i < brands.length; i++) {
   foodData += `<h2>Brand Name: ${brands[i].name}</h2>`
     var types = brands[i].types;
        for (var j = 0; j < types.length; j++) {
          foodData += `<h3>Type: ${types[j].type}</h3>`
          var volumes = types[j].volumes;
            for (var c = 0; c < volumes.length; c++) {
              foodData += `<p>Volume: ${volumes[c].name}</p>
                          <p>Price: ${volumes[c].price}</p>`
            }
        }
    }

   dogbrandDiv.innerHTML += foodData;
};

function requestError(event) {
  console.log("There has been an error");
}
dataRequest.open("GET", "dog.json");
dataRequest.send();

// CATS

var dataRequest2 = new XMLHttpRequest();
dataRequest2.addEventListener("load", requestComplete2);
dataRequest2.addEventListener("error", requestError2);

function requestComplete2(event){
  console.log("Cat Food data has loaded");
  var catFoodData = JSON.parse(event.target.responseText);
  console.log("Brand Data", catFoodData);
  showCatData(catFoodData);
}

function showCatData(catFoodData) {
  var catbrandDiv = document.getElementById("cat-brands");
  var catbrands = catFoodData.cat_brands;
  var foodDataCat = "";

   for (var a = 0; a < catbrands.length; a++) {
   foodDataCat += `<h2>Brand Name: ${catbrands[a].name}</h2>`
     var cattypes = catbrands[a].types;
        for (var b = 0; b < cattypes.length; b++) {
          foodDataCat += `<h3>Type: ${cattypes[b].type}</h3>`
          var catvolumes = cattypes[b].volumes;
            for (var f = 0; f < catvolumes.length; f++) {
              foodDataCat += `<p>Volume: ${catvolumes[f].name}</p>
                          <p>Price: ${catvolumes[f].price}</p>`
            }
        }
    }

   catbrandDiv.innerHTML += foodDataCat;
};

function requestError2(event) {
  console.log("There has been an error");
}
dataRequest2.open("GET", "cat.json");
dataRequest2.send();
