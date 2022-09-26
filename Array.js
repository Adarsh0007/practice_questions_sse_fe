Array.prototype.myForEach = (cb) => {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);
    }
};

Array.prototype.myMap = (cb) => {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        array.push(cb(this[i], i, this));
    }
    return array;
};

Array.prototype.myFilter = (cb) => {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
};

Array.prototype.myReduce = (cb, initialValue) => {
    let acc = initialValue === undefined ? undefined : initialValue;
    for (let i = 0; i < this.length; i++) {
        if (acc !== undefined) {
            acc = cb.call(undefined, acc, this[i], i, this);
        } else {
            acc = this[i];
        }
    }
    return acc;
};

const myFlat = (arr) => Array.isArray(arr) ? [].concat(...arr.map(myFlat)) : arr;
const deepFlat = (arr, depth = 1) => {
    return depth > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? deepFlat(val, depth - 1) : val), [])
        : arr.slice();
};

const getDepth = (obj) => {
    if (!obj || obj.length === 0 || typeof obj !== 'object') return 0;
    const keys = Object.keys(obj);
    var depth = 0;
    keys.forEach((key) => {
        let tempDepth = getDepth(obj[key]);
        if (tempDepth > depth) {
            depth = tempDepth;
        }
    })
    return 1 + depth;
};
