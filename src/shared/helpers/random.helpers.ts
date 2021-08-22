/**
 * Get a random item from an array. Optional ability to get an item that doesn't
 * match a current value
 *
 * @param args
 * @param args.items - The array of items
 * @param args.currentItem - The random value should not match this
 *
 * @returns The random item
 */
export function randomFromArray<TItem>(args: {
  items: TItem[];
  currentItem?: TItem;
}) {
  const { items, currentItem } = args;
  if (items.length === 1) return items[0];

  let randomItem: TItem;
  do {
    randomItem = items[Math.floor(Math.random() * items.length)];
  } while (randomItem === currentItem);

  return randomItem;
}
