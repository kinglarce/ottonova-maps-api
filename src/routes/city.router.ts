import express from "express";
import CityController from "../controllers/city.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new CityController();
  const response = await controller.getCities();
  return res.send(response);
});

router.get("/:continent", async (req, res) => {
  const controller = new CityController();
  const response = await controller.getCities(req.params.continent);
  if (!response) res.status(404).send({ message: "No city found." });
  return res.send(response);
});

export default router;
