import express, { Router } from "express";
import produtoraController from "../controllers/produtoraController";
import cep_endereco from "../middleware/";

const router = express.Router()

router.post("/", cep_endereco, produtoraController.create)
router.get("/", produtoraController.index)
router.get("/:id", produtoraController.show)
router.put("/:id", produtoraController.update)
router.delete("/:id", produtoraController.destroy)

module.exports = router
