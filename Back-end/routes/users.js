var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({ users: [{ name: "Timmy" }] });
  next();
});

router.get("/login", function(req, res, next) {
  res.json({ username: "admin", password: "admin" });
});
module.exports = router;
