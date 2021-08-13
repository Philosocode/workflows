export const theme = {
  animations: {
    transition: (property: string) => `${property} 300ms ease-in-out`,
  },
  colors: {
    cardBackground: {
      dark: "gray.700",
      light: "gray.100",
    },
  },
  spacing: {
    messageBoxSpacing: { base: 5, md: 7 },
    workflowStepButtonSpacing: { base: 7, md: 10 },
  },
  typography: {
    condensed: {
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: "bold",
    },
    countHeading: {
      fontSize: { base: "5xl", md: "7xl" },
      fontWeight: 300,
    },
    fontSize: {
      card: { base: "x-small", sm: "xs" },
      messageAside: { base: "sm", md: "lg" },
      nextButton: { base: "xs", md: "sm" },
    },
  },
};
