import { Router } from "express";
import {
  UpdateBookList,
  createBookList,
  deleteBookList,
  getAllBookList,
} from "../controllers/library/BookListControllers.js";
import {
  UpdateIssueReturn,
  createIssueReturn,
  deleteIssueReturn,
  getAllIssueReturn,
} from "../controllers/library/IssueReturnControllers.js";
import {
  UpdateLibraryMember,
  createLibraryMember,
  deleteLibraryMember,
  getAllLibraryMember,
} from "../controllers/library/LibraryMemberControllers.js";
const router = Router();

/* book-list */
router.post("/book-list", createBookList);
router.delete("/book-list/:id", deleteBookList);
router.patch("/book-list/:id", UpdateBookList);
router.get("/book-list", getAllBookList);
/* End */
/* issue-return */
router.post("/issue-return", createIssueReturn);
router.delete("/issue-return/:id", deleteIssueReturn);
router.patch("/issue-return/:id", UpdateIssueReturn);
router.get("/issue-return", getAllIssueReturn);
/* End */
/* library-member */
router.post("/library-member", createLibraryMember);
router.delete("/library-member/:id", deleteLibraryMember);
router.patch("/library-member/:id", UpdateLibraryMember);
router.get("/library-member", getAllLibraryMember);
/* End */
export default router;
