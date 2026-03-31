import { Router } from "express";
import { createReservation, getReservations, updateReservation, deleteReservation } from "../controllers/reservation.controllers.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router();
    router.post("/create", protect, createReservation);
    router.get("/all", protect, getReservations);
    router.patch("/update/:id", protect, updateReservation);
    router.delete("/delete/:id", protect, deleteReservation);
export default router;