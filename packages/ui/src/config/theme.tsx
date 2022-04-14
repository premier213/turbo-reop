import { ThemeProvider, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import { amber, deepOrange, green, grey } from '@mui/material/colors'

console.log(1)

const getDesignTokens = (mode: PaletteMode): JSX.Element => ({
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

export const Darkmode = ({ story, darkmode }: any) => {
  const theme = createTheme(getDesignTokens(darkmode))

  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>
}
