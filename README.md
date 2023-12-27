# Enkeltje Zelfstandig Website

This is a website build for Enkeltje zelfstandig for cooking courses, this website is mainly based on front-end as i personally would use a external app for managing the data due to security reasons.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

see laracasts vue 3 step by step for introduction to more plugins and tools.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev & json-server --watch db.json -p 3001  
```
or seperate as
```sh
npm run dev
json-server --watch db.json -p 3001  
```

### Compile and Minify for Production (no need yet)

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```