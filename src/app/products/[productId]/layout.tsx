import React from "react";

export default async function productDetailslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h1>featured products</h1>
    </>
  );
}


