const express = require("express");
const cors = require("cors");


const designerControllers = require("./controllers/designerController")
const clothingControllers = require("./controllers/clothingControllers");

//configuration
const app = express();

//middleware
app.use(cors());
app.use(express.json()); //parses incoming json request // take the body we sent and parse it as a req.body

// routes
app.get("/", (req, res) => {
    res.send("The DRP: Unleash the Drip, Embrace the Drop!");
});


app.use("/designers", designerControllers);
app.use("/clothing", clothingControllers);


app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;