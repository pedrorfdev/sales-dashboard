import { BannerImage } from '@/components'
import { render } from '@testing-library/react'
import 'jest-styled-components'

test('renders BannerImage with correct style', () => {
  const { container } = render(<BannerImage />)
  expect(container.firstChild).toHaveStyleRule(
    'background-image',
    'url(/login-image.svg)'
  )
  expect(container.firstChild).toHaveStyleRule('background-size', 'cover')
  expect(container.firstChild).toHaveStyleRule('height', '100vh')
  expect(container.firstChild).toHaveStyleRule('width', '50vw')
})
