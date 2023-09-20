import { useRouter } from "next/router";
import React from "react";

const CustomerProject = () => {
  const router = useRouter();
  const { customerId, projectId } = router.query;
  return (
    <div>
      this is project of customer having id {customerId}
      and this project id is {projectId}
    </div>
  );
};

export default CustomerProject;
