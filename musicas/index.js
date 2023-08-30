const express = require("express");
const router = express.Router();
const path = require("path") 
const basePath = path.join(__dirname, "../layouts")

    router.get("/cadastrar", (req, res) =>{
        res.sendFile(`${basePath}/cadastrarmusica.handlebars`)
    })

module.exports = router;