import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { UserList } from "./lib/user-list";

export default function Home() {
  return (
    <main className={styles.main}>
     <h1> welcome to Home Page</h1>
     <UserList/>
    </main>
  );
}

  