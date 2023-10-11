const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"expressjs",
    password:"Shiva09",
    port:5432
})

module.exports = pool;