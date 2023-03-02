import {
  Box,
  Flex,
  Spacer,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Avatar
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Link } from 'react-router-dom';
import routes from './../../router/routes';

const Nav = ()=> {
  const textColor = useColorModeValue('black', 'white')
  const sessionInfo = JSON.parse(localStorage.getItem('SESSION_INFO'))
  const handleLogout = ()=>{
    localStorage.removeItem('SESSION_INFO')
    localStorage.removeItem('token')
    window.location.reload();
  }

  return (
    <Flex color={textColor} minWidth='max-content' alignItems='center' gap='2'>
      <Box>
        <Link to={routes.home}>
          Sync-A
        </Link>
      </Box>
      <Spacer/>
      <Box>
        <ColorModeSwitcher/>
        {sessionInfo && <Menu>
          <MenuButton as={Avatar} name={sessionInfo.usename} src={sessionInfo.profileImage} colorScheme='pink'>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Profile'>
              <MenuItem>
                <Link to={routes.my_account}>
                  Cuenta
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to={routes.my_store}>
                  Mi tienda
                </Link>
              </MenuItem>
              <MenuItem>Payments </MenuItem>
              <MenuItem onClick={handleLogout}>Logout </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>}
      </Box>
    </Flex>
  )
}

export default Nav