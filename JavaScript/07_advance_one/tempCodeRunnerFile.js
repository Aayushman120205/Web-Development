const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('ASYNC task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('ASYNC task 2')
        resolve()
    },1000)
}).then(function(){{
    console.log('ASYNC 2 resolved')
}})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Aayushman',email:'abc@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username:'Aayushman',email:'abc@gmail.com'})
        }
        else{
            reject('Error: Something Went Wrong')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log('Finally promsie is rejected or resolved'))

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:'Ax',email:'abc@gmail.com'})
        }
        else{
            reject('Error: JS Went Wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()