"use client";
import React, {useState } from "react";
import { addedUser } from "../../lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter()
  const [user, setUser] = useState<addedUser>({
    name: "",
    surname: "",
    age: 0,
  });
const[error, setError] = useState("")

const handleAdd =(event:React.FormEvent)=>{
        event.preventDefault();
        if (!user.name.trim() || !user.surname.trim() ||!user.age) {
          setError("Please fill all the fields");
        } else {
          setError("");
          axios.post("/users", user).then((res) => {
            console.log(res.data);
            router.push("/")
          });
        }
      };


  return (
    <div className="column is-two-fifths my-4">
      <form className="box" onSubmit={handleAdd}>
      {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="field my-4">
          <input
            placeholder="Enter Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="input is-primary"
          />
        </div>
        <div className="field my-4">
          <input
            placeholder="Enter Surname"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            className="input is-primary"
          />
        </div>
        <div className="field my-4">
          <input
            placeholder="Enter Age"
            value={user.age}
            onChange={(e) => setUser({ ...user, age: +e.target.value })}
            className="input is-primary"
          />
        </div>

        <div className="field my-4">
          <button className="button is-danger">add user</button>
        </div>
      </form>
    </div>
  );
}
