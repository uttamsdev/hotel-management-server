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
exports.ProductControllers = void 0;
const porduct_service_1 = require("./porduct.service");
const addRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roomData = req.body;
        const result = yield porduct_service_1.ProductServices.addRoomToDB(roomData);
        res.status(400).json({
            success: true,
            message: "Room Successfully Created",
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
const searchAvailableRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate } = req.query;
    // const {startDate, endDate} = req.body;
    console.log(req.body);
    const result = yield porduct_service_1.ProductServices.searchAvailableRoomFromDB(startDate, endDate);
    // console.log("result: ",result)
    res.status(400).json({
        success: true,
        message: "Available Rooms Fetched successfully",
        data: result
    });
});
const searchSingleAvailableRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate, roomId } = req.query;
    // const {startDate, endDate} = req.body;
    console.log(req.body);
    const result = yield porduct_service_1.ProductServices.searchAvailableSingleRoomFromDB(startDate, endDate, roomId);
    // console.log("result: ",result)
    res.status(400).json({
        success: true,
        message: "Room data",
        data: result
    });
});
const getAllRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield porduct_service_1.ProductServices.getAllRoomFromDB();
        res.status(400).json({
            success: true,
            message: "Room Fetched Successfully",
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
const getSingleRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield porduct_service_1.ProductServices.getSingleRoomFromDB(Number(id));
        res.status(400).json({
            success: true,
            message: "Room Fetched Successfully",
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
const deleteRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield porduct_service_1.ProductServices.deleteRoomFromDB(Number(id));
        res.status(400).json({
            success: true,
            message: "Room Successfully Deleted",
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
const updateRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = yield porduct_service_1.ProductServices.updateRoomFromDB(Number(id), updateData);
        res.status(400).json({
            success: true,
            message: "Successfully updated Deleted",
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
exports.ProductControllers = {
    addRoom,
    getAllRooms,
    getSingleRoom,
    deleteRoom,
    searchAvailableRooms,
    updateRoom,
    searchSingleAvailableRooms
};
