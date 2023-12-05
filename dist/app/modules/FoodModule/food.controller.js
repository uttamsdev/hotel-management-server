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
exports.FoodControllers = void 0;
const food_service_1 = require("./food.service");
const addFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foodData = req.body;
        const result = yield food_service_1.FoodServices.addFoodToDB(foodData);
        res.status(400).json({
            success: true,
            message: "Food Successfully Created",
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
const getAllFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield food_service_1.FoodServices.getAllFoodFromDB();
        res.status(400).json({
            success: true,
            message: "Food Successfully Fetched",
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
const getSingleFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        const result = yield food_service_1.FoodServices.getSingleFoodFromDB(Number(foodId));
        res.status(400).json({
            success: true,
            message: "Food Successfully Fetched",
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
const deleteFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodId } = req.params;
        const result = yield food_service_1.FoodServices.deleteFoodFromDB(Number(foodId));
        res.status(400).json({
            success: true,
            message: "Food Successfully deleted",
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
const updateFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const result = yield food_service_1.FoodServices.updateFoodFromDB(Number(id), updateData);
        res.status(400).json({
            success: true,
            message: "Successfully updated",
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
exports.FoodControllers = {
    addFood,
    getAllFood,
    getSingleFood,
    deleteFood,
    updateFood
};
