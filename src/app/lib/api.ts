import { IUser, addedUser } from "./types";
const Database = require('better-sqlite3')
const db = new Database('users.db')

export const addUser =(user:addedUser)=>{
    return db
    .prepare(`
        INSERT INTO users(name, surname, age)
        VALUES(@name, @surname, @age)
    `).run(user)
}

export const getAllUsers =():IUser[]=>{
    return db.prepare(`SELECT * FROM users`).all() as IUser []

}

export const deleteUser = (id:number)=>{
   return db.prepare(`DELETE FROM users WHERE id = ?`).run(id);
}
export const getUserById =(id:number)=>{
    return db
            .prepare(`SELECT name, surname, age FROM users WHERE id =?`)
            .get(id) as IUser
        }
