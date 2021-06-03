/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Box } from "theme-ui";
import Drawer from "../rc-drawer";
import { Scrollbars } from "react-custom-scrollbars-2";
import MenuItems from "../header/header.data";
import { Link } from "react-scroll";
import { IoIosClose } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaGithubAlt, FaDribbble } from "react-icons/fa";
import Logo from "../logo";
const social = [
  {
    path: "home",
    icon: <FaFacebookF />,
  },
  {
    path: "home",
    icon: <FaTwitter />,
  },
  {
    path: "home",
    icon: <FaGithubAlt />,
  },
  {
    path: "home",
    icon: <FaDribbble />,
  },
];

export default function MobileDrawer({ open, toggle, background, toggleBack }) {
  return (
    <Drawer width="300" placement="left" open={open} background={background}>
      <Scrollbars autoHide style={{ height: "100vh", zIndex: 10000 }}>
        <Box className="container" sx={styles.container}>
          <Box sx={styles.closeBtn}>
            {open ? (
              <div sx={{ pointerEvents: "none" }}>
                <Logo />
              </div>
            ) : null}
            <Box as="div">
              <Link
                to="home"
                onClick={() => {
                  toggle((prevState) => !prevState);
                  toggleBack((prevState) => !prevState);
                }}
              >
                <IoIosClose sx={styles.icon} size="36px" cursor="pointer" />
              </Link>
            </Box>
          </Box>
          <Box as="div" className="nav__wrapper" sx={styles.navWrapper}>
            {MenuItems.map((items, i) => (
              <Link
                onClick={() => {
                  toggle((prevState) => !prevState);
                  toggleBack((prevState) => !prevState);
                }}
                to={items.path}
                activeClass="active"
                duration={500}
                offset={-70}
                smooth={true}
                spy={true}
                key={i}
              >
                {items.label}
              </Link>
            ))}
          </Box>

          <Box className="icons__wrapper" sx={styles.iconsWrapper}>
            {social.map((icon, i) => (
              <Link key={i} to={icon.path} onClick={() => toggle((prevState) => !prevState)}>
                {icon.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "90vh",
    width: " 100%",
  },

  closeBtn: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    mt: 5,
  },
  icon: {
    color: "#111111",
    transition: "all 0.2s ease",
    "&:hover": {
      color: "secondary",
    },
  },
  navWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "70%",
    gap: "2rem",
    fontFamily: "body",
    mt: 10,
    mx: 3,
    pl: 2,
    a: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      cursor: "pointer",
      transition: "all 0.4s ease",
      fontSize: "1rem",
      "&:hover": {
        color: "primary",
      },
    },
  },

  iconsWrapper: {
    display: "flex",
    justifySelf: "flex-end",
    alignSelf: "center",
    mt: 5,
    gap: "20px",
    a: {
      cursor: "pointer",
      marginTop: "1rem",
      paddingTop: "2rem",
      transition: "all 0.4s ease",
      fontSize: "body",
      "&:hover": {
        color: "secondary",
      },
    },
  },
};
