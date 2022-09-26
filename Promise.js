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