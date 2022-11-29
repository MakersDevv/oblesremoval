import Layout from "../components/layout";
import Image from "next/image";
import pic4 from "../public/pic4.jpg";
import pic5 from "../public/pic5.png";
import pic9 from "../public/pic9.jpg";
import serviceStyles from "../styles/serviceStyles.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Services</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="Our services include packing, loading, unloading, and unpacking—no matter where you are headed!"
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
      <h1>Our Services</h1>
      <div className={serviceStyles.servicesContainer}>
        <div
          className={serviceStyles.description}
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className={serviceStyles.text}>
            <h2 className={utilStyles.linedHeader}>Moving</h2>
            <ul className={serviceStyles.list}>
              <li className={serviceStyles.listItem}>
                Long and short distance household and office furniture removal –
                all provinces.
              </li>
              <li className={serviceStyles.listItem}>
                General transportation of goods.
              </li>
              <li className={serviceStyles.listItem}>
                Experienced staff delivers our moving service.
              </li>
              <li className={serviceStyles.listItem}>
                Free GIT insurance with every move.
              </li>
              <li className={serviceStyles.listItem}>
                Our vehicles are fitted with tracking devices to ensure safety
                of {"client's"} goods.
              </li>
            </ul>
          </div>
          <Image
            src={pic4}
            alt="Trucks transporting goods"
            width={365.5}
            height={274.5}
            className={serviceStyles.serviceImage}
          />
        </div>
        <div
          className={`${serviceStyles.description} ${serviceStyles.reverseDescription}`}
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className={serviceStyles.text}>
            <h2 className={utilStyles.linedHeader}>Packing</h2>
            <ul className={serviceStyles.list}>
              <li className={serviceStyles.listItem}>
                We supply packing materials (boxes, bubble wrap, mattress and
                couch plastic covers).
              </li>
              <li className={serviceStyles.listItem}>
                Our staff is trained to pack your fragile household items.
              </li>
            </ul>
          </div>
          <Image
            src={pic5}
            alt="Truck transporting goods"
            width={409.5}
            height={230}
            className={serviceStyles.serviceImage}
          />
        </div>
        <div
          className={serviceStyles.description}
          data-aos="fade-left"
          data-aos-delay="900"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className={serviceStyles.text}>
            <h2 className={utilStyles.linedHeader}>Cleaning</h2>
            <ul className={serviceStyles.list}>
              <li className={serviceStyles.listItem}>
                Pre and post occupational cleaning
              </li>
              <li className={serviceStyles.listItem}>Deep carpet cleaning.</li>
              <li className={serviceStyles.listItem}>
                Upholstery and mattress cleaning
              </li>
              <li className={serviceStyles.listItem}>
                We use nature friendly cleaning products
              </li>
              <li className={serviceStyles.listItem}>
                Our cleaning products are tough on stains, highly effective and
                safe for both pets and individuals
              </li>
              <li className={serviceStyles.listItem}>
                Our cleaning service is delivered by trained staff
              </li>
            </ul>
          </div>
          <Image
            src={pic9}
            alt="Cleaning equipment"
            width={300}
            height={200}
            className={serviceStyles.serviceImage}
          />
        </div>
      </div>
    </Layout>
  );
}
