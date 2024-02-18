"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const {status} = useSession();
  const router = useRouter();
    
  return (
    <div className="flex justify-between pb-4 border-b mb-4">
      <div className="">
        <Link href={"/"}>
          <h1 className="text-dark text-4xl font-bold tracking-tighter">
            Tech News
          </h1>
        </Link>
        <p className="text-sm">
          Exploring tomorrow&apos;s Invotions&#39;
          <br /> One Byte at a Time.
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex gap-2 m-2 cursor-pointer" onClick={()=>router.push("/create-post")}>
          <span>
            <Image src='./add.svg' alt="add" width={25} height={25}/>
          </span>
          create Page
        </div>
        <Link className="btn" href={"/sign-in"}>
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
