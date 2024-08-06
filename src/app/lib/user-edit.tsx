"use client";

import React, { useState } from "react";
import { IUser } from "./types";
import { getUserById } from "./api";
import axios from "axios";
import { useRouter } from "next/router";

interface Props {
  params: { key: number };
}
export const UserEdit = ({ params }: Props) => {
  const router = useRouter();
  const foundUser = getUserById(params.key);
  const [user, setUser] = useState<IUser>({ ...foundUser });
  const [error, setError] = useState("");

  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!user.name.trim() || !user.surname.trim() || !user.age) {
      setError("Please fill all the fields");
    } else {
      setError("");
      axios.put("/users", user).then((res) => {
        console.log(res.data);
        router.push("/");
      });
    }
  };
  return (
    <div className="column is-two-fifths my-4">
      <form className="box" onSubmit={handleEdit}>
        <div className="field my-4">
          <input
            placeholder="Enter Name"
            defaultValue={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="input is-primary"
          />
        </div>
        <div className="field my-4">
          <input
            placeholder="Enter Surname"
            defaultValue={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            className="input is-primary"
          />
        </div>
        <div className="field my-4">
          <input
            placeholder="Enter Age"
            defaultValue={user.age}
            onChange={(e) => setUser({ ...user, age: +e.target.value })}
            className="input is-primary"
          />
        </div>

        <div className="field my-4">
          <button className="button is-danger">edit user info</button>
        </div>
      </form>
    </div>
  );
};
