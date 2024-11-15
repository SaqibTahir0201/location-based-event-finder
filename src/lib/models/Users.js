import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: string,
  email: string,
  password: string,
  location: {
    lat: Number,
    long: Number,
  },
  profileImg: string,
  address: string,
  bio: string,
});

export const userModal = mongoose.model("Users", userSchema)