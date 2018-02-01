/*
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();

    //Open
    xhr.open('GET', 'data.txt', true);

    // Optional -- used for spinners / loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1> ${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function() {
        console.log('Request error...');
    }


    // old version
    // xhr.onreadystatechange = function() {
    //     console.log('readystate', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();



    // readyStateValues
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}
*/

/* Synchronous way */
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

/*
function createPost(post) {
    setTimeout(function() {
        posts.push(post);
    }, 2000);
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPost();
*/

/* Asynchronous way using callback
function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPost() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPost);

getPost();
*/

/* Asynchronous way - using promise not callback */
function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        },2000);
    })
}

function getPosts() {
    setTimeout(function(post) {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(function(err){
        console.log(err);
    });
