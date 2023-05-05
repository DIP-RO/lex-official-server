// imports
import fs from "fs";
import multer from "multer";

// online_course file storage
const OnlineCourseFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/online_course", (err) => {
      cb(null, "./uploads/files/online_course");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// online_course file upload handler
const uploadOnlineCourseFiles = multer({
  storage: OnlineCourseFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadOnlineCourseFiles };
