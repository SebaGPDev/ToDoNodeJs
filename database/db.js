const mysql = require("mysql");

const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

conexion.connect(function (err) {
  if (err) {
    console.log(`El error: ${err.message}`);
  }
  console.log(`El connection established`);
});

module.exports = conexion;