// imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path, { join } from "path";
import connectDB from "./configs/databaseConfigs.js";
import userRoutes from "./routes/userRoutes.js";
import fontOfficeRoutes from "./routes/fontOfficeRoutes.js";

// Application
const app = express();
dotenv.config();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.static("uploads"));
app.use(morgan("dev"));

// Database Connection
connectDB();

// Routes
app.get("/", (req, res) => {
  return res.send("HellWet Server Running...");
});

// users routes
app.use("/api/v1/auth/", userRoutes);

app.use("/api/v1/font-office/", fontOfficeRoutes);
app.use("*", (req, res) => {
  return res.send("Invalid Route!");
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
