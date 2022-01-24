import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
        laboriosam! Iure, quas. Error temporibus quam tempore, atque iure enim
        officiis minima obcaecati aut excepturi corporis molestiae dignissimos
        ducimus natus nisi?
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
        laboriosam! Iure, quas. Error temporibus quam tempore, atque iure enim
        officiis minima obcaecati aut excepturi corporis molestiae dignissimos
        ducimus natus nisi?
      </p>

      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja listing</a>
      </Link>
    </div>
  );
}
