/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Container, Box, Flex } from "theme-ui";
import { useState } from "react";
import packageData from "../data/packageData";
import SectionHeader from "../component/section-header";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PriceCard from "../component/pricecard";
import ButtonGroup from "../component/button-group";
export default function Package() {
  const { monthly, annual } = packageData;
  const [state, setState] = useState({
    active: "monthly",
    pricingPlan: monthly,
  });
  const handlePricingPlan = (plan) => {
    if (plan === "monthly") {
      setState({ active: "monthly", pricingPlan: monthly });
    } else if (plan === "annual") {
      setState({ active: "annual", pricingPlan: annual });
    }
  };
  //react carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 664 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 664, min: 0 },
      items: 1,
    },
  };
  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section sx={{ variant: "section.pricing" }}>
      <Container>
        <SectionHeader slogan="Pricing plane" title="choose your pricing plane" />
        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === "monthly" ? "active" : ""}
              type="button"
              aria-label="monthly"
              onClick={() => handlePricingPlan("monthly")}
            >
              Monthly
            </button>
            <button
              className={state.active === "annual" ? "active" : ""}
              type="button"
              aria-label="annual"
              onClick={() => handlePricingPlan("annual")}
            >
              Annual
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  pricingWrapper: {
    // backgroundColor: "red",
    mb: "-40px",
    mt: "-40px",
    mx: -3,

    ".carousel-container": {
      // backgroundColor: "pink",
      width: "100%",
      "> ul  ": {
        flex: 1,

        "ul > li": {
          flex: 1,
        },
      },
    },
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    backgroundColor: "#F7F8FB",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    button: {
      border: 0,
      borderRadius: "5px",
      padding: ["15px 20px", "15px 27px"],
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
