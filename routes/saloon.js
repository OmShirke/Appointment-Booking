import express from "express";
import {
  createSaloon,
  deleteSaloon,
  getSaloon,
  getSaloons,
  updateSaloon,
} from "../controller/saloon.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//create
router.post("/", verifyAdmin, createSaloon);

//update
router.put("/:id", verifyAdmin, updateSaloon);

//delete
router.delete("/:id", verifyAdmin, deleteSaloon);

//Get
router.get("/:id", verifyUser, getSaloon);

//get all
router.get("/", verifyUser, getSaloons);

export default router;
