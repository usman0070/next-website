/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Grid, Box, Heading, Text, Image } from "theme-ui";
import workflowData from "../data/workflowData";
import SectionHeader from "../component/section-header";
export default function Workflow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader slogan="whats the function" title="Meet the features of our product" isWhite={true} />
        <Grid sx={styles.grid}>
          {workflowData.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: "url(/assets/patternBG.png)",
    backgroundRepeat: `no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    py: [8, null, 9, null, null, 10],
    position: "relative",
  },
  grid: {
    // background: "red",
    pb: 0,
    mb: -1,
    display: "grid",
    gridGap: ["35px 0", null, "45px 30px", null, "50px 25px", null, null, "50px 65px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"],
  },
  card: {
    // background: "red",
    position: "relative",
    // background: "white",
    display: "flex",
    flexDirection: "column",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      // background: "pink",
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: "url(/assets/arrowOdd.svg)",
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: "url(/assets/arrowEven.svg)",
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },
  iconBox: {
    background: "white",
    color: "#234582",
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
