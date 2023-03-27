import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@eos/components/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>EOS - Design System</title>
        <meta
          name="description"
          content="Design System created by Victor Rios, Front end Software Engineer and Freelancer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </>
  );
}
