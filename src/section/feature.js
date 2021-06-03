import { Container, Grid } from "@theme-ui/components";
import FeatureCard from "../component/feature-card";
import SectionHeader from "../component/section-header";
import featureData from "../data/featureData";

export default function Feature() {
  return (
    <section>
      <Container sx={{ variant: "section.feature" }}>
        <SectionHeader slogan="Quality features" title="Amazing useful products" />
        <Grid sx={styles.grid}>
          {featureData.map((item) => (
            <FeatureCard key={item.id} src={item.imgSrc} altText={item.altText} title={item.title} text={item.text} />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
const styles = {
  grid: {
    // placeItems: "center",
    gridGap: ["40px 0", null, "45px 30px", null, "60px 50px", "70px 50px", null, "80px 90px"],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
    px: [5, 6, 0, null, 7, 8, 7],
    pt: [0, null, null, null, null, null, 2],
    // gridAutoRows: "minmax(400px,auto)",
  },
};
