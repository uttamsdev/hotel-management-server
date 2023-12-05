"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/ProductModule/product.route");
const order_route_1 = require("./app/modules/OrdersModule/order.route");
const user_route_1 = require("./app/modules/UserModule/user.route");
const food_route_1 = require("./app/modules/FoodModule/food.route");
const foodOrder_route_1 = require("./app/modules/FoodOrderModule/foodOrder.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/products", product_route_1.ProductRoutes);
app.use("/api/v1/orders", order_route_1.OrderRoutes);
app.use("/api/v1/users", user_route_1.UsersRouter);
app.use("/api/v1/foods", food_route_1.FoodRoutes);
app.use("/api/v1/order-food", foodOrder_route_1.FoodOrderRoutes);
app.get("/", (req, res) => {
    res.send("Hotel Redisons Server is running..");
});
exports.default = app;
