
let name = {
  firstName: 'Adarsh',
  lastName: 'Gupta',
 
}

 let printFullName = function (hometown, state)  {
   console.log(`Hello ${this.firstName} ${this.lastName} from ${hometown}, ${state}`);
  }

let name2 = {
  firstName: 'John',
  lastName: 'Doe',
}

// call is just function borrowing 
printFullName.call(name, 'Noida', 'UP')

printFullName.call(name2, 'Delhi', 'Delhi')


// apply method , we pass arguments as array
printFullName.apply(name, ['Noida', 'UP'])

// bind -> it returns the copy of method wihich can be called later 

var myDetails = printFullName.bind(name, 'Noida', 'UP');
console.log(myDetails);
myDetails();


// Polyfill for bind method

// evvery funtion has access to bind in js , so adding our own bind method to function prototype
Function.prototype.myBind = function (...args) {
  let obj = this;
  // get other params that need to be passed to calling function
  let params = args.slice(1);
  
  // retrun a function to be executed later
  return function (...args2) {
   obj.apply(args[0], [...params, ...args2]);
  }
};

