import { func } from "prop-types";

const promiseAll = (promises) => {
    const results = [];
    let prmoisesCompleted = 0;
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((val) => {
                results[index] = val;
                prmoisesCompleted += 1;
                if (prmoisesCompleted === promises.length) {
                    resolve(results);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    })
 }

 const promiseAllSettled = (promises) => {
     return new Promise ((resolve, reject) =>{
         let results = [];
         promises.forEach((promise) => {
             promise.then((val) => {
                results.push({status: 'fulfilled', value: val});
                if (results.length === promises.length) {
                    resolve(results);
                }
             }).catch((err) => {
                 results.push({status: 'rejected', reason: `${err}`});
                 if (results.length === promises.length){
                     resolve(results);
                 }
             })
         })
     })
 };

 const promiseAny = (promises) => {
     let errors =[];
     return new Promise((resolve, reject) => {
         promises.forEach((promise) => {
             Promise.resolve(promise)
             .then(resolve)
             .catch((err) => {
                 errors.push(err);
                 if (promises.length === errors.length){
                     reject(errors);
                 }
             })
         })
     })
 }


 function MyPromise(executer) {
     let onResolve;
     let onReject;
     let isCalled = false;
     let isFulfilled = false;
     let isRejected = false;
     let value;
     let error;
     this.then = function (thenHandler) {
         onResolve = thenHandler;
         if (!isCalled && isFulfilled) {
             onResolve(value);
             isCalled = true;
         }
         return this;
     }

     this.catch = function (catchHandler) {
        onReject = catchHandler;
        if(!isCalled && isRejected) {
            onReject(error);
            isCalled = true;
        }
        return this;
     }

     function resolve(val) {
        isFulfilled = true;
        value = val;
         if (typeof onResolve === 'function' && !isCalled) {
             onResolve(val);
             isCalled = true;
         }
     }
     function reject (err) {
         isRejected = true; 
         error = err;
         if(typeof onReject === 'function' && !isCalled) {
             onReject(err);
             isCalled = true;
         }
     }

     executer(resolve, reject);
 }

 MyPromise.resolve = (val) => {
     return new MyPromise(function executer(resolve, reject){
         resolve(val);
     })
 }

 MyPromise.reject = (err) => {
     return new MyPromise(function executer(resolve, reject) {
         reject(err);
     })
 }

 MyPromise.all = (promises) => {
     let results =[];
     let prmoisesCompleted = 0;
     return new MyPromise(function executer (resolve, reject) {
         promises.forEach((promise, index) => {
             promise.then((val) => {
                    results[index] = val;
                    prmoisesCompleted += 1;
                    if (prmoisesCompleted === promises.length) {
                        resolve(results);
                    }

             }).catch((err) => {
                 reject(err);
             })
         })
     })
 }

 MyPromise.allSettled = (promises) => {
     return new MyPromise(function executer(resolve, reject){
         let results = [];
         promises.forEach((promise) => {
             promise.then((val) =>{
                 results.push({status: 'fulfilled', value: val});
                 if (results.length === promise.length) {
                     resolve(results);
                 }
             }).catch((err) => {
                 results.push({status: 'Rejected', reason: err});
                 if (promises.length === results.length){
                     resolve(results);
                 }
             })
         })
     })
 }

 MyPromise.any = (promises) => {
     let errors = [];
     return new MyPromise(function executer(resolve, reject) {
         promises.forEach((promise) => {
             MyPromise.resolve(promise)
             .then(resolve)
             .catch((err) => {
                 errors.push(err);
                 if(errors.length === promises.length) {
                     reject(errors)
                 }
             })
         })
     })
 }