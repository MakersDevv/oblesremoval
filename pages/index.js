import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import Layout from "../components/layout";
import truck from "../public/truck.jpg";
import moving from "../public/peopleMoving.jpg";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className={homeStyles.heroContainer}>
        <Image
          src={truck}
          alt="Picture of moving truck"
          width={1064.8}
          height={550}
          className={homeStyles.heroImage}
        />
        <div className={homeStyles.heroTextContainer}>
          <p className={homeStyles.heroTextMain}>
            We move every customer with care
          </p>
          <small className={homeStyles.heroTextSecondary}>
            We make moving extremely easy for you
          </small>
          <button className={homeStyles.heroButton}>Contact</button>
        </div>
      </div>
      <section className={homeStyles.about}>
        <div className={homeStyles.aboutContainer}>
          <div className={homeStyles.aboutText}>
            <h1>About Us</h1>
            <p>
              Moving is both exciting and challenging – at Obles Removal we
              truly understand this. That is why, with over 3 years of
              experience, we are best suited to fulfil your local and
              long-distance requirements.
            </p>
            <p>
              Obles has been operating in South Africa since 2018,We are an
              established leader in the door-to-door removal of household and
              personal effects. We reach we service the private, corporate,
              government and diplomatic sectors.
            </p>
            <p>
              Obles Removal is always there, at your side, to take care of your
              removal needs.
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
          <div className={homeStyles.testimonial}>
            <span>Martin Vletter</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              What wonderful move!!I would like to recommend Lesley and his
              team.Guys arrived on time Lesley Kept me updated all the time
            </span>
          </div>
          <div className={homeStyles.testimonial}>
            <span>Bella</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              OBLES were great! There arrived on time and were able to do a
              great job in short time , highly recommend 👍
            </span>
          </div>
          <div className={homeStyles.testimonial}>
            <span>Brendan</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              The team contacted me soon after posting my request and we’re able
              to provide a detailed timeline of when they would be able to
              assist and complete the move. Very careful and gave full help when
              completing the job. Thanks team 🙌🏽
            </span>
          </div>
          <div className={homeStyles.testimonial}>
            <span>Kerry creamer</span>
            <span>⭐⭐⭐⭐⭐</span>
            <span>
              What an amazing service. The move consisted of 3 locations so it
              was very tedious. The guys did a great job and were very careful
              with the furniture. Great service all around
            </span>
          </div>
          <div className={homeStyles.testimonial}>
            <span>Salome</span>
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
