// imports
import fs from "fs";
import multer from "multer";

// Complain file storage
const ComplainFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/complain_box", (err) => {
      cb(null, "./uploads/files/complain_box");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// complain file upload handler
const uploadComplainFiles = multer({
  storage: ComplainFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadComplainFiles };
