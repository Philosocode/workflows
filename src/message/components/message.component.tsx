import { Box } from "@chakra-ui/react";
import clsx from "clsx";

export interface IProps {
  children: React.ReactNode;
}
export function Message(props: IProps) {
  return (
    <Box
      className={clsx(
        "bg-white mx-auto items-start  mb-8 max-w-full rounded-lg shadow-md p-8 text-gray-700 text-3xl w-max",
      )}
    >
      {props.children}
    </Box>
  );
}
