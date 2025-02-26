import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  StyledH2,
  StyledH3,
  StyledSpan,
} from '@/components'
import Header from '@/components/Header'
import { useGet } from '@/hooks'
import { CustomChartProps, HighlightsData, NewsData, StarsData } from '@/types'
import { currencyConverter, highlightTextConverter } from '@/utils'
import { Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  const {
    data: highlightsData,
    loading: highlightsLoading,
    error: highlightsError,
  } = useGet<HighlightsData[]>('sales/highlights')

  const {
    data: salesMonthData,
    loading: salesMonthLoading,
    error: salesMonthError,
  } = useGet<CustomChartProps>('sales/month')

  const {
    data: salesYearData,
    loading: salesYearLoading,
    error: salesYearError,
  } = useGet<CustomChartProps>('sales/year')

  const {
    data: salesStarsData,
    loading: salesStarsLoading,
    error: salesStarsError,
  } = useGet<StarsData[]>('sales/stars')

  const {
    data: newsData,
    loading: newsLoading,
    error: newsError,
  } = useGet<NewsData[]>('news')

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid container spacing={4}>
          {!highlightsError && (
            <>
              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Total de vendas no mês
                      </StyledH2>
                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {currencyConverter(highlightsData[0].value)}
                      </StyledH3>

                      <StyledSpan>{highlightsData[0].subtitle}</StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsData
                      ? highlightsData[1].subtitle
                      : 'skeleton-loading skeleton-loading-mh-1'
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <>
                      <StyledH2 className="mb-1" color="white">
                        Meta do mês
                      </StyledH2>

                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {currencyConverter(highlightsData[1].value)}
                      </StyledH3>

                      <StyledSpan color="white">
                        {highlightTextConverter(highlightsData[1].subtitle)}
                      </StyledSpan>
                    </>
                  )}
                </CardComponent>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardComponent
                  className={
                    highlightsLoading
                      ? 'skeleton-loading skeleton-loading-mh-1'
                      : ''
                  }
                >
                  {!highlightsLoading && highlightsData && (
                    <Link to="/leads">
                      <StyledH2 className="mb-1">Leads contactados</StyledH2>
                      <StyledH3 size={40} lineheight={40} className="mb-1">
                        {highlightsData[2].value}
                      </StyledH3>

                      <StyledSpan>{highlightsData[2].subtitle}</StyledSpan>
                    </Link>
                  )}
                </CardComponent>
              </Grid>
            </>
          )}

          <Grid item xs={12} md={7}>
            {!salesMonthError && (
              <CardComponent
                className={
                  salesMonthLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesMonthLoading && salesMonthData && (
                  <>
                    <StyledH2 className="mb-1">Valor de vendas no mês</StyledH2>
                    <CustomChart
                      type={salesMonthData.type}
                      labels={salesMonthData.labels.map((label) => label)}
                      data={salesMonthData.data.map((data) => data)}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>

          <Grid item xs={12} md={5}>
            {!salesStarsError && (
              <>
                <CardComponent
                  className={
                    salesStarsLoading
                      ? 'skeleton-loading skeleton-loading-mh-2'
                      : ''
                  }
                >
                  {!salesStarsLoading && salesStarsData && (
                    <>
                      <StyledH2 className="mb-1">
                        Maiores vendedores do mês
                      </StyledH2>
                      <AvatarsList
                        listData={salesStarsData.map((star) => ({
                          avatar: '/dnc-avatar.png',
                          name: star.name,
                          subtitle: currencyConverter(star.value),
                        }))}
                      />
                    </>
                  )}
                </CardComponent>
              </>
            )}
          </Grid>

          <Grid item xs={12} md={5}>
            {!newsError && (
              <CardComponent
                className={
                  newsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
                }
              >
                {!newsLoading && newsData && (
                  <>
                    <StyledH2 className="mb-1">Notícias relevantes</StyledH2>
                    <CustomTable
                      headers={['Título', 'Horário']}
                      rows={newsData.map((news) => [
                        <a
                          className="ellipsis ellipsis-sm"
                          href={news.link}
                          target="_blank"
                        >
                          {news.title}
                        </a>,
                        <a href={news.link} target="_blank">
                          {news.date}
                        </a>,
                      ])}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>

          <Grid item xs={12} md={7}>
            {!salesYearError && (
              <CardComponent
                className={
                  salesYearLoading
                    ? 'skeleton-loading skeleton-loading-mh-2'
                    : ''
                }
              >
                {!salesYearLoading && salesYearData && (
                  <>
                    <StyledH2 className="mb-1">
                      Valor de vendas por mês
                    </StyledH2>
                    <CustomChart
                      type={salesYearData.type}
                      labels={salesYearData.labels.map((label) => label)}
                      data={salesYearData.data.map((data) => data)}
                    />
                  </>
                )}
              </CardComponent>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
