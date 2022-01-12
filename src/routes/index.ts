import express from "express";
import MapsController from "../controllers/maps";

const router = express.Router();

router.get("/maps", async (_req, res) => {
  const controller = new MapsController();
  const response = await controller.getResponse();
  return res.send(response);
});

export default router;
