//generateArray();  //változóba mentett függvény nem hívható meg korábban

const generateArray = function (amount){
    let returnArray = [];
    /*
    let amountConverted = parseInt(amount);
    amount = amountConverted
    */

    amount = parseInt(amount);
    //console.log(amount);
    //console.log(typeof amount);

    if (!Number.isNaN(amount)) { // másik megoldás: Number.isNaN(amount) !== true
        for (let i = 0; i < amount; i++) {
            returnArray.push(`${i}`);
            //console.log(returnArray);
        }

    } else {
        returnArray.push("Error");
      
    }    
    //console.log(returnArray);
    return returnArray;
}

function loadEvent() {
  /*
  console.log(generateArray("kiskutya"));
  console.log(generateArray("1 kiskutya"));
  console.log(generateArray(100));
  console.log(generateArray("100"));
  console.log(generateArray([100]));
  */

  const root = document.getElementById("root");
  const list = generateArray(20);

  console.log(list);

  if (list[0] !== "Error") {
      for (const item of list) {
          root.insertAdjacentHTML("beforeend", `<div id="divCard"><span>${item}</span></div>`)
      }
  }

};

//loadEvent(); // meg lehet hívni a load függvényt előtte

window.addEventListener("load", loadEvent);

/*
window.addEventListener("load", function(){
    ez is egy valid megoldás
}   

window.addEventListener("load", () => {
    arrowfunctionnal valid megoldás
});

window.addEventListener("load", _ => {
arrowfunction aláhúzással () helyett
});

*/

function lengthCount(){
    const numberLength = "number";

    for (let i = 0; i < list.length; index++) {

        if (list[i] ) {
            
        }
    }
}