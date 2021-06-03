/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx, Box, Button } from "theme-ui";
export default function Drawer() {
  const [state, setState] = useState(false);

  return (
    <>
      <section id="headerr" className={`${state ? "open" : "hide"}`} sx={styles.section}>
        <Box
          sx={{
            borderRadius: "50%",
            position: "absolute",
            right: -5,
            background: " red",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => setState(false)}
        >
          X
        </Box>
      </section>
      <Box
        sx={{
          background: "black",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={() => setState((prevState) => !prevState)}
      ></Box>
    </>
  );
}
const styles = {
  section: {
    width: 300,
    height: "100vh",
    background: "#fff",
    position: "absolute",
    top: 0,
    left: 0,
    transition: "all 0.3s ease",
    "&.hide": {
      left: "-300px",
    },
    // "&.open": {
    //   left: "0px",
    // },
  },
};
