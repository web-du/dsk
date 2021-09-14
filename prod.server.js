const express = require('express');
const port = 9001;
const app = express();
app.use(express.static('./'));
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    } else {
        
    }
})