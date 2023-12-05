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
exports.FoodServices = void 0;
const food_model_1 = require("./food.model");
const addFoodToDB = (foodData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield food_model_1.Food.create(foodData);
    return result;
});
const getAllFoodFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield food_model_1.Food.find();
    return result;
});
const getSingleFoodFromDB = (foodId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield food_model_1.Food.findOne({ foodId: foodId });
    // console.log("foodId: ",id)
    return result;
});
const deleteFoodFromDB = (foodId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield food_model_1.Food.deleteOne({ foodId: foodId });
    return result;
});
const updateFoodFromDB = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield food_model_1.Food.updateOne({ foodId: id }, updatedData);
    return result;
});
exports.FoodServices = {
    addFoodToDB,
    getAllFoodFromDB,
    getSingleFoodFromDB,
    deleteFoodFromDB,
    updateFoodFromDB
};
