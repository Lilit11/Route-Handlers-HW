export interface IUser{
    id: number
    name: string
    surname: string
    age: number
}

export type addedUser = Omit<IUser, 'id'>