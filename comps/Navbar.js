import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Ninja List</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
