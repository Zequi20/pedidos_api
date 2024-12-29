const express = require('express');
const { fetchPedidos, fetchPedidosByUser, newPedido } = require('../controllers/pedidoController');

const router = express.Router();

router.get('/', fetchPedidos);
router.get('/usuario/:idUsuario', fetchPedidosByUser);
router.post('/add', newPedido);

module.exports = router;
