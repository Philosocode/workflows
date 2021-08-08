import React, { useState } from "react";
import sample from "lodash/sample";

export function useRandom<T>(
  values: T[],
  initialValue?: T,
): [T, () => void, React.Dispatch<React.SetStateAction<T>>] {
  const [currentValue, setCurrentValue] = useState(initialValue ?? values[0]);

  function getRandomValue() {
    let newValue = sample(values);

    while (newValue === currentValue) newValue = sample(values);

    if (newValue) setCurrentValue(newValue);
  }

  return [currentValue, getRandomValue, setCurrentValue];
}
