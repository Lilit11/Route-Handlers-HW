"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  params: { key: number };
}
export default function Page({ params }: Props) {
  // const router = useRouter()
  const handleDelete = () => {
    axios.delete("/users/" + params.key).then((res) => {
      console.log(res.data);
      // router.push("/") inchia vor senc grum em errora talis
    });
  };
  return (
    <>
      <h1>Are you shure to delete this user? </h1>
      <button onClick={handleDelete} style={{ backgroundColor: "purple" }}>
        Yes, Delete
      </button>
      <br />
      <Link href={"/"}>No, go back!</Link>
    </>
  );
}
