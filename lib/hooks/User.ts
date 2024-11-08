"use server";
import connectDB from "../db/Config";

interface UserRegister {
  fullname: string;
  email: string;
  password: string;
}

export const userRegister = async (data: UserRegister) => {
  try {
    await connectDB();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
