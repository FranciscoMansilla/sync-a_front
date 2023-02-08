import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer';


const LayoutNoUser = ()=>{
  return (
    <Grid
    templateAreas={{
      base: `"header header""main main""footer footer"`,
    }}
    gridTemplateRows={'50px 100vh 30px'}
    gridTemplateColumns={'150px 1fr'}
    h='200px'
    gap='0'
    color='blackAlpha.700'
    fontWeight='bold'
    >
    <GridItem pl='2' bg='blue.100' area={'header'}>
      <Nav/>
    </GridItem>
    <GridItem pl='2'  area={'main'}>
      <Outlet />
    </GridItem>
    <GridItem pl='2' bg='blue.300' area={'footer'}>
      <Footer />
    </GridItem>
    </Grid>
  )
}

export default LayoutNoUser