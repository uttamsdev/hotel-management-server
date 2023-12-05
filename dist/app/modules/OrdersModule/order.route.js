"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.post("/order-room", order_controller_1.OrderControllers.orderRoom);
router.get("/room-orders", order_controller_1.OrderControllers.getAllRoomOrders);
router.get("/room/:email", order_controller_1.OrderControllers.getRoomOrdersByEmail);
router.delete("/delete-room-order/:id", order_controller_1.OrderControllers.deleteRoomOrder);
exports.OrderRoutes = router;
