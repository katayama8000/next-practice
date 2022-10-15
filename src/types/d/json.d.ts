// jsonplaceholderの型定義

interface jsonplaceholderType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare module "jsonplaceholder" {
  export = jsonplaceholderType;
}
