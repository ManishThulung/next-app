import React from "react";

const page = async ({ params }: { params: { username: string } }) => {
  const username = (await params).username;
  return <div>Hi i am {username}</div>;
};

export default page;
