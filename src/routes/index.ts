import express from "express";
import CityRouter from "./city.router";

const router = express.Router();

router.use("/cities", CityRouter);

export default router;
