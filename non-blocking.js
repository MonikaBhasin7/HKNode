var fs = require('fs');

fs.readFile('text.txt', function(err, data) {
    if(err) {
        console.log(err);
    }
    setTimeout(function() {
        console.log("Display after 2 seconds.")
    }, 3000);
})
console.log('Start here');