import express from 'express';
import { FoodControllers } from './food.controller';
const router = express.Router();

router.post("/add-food", FoodControllers.addFood);
router.get("/all-foods", FoodControllers.getAllFood);
router.get("/:foodId", FoodControllers.getSingleFood);
router.delete("/:foodId", FoodControllers.deleteFood);
router.put('/:id', FoodControllers.updateFood);

export const FoodRoutes = router;