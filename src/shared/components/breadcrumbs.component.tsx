import { Box, useColorModeValue, Link, Text } from "@chakra-ui/react";
import { theme } from "shared/styles/theme";

import { Link as RRLink } from "react-router-dom";
import { Fragment } from "react";

export interface IBreadcrumbLink {
  text: string;
}
interface IProps {
  breadcrumbLinks: string[];
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
          <Fragment key={link}>
            <Text
              color={isLast ? activeLinkColor : ""}
              fontWeight={isLast ? "bold" : defaultFontWeight}
            >
              {link}
            </Text>
            {!isLast && <Separator />}
          </Fragment>
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
