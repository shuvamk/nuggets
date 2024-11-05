/**
 * Conditionally joins class names together.
 *
 * @param classes - An array of class names or boolean expressions.
 * @returns A string of class names that are truthy.
 */
export function cn(
  ...classes: (string | boolean | undefined | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
