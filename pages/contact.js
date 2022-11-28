import Layout from "../components/layout";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import contactStyles from "../styles/contact.module.css";
import contactImage from "../public/contact.PNG";
import Image from "next/image";

export default function Contact() {
  return (
    <Layout>
      <div className={contactStyles.contactContainer}>
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around"
        }}>
          <div className={contactStyles.text}>
            <p style={{width: "fit-content", marginRight: "0", marginLeft: "0"}}>
              {"Let's "}chat
              <br />
              Tell us about your move
            </p>
          </div>
          <Image
            src={contactImage}
            alt="Standing with client"
            height={404.25}
            width={310.5}
          />
        </div>
        <div className={contactStyles.contactDetailsContainer}>
          <h2>Our Details</h2>
          <div className={contactStyles.contactDetail}>
            <GrMail />
            <a href="mailto:Lwbvuma@gmail.com" style={{ paddingLeft: "1em" }}>
              Lwbvuma@gmail.com
            </a>
          </div>
          <div className={contactStyles.contactDetail}>
            <BsTelephoneFill />
            <span style={{ paddingLeft: "1em" }}>084 347 2057</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
