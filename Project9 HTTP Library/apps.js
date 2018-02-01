const http = new easyHTTP;

/*
//Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});


// Get single post
//Get Posts
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
    if(err) {
        console.log(err);
    } else {
        console.log(post);
    }
});
*/

// Post Request
const data = {
    title: 'Custom post',
    body: 'This is a custom post',
};

/*
// create post
http.post('https://jsonplaceholder.typicode.com/posts/', data,
    function(err, post) {
        if(err) {
            console.log(err);
        } else {
            console.log(post);
        }
});
*/

/*update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data,
    function(err, post){
        if(err) {
            console.log(err);
        } else {
            console.log(post);
        }
});
*/


/* Delete post */
http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function(err, response){
        if(err){
            console.log(err);
        } else {
            console.log(response);
        }
    });
