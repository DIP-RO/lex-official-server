import fs from "fs";
import multer from "multer";

// admit-card-design file storage
const DesignAdmitCardFileFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/admit-card-design", (err) => {
      cb(null, "./uploads/files/admit-card-design");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// admit-card-design file upload handler
const uploadDesignAdmitCardFiles = multer({
  storage: DesignAdmitCardFileFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// design-mark-sheet file storage
const DesignMarlSheetFileFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/design-mark-sheet", (err) => {
      cb(null, "./uploads/files/design-mark-sheet");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// design-mark-sheet file upload handler
const uploadDesignMarlSheetFiles = multer({
  storage: DesignMarlSheetFileFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadDesignAdmitCardFiles, uploadDesignMarlSheetFiles };
