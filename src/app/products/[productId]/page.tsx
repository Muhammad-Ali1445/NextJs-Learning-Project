// Display the dynamic metaData

import { Metadata } from "next";
type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
    description: `Desc for Product ${title}`,
  };
};

export default async function productDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <h1>Product Details page number {productId} </h1>;
}
