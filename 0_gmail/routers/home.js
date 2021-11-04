import express from "express";
import homeControler from "../controllers/home.js";
const router = express.Router();

router.get("", homeControler.getHome);

export default router;
