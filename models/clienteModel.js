const pool = require('../config/db');

const getClientes = async () => {
  const result = await pool.query('SELECT * FROM cliente;');
  return result.rows;
};

const createCliente = async (ruc, nombre, direccion, ciudad, telefono, email) => {
  const result = await pool.query(
    'INSERT INTO cliente (ruc, nombre, direccion, ciudad, telefono, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [ruc, nombre, direccion, ciudad, telefono, email]
  );
  return result.rows[0];
};

module.exports = {
    getClientes,
    createCliente,
};
