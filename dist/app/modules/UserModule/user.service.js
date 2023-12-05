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
exports.UserServices = void 0;
const user_model_1 = require("./user.model");
const storeUserToDB = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    if (yield user_model_1.Users.isUserExists(userData.email)) {
        console.log("User exist for: ", userData.email);
        return;
    }
    else {
        const result = yield user_model_1.Users.create(userData);
        return result;
    }
});
const getSingleUserFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.Users.findOne({ email: email });
    return result;
});
const getAllUserFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    //This query will return unique users , if a user has more than one duplicated value it will show one value
    const result = yield user_model_1.Users.aggregate([
        {
            $group: {
                _id: '$email',
                user: { $first: '$$ROOT' },
            },
        },
        {
            $replaceRoot: { newRoot: '$user' },
        },
    ]);
    return result;
});
const checkAdminFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = user_model_1.Users.findOne({ email: email }, { role: true });
    // console.log(user)
    // const isAdmin = user === 'admin';
    return user;
});
exports.UserServices = {
    storeUserToDB,
    getSingleUserFromDB,
    getAllUserFromDB,
    checkAdminFromDB
};
