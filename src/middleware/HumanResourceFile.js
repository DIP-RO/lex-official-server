// imports
import fs from "fs";
import multer from "multer";

// staff file storage
const StaffFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/staff", (err) => {
      cb(null, "./uploads/files/staff");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// staff file upload handler
const uploadStaffFiles = multer({
  storage: StaffFileStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// approve-leave-request file storage
const createApproveLeaveRequestStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/approve-leave-request", (err) => {
      cb(null, "./uploads/files/approve-leave-request");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// approve-leave-request file upload handler
const uploadCreateApproveLeaveRequests = multer({
  storage: createApproveLeaveRequestStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});
// apply-leave file storage
const createApplyLeaveStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdir("./uploads/files/apply-leave", (err) => {
      cb(null, "./uploads/files/apply-leave");
    });
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

// apply-leave file upload handler
const uploadCreateApplyLeave = multer({
  storage: createApplyLeaveStorage,
  limits: {
    fileSize: 1024 * 1024 * 50,
  },
});

export {
  uploadStaffFiles,
  uploadCreateApproveLeaveRequests,
  uploadCreateApplyLeave,
};
