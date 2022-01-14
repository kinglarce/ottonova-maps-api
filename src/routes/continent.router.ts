import express from "express";
import ContinentController from "../controllers/continent.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ContinentController();
  const response = await controller.getContinents();
  return res.send(response);
});

export default router;
