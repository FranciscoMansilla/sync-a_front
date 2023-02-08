import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer';

const Layout = ()=> {
  return (
    <Grid
    templateAreas={{
      base: `"header header""main main""footer footer"`,
      lg: `"header header""nav main""nav footer"`
    }}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'150px 1fr'}
    h='200px'
    gap='1'
    color='blackAlpha.700'
    fontWeight='bold'
    >
    <GridItem pl='2' area={'header'}>
      <Nav/>
    </GridItem>
    <GridItem display={{base: 'none', lg: 'inline'}} pl='2' bg='pink.300' area={'nav'}>
      Nav
    </GridItem>
    <GridItem pl='2' area={'main'}>
      <Outlet />
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      <Footer />
    </GridItem>
    </Grid>
  )
}
export default Layout