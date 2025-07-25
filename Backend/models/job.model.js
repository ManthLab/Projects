
import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    requirements : {
        type : [String],
        required : true,
    },
    location : {
        type : String,
        required : true,
    },
    salary : {
        type : String,
        required : true,
    },
    jobType : {
        type : String,
        required : true,
    },
    experience:{
        type : Number,
        required : true
    },
    company : {
        type : String,
        ref : "Company",
        required : true,
    },
    position : {
        type : Number,
        required : true,
    },
    created_by : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",                              // The one who creates the job or admin.
        required : true,
    },
    applications : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Application",
    }],
},{
    timestamps: true, 
});

export const Job = mongoose.model("Job", jobSchema);