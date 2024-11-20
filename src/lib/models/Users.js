import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: String, // Use `String` instead of `string`
  email: String, // Use `String` instead of `string`
  password: String, // Use `String` instead of `string`
  location: {
    lat: Number,
    long: Number,
  },
  profileImg: String, // Use `String` instead of `string`
  address: String, // Use `String` instead of `string`
  bio: String, // Use `String` instead of `string`
});

export const userModal =
  mongoose.models.Users || mongoose.model("Users", userSchema);
