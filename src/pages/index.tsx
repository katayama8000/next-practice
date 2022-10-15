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

const LINKS = [
  { title: "Promise", path: "/sample1" },
  { title: "swr", path: "/sample2" },
  { title: "hooks", path: "/sample3" },
  { title: "chat", path: "/sample4" },
  { title: "recoil", path: "/sample5" },
  { title: "useref-1", path: "/sample6" },
  { title: "useref-2", path: "/sample7" },
  { title: "cleanUp", path: "/sample8" },
  { title: "useReducer", path: "/sample9" },
  { title: "useReducer fetch", path: "/sample10" },
] as const;

const Home: NextPage = () => {
  return (
    <div>
      <div>
        {LINKS.map((link) => {
          return (
            <LinkList key={link.title} title={link.title} path={link.path} />
          );
        })}
      </div>
      <h1>Hello Next.js 👋</h1>
      <Sample child="Hello Child" />
    </div>
  );
};

export default Home;
