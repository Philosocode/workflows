import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CardButton, CardButtonProps } from "./card-button.component";

interface IButton extends CardButtonProps {
  text: string;
  to?: string;
}
interface IProps extends SimpleGridProps {
  buttons?: IButton[];
  children?: React.ReactNode;
}
export function CardButtonGrid({ buttons, children, ...rest }: IProps) {
  return (
    <SimpleGrid
      columns={2}
      columnGap={{ base: 5, md: 10 }}
      rowGap={5}
      w="full"
      {...rest}
    >
      {buttons?.map((buttonProps) => {
        const { text, ...rest } = buttonProps;
        const buttonInner = (
          <CardButton key={text} {...rest}>
            {text}
          </CardButton>
        );

        let button = buttonInner;

        if (buttonProps.to) {
          button = (
            <Link key={text} to={buttonProps.to}>
              {buttonInner}
            </Link>
          );
        }

        return button;
      })}
      {children}
    </SimpleGrid>
  );
}
