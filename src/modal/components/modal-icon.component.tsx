import clsx from "clsx";

interface IProps {
  backgroundColor: string;
  iconComponent: React.FC<any>;
  iconColour: string;
}
export function ModalIcon(props: IProps) {
  return (
    <div
      className={clsx(
        props.backgroundColor,
        "flex-shrink-0 flex mx-auto items-center justify-center h-12 w-12 rounded-full",
        "sm:mx-0 sm:h-10 sm:w-10",
      )}
    >
      <props.iconComponent
        className={clsx(props.iconColour, "h-6 w-6")}
        aria-hidden="true"
      />
    </div>
  );
}
