// imports
import fs from "fs";
import multer from "multer";

// student-admission file storage
const studentAdmissionFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/student-admission", (err) => {
      cb(null, "./uploads/files/student-admission");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// student-admission file upload handler
const uploadStudentAdmissionFiles = multer({
  storage: studentAdmissionFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadStudentAdmissionFiles };
