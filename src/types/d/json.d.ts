// jsonplaceholderの型定義

interface jsonplaceholderType {
  id: number;
  body: string;
  title: string;
  userId: number;
}

declare module 'jsonplaceholder' {
  export const jsonplaceholder: jsonplaceholderType[];
}
