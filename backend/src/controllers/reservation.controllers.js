import { Reservation } from "../models/reservation.model.js";

const createReservation = async (req, res) => {
    try {
        const {reservationDate, reservationTime, numberOfGuests, orderedItem} = req.body;
        
        //basic validation
        if (!reservationDate || !reservationTime || !numberOfGuests || !orderedItem) {
            return res.status(400).json({message: "All fields are required"});
        }

        //create new reservation
        const reservation  = await  Reservation.create({
            user: req.user.id, // associate reservation with the logged-in user
            reservationDate,
            reservationTime,
            numberOfGuests,
            orderedItem
        });
        const populated = await reservation.populate("user", "email username");
        res.status(201).json({message: "Reservation created successfully", reservation});

    } catch (error) {
        res.status(500).json({message: "Error creating reservation", error});
    }
}

const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate("user", "email username");
        res.status(200).json({message: "Reservations retrieved successfully", reservations});
    } catch (error) {
        res.status(500).json({message: "Error retrieving reservations", error});
    }
}


const updateReservation = async (req, res) => {
    try {
        const {id} = req.params;

        const updatedReservation = await Reservation.findByIdAndUpdate(id, req.body, {returnDocument: "after", runValidators: true});
        if (!updatedReservation) {
            return res.status(404).json({message: "Reservation not found"});
        }

        res.status(200).json({message: "Reservation updated successfully", reservation: updatedReservation});

    } catch (error) {
        res.status(500).json({message: "Error updating reservation", error});
    }
}

const deleteReservation = async (req, res) => {
    try {
        const {id} = req.params;

        const deletedReservation = await Reservation.findByIdAndDelete(id);
        if (!deletedReservation) {
            return res.status(404).json({message: "Reservation not found"});
        }

        res.status(200).json({message: "Reservation deleted successfully", reservation: deletedReservation});
    } catch (error) {
        res.status(500).json({message: "Error deleting reservation", error});
    }
}

export { createReservation, getReservations, updateReservation, deleteReservation };