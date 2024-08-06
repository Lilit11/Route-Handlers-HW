"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IUser } from "./types";

export const UserList = () => {
const [users, setUsers] = useState<IUser[]>([]);
useEffect(() => {
  axios.get("/users").then((res) => {
    setUsers(res.data);
  });
}, []);
return<>
{users.map((elm) => (
    <div key={elm.id}  style={{ display: "flex", gap: "1rem",  marginBottom: "0.5rem" }} >
      <p>{elm.name}  </p>
      <p>{elm.surname}   </p>
      <strong>{elm.age} years </strong>
      <Link href={"/users/" + elm.id + "/edit"}> edit </Link>
      <Link href={"/users/" + elm.id + "/delete"}> delete</Link>
    </div>
  ))}
</>
}