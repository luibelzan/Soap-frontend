const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pruebas',
  password: 'Lu1smigu3l',
  port: 5432,
});

module.exports = pool;