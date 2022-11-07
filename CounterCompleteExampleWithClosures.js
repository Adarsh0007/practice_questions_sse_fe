// Complete counter example using Closures 

/*
HTML to create buttons and show counter values

<button id="incBtn">Increment</button>
<button id="decBtn">Decrement</button>
<button id="resetBtn">Reset</button>
<p id='counterValue'> Click on buttons to update Counter values </p>

*/




(function load(){
const createCounter = function (initialCount){
   let count = initialCount ? initialCount : 0;
    this.increment = function() {
      return ++count;
    }
    
    this.decrement = function() {
      return --count;
    }
    this.resetCounter = function(resetValue){
     count = resetValue? resetValue : 0;
     return count;
    }
    
    return {increment, decrement, resetCounter};
}

// creating the counter with inital value as 0
const counter = createCounter(0);
let counterValue ;

// icnrement counter handler
document.getElementById("incBtn").addEventListener("click", () => {
  setCouunterValue(counter.increment());
});

// decrement counter handler
document.getElementById("decBtn").addEventListener("click", () => {
  setCouunterValue(counter.decrement());
});


// reset counter handler
document.getElementById("resetBtn").addEventListener("click", () => {
 setCouunterValue( counter.resetCounter())
});

// setter function to update counter value on UI
const setCouunterValue = (val) => {
document.getElementById('counterValue').innerHTML = `Current Counter value : ${val}`;
}
}());
