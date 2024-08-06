import { UserEdit } from "@/app/lib/user-edit";

interface Props {
    params: {key:number}
}
export default function Page({params}:Props){

    return<>
    <UserEdit params={params}/>
    </>
}