import { Box, useColorModeValue, Link, Text } from "@chakra-ui/react";
import { theme } from "shared/styles/theme";

import { Link as RRLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

export interface IBreadcrumbLink {
  to: string;
  text: string;
}
interface IProps {
  breadcrumbLinks: IBreadcrumbLink[];
}

export function Breadcrumbs(props: IProps) {
  const textColor = useColorModeValue("gray.500", "gray.400");
  const activeLinkColor = useColorModeValue("green.500", "green.200");
  const defaultFontWeight = "semibold";

  return (
    <Box
      d="flex"
      textColor={textColor}
      fontSize="xs"
      fontWeight={defaultFontWeight}
      mb={2}
      sx={theme.typography.condensed}
    >
      <Link as={RRLink} to="/" fontWeight={defaultFontWeight}>
        Home
      </Link>
      <Separator />
      {props.breadcrumbLinks.map((link, index) => {
        const isLast = index === props.breadcrumbLinks.length - 1;

        return (
          <>
            <Text
              color={isLast ? activeLinkColor : ""}
              fontWeight={isLast ? "bold" : defaultFontWeight}
            >
              {link.text}
            </Text>
            {!isLast && <Separator />}
          </>
        );
      })}
    </Box>
  );
}

function Separator() {
  return (
    <Box d="inline-block" mx={2}>
      /
    </Box>
  );
}
