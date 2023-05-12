// imports
import fs from "fs";
import multer from "multer";

// notice-board file storage
const NoticeBoardFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/notice-board", (err) => {
      cb(null, "./uploads/files/notice-board");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// notice-board file upload handler
const uploadNoticeBoardFiles = multer({
  storage: NoticeBoardFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// send-mail file storage
const SendMailFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/send-mail", (err) => {
      cb(null, "./uploads/files/send-mail");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// send-mail file upload handler
const uploadSendMailFiles = multer({
  storage: SendMailFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// email-template file storage
const EmailTemplateFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/email-template", (err) => {
      cb(null, "./uploads/files/email-template");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// email-template file upload handler
const uploadEmailTemplateFiles = multer({
  storage: EmailTemplateFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export {
  uploadNoticeBoardFiles,
  uploadSendMailFiles,
  uploadEmailTemplateFiles,
};
