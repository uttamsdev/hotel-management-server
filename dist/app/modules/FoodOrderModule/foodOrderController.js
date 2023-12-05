"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderControllers = void 0;
const foodOrderService_1 = require("./foodOrderService");
const orderFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderFoodData = req.body;
        const result = yield foodOrderService_1.FoodOrderServices.orderFoodToDB(orderFoodData);
        res.status(400).json({
            success: true,
            message: "Food Successfully Ordered",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        });
    }
});
const getAllFoodOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield foodOrderService_1.FoodOrderServices.getAllOrdersFoodFromDB();
        res.status(400).json({
            success: true,
            message: "Fetched all food order data",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        });
    }
});
const getFoodOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const result = yield foodOrderService_1.FoodOrderServices.getOrderFoodByEmailFromDB(email);
        res.status(400).json({
            success: true,
            message: "Fetched users food orders",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        });
    }
});
const deleteFoodOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        console.log("orderID: ", orderId);
        // console.log(req.params)
        const result = yield foodOrderService_1.FoodOrderServices.deleteOrderFoodFromDB(orderId);
        res.status(400).json({
            success: true,
            message: "Food order successfully deleted",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        });
    }
});
exports.FoodOrderControllers = {
    orderFood,
    getAllFoodOrders,
    getFoodOrdersByEmail,
    deleteFoodOrder
};
