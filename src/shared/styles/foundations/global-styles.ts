import { mode } from "@chakra-ui/theme-tools";

export function globalStyles(props: any) {
  return {
    body: {
      bg: mode("gray.50", "gray.800")(props),
    },
  };
}
