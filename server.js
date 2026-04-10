const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html", "index.html"));
});

// Servir CSS
app.use("/css", express.static(path.join(__dirname, "css", "styles.css")));

// Servir JS
app.use("/js", express.static(path.join(__dirname, "js", "app.js")));

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto " + PORT);
});