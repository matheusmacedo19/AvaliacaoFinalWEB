const express = require("express");
const router = express.Router();
const pool = require("../dbConfig");

router.post("/login", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM Usuario WHERE email = $1 and senha = $2;",
    [req.body.email, req.body.senha],

  );

  if (result.rows[0]) {
    session = req.session;
    session.user = 1;

    console.log(session.user);

    res
      .status(200)
      .cookie("usuarioId", result.rows[0].usuarioid, {
        secure: false,
      })
      .json(result.rows[0]);
  } else {
    res.status(404).send({
      result: "Not found",
    });
  }
});

router.get("/logout", (req, res) => {
  console.log("logout");
  session = null;
  req.session.destroy();
  res.send("");
});

module.exports = router;