/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Box, Container, Image } from "theme-ui";
import { Link } from "react-scroll";
import data from "../footer/footer.data";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src="/assets/logo.svg" alt="footer" />
          </Link>

          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link
                  style={{ fontWeight: "bold", fontFamily: "body", padding: "10px", cursor: "pointer" }}
                  key={i}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
