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
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

import user from './../api/user';


const Login = ()=> {
  const textColor = useColorModeValue('black', 'white')
  const toast = useToast()
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: 'fran@synca.com',
    password: 'SYNCA2023'
  })
  const [isError, setIsError] = useState({
    email: null,
    password: null
  })
  const [isPassword, setIsPassword] = useState(true)
  const handleEmailInputChange = (e) => {
    setForm({...form, email: e.target.value})
    setIsError({...isError, email: e.target.value === ''}) 
  }
  const handlePasswordInputChange = (e) => {
    setForm({...form, password: e.target.value})
    setIsError({...isError, password: e.target.value === ''})
  }
  const handleSubmit = async()=>{
    const res = await user.login(form)
    if(res.success){
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
        <Center m='5' fontSize='x-large' color={textColor}>Login</Center>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={isError.email}>
            <FormLabel color={textColor}>Email</FormLabel>
            <Input color={textColor} type='email' value={form.email} onChange={handleEmailInputChange} />
            {!isError.email ? (
              <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage mb='2.5'>Email is required.</FormErrorMessage>
                )}
          </FormControl>
          <FormControl isInvalid={isError.password}>
            <FormLabel color={textColor}>Password</FormLabel>
            <InputGroup>
              <Input color={textColor} type={isPassword? 'password' : 'text'} value={form.password} onChange={handlePasswordInputChange} />
              <InputRightElement>
              <Button h='1.75rem' size='sm' mx='2' onClick={() => setIsPassword(!isPassword)}>
                {isPassword ? <ViewIcon color={textColor}/> : <ViewOffIcon color={textColor}/>}
              </Button>
              </InputRightElement>
            </InputGroup>
            {!isError.password ? (
              <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage mb='2.5'>Password is required.</FormErrorMessage>
                )}
          </FormControl>
          <Button mt='2.5' type="submit" colorScheme='blue' >Submit</Button>
        </form>
      </Container>
    </Center>
  )
}

export default Login