import { Router } from "express";
import { createMenu, getMenuItems, updateMenuItem, deleteMenuItem } from "../controllers/menu.controllers.js";
import { protect } from "../middleware/auth.middleware.js";
import { upload } from "../config/cloudinary.js";

const router = Router();
    router.post("/create", upload.single("image"), createMenu);
    router.get("/all", getMenuItems);
    router.patch("/update/:id", upload.single("image"), updateMenuItem);
    router.delete("/delete/:id", deleteMenuItem);
export default router;