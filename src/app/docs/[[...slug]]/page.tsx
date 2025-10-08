export default async function docsHomePage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  }
  else if (slug?.length === 3) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]} and {slug[2]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>viewing docs for feature {slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs homePage</h1>
      <p>Slug segments: {slug?.join(" / ")}</p>
    </div>
  );
}
