import express, { Application, Request, Response } from "express"
import cors from 'cors'
import { ProductRoutes } from "./app/modules/ProductModule/product.route";
import { OrderRoutes } from "./app/modules/OrdersModule/order.route";
import { UsersRouter } from "./app/modules/UserModule/user.route";
import { FoodRoutes } from "./app/modules/FoodModule/food.route";
import { FoodOrderRoutes } from "./app/modules/FoodOrderModule/foodOrder.route";
const app : Application = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1/products", ProductRoutes)
app.use("/api/v1/orders", OrderRoutes)
app.use("/api/v1/users", UsersRouter)
app.use("/api/v1/foods", FoodRoutes)
app.use("/api/v1/order-food",FoodOrderRoutes)
app.get("/", (req : Request, res : Response)=> {
    res.send("Hotel Redisons Server is running..")
})

export default app;