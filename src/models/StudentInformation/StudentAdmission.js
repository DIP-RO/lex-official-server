import mongoose from "mongoose";

const StudentAdmissionSchema = new mongoose.Schema({
  school: {
    type: String,
    required: [true, "school id required!"],
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  firstName: {
    type: String,
    required: [true, "first name required!"],
  },
  lastName: {
    type: String,
    required: false,
  },
  admissionNo: {
    type: String,
    required: [true, "admission no required!"],
  },
  rollNumber: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    required: [true, "class required!"],
  },
  section: {
    type: String,
    required: [true, "section required!"],
  },
  gender: {
    type: String,
    required: [true, "section required!"],
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: false,
  },
  religion: {
    type: String,
    required: false,
  },
  caste: {
    type: String,
    required: false,
  },
  mobileNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  admissionDate: {
    type: String,
    required: false,
  },

  bloodGroup: {
    type: String,
    required: false,
  },
  house: {
    type: String,
    required: false,
  },
  height: {
    type: String,
    required: false,
  },
  weight: {
    type: String,
    required: false,
  },
  measurementDate: {
    type: Date,
    required: false,
  },
  medicalHistory: {
    type: String,
    required: false,
  },
  routeList: {
    type: String,
    required: false,
  },
  pickupPoint: {
    type: String,
    required: false,
  },
  feesMonth: {
    type: String,
    required: false,
  },
  hostel: {
    type: String,
    required: false,
  },
  roomNo: {
    type: String,
    required: false,
  },
  feesDetails: {
    type: String,
    required: false,
  },
  fatherName: {
    type: String,
    required: false,
  },
  fatherPhone: {
    type: String,
    required: false,
  },
  fatherOccupation: {
    type: String,
    required: false,
  },

  motherName: {
    type: String,
    required: false,
  },
  motherPhone: {
    type: String,
    required: false,
  },
  motherOccupation: {
    type: String,
    required: false,
  },

  ifGuardianIs: {
    type: String,
    required: true,
  },
  guardianName: {
    type: String,
    required: [true, "guardian name required!"],
  },
  guardianRelation: {
    type: String,
    required: false,
  },
  guardianPhone: {
    type: String,
    required: [true, "guardian phone required!"],
  },
  guardianOccupation: {
    type: String,
    required: false,
  },
  guardianEmail: {
    type: String,
    required: false,
  },

  guardianAddress: {
    type: String,
    required: false,
  },
  ifGuardianIsCurrentAddress: {
    type: Boolean,
    required: false,
  },
  currentAddress: {
    type: String,
    required: false,
  },
  ifPermanentIsCurrentAddress: {
    type: Boolean,
    required: false,
  },
  permanentCurrent: {
    type: String,
    required: false,
  },
  bankAccountNumber: {
    type: String,
    required: false,
  },
  bankName: {
    type: String,
    required: false,
  },
  IFSCCode: {
    type: String,
    required: false,
  },
  nationalIdentificationNumber: {
    type: String,
    required: false,
  },
  localIdentificationNumber: {
    type: String,
    required: false,
  },
  rte: {
    type: String,
    required: false,
  },
  previousSchoolDetails: {
    type: String,
    required: false,
  },
  note: {
    type: String,
    required: false,
  },
  title_1: {
    type: String,
    required: false,
  },

  title_2: {
    type: String,
    required: false,
  },

  title_3: {
    type: String,
    required: false,
  },

  title_4: {
    type: String,
    required: false,
  },
  formStatus: {
    type: String,
    required: false,
  },
  paymentStatus: {
    type: String,
    required: false,
  },
  attachDocument: {
    type: Array,
    required: false,
  },
});

const StudentAdmissionModel = mongoose.model(
  "StudentAdmission",
  StudentAdmissionSchema
);

export default StudentAdmissionModel;
