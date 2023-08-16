import type { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  title: titleType | youTubeTitleType | uiTitleType;
  url: urlType | youTubeUrlType | uiUrlType;
};

export const LinkList: React.FC<Props> = ({ title, url }) => {
  return (
    <>
      <Link href={url}>{title}</Link>
      <span className='mx-2'>|</span>
    </>
  );
};

type urlType = (typeof LINKS)[number]['url'];
type titleType = (typeof LINKS)[number]['title'];
type youTubeUrlType = (typeof YOUTUBE_LINKS)[number]['url'];
type youTubeTitleType = (typeof YOUTUBE_LINKS)[number]['title'];
type uiUrlType = (typeof UI_LINKS)[number]['url'];
type uiTitleType = (typeof UI_LINKS)[number]['title'];

const LINKS = [
  { title: 'Promise', url: 'Sample/sample1' },
  { title: 'swr', url: 'Sample/sample2' },
  { title: 'hooks', url: 'Sample/sample3' },
  { title: 'chat', url: 'javascript:void(0)' },
  { title: 'recoil', url: 'Sample/sample5' },
  { title: 'useref-1', url: 'Sample/sample6' },
  { title: 'useref-2', url: 'Sample/sample7' },
  { title: 'cleanUp', url: 'Sample/sample8' },
  { title: 'useReducer', url: 'Sample/sample9' },
  { title: 'useReducer fetch', url: 'Sample/sample10' },
  { title: 'useMemo', url: 'Sample/sample11' },
  { title: 'ssr', url: 'Sample/sample12' },
  { title: 'ssg', url: 'Sample/sample13' },
  { title: 'key', url: 'Sample/sample14' },
  { title: 'immutable', url: 'Sample/sample15' },
  { title: 'enum', url: 'Sample/sample16' },
  { title: 'h1~h6', url: 'Sample/sample17' },
  { title: 'react-query', url: 'Sample/sample18' },
  { title: 'react-query-Hooks', url: 'Sample/sample19' },
  { title: 'useContext', url: 'Sample/sample20' },
  { title: 'form-alert', url: 'Sample/sample21' },
  { title: 'sugarForm', url: 'Sample/sample22' },
  { title: 'render-hooks', url: 'Sample/sample23' },
  { title: 'ComponentProps', url: 'Sample/sample24' },
  { title: 'addEventListner', url: 'Sample/sample25' },
  { title: 'useStateHook1', url: 'Sample/sample26' },
  { title: 'useStateHook2', url: 'Sample/sample27' },
  { title: 'useEffect-obj', url: 'Sample/sample28' },
  { title: 'useEffect-func', url: 'Sample/sample29' },
] as const;

const YOUTUBE_LINKS = [
  { title: 'Hooks1', url: 'YouTube/Hooks1' },
  { title: 'Hooks2', url: 'YouTube/Hooks2' },
  { title: 'Hooks3', url: 'YouTube/Hooks3' },
  { title: 'Hooks4', url: 'YouTube/Hooks4' },
  { title: 'Hooks5', url: 'YouTube/Hooks5' },
  { title: 'Hooks6', url: 'YouTube/Hooks6' },
] as const;

const UI_LINKS = [{ title: 'card', url: 'UI/index1' }] as const;

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <h1>Sample</h1>
        {LINKS.map((link) => {
          return <LinkList key={link.title} title={link.title} url={link.url} />;
        })}
      </div>
      <hr />
      <h1>Hooks</h1>
      {YOUTUBE_LINKS.map((link) => {
        return <LinkList key={link.title} title={link.title} url={link.url} />;
      })}
      <hr />
      <h1>UI</h1>
      {UI_LINKS.map((link) => {
        return <LinkList key={link.title} title={link.title} url={link.url} />;
      })}
      <h1>Hello Next.js 👋</h1>
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
