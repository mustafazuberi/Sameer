import React from "react";
import Link from "next/link";

const Customers = () => {
  return (
    <div>
      <h1 className="text-black text-3xl font-bold">This Is Customers page </h1>
      <ul>
        <Link href={"customers/Ahmed-Id/"}>
          <li>
          Ahmed
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Customers;
