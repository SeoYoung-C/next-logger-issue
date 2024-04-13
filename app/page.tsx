import Link from "next/link";


interface User {
  id: number;
  name: string;
  email: string;
}

export default async function Home() {

  const res = await fetch("https://jsonplaceholder.typicode.com/users-error");
  const users: User[] = await res.json();


  return (
    <table>
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export const dynamic = 'force-dynamic'

