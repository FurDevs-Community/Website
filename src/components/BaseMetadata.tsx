import Head from "next/head";

export default function BaseMetadata({
  title,
  description,
  tags = [
    "furry",
    "furries",
    "fursuit",
    "developers",
    "programming",
    "developer",
    "javascript",
    "java",
    "python",
    "furdevs",
  ],
}: {
  title: string;
  description: string;
  tags?: string[];
}) {
  const SITE_NAME = "FurDevs";

  return (
    <Head>
      <title>
        {title} - {SITE_NAME}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(", ")} />
      {/* og and twitter tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content="https://furdevs.tech" />
      <link rel="canonical" href="https://furdevs.tech" />
      {/* <meta property="og:image" content="idk" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@FurDevs" /> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="idk" /> */}
    </Head>
  );
}
