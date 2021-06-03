/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Container, Grid } from "theme-ui";
import teamSectionData from "../data/teamSectionData";
import TeamCard from "../component/team-card";
import SectionHeader from "../component/section-header";

export default function TeamSection() {
  return (
    <Container>
      <SectionHeader slogan="Our team" title="The most qualified and talented individuals" />
      <Grid sx={styles.grid}>
        {teamSectionData.map((item) => (
          <TeamCard
            key={item.id}
            src={item.imgSrc}
            altText={item.altText}
            title={item.title}
            designation={item.designation}
            social={item.socialProfile}
          />
        ))}
      </Grid>
    </Container>
  );
}
const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: ["repeat(2,1fr)", null, "repeat(2,1fr)", null, "repeat(3,1fr)"],
  },
};
