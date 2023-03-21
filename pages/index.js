import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getTextWithDotPointsForHome } from "@components/contentful/textWithDotPoints";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Netlify - Next.js Integration with Contentfull - Swinkaran!
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Integration with Contentfull by Swinkaran!
        </p>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const textWithDotPoints = (await getTextWithDotPointsForHome(preview)) ?? [];
  return {
    props: { preview, textWithDotPoints },
  };
}
