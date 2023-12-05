"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const foodOrderController_1 = require("./foodOrderController");
const router = express_1.default.Router();
router.post("/create-order", foodOrderController_1.FoodOrderControllers.orderFood);
router.get("/all-foods-orders", foodOrderController_1.FoodOrderControllers.getAllFoodOrders);
router.get("/:email", foodOrderController_1.FoodOrderControllers.getFoodOrdersByEmail);
router.delete("/:orderId", foodOrderController_1.FoodOrderControllers.deleteFoodOrder);
exports.FoodOrderRoutes = router;
