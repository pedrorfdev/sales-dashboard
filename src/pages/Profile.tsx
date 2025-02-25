import { CardComponent, StyledButton } from '@/components'
import Header from '@/components/Header'
import { AppThemeContext } from '@/context/AppThemeContext'
import { useContext } from 'react'

function Profile() {
  const themeContext = useContext(AppThemeContext)
  return (
    <>
      <Header />
      <CardComponent>
        <StyledButton className="primary" onClick={themeContext?.toggleTheme}>
          Trocar para tema{' '}
          {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
        </StyledButton>
      </CardComponent>
    </>
  )
}

export default Profile
