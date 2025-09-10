

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute  from "./routes/application.route.js";
import path from 'path';
import { fileURLToPath } from "url";

dotenv.config({});
const app = express();


//middleware  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials : true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5003;

// api's

app.use("/api/users", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);


//------------------ Code for Deployment ----------------


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Frontend", "dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
  });
}


const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Failed to start server:", error.message);
    }
};
startServer();

/* if (process.env.NODE_ENV === "production") {
    const dirpath = path.resolve();
    app.use(express.static('./Frontend/dist')); 
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(dirpath, './Frontend/dist', 'index.html'));
    });

} */

/*app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/

