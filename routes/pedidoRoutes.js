const express = require('express');
const { fetchPedidos, fetchPedidosByUser } = require('../controllers/pedidoController');

const router = express.Router();

router.get('/', fetchPedidos);
router.get('/usuario/:idUsuario', fetchPedidosByUser);

module.exports = router;
