import Layout from "../components/layout";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import contactStyles from "../styles/contact.module.css";
// import Client from "../public/Client.png";
// import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Contact us today to get a quote"
        />
        <meta
          name="keywords"
          content="moving company, movers, removal company, cleaning company, cleaners"
        />
        <meta name="author" content="MakersDev" />
        <meta name="theme-color" content="#ff802b" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className={contactStyles.contactContainer}>
        <div
          className={contactStyles.contactText}
          data-aos="fade-in"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className={contactStyles.text}>
            <span style={{ width: "100%" }}>
              {"Let's "}chat
              <br />
              Tell us about your move
            </span>
          </div>
          {/* <Image
            src={Client}
            alt="Standing with client"
            height={404.25}
            width={310.5}
            className={contactStyles.image}
          /> */}
        </div>
        <div
          className={contactStyles.contactDetailsContainer}
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <h2 className={utilStyles.linedHeader}>Our Details</h2>
          <div className={contactStyles.contactDetail}>
            <GrMail />
            <a
              href="mailto:oblesremovals@gmail.com"
              style={{ paddingLeft: "1em", textDecoration: "underline" }}
              className={contactStyles.detail}
            >
              oblesremovals@gmail.com
            </a>
          </div>
          <div className={contactStyles.contactDetail}>
            <BsTelephoneFill />
            <span
              style={{ paddingLeft: "1em" }}
              className={contactStyles.detail}
            >
              084 347 2057
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
