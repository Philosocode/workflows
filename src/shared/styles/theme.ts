export const theme = {
  animations: {
    transition: (property: string) => `${property} 300ms ease-in-out`,
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
    fontSize: {
      messageAside: { base: "sm", md: "lg" },
      nextButton: { base: "xs", md: "sm" },
    },
  },
};
