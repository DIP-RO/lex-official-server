// imports
import fs from "fs";
import multer from "multer";

// home-work file storage
const HomeWorkFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/home-work", (err) => {
      cb(null, "./uploads/files/home-work");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// home-work file upload handler
const uploadHomeWorkFiles = multer({
  storage: HomeWorkFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadHomeWorkFiles };
