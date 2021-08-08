import React, { useState } from "react";

export function useToggle(
  initialValue: boolean = false,
): [boolean, () => void, React.Dispatch<React.SetStateAction<boolean>>] {
  const [state, setState] = useState(initialValue);

  function toggleState() {
    setState((prev) => !prev);
  }

  return [state, toggleState, setState];
}
