import {
  Center,
  VStack,
  Button
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import routes from './../router/routes';



const MyStore = ()=>{
  return(
    <VStack>
      <div>Aun no tienes publicaciones</div>
      <Button colorScheme='blue'>
        <Link to={routes.new_product}>
          Crea un producto
        </Link>
      </Button>
    </VStack>
  )
}

export default MyStore