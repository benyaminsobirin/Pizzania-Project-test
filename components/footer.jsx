import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import css from "../styles/footer.module.css";
export default function Footer() {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={50} />
        <UilInstagram size={50} />
        <UilGithub size={50} />
      </div>

      <div className={css.logo}>
        <Image src={Logo} alt="" width={100} height={75} />
        <span>PIZZANIA</span>
      </div>
    </div>
  );
}
