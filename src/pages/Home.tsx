import { CardComponent } from '@/components'
import Header from '@/components/Header'
import { Container } from '@mui/material'

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">Card</CardComponent>
      </Container>
      <h1>Home</h1>
    </>
  )
}

export default Home
