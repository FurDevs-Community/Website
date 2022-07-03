import Head from "next/head"
import { useRouter } from "next/router";

export default function BaseMetadata({ title, description }: { title: string; description: string }) {
  const router = useRouter()
  const SITE_NAME = "FurDevs"
  const tags = [
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
  ]

  return (
    <Head>
      <title>
        {title} - {SITE_NAME}
      </title>
      <meta name="description" content={description} />
      <meta name="keywords" content={tags.join(", ")} />
      <meta property="og:title" content={`${title} - ${SITE_NAME}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:url" content={`https://furdevs.tech${router.pathname}`} />
      <meta property="og:image" content="idk" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@FurDevs" />
      <meta name="twitter:title" content={`${title} - ${SITE_NAME}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="idk" />
      <meta name="twitter:url" content={`https://furdevs.tech${router.pathname}`} />
      <link rel="canonical" href={`https://furdevs.tech${router.pathname}`} />
    </Head>
  )
}
