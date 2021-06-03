/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Box, Heading, Text, Image } from "theme-ui";
export default function FeatureColumn({ img, title, text, alt }) {
  return (
    <Box as="div" sx={styles.card}>
      <Box as="div">
        <Image src={img} alt={alt} sx={styles.img} />
      </Box>
      <Box as="div">
        <Heading as="h1" sx={styles.title}>
          {title}
        </Heading>
        <Text as="p" sx={styles.subTitle}>
          {text}
        </Text>
      </Box>
    </Box>
  );
}
const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: ["center", null, "flex-start"],
    // background: ["red", "pink", "yellow"],
    flexDirection: "column",
    textAlign: ["center", null, "left"],
    fontFamily: "heading",
    px: [4, null, 0],
    mb: -1,
  },

  img: {
    mx: ["auto", null, 0],
    ml: ["auto", null, "-13px"],

    mb: -2,
    width: ["80px", null, null, "90px", null, "90px"],
  },

  title: {
    fontSize: 3,
    color: "heading_secondary",
    lineHeight: 1.4,
    fontWeight: 700,
    mb: [2, null, 3],
  },
  subTitle: {
    fontSize: 1,
    fontWeight: 400,
    lineHeight: "1.9",
  },
};
