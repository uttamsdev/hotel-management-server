import { Model } from "mongoose";

export type TUser = {
    name: string,
    email: string,
    role: string;
}
export interface UserModel extends Model<TUser>{
    isUserExists(email: string): Promise<TUser | null>
}