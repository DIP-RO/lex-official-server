// imports
import fs from "fs";
import multer from "multer";

// expenses file storage
const ExpensesFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/expenses", (err) => {
      cb(null, "./uploads/files/expenses");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// expenses file upload handler
const uploadExpensesFiles = multer({
  storage: ExpensesFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export { uploadExpensesFiles };
