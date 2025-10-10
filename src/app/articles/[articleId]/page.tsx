import Link from "next/link";

const Newsarticle = async ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "sp" | "fr" }>;
}) => {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <br />
      <p>Reading in {lang}</p>
      <br />

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=sp`}>Spanish</Link>
        <br />
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
};

export default Newsarticle;
