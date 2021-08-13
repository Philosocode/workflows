import { Link } from "react-router-dom";
import { IoMdReturnLeft } from "react-icons/io";

import { IconButton } from "../icon-button.component";

interface IProps {
  to: string;
}
export function BackIconLink(props: IProps) {
  return (
    <Link to={props.to}>
      <IconButton aria-label="Go Back" icon={<IoMdReturnLeft />} />
    </Link>
  );
}
