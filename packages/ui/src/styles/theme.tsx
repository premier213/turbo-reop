import { PaletteMode } from '@mui/material'
import { amber, deepOrange, green, grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: green,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
})

// var btn = document.getBy('button')
// btn.addEventListener(
//   'click',
//   () => {
//     nn = JSON.parse(
//       window.localStorage.getItem('sb-addon-themes-3') as string,
//     ).current
//   },
//   false,
// )

// console.log(useDarkMode())

export const theme = createTheme(getDesignTokens('dark'))
console.log('🚀 ~ file: theme.tsx ~ line 51 ~ theme', theme)
