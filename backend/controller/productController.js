const Product = require("../models/Product");
const Transaction = require("../models/Transaction");

const createProduct = async(req, res) => {
    try{
        const{productName,price,availableStock}=req.body;
          const product = await Product.create({
      productName,
      price,
      availableStock
    });
    res.status(201).json(product);
    }catch(err){
        res.status(500).json({message:"server error"});
    }
};

const getProducts=async (req,res) => {
  try{
    const products=await Product.find();
    res.json(products);
  } catch(error){
    res.status(500).json({message:error.message});
  }
};

const productPurchase=async(req,res)=>{
  try{
    const {productName,quantity}=req.body;
    const product=await Product.findOne({productName});

    if(!product){
      return res.status(404).json({msg:"product not found"});
    }

    if(quantity<=0){
      return res.status(400).json({msg:"quantity must be greatter than 0"});
    }

    if(quantity>product.availableStock){
      return res.status(400).json({msg:"we dont have enough stock"});
    }

    product.availableStock=product.availableStock-quantity;

    const transaction=await Transaction.create({
      productId:product._id,
      transactionType:"Purchase",
      quantity
    });

    await product.save();

    res.status(201).json(transaction);
  }catch(error){
    res.status(500).json({msg:"server error"});
  }
}

const restockProduct=async(req,res)=>{
  try{
    const {productName,quantity}=req.body;
    const product=await Product.findOne({productName});
    if(!product){
      res.status(404).json({msg:"product not found"});
      return;
    }
    if(quantity<=0){
      res.status(400).json({msg:"quantity must be greater than 0"});
      return;
    }
    product.availableStock=product.availableStock+quantity;
    const transaction=await Transaction.create({
      productId:product._id,
      transactionType:"Restock",
      quantity
    });
    await product.save();
    res.status(201).json(transaction);
  } catch(error){
    res.status(500).json({msg:"server error"
    })
  }
};

const getTransactions=async(req,res)=>{
  const {productId}=req.params;
  try{
    const transactions=await Transaction.find({productId});
    res.json(transactions);
  } catch(error){
    res.status(500).json({msg:"server error"});
  }
};

module.exports = {createProduct,getProducts,productPurchase,restockProduct,getTransactions};