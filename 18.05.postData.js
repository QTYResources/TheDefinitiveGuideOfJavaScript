function postData(url, data, callback) {
    var request = new XMLHttpRequest();            
    request.open("POST", url);                    // POST to the specified url
    request.onreadystatechange = function() {     // Simple event handler
        if (request.readyState === 4 && callback) // When response is complete
            callback(request);                    // call the callback.
    };
    request.setRequestHeader("Content-Type",      // Set Content-Type
                             "application/x-www-form-urlencoded");
    request.send(encodeFormData(data));           // Send form-encoded data
}
