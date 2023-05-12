// imports
import fs from "fs";
import multer from "multer";

// alumni-event file storage
const AlumniEventFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/alumni-event", (err) => {
      cb(null, "./uploads/files/alumni-event");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// alumni-event file upload handler
const uploadAlumniEventFiles = multer({
  storage: AlumniEventFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadAlumniEventFiles };
