import React, { useState } from "react";

export function useRandom<T>(
  values: T[],
  initialValue?: T,
): [T, () => T, React.Dispatch<React.SetStateAction<T>>] {
  const [currentValue, setCurrentValue] = useState(initialValue ?? values[0]);

  function getRandomValue() {
    if (values.length === 1) return values[0];

    let newValue = values[Math.floor(Math.random() * values.length)];

    while (newValue === currentValue)
      newValue = values[Math.floor(Math.random() * values.length)];

    setCurrentValue(newValue);

    return newValue;
  }

  return [currentValue, getRandomValue, setCurrentValue];
}
