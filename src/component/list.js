/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx, Flex, Box, IconButton } from "theme-ui";

export default function List({ items, childStyle }) {
  return (
    <Box as="ul" sx={{ listStyleType: "none", margin: 0, padding: 0 }}>
      {items.map((item, i) => (
        <Flex as="li" key={i} className={item.isAvailable ? "open" : "closed"} sx={{ ...childStyle }}>
          <IconButton sx={styles.listIcon} aria-label="icon-button">
            {item.icon}
          </IconButton>
          <Box sx={styles.items}> {item.text}</Box>
        </Flex>
      ))}
    </Box>
  );
}

const styles = {
  listIcon: {
    width: ["25px", "35px"],
    height: "auto",
    color: "primary",
    padding: 0,
    fontSize: [3, 5],
    ml: "-1px",
    flexShrink: 0,
    justifyContent: "center",
    mt: "2px",
  },
};
