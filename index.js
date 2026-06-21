const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my node Project");
});

app.get("/health", (req, res) => {
    res.send("Application is Healthy");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
