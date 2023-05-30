

//const myPromise = new Promise(callback-function)

const myPromise00 = new Promise((resolve, reject) => {
    // resolve('Success!')
    reject('Fail!')
}
)
//DEFINE PROMISE
const myPromise01 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random()
        if (randomNumber < 0.5) {
            resolve('Success! Number is:', randomNumber)
        } else {
            reject('Fail! Number is:', randomNumber)
        }
    }, 2000)
}
)

//USE PROMISE
myPromise01
    .then((value) => { console.log('then:', value)})
    .catch((error) => { console.log('catch:', error)})