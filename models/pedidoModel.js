const pool = require('../config/db');

const getPedidos = async () => {
  const result = await pool.query('SELECT * FROM pedido;');
  return result.rows;
};

const getPedidosByUser = async (idUsuario) => {
    const result = await pool.query('SELECT * FROM obtener_pedidos_con_detalles($1::SMALLINT);',
        [idUsuario]
    );
    return result.rows;
  };

/*const createUsuario = async (nombre, direccion, telefono, contrasena, cargo) => {
  const result = await pool.query(
    'INSERT INTO usuario (nombre, direccion, telefono, contrasena, cargo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [nombre, direccion, telefono, contrasena, cargo]
  );
  return result.rows[0];
};*/

module.exports = {
    getPedidos,
    getPedidosByUser,
};
