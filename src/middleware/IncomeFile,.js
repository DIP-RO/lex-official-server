// imports
import fs from "fs";
import multer from "multer";

// income file storage
const IncomeFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/income", (err) => {
      cb(null, "./uploads/files/income");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// income file upload handler
const uploadIncomeFiles = multer({
  storage: IncomeFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadIncomeFiles };
