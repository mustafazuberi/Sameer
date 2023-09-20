import Image from "next/image";
import { Inter } from "next/font/google";
import Greet from "@/components/greet/Greet";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function TodoDetail(props) {
  const { title, todo } = props;
  return (
    <div>
      <h1>{title}</h1>
      <br />
      <div>{todo?.id}</div>
      <div>{todo?.title}</div>
    </div>
  );
}

// export async function getStaticProps(context) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.todoId}`);
//   const todo = await response.json();
//   return {
//     props: {
//       title: "Hello",
//       todo: todo,
//     },
// revalidate: 10;
//   };
// }

// export const getStaticPaths = async (context) => {
//   return {
//     paths: [
//       {
//         params: {
//           todoId: "1",
//         }
//       }
//     ],
//     fallback: true,
//   };
// };

// --------------------------------------------------------------------------------------------------------------


export async function getServerSideProps(context) {
  console.log(context)
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.todoId}`
  );
  const todo = await response.json();
  return {
    props: {
      title: "Hello",
      todo: todo,
    },
  };
}
