console.log("beginning")
let average = findAverage(2, 2);
console.log(average);
function findAverage(x , y) {
    console.log("function called");
    let answer = (x + y) / 2;
    console.log("math done");
    return answer;
}

let fruits = ["pineapple", "kiwi", "mango"];


function printFruit() {
   let favFruit = fruits[1];
    console.log(fruits[0]);
    function printFavFruit() {
        console.log(favFruit);
    }
    printFavFruit();
}

let leastFav = fruits[2];
console.log(leastFav);


let randFunction = function() {
    alert("Hello");
}
randFunction();