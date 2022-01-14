import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";
import Router from "./routes";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use((_, _res, next) => {
  _res.header("Access-Control-Allow-Origin", "*");
  _res.header("Access-Control-Allow-Headers", "Content-Type");
  _res.header("Access-Control-Expose-Headers", "*");
  next();
});
app.use(Router);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
