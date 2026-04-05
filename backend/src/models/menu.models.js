import mongoose, { Schema } from "mongoose";

const menuItemSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true,
            min: 0
        },

        category: {
            type: String,
            required: true
        }
    }
);

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);