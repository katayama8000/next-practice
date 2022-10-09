import type { NextPage } from "next";
import { Sample } from "@component/Sample";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <Link href="./sample1">Promise</Link> | <Link href="./sample2">swr</Link>
      <h1>Hello Next.js 👋</h1>
      <Sample child="Hello Child" />
    </div>
  );
};

export default Home;
