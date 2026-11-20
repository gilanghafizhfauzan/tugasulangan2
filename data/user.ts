export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

export const userData: User[] = [
  {
    id: 1,
    name: "Admin",
    username: "admin",
    password: "admin123",
  },
  {
    id: 2,
    name: "Gilang",
    username: "gilang",
    password: "12345",
  },
];