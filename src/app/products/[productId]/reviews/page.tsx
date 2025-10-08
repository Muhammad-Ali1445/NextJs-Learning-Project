export default async function productReviewPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return (
    <div>
      <h1>Reviews for product {productId}</h1>
      <h3>product review 1</h3>
      <h3>product review 2</h3>
      <h3>product review 3</h3>
    </div>
  );
}
