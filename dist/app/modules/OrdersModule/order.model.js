"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoom = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderRoomSchema = new mongoose_1.default.Schema({
    roomId: {
        type: Number,
        required: true,
    },
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
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
exports.OrderRoom = mongoose_1.default.model('order', orderRoomSchema);
