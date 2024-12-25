const pool = require('../config/db');

const getMesas = async () => {
  const result = await pool.query('SELECT * FROM mesa;');
  return result.rows;
};

const createMesa = async (numero, estado, capacidad, ubicacion) => {
  const result = await pool.query(
    'INSERT INTO mesa (numero, estado, capacidad, ubicacion) VALUES ($1, $2, $3, $4) RETURNING *',
    [numero, estado, capacidad, ubicacion]
  );
  return result.rows[0];
};

const updateMesa = async (id, estado) => {
    const result = await pool.query(
        'UPDATE mesa SET estado = $2 WHERE id = $1 RETURNING *',
      [id, estado]
    );
    return result.rows[0];
  };

module.exports = {
    getMesas,
    createMesa,
    updateMesa
};
