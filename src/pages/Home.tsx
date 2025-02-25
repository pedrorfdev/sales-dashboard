import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
} from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@gmail.com</span>,
        <button>Action</button>,
      ],

      [
        <span>Nome 2</span>,
        <span>nome2@gmail.com</span>,
        <button>Action</button>,
      ],

      [
        <span>Nome 3</span>,
        <span>nome3@gmail.com</span>,
        <button>Action</button>,
      ],
    ],
  }

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent className="">Card</CardComponent>
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>

        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>

        <CardComponent>
          <CustomChart
            type="bar"
            labels={['Jan', 'Fev', 'Mar', 'Abr', 'Mai']}
            data={[1000.12, 2456.54, 986.32, 654.89, 4467.89, 234.76]}
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
