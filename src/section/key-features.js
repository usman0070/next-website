/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Container, Grid } from "theme-ui";
import FeatureColumn from "../component/feature-column";
import SectionHeader from "../component/section-header";
import keyFeatureData from "../data/keyFeature.data";

export default function KeyFeatures() {
  return (
    <section id="feature">
      <Container>
        <SectionHeader slogan="whats the function" title="Meet the feature of our product" />
        <Grid sx={styles.grid}>
          {keyFeatureData.map((item) => (
            <FeatureColumn key={item.id} img={item.imgSrc} title={item.title} text={item.text} alt={item.altText} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    mx: "auto",
    width: ["100%", "80%", "100%"],
    gridGap: ["35px 0", null, "40px 40px", "50px 60px", "30px", "50px 40px", "55px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)", null, "repeat(4,1fr)"],
  },
};
