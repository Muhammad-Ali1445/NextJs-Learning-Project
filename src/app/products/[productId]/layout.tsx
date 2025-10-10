function getrandomInt(count:number){
  return Math.floor(Math.random()*count)
}


export default async function productDetailslayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const randomInt=getrandomInt(2)
  if(randomInt===1){
    throw new Error("Error loading productDetails")
  }
  return (
    <>
      {children}
      <h1 className="mt-2">featured products</h1>
    </>
  );
}
