const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const Order = require("../models/orders")


router.use(bodyParser());
router.get("/orders",async(req,res)=>{
    const orders = await Order.find()
    return res.json({
        status:res.body.status,
        orders
    })
})
router.post("/orders", async (req, res) => {
    try{
    const order = await Order.create({ 
        order_details : req.body.order_details,
        totalcost:req.body.totalcost
    })
    return res.status(200).json({
        status: "Order is created", 
        data : order
    })
    }   catch(e) {
        return res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
    })
module.exports=router;