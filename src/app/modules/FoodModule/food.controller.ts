import { Request, Response } from "express";
import { FoodServices } from "./food.service";

const addFood = async(req : Request, res : Response)=> {
    try {
    const foodData = req.body;
    const result = await FoodServices.addFoodToDB(foodData);
    res.status(400).json({
        success: true,
        message: "Food Successfully Created",
        data: result
    })
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        })
    }
}

const getAllFood = async(req : Request, res : Response)=> {
    try {
    const result = await FoodServices.getAllFoodFromDB();
    res.status(400).json({
        success: true,
        message: "Food Successfully Fetched",
        data: result
    })
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        })
    }
}

const getSingleFood = async(req : Request, res : Response)=> {
    try {
    const {foodId} = req.params;
    const result = await FoodServices.getSingleFoodFromDB(Number(foodId));
    res.status(400).json({
        success: true,
        message: "Food Successfully Fetched",
        data: result
    })
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        })
    }
}

const deleteFood = async(req : Request, res : Response)=> {
    try {
    const {foodId} = req.params;
    const result = await FoodServices.deleteFoodFromDB(Number(foodId));
    res.status(400).json({
        success: true,
        message: "Food Successfully deleted",
        data: result
    })
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        })
    }
}

const updateFood = async(req : Request, res : Response)=> {
    try {
    const {id} = req.params;
    const updateData = req.body;
    const result = await FoodServices.updateFoodFromDB(Number(id),updateData);
    res.status(400).json({
        success: true,
        message: "Successfully updated",
        data: result
    })
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        })
    }
}
export const FoodControllers = {
    addFood,
    getAllFood,
    getSingleFood,
    deleteFood,
    updateFood
}