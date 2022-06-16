### Hi there! 👋

> Este projeto foi desenvolvido com carinho e da melhor forma que pude com o conhecimento que tenho, espero que curta!

## What is inside?

- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Styled Components](https://styled-components.com/docs)
- [Next](https://nextjs.org/docs)
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Husky](https://github.com/typicode/husky)
- [Framer Motion](https://www.framer.com/docs)
- [Commitlint](https://commitlint.js.org/#/)

## Features
- Internationalization
- Responsive

## Getting Started

### Run with Docker Compose:

```bash
docker-compose up --build
```

or

### Install dependencies:

```bash
yarn
```

or

```bash
npm install
```

### Run development server

```bash
yarn dev
```

or 

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

```
└── src
    ├── __helpers__
    ├── assets
    ├── components
    ├── libs
    ├── pages
    ├── styles
```

| Folder         | Description                                          |
| ----------     | -------------------------------------------          |
| **helpers**    | Functions to handle the tests                        |
| **assets**     | Export images                                        |
| **components** | Page components                                      |
| **libs**       | Utilities                                            |
| **pages**      | Pages components                                     |
| **styles**     | Application styles                                   |

## Conventions

### Components

```
└── <MyComponent>
    ├── <MyComponent>.tsx
    ├── <MyComponent>.test.tsx
    ├── <MyComponent>.styled.ts
    ├── <MyComponent>.stories.tsx
    └── index.ts
```

| Files           | Description                                    |
| --------------- | ---------------------------------------------- |
| **.tsx**        | Component implementation                       |
| **.test.tsx**   | Component tests                                |
| **.styled.ts**  | Component stylesheet using `styled-components` |
| **.stories.tsx**| Storybook component                            |
| **index.ts**    | File to export the component                   |

## Commands

- `dev`: run development server
- `build`: creates the production build version
- `lint`: runs the linter in all components and pages
- `test`: runs jest to test all components and pages
- `storybook`: runs docs with storybook

<p align="center">Made with 💜 by Giovanna</p>
