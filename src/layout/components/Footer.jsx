import { Text, useColorModeValue, Center } from "@chakra-ui/react"


const Footer = ()=> {
  const textColor = useColorModeValue('black', 'white')
  return (
    <Center color={textColor}>
      <Text fontWeight='medium' fontSize='sm'>
        Sync-A by Francisco Mansilla 2023
      </Text>
    </Center>
  )
}

export default Footer