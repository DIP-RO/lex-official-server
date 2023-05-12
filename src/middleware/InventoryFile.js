// imports
import fs from "fs";
import multer from "multer";

// add-item-stock file storage
const AddItemStockFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/add-item-stock", (err) => {
      cb(null, "./uploads/files/add-item-stock");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// add-item-stock file upload handler
const uploadAddItemStockFiles = multer({
  storage: AddItemStockFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadAddItemStockFiles };
