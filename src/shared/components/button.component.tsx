import clsx from "clsx";

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: "green" | "red" | "white";
}
export function Button(props: IProps) {
  return (
    <button
      {...props}
      className={clsx(
        // base styles
        "border border-transparent font-medium inline-flex justify-center py-2 px-4 rounded-md shadow-md text-base w-full",
        "focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-opacity-50",

        // responsive
        "sm:w-auto sm:text-sm",

        // green
        props.color === "green" && [
          "bg-green-500 hover:bg-green-600 text-white",
          "focus:ring-green-500",
        ],

        props.color === "red" && [
          "bg-red-600 text-white",
          "hover:bg-red-700 focus:ring-red-500",
        ],

        props.color === "white" && [
          "border border-gray-300 bg-white text-gray-700",
          "hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
          "sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
        ],

        // user classes
        props.className,
      )}
    >
      {props.children}
    </button>
  );
}
