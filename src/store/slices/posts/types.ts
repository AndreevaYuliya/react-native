export type PostInfo = {
  id: number;
  title: string;
  description: string;
  image: string;
  author: {
    id?: number;
    name: string;
    avatar: string;
  };
};
