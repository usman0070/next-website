export default {
  colors: {
    text: "#343D48", // body color and primary color
    text_secondary: "#02073E", // secondary body color
    heading: "#0F2137", // primary heading color
    heading_secondary: "#0F2137", // heading color
    background: "#FFFFFF", // body background color
    background_secondary: "#F9FBFD", // secondary background color
    border_color: "#E5ECF4", // border color
    yellow: "#FFA740", // border color
    primary: "#EA3A60", // primary button and link color
    secondary: "#2563FF", // secondary color - can be used for hover states
    muted: "#E4E4E4", // muted color
    accent: "#609", // a contrast color for emphasizing UI
  },
  breakpoints: ["480px", "640px", "768px", "1024px", "1220px", "1366px", "1620px"],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  layout: {
    container: {
      maxWidth: ["100%", null, null, "780px", "1020px", "1200px", null, "1310px"],
      px: [4, 6],
    },
  },
  buttons: {
    menu: {
      display: [null, null, "none"],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      fontFamily: "body",
      cursor: "pointer",
      lineHeight: 1.2,
      transition: "all 0.25s",
      fontWeight: 500,
      "&:focus": {
        outline: 0,
      },
    },
    primary: {
      variant: "buttons.defaultBtn",
      color: "white",
      bg: "primary",
      "&:hover": {
        boxShadow: "rgba(233, 76, 84, 0.57) 0px 9px 20px -5px",
      },
    },
    whiteButton: {
      variant: "buttons.defaultBtn",
      color: "heading_secondary",
      bg: "white",
      "&:hover": {
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 12px 24px -10px",
      },
    },
    secondary: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      bg: "transparent",
      padding: ["10px 15px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "primary",
      },
    },
    textButton: {
      variant: "buttons.defaultBtn",
      backgroundColor: "transparent",
      cursor: "pointer",
      color: "white",
      svg: {
        fontSize: [4, 6],
        mr: 2,
      },
    },
  },
  //links
  links: {
    logo: {
      display: "flex",
      cursor: "pointer",
      mr: "15",
    },
  },
  text: {
    heroPrimary: {
      color: "heading",
      fontSize: ["32px", "36px", "42px", "40px", "42px", "52px", "58px", "66px"],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5],
      fontFamily: "body",
      // textAlign: "center",
    },
    heroSecondary: {
      fontSize: [2, null, "17px", null, null, "19px", 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: "body",
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: "heading",
      fontFamily: "body",
      // textAlign: "center",
    },
  },
  sectionHeader: {
    width: ["100%", null, "540px"],
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: ["3px", null, 3],
    marginBottom: ["50px", null, "60px", null, null, "65px", null, "80px"],
    mx: "auto",
    title: {
      fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
      color: "heading",
      lineHeight: [1.3, null, null, 1.25],
      textAlign: "center",
      fontWeight: "700",
      letterSpacing: "-.5px",
      textTransform: "capitalize",
    },

    subTitle: {
      fontSize: [0, "13px", null, "14px"],
      color: "primary",
      textAlign: "center",
      letterSpacing: ["1.5px", null, "2px"],
      textTransform: "uppercase",
      fontWeight: "700",
      mb: 2,
      lineHeight: 1.5,
    },
  },
  section: {
    feature: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
    },
    core: {
      pb: [8, null, 9, null, null, 10, null, "170px"],
      overflow: "hidden",
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, "180px"],
      pb: ["90px", null, 9, null, null, 10, null, "180px"],
    },
    testimonial: {
      pt: [8, null, 8, "70px", null, 8, null, "145px"],
      pb: ["90px", null, 9, null, null, 10, null, "190px"],
      overflow: "hidden",
    },
  },
};
