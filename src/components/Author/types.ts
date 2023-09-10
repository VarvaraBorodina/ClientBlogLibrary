export interface Author {
  id: number;
  name: string;
  lastName: string;
  description: string;
  photo: string;
  networks: {
    linkedIn: string;
    facebook: string;
    instagram: string;
    twitter: string;
  };
}
