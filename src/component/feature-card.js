/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Image, Box, Container, Heading, Text } from "theme-ui";
export default function FeatureCard({ src, altText, title, text }) {
  return (
    <Box sx={styles.card}>
      <Image sx={styles.img} src={src} altText={altText} />
      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subtitle}>{text}</Text>
      </Box>
    </Box>
  );
}
const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    mb: -1,
  },
  img: {
    // alignSelf: "center",
    width: ["70px", null, null, "80px", "90px", "auto"],
    height: "auto",
    flexShrink: 0,
    mr: [2, 3, null, null, 4, 5],
    ml: -2,
  },
  wrapper: {
    width: "100%",
    mt: "-5px",
    title: {
      fontSize: [2, 3],
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      fontFamily: "body",
      mb: ["10px", null, "15px"],
    },
    subtitle: {
      fontFamily: "body",
      fontSize: [1, "15px"],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
};
