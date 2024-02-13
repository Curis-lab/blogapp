import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between pb-4 border-b mb-4">
      <div className="">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold tracking-tighter">Tech News</h1>
        </Link>
        <p>
          Exploring tomorrow's Invotions,
          <br /> One Byte at a Time.
        </p>
      </div>
      <div>
        <Link className="btn" href={"/sign-in"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
