import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 bg-[linear-gradient(135deg,#020617_0%,#1e1b4b_25%,#1f2937_50%,#0f766e_75%,#020617_100%)] p-5 rounded-2xl">
      <Link
        href="https://govt-l-p-school-vengody.vercel.app/"
        className="block"
      >
        <button
          className="px-7 py-3 rounded-xl font-semibold text-white
  bg-linear-to-r from-zinc-950 via-slate-700 to-zinc-950
  border border-zinc-800 cursor-pointer"
        >
          VISIT SCHOOL WEBSITE
        </button>
      </Link>
      <Link
        href="https://github.com/gokulnaathb3021/Govt.-L-P-School-Vengody"
        className="block"
      >
        <button
          className="px-7 py-3 rounded-xl font-semibold text-white
  bg-linear-to-r from-zinc-950 via-slate-700 to-zinc-950
  border border-zinc-800 cursor-pointer"
        >
          VISIT GITHUB OF SCHOOL WEBSITE
        </button>
      </Link>
    </div>
  );
}
