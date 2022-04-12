import { PaletteMode } from '@mui/material'
import { amber, deepOrange, green, grey } from '@mui/material/colors'
import { createTheme, ThemeProvider } from '@mui/material/styles'

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

let tt

window.addEventListener('storage', () => {
  tt = JSON.parse(window.localStorage.getItem('sb-addon-themes-3')).current
})

console.log(tt)

export const theme = createTheme(getDesignTokens('dark'))
