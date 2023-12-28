const express = require("express");
const router = express.Router();

const equiposController = require ("../controllers/equiposController")

router.get("/",equiposController.allTeams);
router.get('/:id',equiposController.oneTeam);


module.exports= router;