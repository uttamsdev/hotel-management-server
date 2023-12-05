import { Request, Response } from "express";
import { FoodOrderServices } from "./foodOrderService";

const orderFood = async(req : Request, res : Response)=> {
    try {
    const orderFoodData = req.body;
    const result = await FoodOrderServices.orderFoodToDB(orderFoodData);
    res.status(400).json({
        success: true,
        message: "Food Successfully Ordered",
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

const getAllFoodOrders = async(req : Request, res : Response)=> {
    try {
    const result = await FoodOrderServices.getAllOrdersFoodFromDB();
    res.status(400).json({
        success: true,
        message: "Fetched all food order data",
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
const getFoodOrdersByEmail = async(req : Request, res : Response)=> {
    try {
    const {email} = req.params;
    const result = await FoodOrderServices.getOrderFoodByEmailFromDB(email);
    res.status(400).json({
        success: true,
        message: "Fetched users food orders",
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

const deleteFoodOrder = async(req : Request, res : Response)=> {
    try {
    const {orderId} = req.params;
    console.log("orderID: ",orderId)
    // console.log(req.params)
    const result = await FoodOrderServices.deleteOrderFoodFromDB(orderId);
    res.status(400).json({
        success: true,
        message: "Food order successfully deleted",
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

export const FoodOrderControllers = {
    orderFood,
    getAllFoodOrders,
    getFoodOrdersByEmail,
    deleteFoodOrder
}