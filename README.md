# Vue Voices

Technical test application that loads a list of 'voices' from a json and let the user filter and add them to the favorite category.

## Demo

https://epic-rosalind-1edea5.netlify.app/

## Tech stack

- Core Framework: Vue.js
- Style Framework: Bootstrap
- CSS Preprocessor: SASS
- Internationalization: Vue-i18n.
- State management: Vuex

## Extra Features

- Favorites are maintained inside the localStorage so, if the user reloads, his/her favorites are still there.
- Language: English and Spanish are implemented. The starting language is picked from the browsers language. If it's not available English is taken as default. The language can be switch in the translate icon afterwards.
- Custom Scrollbar: for a more modern looking app! (only for Webkit based browsers).

## Tested On

- Desktop: Chrome, Brave, Edge and Firefox
- Mobile devices: Xiaomi MI8, iPad Pro

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
