
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phonenumber : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
   /*  pancard : {
        type : String,
        required : true,
        unique : true
    },
    aadharcard : {
        type : String,
        required : true,
        unique : true
    }, */
    role : {
        type : String,
        enum : ["Applicant","Recruiter"],
        default : "Applicant",
        required : true
    },
    profile : {
        bio : {
            type : String
        },
        skills : [{
            type : String
        }],
        resume : {
            type : String         // URL to resume file.
        },
        resumeOriginalname : {
            type : String,       // Original name of the resume file.
        },
        company : {
            type : mongoose.Schema.Types.ObjectId,   // Generating a relation between 'Company' and 'User' tables.
            ref : "Company",
        },
        profilePhoto : {
            type : String,       // URL to profile photo file.
            default : "",
        },
    }
},{timestamps : true});

export const User =  mongoose.model("User",  userSchema);   // Creates a model based on Schema.

