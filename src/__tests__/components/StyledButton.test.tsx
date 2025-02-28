import { ThemeProvider } from 'styled-components'
import { StyledButton } from '@/components'
import { Theme } from '@/types'
import { render } from '@testing-library/react'
import { themesList } from '@/resources/themesList'

describe('StyledButton', () => {
  const renderComponent = (theme: Theme, className?: string, props = {}) =>
    render(
      <ThemeProvider theme={theme}>
        <StyledButton className={className} {...props} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot with alert class', () => {
        const { asFragment } = renderComponent(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with primary class', () => {
        const { asFragment } = renderComponent(theme, 'primary')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with borderless alert class', () => {
        const { asFragment } = renderComponent(theme, 'borderless-alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with disabled status', () => {
        const { asFragment } = renderComponent(theme, 'primary', {
          disabled: true,
        })
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
