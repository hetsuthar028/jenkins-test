const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("Hey Jenkins!!");
    res.send({message: "Hey Jenkins!"});
})

app.listen(5050, () => {
    console.log("Server running on port 5050...");
})