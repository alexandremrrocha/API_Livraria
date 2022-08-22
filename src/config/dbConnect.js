import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mongodb:mongodb@cluster0.w86iyyr.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;