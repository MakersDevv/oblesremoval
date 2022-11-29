import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css";
import Layout from "../components/layout";
import hero from "../public/hero.jpg";
import moving from "../public/peopleMoving.jpg";
import utilStyles from "../styles/utils.module.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="We are an established leader in moving goods. Let us do all the heavy lifting for you with
              our full-service moving packages designed to fit any budget so
              that everyone can afford a stress-free move!"
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
      <div
        className={homeStyles.heroContainer}
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Image
          src={hero}
          alt="Picture of moving truck"
          width={1064.8}
          height={550}
          className={homeStyles.heroImage}
        />
        <div className={homeStyles.heroTextContainer}>
          <p
            className={homeStyles.heroTextMain}
            data-aos="fade-in"
            data-aos-delay="800"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            We move every customer with care
          </p>
          <small
            className={homeStyles.heroTextSecondary}
            data-aos="fade-in"
            data-aos-delay="1200"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            And make moving extremely easy for you
          </small>
          <button
            className={homeStyles.heroButton}
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-duration="500"
            data-aos-easing="ease-in"
          >
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
      <section className={homeStyles.about}>
        <div
          className={homeStyles.aboutContainer}
          data-aos="fade-in"
          data-aos-delay="800"
          data-aos-duration="500"
          data-aos-easing="ease-in"
        >
          <div className={homeStyles.aboutText}>
            <h1 className={utilStyles.linedHeader}>About Us</h1>
            <p>
              Moving is exciting and challenging {"-"} at Obles Removal we truly
              understand this. That is why, with over 4 years of experience, we
              are best suited to fulfil your moving needs.
            </p>
            <p>
              We are an established leader in the door-to-door removal of
              household and personal goods. We have vast experience in moving as
              we service the private, corporate, government and diplomatic
              sectors.
            </p>
            <p>
              We are always there at your side to take care of your removal
              needs. Let us do all the heavy lifting for you! Whether {"it's"}{" "}
              local or long-distance, {"we've"} got you covered from start to
              finish with our full-service moving packages designed to fit any
              budget so that everyone can afford a stress-free move!
            </p>
          </div>

          <Image
            src={moving}
            alt="People moving boxes out of truck"
            width={650}
            height={325}
            className={homeStyles.aboutImage}
          />
        </div>
      </section>
      <section className={homeStyles.testimonials}>
        <h1>Testimonials</h1>
        <div className={homeStyles.testimonialsContainer}>
          <div
            className={homeStyles.testimonial}
            data-aos="fade-in"
            data-aos-delay="800"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <span className={utilStyles.boldText}>Martin Vletter</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              What wonderful move!!I would like to recommend Lesley and his
              team.Guys arrived on time Lesley Kept me updated all the time
            </span>
          </div>
          <div
            className={homeStyles.testimonial}
            data-aos="fade-in"
            data-aos-delay="1200"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <span className={utilStyles.boldText}>Bella</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              OBLES were great! There arrived on time and were able to do a
              great job in short time , highly recommend 👍
            </span>
          </div>
          <div
            className={homeStyles.testimonial}
            data-aos="fade-in"
            data-aos-delay="1400"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <span className={utilStyles.boldText}>Brendan</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              The team contacted me soon after posting my request and we’re able
              to provide a detailed timeline of when they would be able to
              assist and complete the move. Very careful and gave full help when
              completing the job. Thanks team 🙌🏽
            </span>
          </div>
          <div
            className={homeStyles.testimonial}
            data-aos="fade-in"
            data-aos-delay="1600"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <span className={utilStyles.boldText}>Kerry creamer</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              What an amazing service. The move consisted of 3 locations so it
              was very tedious. The guys did a great job and were very careful
              with the furniture. Great service all around
            </span>
          </div>
          <div
            className={homeStyles.testimonial}
            data-aos="fade-in"
            data-aos-delay="1800"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <span className={utilStyles.boldText}>Salome</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              They arrived earlier then expected. Bubble wrapped all my {"tv's"}{" "}
              and fridges. They were fast and effecient and friendly. When we
              arrived there, the tenant moving out had not moved all his
              furniture out and they even helped him carry his items out. They
              had to do 2 trips for me and did not charge me extra
            </span>
          </div>
        </div>
        <small className={homeStyles.testimonialLink}>
          <a href="https://www.bark.com/en/za/company/obles-removal-company/vQ8gV/">
            View more
          </a>
        </small>
      </section>
    </Layout>
  );
}
