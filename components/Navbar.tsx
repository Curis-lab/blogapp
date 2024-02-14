"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const {status} = useSession();

  return (
    <div className="flex justify-between pb-4 border-b mb-4">
      <div className="">
        <Link href={"/"}>
          <h1 className="text-dark text-4xl font-bold tracking-tighter">
            Tech News
          </h1>
        </Link>
        <p className="text-sm">
          Exploring tomorrow's Invotions,
          <br /> One Byte at a Time.
        </p>
      </div>
      {status === 'authenticated'? <div>Authen</div>:<div>UnAunti</div>}
      <div className="flex items-center">
        <Link className="btn" href={"/sign-in"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
