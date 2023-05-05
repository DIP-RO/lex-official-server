// imports
import fs from "fs";
import multer from "multer";

// Visitor Book file storage
const visitorFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/visitor_book", (err) => {
      cb(null, "./uploads/files/visitor_book");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// Visitor Book file upload handler
const uploadVisitorFiles = multer({
  storage: visitorFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// postal_dispatch file storage
const PostalDispatchFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/postal_dispatch", (err) => {
      cb(null, "./uploads/files/postal_dispatch");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// postal_dispatch file upload handler
const uploadPostalDispatchFiles = multer({
  storage: PostalDispatchFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// postal_receive file storage
const PostalReceiveFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/postal_receive", (err) => {
      cb(null, "./uploads/files/postal_receive");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// postal_receive file upload handler
const uploadPostalReceiveFiles = multer({
  storage: PostalReceiveFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// Complain file storage
const ComplainFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/complain_box", (err) => {
      cb(null, "./uploads/files/complain_box");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// complain file upload handler
const uploadComplainFiles = multer({
  storage: ComplainFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export {
  uploadVisitorFiles,
  uploadPostalDispatchFiles,
  uploadComplainFiles,
  uploadPostalReceiveFiles,
};
