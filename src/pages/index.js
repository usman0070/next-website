import { useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Layout from "../component/layout";
import Banner from "../section/banner";
import KeyFeatures from "../section/key-features";
import ServiceSection from "../section/service-section";
import Feature from "../section/feature";
import CoreFeatures from "../section/core-features";
import Workflow from "../section/workflow";
import Package from "../section/package";
import TeamSection from "../section/TeamSection";
import TestimonialCard from "../section/TestimonialCard";

export default function Home() {
  const [modalVideo, setModalVideo] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Layout setModalVideo={setModalVideo}>
        <Banner />
        <KeyFeatures />
        <ServiceSection modalVideo={modalVideo} setModalVideo={setModalVideo} />
        <Feature />
        <CoreFeatures />
        <Workflow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
