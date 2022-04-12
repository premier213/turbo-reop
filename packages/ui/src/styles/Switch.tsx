import { ThemeProvider } from '@mui/material/styles'
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

export const Darkmode = ({ story, darkmode }: any): JSX.Element => {
  const theme = createTheme(getDesignTokens(darkmode))
  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>
}
