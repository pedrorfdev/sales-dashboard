/**
 * Convert to BRL currency format
 * @param value - number values to be converted
 * @returns converted BRL string
 */

export function currencyConverter(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
