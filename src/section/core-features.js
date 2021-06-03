/** @jsxRuntime classic */
/** @jsx jsx */
import coreFeatureData from "../data/coreFeatureData";
import { jsx, Box, Container, Image } from "theme-ui";
import TextFeatures from "../component/text-features";
export default function CoreFeatures() {
  return (
    <section sx={{ variant: "section.core" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeatures
            subTitle={coreFeatureData.subTitle}
            title={coreFeatureData.title}
            description={coreFeatureData.description}
            btnName={coreFeatureData.btnName}
            btnURL={coreFeatureData.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src="/assets/core-feature.png" alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src="/assets/shape-pattern2.png" alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
const styles = {
  containerBox: {
    // background: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    // background: "red",
    fontFamily: "body",
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 2, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "flex",
    background: "pink",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
