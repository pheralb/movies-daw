import jwt from "jsonwebtoken";
import "regenerator-runtime/runtime";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
    console.log(`📨 [backend] [auth] verifyToken:`);
    const token = req.headers["access-token"]
    if(!token){
        console.log("❌ [backend] [auth] verifyToken: No token");
        res.status(403).json("No se encuentra el token en la cabecera")
    }
    else{
        try{
            const decoded = jwt.verify(token, config.SECRET)
            const userFind = await User.findById(decoded.id)
            if(!userFind){
                console.log("❌ [backend] [auth] verifyToken: Invalid Token");
                res.status(403).json("Token no válido");
            }
            else{
                console.log("✅ [backend] [auth] verifyToken:");
                req.userId = decoded.id
                next()
            }
        }
        catch(err){
            console.log("❌ [backend] [auth] verifyToken: ", err);
            res.status(500).json(err)
        }
    }
}

export const isAdmin = async (req, res, next) => {
    console.log(`📨 [backend] [auth] isAdmin:`);
    try{
        const userFind = await User.findById(req.userId).populate("roles")
        const roleAdmin = userFind.roles.filter(role => {
                    return role.name == "admin"
                })
                if(!roleAdmin.length > 0){
                    console.log("❌ [backend] [auth] isAdmin: Invalid User");
                    res.status(403).json("Token no válido");
                }
                else{
                    console.log("✅ [backend] [auth] idAdmin:");
                    next()
                }
    }
    catch(err){
        console.log("❌ [backend] [auth] isAdmin: ", err);
        res.status(500).json(err)
    }
}

export const isDeveloper = async (req, res, next) => {
    console.log(`📨 [backend] [auth] isDeveloper:`);
    try{
        const userFind = await User.findById(req.userId).populate("roles")
        const roleAdmin = userFind.roles.filter(role => {
                    return (role.name == "developer") || (role.name == "admin")
                })
                if(!roleAdmin.length > 0){
                    console.log("❌ [backend] [auth] isDeveloper: Invalid User");
                    res.status(403).json("Token no válido");
                }
                else{
                    console.log("✅ [backend] [auth] isDeveloper:");
                    next()
                }
    }
    catch(err){
        console.log("❌ [backend] [auth] isDeveloper: ", err);
        res.status(500).json(err)
    }
}