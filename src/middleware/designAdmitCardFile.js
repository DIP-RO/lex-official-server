// imports
import fs from "fs";
import multer from "multer";

// design-admin-card file storage
const DesignAdmitCardFileFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/design-admin-card", (err) => {
      cb(null, "./uploads/files/design-admin-card");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// design-admin-card file upload handler
const uploadDesignAdmitCardFileFiles = multer({
  storage: DesignAdmitCardFileFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
}).fields([
  { name: "Photo", maxCount: 1 },
  { name: "Photo", maxCount: 1 },
]);

export { uploadDesignAdmitCardFileFiles };
