import { deleteUser } from "@/app/lib/api"

export const PUT = async (req:Request, {params:{key}}:{params:{key:number}})=>{
    
}


export const DELETE = async (req:Request, {params:{key}}:{params:{key:number}})=>{
    deleteUser(key)
    return Response.json({status:"ok"})
}