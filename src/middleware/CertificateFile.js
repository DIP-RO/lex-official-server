// imports
import fs from "fs";
import multer from "multer";

// student-certificates file storage
const StudentCertificatesFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/student-certificates", (err) => {
      cb(null, "./uploads/files/student-certificates");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// student-certificates file upload handler
const uploadStudentCertificatesFiles = multer({
  storage: StudentCertificatesFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// student-id-card file storage
const StudentIdCardFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/student-id-card", (err) => {
      cb(null, "./uploads/files/student-id-card");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// student-id-card file upload handler
const uploadStudentIdCardFiles = multer({
  storage: StudentIdCardFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// staff-id-card file storage
const StaffIdCardFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/staff-id-card", (err) => {
      cb(null, "./uploads/files/staff-id-card");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// staff-id-card file upload handler
const uploadStaffIdCardFiles = multer({
  storage: StaffIdCardFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export {
  uploadStaffIdCardFiles,
  uploadStudentIdCardFiles,
  uploadStudentCertificatesFiles,
};
