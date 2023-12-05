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
exports.ProductServices = void 0;
const order_model_1 = require("../OrdersModule/order.model");
const product_model_1 = require("./product.model");
const addRoomToDB = (roomData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Room.create(roomData);
    return result;
});
const searchAvailableRoomFromDB = (startDate, endDate) => __awaiter(void 0, void 0, void 0, function* () {
    const bookedRoomIds = yield order_model_1.OrderRoom.distinct('roomId', {
        $or: [
            { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
            { startDate: { $gte: startDate, $lte: endDate } },
        ],
    });
    //   console.log(startDate, endDate);
    console.log("bookingID", bookedRoomIds);
    const availableRooms = yield product_model_1.Room.find({ roomId: { $nin: bookedRoomIds } });
    // console.log(availableRooms)
    return availableRooms;
});
const searchAvailableSingleRoomFromDB = (startDate, endDate, roomId) => __awaiter(void 0, void 0, void 0, function* () {
    const bookedRoomIds = yield order_model_1.OrderRoom.distinct('roomId', {
        $or: [
            { startDate: { $lte: endDate }, endDate: { $gte: startDate } },
            { startDate: { $gte: startDate, $lte: endDate } },
        ],
        $and: [
            {
                roomId: roomId
            }
        ]
    });
    //   console.log(startDate, endDate);
    return bookedRoomIds;
});
const getAllRoomFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Room.find();
    return result;
});
const getSingleRoomFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Room.find({ roomId: id });
    return result;
});
const deleteRoomFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Room.deleteOne({ roomId: id });
    return result;
});
const updateRoomFromDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Room.updateOne({ roomId: id }, updatedData);
    return result;
});
exports.ProductServices = {
    addRoomToDB,
    getAllRoomFromDB,
    getSingleRoomFromDB,
    deleteRoomFromDB,
    searchAvailableRoomFromDB,
    updateRoomFromDB,
    searchAvailableSingleRoomFromDB
};
