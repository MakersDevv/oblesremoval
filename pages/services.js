import Layout from "../components/layout";
import Image from "next/image";
import pic4 from "../public/pic4.jpg";
import pic5 from "../public/pic5.png";
import pic9 from "../public/pic9.jpg";
import serviceStyles from "../styles/serviceStyles.module.css";

export default function Services() {
  return (
    <Layout>
      <h1>Our Services</h1>
      <div className={serviceStyles.servicesContainer}>
        <div className={serviceStyles.description}>
          <div className={serviceStyles.text}>
            <h2>Moving</h2>
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
                of client’s furniture.
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
        <div className={`${serviceStyles.description} ${serviceStyles.reverseDescription}`}>
          <div className={serviceStyles.text}>
            <h2>Packing</h2>
            <ul className={serviceStyles.list}>
              <li className={serviceStyles.listItem}>
                Furniture packing service.
              </li>
              <li className={serviceStyles.listItem}>
                Supplying of packing materials (boxes, bubble wraps, mattress
                and couches plastic covers).
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
        <div className={serviceStyles.description}>
          <div className={serviceStyles.text}>
            <h2>Cleaning</h2>
            <ul className={serviceStyles.list}>
              <li className={serviceStyles.listItem}>
                Pre and post occupational cleaning.
              </li>
              <li className={serviceStyles.listItem}>Deep carpet cleaning.</li>
              <li className={serviceStyles.listItem}>
                Upholstery and mattress ,
              </li>
              <li className={serviceStyles.listItem}>
                We use nature friendly cleaning products.
              </li>
              <li className={serviceStyles.listItem}>
                Our cleaning products are tough on stains, highly effective and
                safe for both pets and individuals.
              </li>
              <li className={serviceStyles.listItem}>
                Our cleaning service is delivered by trained staff.
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
