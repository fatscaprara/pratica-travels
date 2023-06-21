import express from "express";
import { getPassengers } from "../controllers/passenger.controller.js";
import { pageIsValid } from "../middlewares/pageIsValid.middleware.js";

const router = express.Router();

router.get("/passengers/travels", pageIsValid, getPassengers);

export default router;
