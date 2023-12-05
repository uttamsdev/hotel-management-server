import mongoose from "mongoose";
import { TProductRoom } from "./product.interfce";

const roomSchema = new mongoose.Schema<TProductRoom>({
    roomId: {
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


export const Room = mongoose.model<TProductRoom>('room', roomSchema);