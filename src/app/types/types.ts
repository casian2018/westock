interface Stock {
  item: string;
  link: string;
  quantity: number;
  _id: string;
  price: number;
}

interface People {
  _id: string;
  name: string;
  email: string;
  location: string;
  function: string;
}

interface Objects {
  _id: string;
  name: string;
  location: string;
  quantity: number;
  status: string;
  price: number;
}

interface User {
  _id: string;
  authType: string;
  fullName: string;
  email: string;
  username: string;
  password: string;
  stock: Stock[];
  people: People[];
  objects: Objects[];
}

export type { Stock, People, Objects, User };
