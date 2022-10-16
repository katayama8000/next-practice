import type { NextPage } from "next";
import { Sample } from "@component/Sample";
import Link from "next/link";

type Props = {
  title: titleType;
  url: urlType;
};

export const LinkList: React.FC<Props> = ({ title, url }) => {
  return (
    <>
      <Link href={url}>{title}</Link>
      <span className="mx-2">|</span>
    </>
  );
};

type urlType = typeof LINKS[number]["url"];
type titleType = typeof LINKS[number]["title"];

const LINKS = [
  { title: "Promise", url: "/sample1" },
  { title: "swr", url: "/sample2" },
  { title: "hooks", url: "/sample3" },
  { title: "chat", url: "/sample4" },
  { title: "recoil", url: "/sample5" },
  { title: "useref-1", url: "/sample6" },
  { title: "useref-2", url: "/sample7" },
  { title: "cleanUp", url: "/sample8" },
  { title: "useReducer", url: "/sample9" },
  { title: "useReducer fetch", url: "/sample10" },
  { title: "useMemo", url: "/sample11" },
  { title: "ssr", url: "/sample12" },
  { title: "ssg", url: "/sample13" },
  { title: "key", url: "/sample14" },
  { title: "immutable", url: "/sample15" },
] as const;

const Home: NextPage = () => {
  return (
    <div>
      <div>
        {LINKS.map((link) => {
          return (
            <LinkList key={link.title} title={link.title} url={link.url} />
          );
        })}
      </div>
      <h1>Hello Next.js 👋</h1>
      <Sample child="Hello Child" />
      <article>
        <ol>
          <li>Hooks</li>
          <li>State Management</li>
          <li>Next.js</li>
          <li>CSR/SSR/SSG/ISR</li>
        </ol>
      </article>
    </div>
  );
};

export default Home;
