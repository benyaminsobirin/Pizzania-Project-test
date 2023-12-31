import css from "../styles/header.module.css";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { UilShoppingBag } from "@iconscout/react-unicons";
export default function Header(params) {
  return (
    <>
      <div className={css.header}>
        {/* Logo side */}
        <div className={css.logo}>
          <Image src={Logo} alt="" width={200} height={155} />
          <span>PIZZANIA</span>
        </div>
        {/* Menu Side */}

        <ul className={css.menu}>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>

        {/* right side */}
        <div className={css.rightSide}>
          <div className={css.cart}>
            <UilShoppingBag size={35} color="#2E2E2E" />
            <div className={css.badge}>1</div>
          </div>
        </div>
      </div>
    </>
  );
}
