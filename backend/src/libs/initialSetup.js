import "regenerator-runtime/runtime";
import Roles from '../models/Roles';
import User from "../models/User";

export const createRoles = async () => {
    try{
        const countRoles = await Roles.estimatedDocumentCount()
        if(countRoles > 0) return;

        console.log("📋 [backend] [DB] Initial Setup: ")

        const result = await Promise.all([
            new Roles({name: "admin"}).save(),
            new Roles({name: "developer"}).save(),
            new Roles({name: "user"}).save()
        ]);
        console.log("✅ [backend] [DB] Initial Setup: ", result)
    }
    catch(err){
        console.log("❌ [backend] [DB] Initial Setup: ", err)
    }
    
}

export const createSuperAdmin = async () => {
    try{
        const countUsers = await User.estimatedDocumentCount()
        if(countUsers > 0) return;
        const roleAdmin = await Roles.findOne({"name": "admin"})
        console.log("📋 [backend] [DB] Initial Setup: ")

        const result = await Promise.all([
            new User({
                username: "admin",
                email: "admin@playmoviez.es",
                password: "admin",
                roles: [roleAdmin._id]
            }).save(),
        ]);
        console.log("✅ [backend] [DB] Initial Setup: ", result)
    }
    catch(err){
        console.log("❌ [backend] [DB] Initial Setup: ", err)
    }
}