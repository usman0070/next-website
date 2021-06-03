/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Text, Box } from "theme-ui";
export default function SectionHeader({ slogan, title, isWhite }) {
  return (
    <Box sx={{ variant: "sectionHeader" }}>
      <Text
        as="p"
        sx={{
          variant: "sectionHeader.title",
          color: isWhite ? "white" : "primary",
          opacity: isWhite ? 0.7 : 1,
          fontFamily: "body",
        }}
      >
        {slogan}
      </Text>
      <Text
        as="h2"
        sx={{ variant: "sectionHeader.subTitle", fontFamily: "body", color: isWhite ? "white" : "heading" }}
      >
        {title}
      </Text>
    </Box>
  );
}
