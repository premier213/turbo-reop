import '@config/global.css'
import { Darkmode } from '@config/theme'
import { useDarkMode } from 'storybook-dark-mode'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => {
    let currentTheme = 'light'
    if (useDarkMode()) {
      currentTheme = 'dark'
    }
    return <Darkmode story={Story} darkmode={currentTheme} />
  },
]
