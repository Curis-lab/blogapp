import Image from "next/image";

export default function SignInBtns() {
  return (
    <>
      <h1 className="text-center mt-8">Sign In</h1>
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <button className="flex items-center border p-4 rounded-lg gap-4 hover:bg-slate-100/25 transition">
          <span>
            <Image src={'/github.svg'} alt="GitHub" width={30} height={30}/>
          </span>
          Sign In with Github
        </button>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <button className="flex items-center border p-4 rounded-lg gap-4 hover:bg-slate-100/25 transition">
          <span>
            <Image src={'/google.svg'} alt="Google" width={30} height={30}/>
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
}
