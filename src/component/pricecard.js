/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Box, Card, Text, Heading, Button } from "theme-ui";
import List from "./list";
import { keyframes } from "@emotion/react";

export default function PriceCard({
  data: { header, name, description, priceWithUnit, buttonText = "Start Free Trial", anotherOption, points },
}) {
  return (
    <Card sx={styles.pricingBox}>
      {header && (
        <Text sx={styles.header} className={header ? "package__card active" : "package__card"}>
          {header}
        </Text>
      )}
      <Box>
        <Box sx={styles.pricingHeader}>
          <Heading className="package__name" variant="title">
            {name}
          </Heading>
          <Text as="p">{description}</Text>
        </Box>
        <List items={points} childStyle={styles.listItem} />
        <Text className="package__price" sx={styles.price}>
          {priceWithUnit}
          <span>/Monthly</span>
        </Text>
        <Box sx={styles.buttonGroup}>
          <Button variant="primary" aria-label={buttonText}>
            {buttonText}
          </Button>
          {anotherOption && (
            <Button
              sx={{
                color: "secondary",
                width: "100%",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: ["14px", 1],
                p: "20px 0 0",
              }}
              variant="textButton"
              aria-label={anotherOption}
            >
              {anotherOption}
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
}
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
	transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "70%", "70%", "100%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", "auto", 0],
    "&::before": {
      position: "absolute",
      content: "''",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1,
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0,
      },
    },
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    fontWeight: "bold",
    borderRadius: "5px",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px",
  },
  pricingHeader: {
    // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
    animation: `${fadeIn} 0.8s ease-in`,
  },
  listItem: {
    // backgroundColor: "gray",
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    px: "auto",
    color: "text",
    animation: `${fadeIn2} 0.7s ease-in`,
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5",
      },
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    mb: 2,
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal",
    },
    animation: `${fadeIn2} 0.9s ease-in`,
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    animation: `${fadeIn2} 0.9s ease-in`,
  },
};
