import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

const Blog = async () => {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intensional Delay");
    }, 2000);
  });

  return (
    <div>
      <h1>My Blog</h1>
    </div>
  );
};

export default Blog;
