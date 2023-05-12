// imports
import fs from "fs";
import multer from "multer";

// student_admission file storage
const studentAdmissionFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/student_admission", (err) => {
      cb(null, "./uploads/files/student_admission");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// student_admission file upload handler
const uploadStudentAdmissionFiles = multer({
  storage: studentAdmissionFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadStudentAdmissionFiles };
