import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

export default function FurDevsWebsite({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
