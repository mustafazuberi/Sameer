import Image from "next/image";
import { Inter } from "next/font/google";
import Greet from "@/components/greet/Greet";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { title, todos } = props;
  return (
    <div>
      <h1>Hello World</h1>
      <h1>I am Mustafa Zuberi</h1>
      <h1>{title}</h1>
      <br />
      <h1 className="text-black text-3xl font-bold">
        <Link href={"/customers"}>Go to Customers</Link>
      </h1>
      <Greet />
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return {
    props: {
      title: "Hello",
      todos: todos,
    },
    revalidate:10
  };
}
