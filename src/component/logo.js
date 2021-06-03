/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "react-scroll";
export default function Logo() {
  return (
    <Link
      style={{ cursor: "pointer" }}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      to="home"
    >
      <Image src="/assets/logo.svg" alt="logo image" />
    </Link>
  );
}
