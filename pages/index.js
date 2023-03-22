import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getTextWithDotPointsForHome } from "@components/contentful/textWithDotPoints";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Home({ preview, textWithDotPoints }) {
  const textWithDotPoint = textWithDotPoints[0];
  // const client = createClient({
  //   space: process.env.nettstNEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  //   accessToken:
  //     process.env.nettstIS_PREVIEW === "true"
  //       ? process.env.nettstCONTENTFUL_PREVIEW_TOKEN
  //       : process.env.nettstCONTENTFUL_DELIVERY_TOKEN,
  // });

  // // Alternatively you can use the CDN API as follows...
  // const baseUrl =
  //   process.env.NEXT_PUBLIC_IS_PREVIEW === "true"
  //     ? "preview.contentful.com"
  //     : "cdn.contentful.com";

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

        <div className="ic-info-grid">
          <div className="ic-info-section ic-info-section__what-is-ic">
            <div className="ic-info-section-columns">
              <div className="ic-info-section-columns__column">
                <div className="ic-info-section-copy">
                  {documentToReactComponents(textWithDotPoint.body.json)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div>footer section</div>
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
