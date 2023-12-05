import mongoose from "mongoose";
import { TFoodOrder } from "./foodOrder.interface";

const orderFoodSchema = new mongoose.Schema<TFoodOrder>({
   foodId: {
      type: Number,
      required: true,
   },
   orderId: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   img: {
      type: String,
      required: true
   }
});
export const OrderFood = mongoose.model<TFoodOrder>('food-order', orderFoodSchema);