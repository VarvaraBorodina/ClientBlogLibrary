export type CreationDate = {
  day: number;
  month: number;
  year: number;
};

export interface Post {
  id: number;
  category: number;
  author: number;
  creationDate: CreationDate;
  title: string;
  description: string;
  content: string;
  image: string;
  tags: number[];
}
