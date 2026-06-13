export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}
export type VoteType = "good" | "neutral" | "bad";

type Settings = {
  darkMode: boolean;
  fontSize: number;
  language: string;
};
const settings: Settings = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};
console.log(settings);

//Опис: Є функція, яка приймає суму (число) та тип валюти.
interface Func {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}
function convertCurrency({ amount, currency }: Func): void {
  console.log(`Converting ${amount} to ${currency}`);
}
convertCurrency({
  amount: 5,
  currency: "USD",
});
interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}
const user: User = { id: "1", name: "Charlie", age: 25, active: true };
console.log(user);

const dimensions: number[] = [1920, 1080];

console.log(dimensions);
interface Usr {
  name: string;
  age: number;
  isAdmin?: boolean;
}
function createUser({ name, age }: Usr): Usr {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
interface Uss {
  name: string;
  address?: {
    city: string;
  };
}

const user1: Uss = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user1.address?.city);
interface Usaa {
  name: string;
  age: number;
}
const users1: Usaa[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.log(users1);

enum Role {
  Admin,
  User,
  Guest,
}
