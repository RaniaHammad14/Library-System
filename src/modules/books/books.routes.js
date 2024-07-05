import { Router } from "express";
import * as BC from "./books.controller.js";
const router = Router();

router.get("/", BC.getBooks);
router.post("/", BC.createBook);
router.get("/singleBook", BC.getSingleBook);
router.patch("/", BC.updateBook);
router.delete("/", BC.DeleteBook);

export default router;
