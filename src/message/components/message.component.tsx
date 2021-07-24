import clsx from "clsx";

export interface IProps {
  children: React.ReactNode;
}
export function Message(props: IProps) {
  return (
    <div
      className={clsx(
        "bg-white mx-auto max-w-full rounded-lg shadow-md p-8 text-gray-700 text-3xl w-max",
      )}
    >
      {props.children}
    </div>
  );
}
