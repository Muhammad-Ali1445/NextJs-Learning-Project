import React from "react";

export default async function productDetailslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>featured products</h2>
    </>
  );
}
