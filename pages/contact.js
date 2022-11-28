import Layout from "../components/layout";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import contactStyles from "../styles/contact.module.css";
// import contactImage from "../public/contact.png";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.contactText}>
          <div className={contactStyles.text}>
            <span style={{ width: "100%" }}>
              {"Let's "}chat
              <br />
              Tell us about your move
            </span>
          </div>
          {/* <Image
            src={contactImage}
            alt="Standing with client"
            height={404.25}
            width={310.5}
            className={contactStyles.image}
          /> */}
        </div>
        <div className={contactStyles.contactDetailsContainer}>
          <h2>Our Details</h2>
          <div className={contactStyles.contactDetail}>
            <GrMail />
            <a
              href="mailto:Lwbvuma@gmail.com"
              style={{ paddingLeft: "1em", textDecoration: "underline" }}
              className={contactStyles.detail}
            >
              Lwbvuma@gmail.com
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
