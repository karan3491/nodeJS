function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {

  return arr.reduce((result, item) => {
    const groupKey = String(item[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);

    return result;
  }, {} as Record<string, T[]>);
}


type User = {
  name: string;
  role: string;
};

const users: User[] = [
  { name: "Karan", role: "admin" },
  { name: "Rahul", role: "user" },
  { name: "Ankit", role: "admin" },
];

const grouped = groupBy(users, "role");

console.log(grouped);