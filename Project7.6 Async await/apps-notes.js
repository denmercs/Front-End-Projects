/*
async function myFunction() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000);
    });

    error = false;
    if (!error) {
        const res = await promise; // wait until the promise is resolved
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

myFunction()
    .then(res => console.log(res))
    .catch(err => console.log(err));
*/


async function getUsers() {
    // await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once it's resolved
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));
