import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getTextWithDotPointsForHome } from "@components/contentful/textWithDotPoints";
import { getHeroImageForHome } from "@components/contentful/heroImage";
import { getTextContentsForHome } from "@components/contentful/textContents";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Home({
  preview,
  textWithDotPoints,
  heroImages,
  textContents,
}) {
  const heroImage = heroImages[0];
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

        <header className="ic-info-header">
          <img
            src={heroImage?.mobileImage?.url}
            className="ic-info-banner ic-mobile-only"
          />
          <img
            src={heroImage?.desktopImage?.url}
            className="ic-info-banner ic-desktop-only"
          />
        </header>

        <div className="ic-info-grid">
          <div className="ic-info-section ic-info-section__what-is-ic">
            <h1>{textWithDotPoint?.heading}</h1>

            <div className="ic-info-section-columns">
              <div className="ic-info-section-columns__column">
                <div className="ic-info-section-copy">
                  {documentToReactComponents(textWithDotPoint?.body?.json)}
                </div>

                <div className="ic-desktop-only">
                  <a
                    href={textWithDotPoint?.ctaUrl}
                    className="ic-button-solid ic-button-solid--arrow"
                    target="_blank"
                    rel="noopener"
                  >
                    {textWithDotPoint?.ctaText}
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 .333 5.827 1.508l4.65 4.659H.334v1.666h10.142l-4.65 4.659L7 13.667 13.667 7 7.001.333Z"></path>
                    </svg>
                  </a>
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
  const heroImages = (await getHeroImageForHome(preview)) ?? [];
  const textWithDotPoints = (await getTextWithDotPointsForHome(preview)) ?? [];
  const textContents = (await getTextContentsForHome(preview)) ?? [];
  return {
    props: { preview, heroImages, textWithDotPoints, textContents },
  };
}
