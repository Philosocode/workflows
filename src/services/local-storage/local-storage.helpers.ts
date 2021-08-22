export function getLocalStorage(key: string) {
  const valueFromStorage = window.localStorage.getItem(key);
  return valueFromStorage ? JSON.parse(valueFromStorage) : undefined;
}

export function setLocalStorage(key: string, value: any) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
