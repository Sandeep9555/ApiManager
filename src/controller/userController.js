const userModel=require("../models/user")
const bcrypt=require("bcrypt");
const SECRET_KEY=process.env.SECRET_KEY;
const jwt=require("jsonwebtoken");
const signup =async(req,res)=>{

    //Existing user check
    //Hashed Password
    //User Creation
    //Token Generation
const salt=10;

    const {username,email,password }=req.body;
    try{
        const existingUser=await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({
                message:"user already exists"
            });
        }
        const hashedPassword=await bcrypt.hash(password,salt);

        const result= await userModel.create({
            email:email,
            password:hashedPassword,
            username:username
        });
        const token =jwt.sign({email:result.email,id:result._id},SECRET_KEY);
        res.status(200).json({user:result,token:token});
        
    }
    catch(error){
    console.log(error);
    res.status(500).json({message:"Something Went Wrong"})
    }


}

const signin= async (req,res)=>{
 const {email,password}=req.body;
 try{
    const existingUser=await userModel.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({
                message:"User not Found"
            });
        }
    const matchpassword=await bcrypt.compare(password,existingUser.password) 
    if(!matchpassword){
        return  res.status(400).json({
            message:"Incorrect Password",
        })
    }
    const token =jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY);
    res.status(200).json({user:existingUser,token:token});
    

 }catch(error){
    console.log(error);
    res.status(500).json({message:"Something Went Wrong"});
 }



}

module.exports={ signup,signin}