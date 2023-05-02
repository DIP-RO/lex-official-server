// imports
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path, { join } from "path";
import connectDB from "./configs/databaseConfigs.js";
import { complainFiles } from "./controllers/filesControllers.js";
import frontOfficeRoutes from "./routes/frontOfficeRoutes.js";
import InventoryRoutes from "./routes/InventoryRoutes.js";
import hostelRoutes from "./routes/hostelRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import studentDetailsRoutes from "./routes/studentInformationRoutes.js";
import feesCollectionRoutes from "./routes/feesCollectionRoutes.js";
import examinationsRoutes from "./routes/examinationsRoutes.js";
import onlineCourseRoutes from "./routes/onlineCourseRoutes.js";
import onlineExaminationRoutes from "./routes/onlineExaminationRoutes.js";
import academicRoutes from "./routes/academicRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import lessonRoutes from "./routes/lessonPlanRoutes.js";
import behaviourRoutes from "./routes/behaviourRecordRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import expensesRoutes from "./routes/examinationsRoutes.js";
import humanResourceRoutes from "./routes/humanResourceRoutes.js";
import communicateRoutes from "./routes/communicateRoutes.js";

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

app.use("/api/v1/font-office/", frontOfficeRoutes);
app.use("/api/v1/inventory/", InventoryRoutes);
app.use("/api/v1/hostel/", hostelRoutes);
app.use("/api/v1/student-details/", studentDetailsRoutes);
app.use("/api/v1/fees-collection/", feesCollectionRoutes);
app.use("/api/v1/examinations/", examinationsRoutes);
app.use("/api/v1/onlineCourse/", onlineCourseRoutes);
app.use("/api/v1/online-examination/", onlineExaminationRoutes);
app.use("/api/v1/academic/", academicRoutes);
app.use("/api/v1/attendance/", attendanceRoutes);
app.use("/api/v1/lesson/", lessonRoutes);
app.use("/api/v1/behaviour/", behaviourRoutes);
app.use("/api/v1/income/", incomeRoutes);
app.use("/api/v1/expenses/", expensesRoutes);
app.use("/api/v1/humanResource/", humanResourceRoutes);
app.use("/api/v1/communicateRoutes/", communicateRoutes);
// files and images path:
app.get("/complains/files/:fileName", complainFiles);
// Handle Not valid routes
app.use("*", (req, res) => {
  return res.send("Invalid Route!");
});

// listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port::: ${PORT}`));
