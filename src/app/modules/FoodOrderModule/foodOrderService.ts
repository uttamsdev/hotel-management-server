import { generateRandomOrderNumber } from "../../../utlis/randomOrderNumber";
import transporter from "../../sendMail";
import { TFoodOrder } from "./foodOrder.interface";
import { OrderFood } from "./foodOrder.model";

const orderFoodToDB = async(orderFoodData : TFoodOrder) => {
    orderFoodData.orderId = generateRandomOrderNumber();
    const result = await OrderFood.create(orderFoodData);
    if(result){
        // Nodemailer setup
        const info = await transporter.sendMail({
          from: '"Uttam Kumar Saha" <mail@uttamsaha.com>',
          to: `${result?.email}`,
          subject: 'Food Order Confirmed',
          text: "Your food order is successful. Thank for ordering. @Team Hotel Redisons"
        });
  
        console.log('Message sent: %s', info.messageId);
       
    }
    return result;
}

const getAllOrdersFoodFromDB = async() => {
    const result = await OrderFood.find();
    return result;
}

const getOrderFoodByEmailFromDB = async(email: string) => {
    const result = await OrderFood.find({email: email});
    return result;
}

const deleteOrderFoodFromDB = async(id: string) => {
    const result = await OrderFood.deleteOne({orderId: id});
    return result;
}

export const FoodOrderServices = {
    orderFoodToDB,
    getAllOrdersFoodFromDB,
    getOrderFoodByEmailFromDB,
    deleteOrderFoodFromDB
}