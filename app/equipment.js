import pool from "@/dbConfig";

async function getEquipos() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM t_equipos');
    return result.rows;
  } finally {
    client.release();
  }
}

async function getEquipoById(id) {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM t_equipos WHERE id = $1', [id]);
    return result.rows[0];
  } finally {
    client.release();
  }
}

async function updateEquipo(id, nombre, descripcion) {
  const client = await pool.connect();
  try {
    await client.query('UPDATE t_equipos SET nombre = $1, descripcion = $2 WHERE id = $3', [nombre, descripcion, id]);
  } finally {
    client.release();
  }
}

// Agrega aquí las demás operaciones CRUD (create, delete, etc.) según tus necesidades.

module.exports = { getEquipos, getEquipoById, updateEquipo };