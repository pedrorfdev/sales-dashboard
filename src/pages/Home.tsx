import { AvatarsList, CardComponent } from '@/components'
import Header from '@/components/Header'
import { currencyConverter } from '@/utils'
import { Container } from '@mui/material'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 1',
      subtitle: currencyConverter(1450.93),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 2',
      subtitle: currencyConverter(1000.4),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 3',
      subtitle: currencyConverter(6000.0),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 4',
      subtitle: currencyConverter(10050.3),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 5',
      subtitle: currencyConverter(430.93),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome sobrenome 6',
      subtitle: currencyConverter(7509.57),
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
