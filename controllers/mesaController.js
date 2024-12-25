const { getMesas, createMesa, updateMesa } = require('../models/mesaModel');

const fetchMesas = async (req, res) => {
  try {
    const users = await getMesas();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addMesa = async (req, res) => {
  const { numero, estado, capacidad, ubicacion } = req.body;
  try {
    const newMesa = await createMesa( numero, estado, capacidad, ubicacion);
    res.status(201).json(newMesa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const setStatusMesa = async (req, res) => {
    const { id, estado } = req.body;
    try {
      const updUser = await updateMesa(id, estado);
      res.status(201).json(updUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = {
    fetchMesas,
    addMesa,
    setStatusMesa
};
