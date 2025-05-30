import mongoose from "mongoose";

const counsellorPersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  gender:{
    type: String,
    required: false,
  },
  phoneNumber: {
    type: Number,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  collegeName:{
    type: String,
    required: false,
  },
  branch: {
    type: String,
    required: false
  },
  examName: {
    type: String,
    required: false
  },
  rank: {
    type: String,
    required: false
  },
  passoutYear:{
    type: Number,
    required: false
  },
  about: {
    type: String,
    required: false
  },
  registrationNumber:{
    type: String,
    required: false
  },
  profileImage: {
    type: String,
    required: false
  },
  collegeIdCard: {
    type: String,
    required: false
  },
  rankCard: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  studentList: [
    {
      studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
      },
      name: String,
      profileImage: String
    }
  ],
  role: {
    type: String,
    default: "counsellor"
  },
  otp: {
    type: String,  // Stores the OTP sent to the user
    required: false, // OTP is not always needed
  },
  otpExpiry: {
    type: Date, // Stores the expiry time of the OTP
    required: false, // OTP expiry is not always set
  },
  slug:{
    type: String,
    required: false
  },
  verification: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending"
  }
},
{ timestamps: true }
);

export const counsellorPerson = mongoose.model('counsellorPerson', counsellorPersonSchema);
