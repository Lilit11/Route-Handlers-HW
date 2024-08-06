"use server"

export const handleAdd = (prev:unknown, data:FormData)=>{

    const name = data.get('name') as string
    const surname = data.get('surname') as string
    const age = +( data.get('age') as string)
    const position = data.get('position') as string

    if(!name.trim()|| !surname.trim()|| !position.trim() ||!age){
        return {
            message:"Please fill all fields"
        }
    } else if(isNaN(age)){
        return {
            message:"Age must be a number"
        }
    }
    
}