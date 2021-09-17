const express = require('express');
const path = require('path');
const port = 9001;
const app = express();
app.use(express.static(path.join(__dirname, './'), { maxAge: 86400 * 1000 }));
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        
    }
})