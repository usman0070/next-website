/** @jsx jsx */
/** @jsxRuntime classic */
import serviceSectionData from "../data/serviceSectionData";
import { jsx, Box, Container, Text, Heading, Button, Grid, Image } from "theme-ui";
import { IoIosPlay, IoIosClose } from "react-icons/io";
import { keyframes } from "@emotion/react";
import TextFeature from "../component/text-features";
export default function ServiceSection({ modalVideo, setModalVideo }) {
  return (
    <section sx={styles.section}>
      {modalVideo && (
        <Box sx={styles.videoWrapper}>
          <IoIosClose
            onClick={() => setModalVideo(false)}
            sx={{
              position: "absolute",
              right: 2,
              top: 2,
              fontSize: 40,
              fontWeight: "bold",
              cursor: "pointer",
              color: "white",
              zIndex: 12,
            }}
          />

          <video sx={styles.videoTag} src="/assets/Vision.mp4" />
        </Box>
      )}
      <Container sx={styles.containerBox}>
        {!modalVideo && (
          <Box sx={styles.thumnail}>
            <Image src="/assets/service-thumb.png" alt="thumbnail" />
            <Button
              sx={styles.videoBtn}
              aria-label="play button"
              onClick={() => setModalVideo((prevState) => !prevState)}
            >
              <span>
                <IoIosPlay />
              </span>
            </Button>
            <Box sx={styles.shapeBox}>
              <Image src="/assets/shape-pattern1.png" alt="shape" />
            </Box>
          </Box>
        )}
        {!modalVideo && (
          <Box sx={styles.contentBox}>
            <TextFeature title={serviceSectionData.title} subTitle={serviceSectionData.subTitle} />
            <Grid sx={styles.grid}>
              {serviceSectionData.features.map((feature) => (
                <Box as="div" sx={styles.card} key={feature.id}>
                  <Image src={feature.imgSrc} alt={feature.altText} sx={styles.icon} />
                  <Box sx={styles.wrapper}>
                    <Heading sx={styles.title}>{feature.title}</Heading>
                    <Text sx={styles.subTitle}>{feature.text}</Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </section>
  );
}
const playPluse = keyframes`
from {
 transform:translate(-50%,-50%) scale(1);
 opacity:1
  }

  to {
	transform:translate(-50%,-50%) scale(1.5);
    opacity:0
  }
`;
const styles = {
  section: {
    // backgroundColor: "red",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  containerBox: {
    position: "relative",
    // background: "pink",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: ["column", null, null, "row"],
    alignItems: ["flex-start", null, null, "center"],
    justifyContent: ["flex-start", null, null, "space-between"],
    pb: [0, null, null, null, null, 7],
    fontFamily: "body",
  },
  thumnail: {
    display: "flex",
    // background: "red",
    mt: 6,
    // p: 5,
    order: [2, null, null, 0],
    mr: ["auto", null, null, 6, 60, 85],
    ml: ["auto", null, null, 0],
    position: "relative",
    "> img": {
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ["none", null, null, null, null, "inline-block"],
  },
  videoBtn: {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: ["60px", null, "80px", null, "100px"],
    height: ["60px", null, "80px", null, "100px"],
    p: "0px !important",
    backgroundColor: "transparent",
    "&::before": {
      content: '""',
      backgroundColor: "primary",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: ["60px", null, "80px", null, "100px"],
      height: ["60px", null, "80px", null, "100px"],
      borderRadius: "50%",
      opacity: 0.5,
      animation: `${playPluse} 1.5s ease-out infinite`,
    },
    ">span": {
      backgroundColor: "rgba(255,255,255,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "inherit",
      height: "inherit",
      textAlign: "center",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "all 0.5s",
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    // background: "orange",
    textAlign: ["center", null, null, "left"],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    width: ["100%", null, null, 315, 390, 450, null, 500],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["repeat(1,1fr)"],
    gridGap: ["35px 0", null, null, null, "50px 0"],
    mx: "auto",
    pl: [2, 0],
    pr: [2, 0, null, null, 6, "70px"],
    pt: [2, null, null, null, 3],
  },
  card: {
    // background: "lightblue",
    display: "flex",
    alignItems: "flex-start",
    transition: "all 0.3s",
    flex: 1,
  },
  icon: {
    width: ["45px", null, null, null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: "100%",
    textAlign: "left",
    mt: "-5px",
  },
  title: {
    fontSize: 3,
    color: "heading_secondary",
    lineHeight: 1.4,
    fontWeight: 700,
    mb: [2, null, 3, 2, 3],
  },

  subTitle: {
    fontSize: [1, null, null, "14px", 1],
    fontWeight: 400,
    lineHeight: 1.9,
  },
  videoTag: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "80%",
    height: "80%",
  },
  videoWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "rgba(0,0,0,0.8)",
    width: "100%",
    paddingTop: "56.25%",
    zIndex: 20,
    transition: "all 0.4s linear",
  },
};
