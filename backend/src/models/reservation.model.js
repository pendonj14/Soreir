import mongoose, { Schema } from "mongoose";

const reservationSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        reservationDate: {
            type: Date,
            required: true,
        },

        reservationTime: {
            type: String,
            required: true,
        },

        numberOfGuests: {
            type: Number,
            required: true,
        },

        orderedItem:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

export const Reservation = mongoose.model("Reservation", reservationSchema);