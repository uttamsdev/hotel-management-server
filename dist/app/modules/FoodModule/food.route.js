"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRoutes = void 0;
const express_1 = __importDefault(require("express"));
const food_controller_1 = require("./food.controller");
const router = express_1.default.Router();
router.post("/add-food", food_controller_1.FoodControllers.addFood);
router.get("/all-foods", food_controller_1.FoodControllers.getAllFood);
router.get("/:foodId", food_controller_1.FoodControllers.getSingleFood);
router.delete("/:foodId", food_controller_1.FoodControllers.deleteFood);
router.put('/:id', food_controller_1.FoodControllers.updateFood);
exports.FoodRoutes = router;
