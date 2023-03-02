import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  useColorModeValue
} from "@chakra-ui/react"
import { useState } from "react"

const NewProduct = ()=> {
  const textColor = useColorModeValue('black', 'white')
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: [1]
  })
  const [isError, setIsError] = useState({
    usernamename: null,
    email: null,
    password: null
  })
  const handleUsernameInputChange = (e) => {
    setForm({...form, username: e.target.value})
    setIsError({...isError, username: e.target.value === ''})
  }
  return (
    <HStack>
      <form action="submit">
      <FormControl isInvalid={isError.username}>
            <FormLabel color={textColor}>Username</FormLabel>
            <Input color={textColor} type='text' value={form.username} onChange={handleUsernameInputChange} />
            {!isError.username ? (
              <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage mb='1.5'>Username is required.</FormErrorMessage>
                )}
          </FormControl>
      </form>
    </HStack>
  )
}
export default NewProduct