const express = require('express');
const { fetchMesas, addMesa, setStatusMesa } = require('../controllers/mesaController');

const router = express.Router();

router.get('/', fetchMesas);
router.post('/add', addMesa);
router.post('/updStatus', setStatusMesa);

module.exports = router;
