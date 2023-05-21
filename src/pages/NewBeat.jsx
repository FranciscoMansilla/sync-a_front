import {
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  useColorModeValue,
  Textarea,
  VStack,
  Select,
  Tag,
  TagCloseButton,
  TagLabel,
  Checkbox,
  Stack,
  InputGroup, InputLeftElement,
  Card, CardHeader, CardBody, Heading, Text, Box, StackDivider

} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import category from '../api/category';
import licence from '../api/licence';

const NewBeat = ()=> {
  const textColor = useColorModeValue('black', 'white')
  const [categories, setCategories] = useState([])
  const [licences, setLicences] = useState([])

  
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: [],
    licences: []
  })
  const [cover, setCover] = useState(null)
  const [isError, setIsError] = useState({
    title: null,
    description: null,
    tags: null,
    licences: null
  })
  const handleInputsChange = (e) => {
    const name = e.target.name
    setForm({...form, [name]: e.target.value})
    setIsError({...isError, [name]: e.target.value === ''})
  }
  const handleTagSelect = (e) => {
    if(!form.tags.includes(Number(e.target.value))){
      if(form.tags.length <= 3){
        setForm({...form, tags: [...form.tags, Number(e.target.value)]})
        // setIsError({...isError, tags: form.tags.length >= 3})
      }
    }
  }
  const clickTagClose = (value)=>{
    setForm({...form, tags: eliminarElemento(form.tags, value)})
    console.log(form.tags.length)
    // setIsError({...isError, tags: form.tags.length > 3})
  }
  const eliminarElemento = (array, elemento) => {
    return array.filter(function(value) {
      return value !== elemento;
    });
  }
  const setCheckedItems = (data) => {
    console.log(data)
    if(form.licences.includes(data)){
      setForm({...form, licences: eliminarElemento(form.licences, data)})
    } else {
      setForm({...form, licences: [...form.licences, data]})
    }
  }
  const setAmountByLicence = (amount, _id)=>{
    const copyForm = [...form.licences]
    const index = copyForm.findIndex(licence => licence._id === _id)
    copyForm[index].amount = Number(amount)
    setForm({...form, licences: copyForm})
  }
  const getCategories = async ()=> {
    const data = await category.getAllCategories()
    data.success && setCategories(data.categories)
  }
  const getLicences = async ()=> {
    const data = await licence.getAllLicences()
    data.success && setLicences(data.licences)
  }
  useEffect(()=>{
    getCategories()
    getLicences()
  },[])
  useEffect(()=>{
    console.log(form)
  },[form])
  useEffect(()=>{
    setIsError({...isError, tags: form.tags.length > 3})
  },[form.tags])
  return (
    <VStack>
      <h4>Nuevo Beat</h4>
      <form action="submit">
        <FormControl isInvalid={isError.title}>
              <FormLabel color={textColor}>Titulo</FormLabel>
              <Input name="title" color={textColor} type='text' value={form.title} onChange={handleInputsChange} />
              {!isError.title ? (
                <FormHelperText></FormHelperText>
                ) : (
              <FormErrorMessage mb='1.5'>El titulo es necesario.</FormErrorMessage>
              )}
        </FormControl>
        <FormControl isInvalid={isError.description}>
              <FormLabel color={textColor}>Descripción</FormLabel>
              <Textarea name="description" color={textColor} type='text' value={form.description} onChange={handleInputsChange} />
              {!isError.description ? (
                <FormHelperText></FormHelperText>
                ) : (
              <FormErrorMessage mb='1.5'>La descripción es necesaria.</FormErrorMessage>
              )}
        </FormControl>
        <FormControl isInvalid={isError.tags}>
              <FormLabel color={textColor}>Tags</FormLabel>
              <HStack my='3' spacing={4}>
                {form.tags.length && categories.length && categories.map((category) => {
                  if(form.tags.includes(category.code)){
                    return <Tag
                      size='md'
                      borderRadius='full'
                      variant='solid'
                      colorScheme='blue'
                    >
                      <TagLabel>{category.name}</TagLabel>
                      <TagCloseButton onClick={()=> clickTagClose(category.code)}/>
                    </Tag>
                  }
                  return <></>
                }
                )}
              </HStack>
              <Select onChange={handleTagSelect} name='tags' variant='outline' color={textColor} placeholder='categorias' >
                {categories.length >0 && categories.map( category => <option value={category.code}>{category.name}</option> )}
              </Select>
              {!isError.tags ? (
                <FormHelperText></FormHelperText>
                ) : (
              <FormErrorMessage mb='1.5'>Maximo tres categorias.</FormErrorMessage>
              )}
        </FormControl>
        <FormControl isInvalid={isError.licences}>
          <FormLabel color={textColor}>Selecciona las licencias</FormLabel>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                {licences.length && licences.map((licence, index)=>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      <Checkbox
                        isChecked={form.licences.includes(licence)}
                        onChange={(e) => setCheckedItems(licence)}
                      >
                        {licence.name}
                      </Checkbox>
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {licence.description}
                    </Text>
                    {
                      form.licences.includes(licence) && <InputGroup>
                        <InputLeftElement
                          pointerEvents='none'
                          color='gray.300'
                          fontSize='1.2em'
                          children='$'
                        />
                        <Input
                          placeholder='Ingresa el costo de la licencia'
                          type='number'
                          value={form.licences[index]?.amount}
                          onChange={(e)=>setAmountByLicence(e.target.value, licences[index]._id)}
                        />
                      </InputGroup>
                    }
                  </Box>
                )}
              </Stack>
            </CardBody>
          </Card>
          {!isError.licences ? (
            <FormHelperText></FormHelperText>
            ) : (
          <FormErrorMessage mb='1.5'>Description is required.</FormErrorMessage>
          )}
        </FormControl>
        <Input
          type='file'
          value={cover}
          onChange={setCover}
          placeholder='cover'
          size='sm'
        />
      </form>
    </VStack>
  )
}
export default NewBeat