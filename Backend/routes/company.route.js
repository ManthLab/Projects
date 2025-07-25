
import express from "express";

import authenticateToken from "../middleware/isAuthenticated.js";                  
import { registerCompany, 
    getAllCompanies, 
    updateCompany ,
    getCompanyById } from "../contollers/company.controller.js";

const router = express.Router();

router.route("/register").post(authenticateToken,registerCompany);
router.route("/get").get(authenticateToken,getAllCompanies);
router.route("/get/:id").get(authenticateToken,getCompanyById);
router.route("/update/:id").put(authenticateToken,updateCompany);     // Middleware --> checks before the profile gets updated.

export default router;