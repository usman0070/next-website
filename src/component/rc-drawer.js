/** @jsx jsx */
/** @jsxRuntime classic */
import { Fragment } from "react";
import { jsx, Box } from "theme-ui";
import RcDrawer from "rc-drawer";

export default function Drawer({ background, open, width, placement, children, closeButton, ...props }) {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        width={width}
        height="100vh"
        level="null"
        placement={placement}
        duration="0.4s"
        contentWrapperStyle={{
          boxShadow: "0 1px 40px rgba(0,0,0,0.07)",
        }}
        wrapperClassName={`${background ? "wrapper" : "wrapper active"}`.trim()}
        {...props}
      >
        <Box>{children}</Box>
      </RcDrawer>
    </Fragment>
  );
}
const styles = {
  close: {
    position: "absolute",
    top: "25px",
    right: "30px",
    zIndex: "1",
    cursor: "pointer",
    backgroundColor: "white",
    width: "100%",
  },
};
