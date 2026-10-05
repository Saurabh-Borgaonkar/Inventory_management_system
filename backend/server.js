const express=require("express");
const app=express();
const dotenv=require("dotenv");
const connectDB=require("./config/db"   );
const productRoutes=require("./routes/productRoutes");

dotenv.config();
connectDB();

app.use(express.json());
app.use("/products",productRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
});
