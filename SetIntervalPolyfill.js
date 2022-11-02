
// counter varibale to trigger clearInterval
var counter =0;

const greeting = (param) => {
  counter++;
  console.log(`hello ${param}`);
   if (counter >= 3) {
     clearIntervalPolyfill(intervalId);
   }
}

const createSetIntervalPolyfill = () => {
  var intervalId = 0;
  var intervalMap = {};
  const setIntervalPolyfill = (callback, delay=0, ...args) => {
    if (typeof callback !== 'function') {
      throw new TypeError('callback should be a function');
    }
    // unique interval id
    var id = intervalId++;
    const repeat =() => {
     intervalMap[id] = setTimeout(() => {
       callback(...args);
       // if inertavl id exist, repeate the execution
       if (intervalMap[id]) {
        repeat();
       }
     }, delay);
    }
    repeat();
    return id;
  }
  
  const clearIntervalPolyfill = (intervalId) => {
   clearTimeout(intervalMap[intervalId]);
   delete intervalMap[intervalId];
  }
  
 return {
 setIntervalPolyfill,
 clearIntervalPolyfill
 }
}
const {
  setIntervalPolyfill,
  clearIntervalPolyfill
} = createSetIntervalPolyfill();

const intervalId  = setIntervalPolyfill(greeting, 1000, 'Adarsh')
console.log(intervalId);

