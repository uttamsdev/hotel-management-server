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
exports.OrderControllers = void 0;
const order_service_1 = require("./order.service");
const orderRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderRoomData = req.body;
        const result = yield order_service_1.OrderServices.orderRoomToDB(orderRoomData);
        res.status(400).json({
            success: true,
            message: "Room Successfully Ordered",
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
const getAllRoomOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getAllOrdersRoomFromDB();
        res.status(400).json({
            success: true,
            message: "Fetched all room order data",
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
const getRoomOrdersByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const result = yield order_service_1.OrderServices.getOrderRoomByEmailFromDB(email);
        res.status(400).json({
            success: true,
            message: "Fetched users room orders",
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
const deleteRoomOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield order_service_1.OrderServices.deleteOrderRoomFromDB(id);
        res.status(400).json({
            success: true,
            message: "Room order successfully deleted",
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
exports.OrderControllers = {
    orderRoom,
    getAllRoomOrders,
    getRoomOrdersByEmail,
    deleteRoomOrder
};
