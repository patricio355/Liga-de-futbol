const express = require("express");
const router = express.Router();

const partidosRoutes = require ("../controllers/partidosController")

router.get("/",partidosRoutes.allpartidos);
router.get('/:id',partidosRoutes.onepartido);


module.exports= router;