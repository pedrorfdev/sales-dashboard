import { highlightTextConverter } from '@/utils'

describe('pxToRem', () => {
  it('should return the correct text for "alert"', () => {
    expect(highlightTextConverter('alert')).toBe('* Meta longe de ser batida')
  })

  it('should return the correct text for "success"', () => {
    expect(highlightTextConverter('success')).toBe(
      '* A meta do mês foi batida! Parabéns!'
    )
  })

  it('should return the correct text for "warning"', () => {
    expect(highlightTextConverter('warning')).toBe('* Falta pouco, vamos lá!')
  })

  it('should return the default for unknow input', () => {
    expect(highlightTextConverter('un')).toBe('* Sem dados no momento')
  })
})
