// imports
import fs from "fs";
import multer from "multer";

// admit-cart-design file storage
const AdmitCartDesignFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/admit-cart-design", (err) => {
      cb(null, "./uploads/files/admit-cart-design");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// admit-cart-design file upload handler
const uploadAdmitCartDesignFiles = multer({
  storage: AdmitCartDesignFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
}).fields([
  { name: "LeftLogo", maxCount: 1 },
  { name: "RightLogo", maxCount: 1 },
  { name: "Sign", maxCount: 1 },
  { name: "BackgroundImage", maxCount: 1 },
]);

export { uploadAdmitCartDesignFiles };
