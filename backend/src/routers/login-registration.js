const router = require("express").Router();
const { logIn, registerUser } = require("../controllers/login-register-jwt");

router.post("/logIn", logIn);
router.post("/registerUser", registerUser);

module.exports = router;
