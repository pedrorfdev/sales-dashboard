/**
 * Convert Pixels to rem
 * @param pixels - Pixels values to be converted
 * @returns The converted rem value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
