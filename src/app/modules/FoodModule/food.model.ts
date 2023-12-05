import mongoose from "mongoose";
import { TProductFood } from "./food.interface";

const foodSchema = new mongoose.Schema<TProductFood>({
    foodId: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});
export const Food = mongoose.model<TProductFood>('food', foodSchema);