import NavBar from "./navigationBar";
import Footer from "./footer";
import layoutStyles from "./layout.module.css";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main className={layoutStyles.main}>{children}</main>
      <a
        href="https://wa.me/27843472057"
        target="_blank"
        rel="noreferrer"
        title="Message us on WhatsApp"
      >
        <FaWhatsappSquare
          color="#25D366"
          size="4rem"
          style={{
            padding: "0 .5rem .5rem 0",
          }}
          className={layoutStyles.whatsApp}
        />
      </a>

      <Footer />
    </div>
  );
}
