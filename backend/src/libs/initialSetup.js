import "regenerator-runtime/runtime";
import Roles from '../models/Roles';

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