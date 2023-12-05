import express from "express"
import { OrderControllers } from "./order.controller";
const router = express.Router();

router.post("/order-room",OrderControllers.orderRoom);
router.get("/room-orders",OrderControllers.getAllRoomOrders);
router.get("/room/:email",OrderControllers.getRoomOrdersByEmail);
router.delete("/delete-room-order/:id",OrderControllers.deleteRoomOrder);
export const OrderRoutes = router;