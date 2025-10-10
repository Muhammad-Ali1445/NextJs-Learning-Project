"use client";
import { useRouter } from "next/navigation";

const productOrderPage = () => {

  const router = useRouter();

  const handleclick = () => {
    console.log("Place order is clicked");
    // router.push("/");
    router.replace("/");
    // router.forward();
    // router.back();
};

  return (
    <div>
      <h1>Product Order page </h1>
      <button onClick={handleclick} className=" bg-amber-600 rounded-lg p-3 m-3">Place Order</button>
    </div>
  );
};

export default productOrderPage;
