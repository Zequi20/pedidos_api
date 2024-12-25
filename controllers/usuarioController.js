const { getUsuarios, createUsuario } = require('../models/usuarioModel');

const fetchUsuarios = async (req, res) => {
  try {
    const users = await getUsuarios();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addUsuario = async (req, res) => {
  const { nombre, direccion, telefono, contrasena, cargo } = req.body;
   try {
    const newUser = await createUsuario(nombre, direccion, telefono, contrasena, cargo);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    fetchUsuarios,
    addUsuario,
};
