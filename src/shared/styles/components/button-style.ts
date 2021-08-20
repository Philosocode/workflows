import { theme } from "../theme";

export const ButtonStyle = {
  baseStyle: {
    ...theme.typography.condensed,
    colorScheme: "gray",
    fontSize: theme.typography.fontSize.button,
    fontWeight: "semibold",
  },
};
