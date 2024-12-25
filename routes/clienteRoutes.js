const express = require('express');
const { fetchClientes, addCliente } = require('../controllers/clienteController');

const router = express.Router();

router.get('/', fetchClientes);
router.post('/add', addCliente);

module.exports = router;
