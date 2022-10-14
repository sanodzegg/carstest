const express = require("express");

const mainRoutes = express.Router();

const arr = ["test"];

mainRoutes.route("/all").get((req, res) => {
    res.status(200).send(arr);
});

module.exports = mainRoutes;