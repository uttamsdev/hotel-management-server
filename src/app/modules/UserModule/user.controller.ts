import { Request, Response } from "express";
import { UserServices } from "./user.service";

const StoreUser = async(req : Request, res : Response)=> {
    try {
    const userData = req.body;
    const result = await UserServices.storeUserToDB(userData);
    res.status(400).json({
        success: true,
        message: "User Successfully Created",
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

const getSingleUser = async(req : Request, res : Response)=> {
    try {
    const {email} = req.params;
    const result = await UserServices.getSingleUserFromDB(email);
    res.status(400).json({
        success: true,
        message: "User fetch Successfully",
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

const getAllUsers = async(req : Request, res : Response)=> {
    try {
    const result = await UserServices.getAllUserFromDB();
    res.status(400).json({
        success: true,
        message: "User fetch Successfully",
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
const checkAdmin = async(req : Request, res : Response)=> {
    try {
    const {email} = req.params;
    const result = await UserServices.checkAdminFromDB(email);
    const isAdmin = result?.role === 'admin';
    res.send({ admin: isAdmin });
    } catch (error : any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        })
    }
}
export const UsersControllers = {
    StoreUser,
    getSingleUser,
    getAllUsers,
    checkAdmin
}