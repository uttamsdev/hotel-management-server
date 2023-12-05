import { TProductFood } from "./food.interface";
import { Food } from "./food.model";

const addFoodToDB = async(foodData : TProductFood) => {
    const result = await Food.create(foodData);
    return result;
}

const getAllFoodFromDB = async() => {
    const result = await Food.find();
    return result;
}

const getSingleFoodFromDB = async(foodId : number) => {
    const result = await Food.findOne({foodId: foodId});
    // console.log("foodId: ",id)
    return result;
}

const deleteFoodFromDB = async(foodId : number) => {
    const result = await Food.deleteOne({foodId: foodId});
    return result;
}
const updateFoodFromDB = async(id: Number, updatedData : any) => {
    const result = await Food.updateOne({foodId: id}, updatedData);
    return result;
}
export const FoodServices = {
    addFoodToDB,
    getAllFoodFromDB,
    getSingleFoodFromDB,
    deleteFoodFromDB,
    updateFoodFromDB
}