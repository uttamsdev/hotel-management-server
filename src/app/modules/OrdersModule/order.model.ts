import mongoose from "mongoose";
import { TOrderRoom } from "./order.interface";


const orderRoomSchema = new mongoose.Schema<TOrderRoom>({
    roomId: {
        type: Number,
        required: true,
    },
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
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
export const OrderRoom = mongoose.model<TOrderRoom>('order', orderRoomSchema);