const { getClientes, createCliente } = require('../models/clienteModel');

const fetchClientes = async (req, res) => {
  try {
    const users = await getClientes();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addCliente = async (req, res) => {
  const { ruc, nombre, direccion, ciudad, telefono, email } = req.body;
  try {
    const newCli = await createCliente(ruc, nombre, direccion, ciudad, telefono, email);
    res.status(201).json(newCli);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    fetchClientes,
    addCliente,
};
