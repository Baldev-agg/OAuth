const express = require("express");
const router = express.Router();
const {signup, login, googleAuth} = require("../controllers/authController");
const passport = require("passport");

router.post("/signup", signup);
router.post("/login", login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  googleAuth
);

module.exports = router;