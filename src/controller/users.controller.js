export class UsersController{
    static getUsers = async(req,res)=>{
        res.json({status:"sucess", message:"get users"});
    };

    static getUserById = async(req,res)=>{
        const userId = req.params.uid;
        res.json({status:"sucess", message:"get user by id"});
    };

    static saveUser = async(req,res)=>{
        const newUser = req.body;
        res.json({status:"sucess", message:"save user"});
    };
};