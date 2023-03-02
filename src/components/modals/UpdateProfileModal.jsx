
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import user from '../../api/user';
import { useState } from 'react';


const UpdateProfileModal = ({activate, toggleActivate, option})=>{
  const textColor = useColorModeValue('black', 'white')
  const toast = useToast()

  const [isError, setIsError]  = useState({
    password: null,
    form: null
  })
  const [password, setPassword] = useState('')
  const [isPassword, setIsPassword] = useState(true)
  const [isPassword2, setIsPassword2] = useState(true)
  const [form, setForm] = useState('')

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value)
    setIsError({...isError, password: e.target.value === ''})
  }
  const handleFormInputChange = (e) => {
    setForm(e.target.value)
    setIsError({...isError, form: e.target.value === ''})
  }
  const handleToggleActivate = () => {
    setIsError({password: null})
    setPassword('')
    setIsPassword(true)
    setIsPassword2(true)
    setForm('')
    toggleActivate()
  }
  const onSubmit = async()=>{
    const data = {}
    data[option] = form
    const res = await user.update({data, password})
    console.log(res)
    if(res.success){
      toast({
        title: `${option} updated`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
      handleToggleActivate()
    } else{
      if(res.msg){
        toast({
          title: `Incorrect password`,
          status: 'warning',
          duration: 4000,
          isClosable: true,
        })
        setIsError({...isError, password: true})
      } else{
        toast({
          title: `Server error`,
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
        handleToggleActivate()
      }
    }
    
  }
  return (
    <div>
      <Modal blockScrollOnMount={false} isOpen={activate} onClose={handleToggleActivate}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your password</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb='5'>
            <Text fontSize='sm' fontWeight='normal' mb='1rem'>
              To make a change in your account it is necessary to verify your password.
            </Text>
            <form onSubmit={onSubmit}>
              <FormControl mb='10' isInvalid={isError.password}>
                <FormLabel color={textColor}>Password</FormLabel>
                <InputGroup>
                  <Input color={textColor} type={isPassword? 'password' : 'text'} value={password} onChange={handlePasswordInputChange} />
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
              <FormControl mb='10' isInvalid={isError.form}>
                <FormLabel color={textColor}>{`Set your new ${option}`}</FormLabel>
                <InputGroup>
                  <Input color={textColor} type={option === 'password' && isPassword2? 'password' : 'text'} value={form} onChange={handleFormInputChange} />
                  {option === 'password' && <InputRightElement>
                    <Button h='1.75rem' size='sm' mx='2' onClick={() => setIsPassword2(!isPassword2)}>
                      {isPassword2 ? <ViewIcon color={textColor}/> : <ViewOffIcon color={textColor}/>}
                    </Button>
                  </InputRightElement>}
                </InputGroup>
                {!isError.password ? (
                  <FormHelperText></FormHelperText>
                  ) : (
                    <FormErrorMessage mb='2.5'>{`${option} is required.`}</FormErrorMessage>
                    )}
              </FormControl>
              <Button colorScheme='blue' mr={3} onClick={handleToggleActivate}>
                Cancel
              </Button>
              <Button type='submit' variant='ghost'>Send</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default UpdateProfileModal