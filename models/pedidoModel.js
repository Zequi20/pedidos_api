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

  // Insertar un pedido con detalles
const insertarPedidoConDetalles = async (pedido, detalles) => {
  try {
    // Convertir los detalles a JSON
    const detallesJSON = JSON.stringify(detalles);

    // Ejecutar el procedimiento almacenado
    await pool.query(
      `CALL insertar_pedido_con_detalles(
        $1::SMALLINT,
        $2::SMALLINT,
        $3::VARCHAR,
        $4::INTEGER,
        $5::DATE,
        $6::FLOAT,
        $7::SMALLINT,
        $8::BOOLEAN,
        $9::JSON
      );`,
      [
        pedido.id_mesa,
        pedido.comensal,
        pedido.ubicacion,
        pedido.id_cliente,
        pedido.fecha_hora,
        pedido.total,
        pedido.id_usuario,
        pedido.estado,
        detallesJSON,
      ]
    );

    return { message: 'Pedido y detalles insertados correctamente' };
  } catch (error) {
    console.error('Error al insertar pedido:', error);
    throw new Error('No se pudo insertar el pedido con detalles.');
  }
};

module.exports = {
    insertarPedidoConDetalles,
    getPedidos,
    getPedidosByUser,
};
