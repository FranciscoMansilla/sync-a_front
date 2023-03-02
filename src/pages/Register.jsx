import { useState } from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Button,
  Center,
  useColorModeValue,
  useToast,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import user from "../api/user"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom"

const Register = ()=> {
  const textColor = useColorModeValue('black', 'white')
  const toast = useToast()
  const navigate = useNavigate()
  const [isPassword, setIsPassword] = useState(true)
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
  const handleEmailInputChange = (e) => {
    setForm({...form, email: e.target.value})
    setIsError({...isError, email: e.target.value === ''}) 
  }
  const handlePasswordInputChange = (e) => {
    setForm({...form, password: e.target.value})
    setIsError({...isError, password: e.target.value === ''})
  }
  const handleSubmit = async() => {
    const res = await user.register(form)
    console.log(res)
    if(res.success === true){
      toast({
        title: `Login Success`,
        status: 'success',
        isClosable: true,
        duration: 3000,
        position: 'bottom-right'
      })
      navigate('/')
    } else{
      toast({
        title: res.msg,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right'
      })
    }
  }
  return (
    <Center h='100vh'>
      <Container>
        <form onSubmit={handleSubmit}>
          <Center m='5' fontSize='x-large' color={textColor}>Register</Center>
          <FormControl isInvalid={isError.username}>
            <FormLabel color={textColor}>Username</FormLabel>
            <Input color={textColor} type='text' value={form.username} onChange={handleUsernameInputChange} />
            {!isError.username ? (
              <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage mb='1.5'>Username is required.</FormErrorMessage>
                )}
          </FormControl>
          <FormControl isInvalid={isError.email}>
            <FormLabel color={textColor}>Email</FormLabel>
            <Input color={textColor} type='email' value={form.email} onChange={handleEmailInputChange} />
            {!isError.email ? (
              <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage mb='1.5'>Email is required.</FormErrorMessage>
                )}
          </FormControl>
          <FormControl isInvalid={isError.password}>
            <FormLabel color={textColor}>Password</FormLabel>
             <InputGroup>
              <Input color={textColor} type={isPassword? 'password' : 'text'} value={form.password} onChange={handlePasswordInputChange} />
              <InputRightElement>
              <Button h='1.75rem' size='sm' mx='2' onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? <ViewIcon/> : <ViewOffIcon/>}
              </Button>
              </InputRightElement>
            </InputGroup>
            {!isError.password ? (
              <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage mb='1.5'>Password is required.</FormErrorMessage>
                )}
          </FormControl>
          <Button type="submit" colorScheme='blue' mt='1.5'>Submit</Button>
        </form>
      </Container>
    </Center>
  )
}

export default Register