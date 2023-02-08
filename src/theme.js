// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const theme = {
  config : {
    initialColorMode: 'dark', // 'dark' | 'light'
    useSystemColorMode: true,
  },
  colors: {
    bg: {
      // dark: '#1a202c',
      dark: '#ff6fff',
      light: '#fffff1'
    }
  }
}

// 3. extend the theme


export default extendTheme(theme)