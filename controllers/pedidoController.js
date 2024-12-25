const { getPedidos, getPedidosByUser } = require('../models/pedidoModel');

const fetchPedidos = async (req, res) => {
  try {
    const users = await getPedidos();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetchPedidosByUser = async (req, res) => {
    const { idUsuario } = req.params;
    try {
      const pedidos = await getPedidosByUser(idUsuario);
      res.status(200).json(pedidos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

/*const addCliente = async (req, res) => {
  const { ruc, nombre, direccion, ciudad, telefono, email } = req.body;
  try {
    const newCli = await createCliente(ruc, nombre, direccion, ciudad, telefono, email);
    res.status(201).json(newCli);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};*/

module.exports = {
    fetchPedidos,
    fetchPedidosByUser,
};
