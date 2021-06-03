/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Image, Text, Heading, Button } from "theme-ui";
export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Top quality digital products to explore
          </Heading>
          <Text as="p" variant="heroSecondary">
            Check out our website to find great softwear detail
          </Text>
          <Button variant="primary">Explore</Button>
        </Box>
        <Box sx={styles.imageBox}>
          <Image src="/assets/banner-thumb.png" alt="banner-Image" />
        </Box>
      </Container>
    </section>
  );
}
const styles = {
  banner: {
    // background: "red",
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 6,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url(/assets/shape-left.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "36%",
      backgroundPosition: "bottom left",
      zIndex: -1,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "40px",
      right: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url(/assets/shape-right.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "32%",
      backgroundPosition: "bottom right",
      zIndex: -1,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  contentBox: {
    // width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mb: ["40px", null, null, null, null, 7],
  },
  imageBox: {
    // background: "orange",
    // mb: [0, null, 6, null, null, "40px", null, -3],
    // img: {
    //   position: "relative",
    //   height: [245, "auto"],
    // },
  },
};
