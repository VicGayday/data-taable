const Pool = require('pg').Pool

const pool = new Pool({
  user: "victoria",
  password: '111111',
  host: 'localhost',
  port: 5432,
  database: "data_table"
})
module.exports = pool