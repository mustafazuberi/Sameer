import Link from "next/link";
import { useRouter } from "next/router";

const CustomerDetail = () => {
  const router = useRouter();
  const { customerId } = router.query;
  console.log(router.query);

  return (
    <div>
      <h1 className="text-black text-3xl font-bold">
        This Is Customer Detail Page id: {customerId}
      </h1>
      <h1 className="text-black text-xl font-bold">Projects </h1>
      <ul>
        <Link href={`/customers/${customerId}/projects/Ahmed-Project-1`}>
          <li>
            <a>Project1</a>
          </li>
        </Link>
        <li>
          <a>Project2</a>
        </li>
        <li>
          <a>Project3</a>
        </li>
        <li>
          <a>Project3</a>
        </li>
      </ul>
    </div>
  );
};

export default CustomerDetail;
