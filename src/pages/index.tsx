import type { NextPage } from "next";
import { Sample } from "@component/Sample";
import Link from "next/link";

type Props = {
  title: string;
  path: string;
};

export const LinkList: React.FC<Props> = ({ title, path }) => {
  return (
    <>
      <Link href={path}>{title}</Link>
      <span className="mx-2">|</span>
    </>
  );
};

const Home: NextPage = () => {
  return (
    <div className="p-20">
      <LinkList title="Promise" path="/sample1" />
      <LinkList title="swr" path="/sample2" />
      <LinkList title="useMemo" path="/sample3" />
      <h1>Hello Next.js 👋</h1>
      <Sample child="Hello Child" />
    </div>
  );
};

export default Home;
