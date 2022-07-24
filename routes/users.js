const express = require("express");
const router = express.Router();

//controller
const userController = require("../controllers/userController.js");

//middleware
const Auth = require("../middleware/auth.js");
const checkMailVerified = require("../middleware/checkMailVerified.js");

//user routes
router.post("/signin",
			userController.signIn);

router.post("/signup",
			userController.signUp);

router.get("/verifiyMyEmail/:userId",
			userController.verifiyMyEmail);

router.get("/getMyProfile",
			Auth.isAuthenticatedUser(),
			userController.getMyProfile);

router.post("/updateMyProfile",
			Auth.isAuthenticatedUser(),
			userController.updateMyProfile);

router.post("/forgetMyPassword",
			userController.forgetMyPassword);

router.post("/resetMyPassword",
			userController.resetMyPassword);


module.exports = router;
