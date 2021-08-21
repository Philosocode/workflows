import { ReactElement } from "react";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

export interface INavMenuItem {
  text: string;
  onClick: () => void;

  icon?: ReactElement;
  show?: boolean;
}

interface IProps {
  items: INavMenuItem[];
}
export function NavMenu(props: IProps) {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        as={IconButton}
        aria-label="Nav Menu"
        icon={<FaBars />}
        variant="ghost"
        size="xs"
        fontSize="xl"
        ml={3}
        _hover={{ color: useColorModeValue("green.500", "green.200") }}
      />
      <MenuList minW="0" w="max-content">
        {props.items.map((item) => {
          if (item.show !== false) {
            return (
              <MenuItem
                fontSize="sm"
                fontWeight="500"
                sx={{
                  "& svg": {
                    fontSize: "lg",
                  },
                }}
                key={item.text}
                icon={item.icon}
                onClick={item.onClick}
              >
                {item.text}
              </MenuItem>
            );
          }

          return null;
        })}
      </MenuList>
    </Menu>
  );
}
