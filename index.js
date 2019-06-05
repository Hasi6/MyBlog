const express = require('express');

const port = 5500;

const app = new express();

app.listen(port, () => {
    console.log(`App Start on ${port}`);
})