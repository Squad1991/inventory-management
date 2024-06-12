# Movie Database

## Folder Structure

```
├── src
|   ├── assets
│   ├── components
│   ├── routes
│   ├── hooks
│   ├── typings
|   |   ├── common
│   ├── pages
│   └── utils
└── App.tsx
└── README.md
```

## Dependencies

- Packaging
  - [yarn](https://yarnpkg.com/)
  - [Node 18](https://nodejs.org/en)
- Styling
  - [Compiled react](https://compiledcssinjs.com/)
- Testing
  - [vitest](https://vitest.dev/)
- Icons
  - [React icons](https://react-icons.github.io/)
- Third party components
  - [React select](https://react-select.com/)
  - [React skeleton](https://www.npmjs.com/package/react-loading-skeleton)
  - [React tooltip](https://www.npmjs.com/package/rc-tooltip)
- Bundling
  - [Parcel](https://parceljs.org/)
- Typing
  - [Typescript](https://www.typescriptlang.org/)

## App Navigation

![My image](./src/assets//app-design.png).

### Home Page:

- Search Bar: Allows users to input search queries to search movie.
- Movie List: Displays a list of movies (popular movies by default).
- Movie Cards: Each movie in the list is represented by a card. Clicking on a movie card redirects to the Movie Info Page.

### Movie Info Page:

- Movie Details: Shows detailed information about the movie (title, synopsis, cast, etc.).
- Reviews Section: Displays reviews for the movie. Each review card can be clicked to open the review on an external site in a new tab.
- Similar Movies: Displays a list of similar movies. Clicking on a similar movie card updates the Movie Info Page with information about the selected movie.
