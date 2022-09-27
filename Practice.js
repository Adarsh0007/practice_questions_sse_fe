const myPromisAll = (promises) => {
  const results = [];
  let prmoisesCompleted = 0;
  return new Promise ((resolve, reject) => {
      promises.forEach((prmoise, index) => {
       promises.then((val) => {
           results[index] = val;
           prmoisesCompleted += 1;
           if (prmoisesCompleted === promises.length) {
               resolve(results);
           }
       }).catch((error) => {
           reject(error);
       })
      })
  })
};

const promiseAllSettled = (promises) => {
    return new Promise ((resolve, reject) => {
        let results = [];
        promises.forEach((promise) => {
            prmoise.then((val) => {
                results.push({status: 'fulfilled', value : val});
                if (results.length === promises.length) {
                    resolve(results);
                }
            }).catch((error) => {
                results.push({status: 'rejected', reason: `${error}`});
                if (results.length === promises.length) {
                    resolve(results);
                }
            })
        })
    })
}

const promiseAny = (promises) => {
    let errors = [];
    return new Promise ((resolve, reject) => {
        promises.forEach((promise) => {
            Promise.resolve(prmoise)
            .then(resolve)
            .catch((error) => {
                errors.push(error);
                if(errors.length === promises.length) {
                    reject(errors);
                }
            })
        })
    })
};

Array.prototype.forEach = (cb) => {
    for (let i=0; i< this.length; i++) {
        cb(this[i]);
    }
}

Array.prototype.myMap = (cb) => {
    let array =[];
    for (let i=0; i< this.length;i++) {
        array.push(cb(this[i], i, this));
    }
    return array;
}

Array.prototype.myFilter = (cb) => {
    let array = [];
    for (let i=0;i< this.length; i++) {
        if (cb(this[i])){
            array.push(this[i]);
        }
    }
    return array;
}

Array.prototype.myReduce = (cb, initialValue) => {
    let acc = initialValue === undefined ? undefined : initialValue;
    for (let i=0; i< this.length; i++) {
        if (acc !== undefined) {
            acc = cb.call(undefined, acc,this[i], i, this);
        } else {
            acc = this[i];
        }
    }
    return acc;
};

const myFlat = (arr) => Array.isArray(arr) ? [].concat(...arr.map(myFlat)): arr;

const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])

const getDepth = (obj) => {
    if (!obj || obj.length === 0 || typeof obj !== 'object') return 0;
    var depth = 0;
    Object.keys(obj).forEach((key) => {
        let tempDepth = getDepth(obj[key]);
        if (tempDepth > depth){
            depth = tempDepth;
        }
    })
    return 1+depth;
}


const findDepth = (obj) => {
    if (!obj || obj.length === 0 || typeof obj !== 'object') return 0;
    let depth =0;
    Object.keys(obj).forEach((key) => {
        let tempDepth = findDepth(obj[key]);
        if (tempDepth > depth) {
            depth = tempDepth;
        }
    })
    return depth+1;
}


const twoSumSet = (arr, sum) => {
    const set = Set();
    let results = [];
    for (let i=0; i< arr.length; i++) {
        let temp = sum-arr[i];
        if (set.has(temp)) {
            results.push(arr[i]);
            results.push(temp);
        } else {
            set.add(arr[i])
        }
    }
    return results;
}

const twoSumMap = (arr, sum) => {
    let results=[];
    
    const mp = new Map();
    for (let i=0; i< arr.length;i++) {
        let temp = sum-arr[i];
        if (mp.has(temp)) {
            results.push(mp.get(temp));
            results.push(i);
            break;
        } else {
            mp.set(arr[i], i);
        }

    }
    return [Math.min(results[0], results[1]), Math.max(results[0], results[1])];
}

// // sum(1,2)(2)(4)(6,7,0);

const sum = function(...a) {
     const getSum = d=> d.reduce((acc, i) => acc+i);
     a = getSum(a);
     return function (...b) {
         if(b.length) {
             return sum(a+ getSum(b))
         }
         return a;
     }
}


// mul(1)(2)(3,4) = 36
const mul = function (...a) {
    const getMul = d=> d.reduce((acc, i) => acc*i, 1);
    a = getMul(a);
    return function (...b) {
        if (b.length) {
            return mul(a*getMul(b));
        }
        return a;
        
    }
}


// // groupArray of object by property


const groupBy = (objArray, property) => {
    return objArray.reduce((acc, obj) => {
        let key = obj[property];
        if (!acc[key]){
            acc[key] =[];
        }
        acc[key].push(obj);
    return acc;
    }, {})
}


// const arr = [[1], [2], [[[3]]], 4, [[[[[[[[[5]]]]]]]]]]



// const flatten = (ary) => ary.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
// console.log(arr.flat(Infinity))
/// [[5],[6]]

//tem = []

//[1,2]

// const flat1 = arr => Array.isArray(arr) ? [].concat(...arr.reduce(())

const strTest = 'this is my string';
/* const charArray = str.split(" ").join('');
console.log(charArray) */

const maxCount = (str) => {
    const{max, ...counts} = (str || "").split("").reduce((acc, current) => {
        acc[current] = acc[current] ? acc[current]+1: 1
        acc.max = acc.max < acc[current] ? acc[current] : acc.max;
        return acc;
    }, {max: 0})
    console.log(counts)
    return Object.entries(counts).filter(([k, v]) => v===max)
}

const testString = "this is the first string"
console.log(maxCount(testString).join(' | ').replace(/,/g, ':'));

const maxCharCount = (str) => {
    const{max, ...counts} = (str || "").split("").reduce((acc, current) =>{
        acc[current] = acc[current] ? acc[current]+1 : 1;
        acc.max = acc.max < acc[current] ? acc[current] : acc.max;
        return acc;
    }, {max: 0});
    return Object.entries(counts).filter(([k,v]) => v === max);
}

console.log(maxCharCount(testString).join(' | ').replace(/,/g, ':'))