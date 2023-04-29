import { Router } from "express";
import { UpdateClass, createClass, deleteClass, getAllClass } from "../controllers/academic/classControllers.js";
import { UpdateClassTeacher, createClassTeacher, deleteClassTeacher, getAllClassTeacher } from "../controllers/academic/classTeacherControllers.js";
import { UpdateClassTimeTable, createClassTimeTable, deleteClassTimeTable, getAllClassTimeTable } from "../controllers/academic/classTimeTableControllers.js";
import { UpdatePromoteStudent, createPromoteStudent, deletePromoteStudent, getAllPromoteStudent } from "../controllers/academic/promeStudentsControllers.js";
import { UpdateSection, createSection, deleteSection, getAllSection } from "../controllers/academic/sectionsControllers.js";
import { UpdateSubjectGroup, createSubjectGroup, deleteSubjectGroup, getAllSubjectGroup } from "../controllers/academic/subjectGroupControllers.js";
import { UpdateSubject, createSubject, deleteSubject, getAllSubject } from "../controllers/academic/subjectsControllers.js";


const router = Router();

/* class */
router.post("/class", createClass);
router.delete("/class/:id", deleteClass);
router.patch("/class/:id", UpdateClass);
router.get("/class", getAllClass);
/* End */
/* class-teacher */
router.post("/class-teacher", createClassTeacher);
router.delete("/class-teacher/:id", deleteClassTeacher);
router.patch("/class-teacher/:id", UpdateClassTeacher);
router.get("/class-teacher", getAllClassTeacher);
/* End */
/* class-time-table */
router.post("/class-time-table", createClassTimeTable);
router.delete("/class-time-table/:id", deleteClassTimeTable);
router.patch("/class-time-table/:id", UpdateClassTimeTable);
router.get("/class-time-table", getAllClassTimeTable);
/* End */
/* class-promote-student */
router.post("/class-promote-student", createPromoteStudent);
router.delete("/class-promote-student/:id", deletePromoteStudent);
router.patch("/class-promote-student/:id", UpdatePromoteStudent);
router.get("/class-promote-student", getAllPromoteStudent);
/* End */
/* section */
router.post("/section", createSection);
router.delete("/section/:id", deleteSection);
router.patch("/section/:id", UpdateSection);
router.get("/section", getAllSection);
/* End */
/* subject-group */
router.post("/subject-group", createSubjectGroup);
router.delete("/subject-group/:id", deleteSubjectGroup);
router.patch("/subject-group/:id", UpdateSubjectGroup);
router.get("/subject-group", getAllSubjectGroup);
/* End */
/* subject */
router.post("/subject", createSubject);
router.delete("/subject/:id", deleteSubject);
router.patch("/subject/:id", UpdateSubject);
router.get("/subject", getAllSubject);
/* End */
export default router;