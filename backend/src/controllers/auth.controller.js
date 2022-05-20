import User from "../models/User"
import "regenerator-runtime/runtime";
import Roles from "../models/Roles";
import jwt from "jsonwebtoken";
import config from "../config";

export const signIn = async (req, res) => {
    const {email, password, username} = req.body
    console.log(`📨 [backend] [auth] signIn: ${email}, ${password}, ${username}`);
    try{
        let userFound;
        if(username){
            userFound = await User.findOne({username: username});
        }
        else{
            userFound = await User.findOne({email: email});
        }
        
        if(!userFound){
            console.log("❌ [backend] [auth] signUp: ", userFound);
            res.status(403).json("Invalid user/password")
        }
        else{
            const matchPasswords = await User.comparePasswords(password, userFound.password);
            if(!matchPasswords){
                console.log("❌ [backend] [auth] signUp: Invalid password");
                res.status(403).json("Invalid user/password")
            }
            else{
                const token = jwt.sign({id: userFound._id}, config.SECRET, {
                    expiresIn: 86400 //24 horas
                })
                console.log("✅ [backend] [auth] signIn:");
                res.status(200).json(token)
            }
        }
    }
    catch(err){
        console.log("❌ [backend] [auth] signUp: ", err);
        res.status(500).json(err)
    }
    
}

export const signUp = async (req, res) => {
    const {username, email, password, roles} = req.body
    console.log(`📨 [backend] [auth] signUp: ${username}, ${email}, ${password}`, roles);
    try{
        const userFound = await User.findOne({ email: email })
        if(userFound != null){
            console.log("❌ [backend] [auth] signUp: User already exists: ", userFound);
            res.status(400).json("User already exists")
        }
        else{
            const newUser = new User({
                username,
                email,
                password: await User.encryptPassword(password)
            })
            if(roles){
                const foundRoles = await Roles.find({name: {$in: roles}})
                newUser.roles = foundRoles.map(role => role._id)
            }
            else{
                const role = await Roles.findOne({name: "user"})
                newUser.roles = [role._id]
            }
            const userSaved = await newUser.save()
            console.log("✅ [backend] [auth] signUp:", userSaved);
            const token = jwt.sign({id: userSaved._id}, config.SECRET, {
                expiresIn: 86400 //24 horas
            })
            res.status(200).json(token)
        }
    }
    catch(err){
        console.log("❌ [backend] [auth] signUp:", err);
        res.status(500).json(err);
    }
}