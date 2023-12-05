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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodOrderServices = void 0;
const randomOrderNumber_1 = require("../../../utlis/randomOrderNumber");
const sendMail_1 = __importDefault(require("../../sendMail"));
const foodOrder_model_1 = require("./foodOrder.model");
const orderFoodToDB = (orderFoodData) => __awaiter(void 0, void 0, void 0, function* () {
    orderFoodData.orderId = (0, randomOrderNumber_1.generateRandomOrderNumber)();
    const result = yield foodOrder_model_1.OrderFood.create(orderFoodData);
    if (result) {
        // Nodemailer setup
        const info = yield sendMail_1.default.sendMail({
            from: '"Uttam Kumar Saha" <mail@uttamsaha.com>',
            to: `${result === null || result === void 0 ? void 0 : result.email}`,
            subject: 'Food Order Confirmed',
            text: "Your food order is successful. Thank for ordering. @Team Hotel Redisons"
        });
        console.log('Message sent: %s', info.messageId);
    }
    return result;
});
const getAllOrdersFoodFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield foodOrder_model_1.OrderFood.find();
    return result;
});
const getOrderFoodByEmailFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield foodOrder_model_1.OrderFood.find({ email: email });
    return result;
});
const deleteOrderFoodFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield foodOrder_model_1.OrderFood.deleteOne({ orderId: id });
    return result;
});
exports.FoodOrderServices = {
    orderFoodToDB,
    getAllOrdersFoodFromDB,
    getOrderFoodByEmailFromDB,
    deleteOrderFoodFromDB
};
