/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Button, Box } from "theme-ui";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import data from "../header/header.data";
import Logo from "../logo";
import { keyframes } from "@emotion/react";
import MobileDrawer from "./Mobile-drawer";
import { useState } from "react";
export default function Header({ className, setModalVideo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(false);

  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        {isOpen ? null : <Logo />}
        <Flex as="nav" sx={styles.nav}>
          {data.map((nav, i) => (
            <Link key={i} to={nav.path} activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
              {nav.label}
            </Link>
          ))}
        </Flex>

        <Button variant="secondary" className="donate__btn" aria-label="get started">
          Get started
        </Button>
        {isOpen ? null : (
          <Box
            sx={styles.handler}
            onClick={() => {
              setIsOpen((prevState) => !prevState), setBackground((prevState) => !prevState), setModalVideo(false);
            }}
          >
            <IoMdMenu size="26px" cursor="pointer" />
          </Box>
        )}
      </Container>
      {/* <Drawer /> */}
      <MobileDrawer open={isOpen} toggle={setIsOpen} background={background} toggleBack={setBackground} />
    </header>
  );
}
const positionAnim = keyframes`
  from {
    position: fixed;
    backgroundColor: "red",
    opacity: 0;

  }

  to {
    position: absolute;
    opacity: 0;
    background:'yellow';
    transition: all 0.4s ease;
  }
`;
const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    backgroundColor: "transparent",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "all 0.4s ease",
    Animation: `${positionAnim} 0.4s ease`,
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "#000000",
      boxShadow: "0 1px 40px rgba(0,0,0,0.07)",
    },
    ".donate__btn": {
      cursor: "pointer",
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
  },
  container: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  nav: {
    mx: "auto",
    display: "none",
    fontFamily: "body",
    "@media screen and (min-width :1024px)": { display: "block" },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    flexShrink: "0",
    width: "26px",

    "@media screen and (min-width: 1024px)": {
      display: "none",
    },
  },
};
