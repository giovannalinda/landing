const { GlobalStyles } = require('../src/styles')
const { RouterContext } = require('next/dist/shared/lib/router-context')

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      {Story()}
    </>
  ),
]
