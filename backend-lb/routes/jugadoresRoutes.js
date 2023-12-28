const express = require("express");
const router = express.Router();

const jugadoresRoutes = require ("../controllers/jugadoresController")

router.get("/",jugadoresRoutes.allplayers);
router.get('/:id',jugadoresRoutes.oneplayer);


module.exports= router;