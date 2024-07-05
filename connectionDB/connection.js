import mongoose from "mongoose";
const connectionDB = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/LibrarySystem")
    .then(() => {
      console.log("MongoDB Connected Successfully");
    })
    .catch((err) => {
      console.log("MongoDB Connection Failed", err);
    });
};

export default connectionDB;
