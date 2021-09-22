const express = require('express');
const path = require('path');
const port = 9001;
const app = express();
app.use(express.static(path.join(__dirname, './')));
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        
    }
})