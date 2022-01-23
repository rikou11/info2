import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
        laboriosam! Iure, quas. Error temporibus quam tempore, atque iure enim
        officiis minima obcaecati aut excepturi corporis molestiae dignissimos
        ducimus natus nisi?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
        laboriosam! Iure, quas. Error temporibus quam tempore, atque iure enim
        officiis minima obcaecati aut excepturi corporis molestiae dignissimos
        ducimus natus nisi?
      </p>
      <Footer />
    </div>
  );
}
