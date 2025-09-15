"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import style from "./style.module.css";
const Navbar = () => {
  const { status } = useSession();
  const router = useRouter();
  const button_container =
    "flex items-center bg-slate-500 py-2 px-4 rounded-full gap-2 text-white";
  return (
    <div className="flex justify-between border-b ">
      <Link href={"/"}>
        <h1 className="text-dark text-4xl font-bold tracking-tighter">
          Tech News
        </h1>
      </Link>
      <Link className={button_container} href="/sign-in">
        <p>Sign In</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Navbar;
