import React from "react";

const Page = ({ params }: { params: { project: string } }) => {
  const { project } = params;
  return <div>{`Project: ${project}`}</div>;
};

export default Page;
