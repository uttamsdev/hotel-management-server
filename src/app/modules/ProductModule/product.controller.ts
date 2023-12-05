import { Request, Response } from "express";
import { ProductServices } from "./porduct.service";

const addRoom = async(req : Request, res : Response)=> {
    try {
    const roomData = req.body;
    const result = await ProductServices.addRoomToDB(roomData);
    res.status(400).json({
        success: true,
        message: "Room Successfully Created",
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

const searchAvailableRooms = async(req : Request, res : Response) => {
   
    const {startDate, endDate} = req.query;
    // const {startDate, endDate} = req.body;
    console.log(req.body);
    

    const result = await ProductServices.searchAvailableRoomFromDB(startDate as string, endDate as string);
    // console.log("result: ",result)
    res.status(400).json({
        success: true,
        message: "Available Rooms Fetched successfully",
        data: result
    })
}

const searchSingleAvailableRooms = async(req : Request, res : Response) => {
   
    const {startDate, endDate, roomId} = req.query;
    // const {startDate, endDate} = req.body;
    console.log(req.body);
    

    const result = await ProductServices.searchAvailableSingleRoomFromDB(startDate as string, endDate as string, roomId as string);
    // console.log("result: ",result)
    res.status(400).json({
        success: true,
        message: "Room data",
        data: result
    })
}

const getAllRooms = async(req : Request, res : Response)=> {
    try {
    const result = await ProductServices.getAllRoomFromDB();
    res.status(400).json({
        success: true,
        message: "Room Fetched Successfully",
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
const getSingleRoom = async(req : Request, res : Response)=> {
    try {
    const {id} = req.params;
    const result = await ProductServices.getSingleRoomFromDB(Number(id));
    res.status(400).json({
        success: true,
        message: "Room Fetched Successfully",
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

const deleteRoom = async(req : Request, res : Response)=> {
    try {
    const {id} = req.params;
    const result = await ProductServices.deleteRoomFromDB(Number(id));
    res.status(400).json({
        success: true,
        message: "Room Successfully Deleted",
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

const updateRoom = async(req : Request, res : Response)=> {
    try {
    const {id} = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateRoomFromDB(Number(id),updateData);
    res.status(400).json({
        success: true,
        message: "Successfully updated Deleted",
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


export const ProductControllers = {
    addRoom,
    getAllRooms,
    getSingleRoom,
    deleteRoom,
    searchAvailableRooms,
    updateRoom,
    searchSingleAvailableRooms
}