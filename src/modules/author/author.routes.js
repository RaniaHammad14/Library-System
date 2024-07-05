import { Router } from "express";
import * as AC from "./author.controller.js";
const router = Router();

router.get("/", AC.getAuthor);
router.post("/", AC.createAuthor);
router.get("/singleAuthor", AC.getSingleAuthor);
router.patch("/", AC.updateAuthor);
router.delete("/", AC.DeleteAuthor);

export default router;
