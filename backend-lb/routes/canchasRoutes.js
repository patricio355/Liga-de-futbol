const express = require("express");
const router = express.Router();

const canchasController = require ("../controllers/canchasController")

router.get("/",canchasController.allcanchas);
router.get('/:id',canchasController.oneCancha);
router.post('/create',canchasController.createCancha);

module.exports= router;