const express = require('express');
const { fetchUsuarios, addUsuario } = require('../controllers/usuarioController');

const router = express.Router();

router.get('/', fetchUsuarios);
router.post('/add', addUsuario);

module.exports = router;
