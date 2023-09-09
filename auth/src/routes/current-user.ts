import express from "express";

import { currentUser } from "../middlewares/current-user";
import { requireAuth } from "../middlewares/require-auth";

const router = express.Router();

router.get("/api/users/currentUser", currentUser,requireAuth, (req, res) => {
	res.send({ currentUser: req.currentUser || null }); // if no user or req.currentUser is 'undefined' return 'null'
}); 

export { router as currentUserRouter };
