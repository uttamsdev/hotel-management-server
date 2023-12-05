"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.post("/store-user", user_controller_1.UsersControllers.StoreUser);
router.get("/get-users", user_controller_1.UsersControllers.getAllUsers);
router.get("/:email", user_controller_1.UsersControllers.getSingleUser);
router.get("/admin/:email", user_controller_1.UsersControllers.checkAdmin);
exports.UsersRouter = router;
