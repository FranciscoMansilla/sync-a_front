import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Container,
  Skeleton,
  Flex,
  Spacer,
  Link
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import user from "../api/user"


const MyAccount = ()=> {
  const [userData, setUserData] = useState(null)
  const getUserInfo = ()=>{
    user.info().then(res => 
      setUserData(res.user
    ))
    .catch(error => {
      console.log(error)
    })
  }
  useEffect(()=>{
    getUserInfo()
  },[])
  return (
    <Container h='100vh'>
      <Card mt='4'>
        <CardHeader>
          <Heading size='md'>Account Settings</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Skeleton isLoaded={userData}>
              <Flex>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Username
                  </Heading>
                  {userData && <Text pt='2' fontSize='sm'>
                    {userData.name}
                  </Text>}
                </Box>
                <Spacer/>
                <Link color='blue.400'>
                  Change
                </Link>
              </Flex>
            </Skeleton>
            <Skeleton isLoaded={userData}>
              <Flex>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Email
                  </Heading>
                  {userData && <Text pt='2' fontSize='sm'>
                  {userData.email}
                  </Text>}
                </Box>
                <Spacer/>
                <Link color='blue.400'>
                  Change
                </Link>
              </Flex>
            </Skeleton>
            <Skeleton isLoaded={userData}>
              <Flex>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Password
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    **********
                  </Text>
                </Box>
                <Spacer/>
                <Link color='blue.400'>
                  Change
                </Link>
              </Flex>
            </Skeleton>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  )
}

export default MyAccount