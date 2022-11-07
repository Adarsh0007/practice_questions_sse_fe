
/*
HTML for creating button 
<button id="myBtn">Click me</button>
*/


function* countGenerator (initialNo, limitNo) {
  let count = initialNo ? initialNo : 0;
    while (true) {
    if (count >=limitNo) return;
     yield count++;
}
} 

// An IIFE to loader counter and button event listner
(function loadCounter() {
    let count =  countGenerator(1, 5);
document.getElementById("myBtn").addEventListener("click", () => {
 const { done, value} = count.next();
 if (!done) {
 console.log(value);
 } else alert('Counter limit reacheed')
});
}());

