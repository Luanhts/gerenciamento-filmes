import express from "express";
import diretorController from "../controllers/diretorController";

const router = express.Router();

router.post("/", diretorController.create)
router.get("/", diretorController.index)
router.get("/", diretorController.show)
router.put("/", diretorController.update)
router.delete("/", diretorController.destroy)

module.exports = router