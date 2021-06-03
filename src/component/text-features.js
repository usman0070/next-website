/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Text, Heading, Box, Link, Button } from "theme-ui";
export default function TextFeatures({ title, subTitle, description, btnName, btnUrl = "#" }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Text as="p" sx={styles.wrapper.subTitle}>
          {subTitle}
        </Text>
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>
      </Box>
      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}
      {btnName && (
        <Link href={btnUrl}>
          <Button variant="default" aria-label={btnName} style={{ cursor: "pointer" }}>
            {btnName}
          </Button>
        </Link>
      )}
    </Box>
  );
}
const styles = {
  card: {
    // background: "red",
    display: "flex",
    alignItems: "flex-start",

    // justifyContent: "center",
    flexDirection: "column",
    flexShrink: 0,
    mt: [5, null, null, 6, 0],
    pt: 2,
  },
  wrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    subTitle: {
      fontSize: [0, null, 4],
      color: "primary",
      textTransform: "uppercase",
      fontWeight: "700",
      mb: [2, 3],
      lineHeight: 1.5,
      letterSpacing: ["1.5px", null, "2px"],
    },
    title: {
      fontSize: ["24px", null, "28px", "30px", "36px", "42px", null, "48px"],
      color: "heading_secondary",
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: "700",
      letterSpacing: "-.5px",
      mb: 5,
    },
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    fontWeight: 400,
    lineHeight: [1.85, null, null, 2, null, "2.2"],
    color: "text_secondary",
    mb: "30px",
  },
};
