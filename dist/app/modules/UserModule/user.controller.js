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
exports.UsersControllers = void 0;
const user_service_1 = require("./user.service");
const StoreUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield user_service_1.UserServices.storeUserToDB(userData);
        res.status(400).json({
            success: true,
            message: "User Successfully Created",
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
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const result = yield user_service_1.UserServices.getSingleUserFromDB(email);
        res.status(400).json({
            success: true,
            message: "User fetch Successfully",
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
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllUserFromDB();
        res.status(400).json({
            success: true,
            message: "User fetch Successfully",
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
const checkAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const result = yield user_service_1.UserServices.checkAdminFromDB(email);
        const isAdmin = (result === null || result === void 0 ? void 0 : result.role) === 'admin';
        res.send({ admin: isAdmin });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong.',
            data: null
        });
    }
});
exports.UsersControllers = {
    StoreUser,
    getSingleUser,
    getAllUsers,
    checkAdmin
};
