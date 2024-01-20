import footerStyles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.socials}>
        <span style={{marginBottom: ".5em"}}>Stay connected with us</span>
        <div>
          <a
            href="https://www.instagram.com/oblesremoval/"
            style={{ marginRight: "1em" }}
          >
            <FaInstagram size="2rem" />
          </a>
          <a href="https://www.facebook.com/people/Obles-Removal-company/100063752329743/">
            <FaFacebook size="2rem" />
          </a>
        </div>
      </div>
      <span>&copy; Obles Removal 2022</span>
      <span className={footerStyles.plug}>
        Site made by <a href="https://www.weblaunchza.com/" className={footerStyles.siteLink}>WebLaunchZA</a>
      </span>
    </footer>
  );
}
