import clsx from "clsx";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "green";
}
export function Button(props: IProps) {
  return (
    <button
      {...props}
      className={clsx(
        // base styles
        "font-semibold py-2 px-4 rounded-lg shadow-md",
        "focus:outline-none focus:ring-1 focus:ring-opacity-50",

        // green
        props.color === "green" && [
          "bg-green-500 hover:bg-green-600 text-white",
          "focus:ring-green-500",
        ],

        // user classes
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
