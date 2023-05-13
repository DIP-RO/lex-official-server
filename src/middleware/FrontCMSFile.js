// imports
import fs from "fs";
import multer from "multer";

// media-manager file storage
const MedianManagerFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/media-manager", (err) => {
      cb(null, "./uploads/files/media-manager");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// media-manager file upload handler
const uploadMedianManagerFiles = multer({
  storage: MedianManagerFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadMedianManagerFiles };
