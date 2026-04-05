import { Router } from "express";
import { createMenu, getMenuItems, updateMenuItem, deleteMenuItem } from "../controllers/menu.controllers.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router();
    router.post("/create", createMenu);
    router.get("/all", getMenuItems);
    router.patch("/update/:id",  updateMenuItem);
    router.delete("/delete/:id",  deleteMenuItem);
export default router;