import { TUser } from "./user.interface";
import { Users } from "./user.model";

const storeUserToDB = async(userData: TUser) => {
    if (await Users.isUserExists(userData.email)) {
        console.log("User exist for: ",userData.email)
        return;
      } else {
        const result = await Users.create(userData)
        return result;
      }
   
}
const getSingleUserFromDB = async(email:string) => {
    const result = await Users.findOne({email: email})
    return result;
}
const getAllUserFromDB = async() => {
  //This query will return unique users , if a user has more than one duplicated value it will show one value
  const result = await Users.aggregate([
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
}

const checkAdminFromDB = async(email: string) => {
  const user =  Users.findOne({email: email},{role: true});
  // console.log(user)
  // const isAdmin = user === 'admin';
  return user;
}

export const UserServices = {
    storeUserToDB,
    getSingleUserFromDB,
    getAllUserFromDB,
    checkAdminFromDB
}