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
exports.OrderServices = void 0;
const randomOrderNumber_1 = require("../../../utlis/randomOrderNumber");
const sendMail_1 = __importDefault(require("../../sendMail"));
const order_model_1 = require("./order.model");
const orderRoomToDB = (orderRoomData) => __awaiter(void 0, void 0, void 0, function* () {
    orderRoomData.orderId = (0, randomOrderNumber_1.generateRandomOrderNumber)();
    const result = yield order_model_1.OrderRoom.create(orderRoomData);
    // console.log(result.email)
    // Nodemailer setup
    yield sendMail_1.default.sendMail({
        from: '"Uttam Kumar Saha" <mail@uttamsaha.com>',
        to: `${result === null || result === void 0 ? void 0 : result.email}`,
        subject: 'Booking Room Confirmed',
        text: "Your room booking is successful. Thank for ordering. @Team Hotel Redisons"
    });
    // console.log('Message sent: %s', info.messageId);
    // console.log("result m mail:",result.email)
    // console.log("emaiL: ",result.email)
    return result;
});
const getAllOrdersRoomFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderRoom.find();
    return result;
});
const getOrderRoomByEmailFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderRoom.find({ email: email });
    return result;
});
const deleteOrderRoomFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.OrderRoom.deleteOne({ orderId: id });
    return result;
});
exports.OrderServices = {
    orderRoomToDB,
    getAllOrdersRoomFromDB,
    getOrderRoomByEmailFromDB,
    deleteOrderRoomFromDB
};
