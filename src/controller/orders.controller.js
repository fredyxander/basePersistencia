export class OrdersController{
    static getAllOrders = async(req,res)=>{
        res.json({status:"sucess", message:"get all orders"});
    };

    static getOrderById = async(req,res)=>{
        const orderId = req.params.oid;
        res.json({status:"sucess", message:"get order by id"});
    };

    static createOrder = async(req,res)=>{
        const newOrder = req.body;
        res.json({status:"sucess", message:"creating order"});
    };

    static resolveOrder = async(req,res)=>{
        const orderId = req.params.oid;
        res.json({status:"sucess", message:"complete/cancel order"});
    };
};