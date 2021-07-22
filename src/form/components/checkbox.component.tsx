import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  id: string;
  text: string;

  inputClasses?: string;
  labelClasses?: string;
}
export function Checkbox({
  checked,
  id,
  text,
  labelClasses,
  inputClasses,
  ...rest
}: IProps) {
  return (
    <label
      className={clsx(
        "block cursor-pointer text-base pl-8 relative",
        "md:text-md",
        labelClasses,
      )}
      htmlFor={id}
    >
      {text}
      <input
        className={clsx("hidden", inputClasses)}
        checked={checked}
        type="checkbox"
        id={id}
        name={id}
        {...rest}
      />
      <span
        className={clsx(
          "border-2 border-solid inline-block rounded-sm h-6 w-6 absolute top-0 left-0",
          checked ? "bg-green-400 border border-green-500" : "border-gray-400",
        )}
      >
        {/* emulate :after pseudo-element */}
        <span
          className={clsx(
            "font-medium text-center text-gray-100 transform -translate-y-0.5",
            checked ? "block" : "hidden",
          )}
          aria-hidden
        >
          ✓
        </span>
      </span>
    </label>
  );
}
