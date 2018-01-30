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
