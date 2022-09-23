const router = require("express").Router();
const conexion = require("../database/db");

router.get("/", (req, res) => {
  // conexion.query("SELECT * FROM users", (error, results) => {
  //   if (error) {
  //     throw error;
  //   } else {
  //     res.send(results);
  //   }
  // });
  res.render('index', {var1:'Bienvenido'});
});

module.exports = router;