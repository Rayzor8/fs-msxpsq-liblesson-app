import express from "express";
import bodyParser from "body-parser";
import doteinv from "dotenv";
import lessonRoutes from "./routes/lesson-routes";
import sequelize from "./config/db";


doteinv.config();

const app = express();

app.use(bodyParser.json());
app.use("/api", lessonRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synchronized");
  })
  .catch((err) => console.error("Database connection failed:", err));

export default app;
