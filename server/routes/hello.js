import express from "express";

const router = express.Router();

import { sendHello } from "../controllers/hello.js";

router.post("/sendHello", sendHello);

export default router;
