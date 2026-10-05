const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  productId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  },
  transactionType:{
    type:String,
    enum:["Purchase","Restock"]
  },
  quantity:Number,
  createdAt:{
    type:Date,
    default:Date.now 
  }
});

module.exports = mongoose.model("Transaction", transactionSchema);