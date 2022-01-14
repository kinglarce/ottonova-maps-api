import express from "express";
import CityRouter from "./city.router";
import ContinentRouter from "./continent.router";

const router = express.Router();

router.use("/cities", CityRouter);
router.use("/continents", ContinentRouter);

export default router;
