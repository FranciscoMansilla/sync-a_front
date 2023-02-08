import {
  Box,
  Text,
  Link as LinkChakra,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../layout/components/ColorModeSwitcher';
import { Logo } from '../Logo';
import { Link } from 'react-router-dom'

const Home = ()=> {
  const urls = [
    '/login', '/register'
  ]
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text >
            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
          </Text>
          {urls.map(url => {
            return (
              <Link to={url}>
                <LinkChakra
                  color="blue.500"
                  fontSize="2xl"
                >
                  {url}
                </LinkChakra>
              </Link>
            )
          })}
        </VStack>
      </Grid>
    </Box>
  )
}
export default Home