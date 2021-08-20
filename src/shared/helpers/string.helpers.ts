export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str: string, maxLength: number, suffix?: string) {
  if (str.length > maxLength)
    return str.substring(0, maxLength) + (suffix ?? "...");

  return str;
}

export function pluralizeString(
  str: string,
  amount: number,
  suffix: string = "s",
) {
  return amount > 1 ? str + suffix : str;
}
