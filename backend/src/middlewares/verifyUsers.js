import "regenerator-runtime/runtime";
import Roles from "../models/Roles";
import User from "../models/User";

export const userNotExists = async (req, res, next) => {
    const {username, email} = req.body;
    console.log(`📨 [backend] [verifyUsers] userNotExists:`, username, email);
    try{
        let nameFound = await User.findOne({ username: username })
        if(!nameFound){
            let emailFound = await User.findOne({ email: email })
            if(emailFound){
                console.log("❌ [backend] [verifyUsers] userNotExists: User already exists");
                res.status(400).json(`Ya existe el usuario con email ${email}`);
            }
            else{
                console.log("✅ [backend] [verifyUsers] userNotExists:");
                next()
            }
        }
        else{
            console.log("❌ [backend] [verifyUsers] userNotExists: User already exists");
            res.status(400).json(`Ya existe el usuario ${username}`);
        }
    }
    catch(err){
        console.log("❌ [backend] [verifyUsers] userNotExists:", err);
        res.status(500).json(err);
    }
}

export const rolesExists = async (req, res, next) => {
    const {roles} = req.body
    console.log(`📨 [backend] [verifyUsers] rolesExists:`, roles);
    try{
        roles.forEach(roleName => {
            if(!Roles.findOne({name: roleName})){
                console.log("❌ [backend] [verifyUsers] rolesExists:");
                return res.status(404).json(`El rol ${roleName} no existe`)
            }
        });
        next()
    }
    catch(err){
        console.log("❌ [backend] [verifyUsers] userNotExists:", err);
        res.status(500).json(err);
    }
}