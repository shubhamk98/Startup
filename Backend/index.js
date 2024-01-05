import express from "express";
import connectDB from "./connection.js";
import apiRoutes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

app.use(cors({
  origin: ['https://startupfrontend.vercel.app','https://venturesinsider-gakfnymgk-shubham-kambojs-projects.vercel.app/'],
  credentials: true,
}));


app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});

connectDB(DB_URL).then(() => console.log("Database connection successful"));

app.use("/api", apiRoutes);

app.use('/',(req,res)=>{
  res.send("Server is running")
})

