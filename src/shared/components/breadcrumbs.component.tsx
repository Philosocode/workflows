import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface IBreadcrumbLink {
  to: string;
  text: string;
}
interface IProps {
  links: IBreadcrumbLink[];
}

export function Breadcrumbs(props: IProps) {
  const textColor = useColorModeValue("gray.500", "gray.400");
  const activeLinkColor = useColorModeValue("green.500", "green.200");

  return (
    <Breadcrumb
      fontSize={{ base: "sm", md: "md" }}
      mb={2}
      textColor={textColor}
    >
      {props.links.map((link, index) => {
        const isLast = index === props.links.length - 1;

        return (
          <BreadcrumbItem>
            <BreadcrumbLink
              as={Link}
              to={link.to}
              textColor={isLast ? activeLinkColor : ""}
              fontWeight={isLast ? "bold" : ""}
            >
              {link.text}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
