"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post('/add-room', product_controller_1.ProductControllers.addRoom);
router.get('/rooms', product_controller_1.ProductControllers.getAllRooms);
router.get("/search-available-rooms", product_controller_1.ProductControllers.searchAvailableRooms);
router.get("/search-single-available-rooms", product_controller_1.ProductControllers.searchSingleAvailableRooms);
router.get('/rooms/:id', product_controller_1.ProductControllers.getSingleRoom);
router.delete('/rooms/:id', product_controller_1.ProductControllers.deleteRoom);
router.put('/rooms/:id', product_controller_1.ProductControllers.updateRoom);
exports.ProductRoutes = router;
