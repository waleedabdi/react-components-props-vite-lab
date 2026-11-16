# Underreacted Blog

A React blog built with Vite to practice components, props, and rendering a list
of articles.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/`). To run
the tests or create a production build:

```bash
npm test -- --run
npm run build
```

## Component structure

```text
App
├── Header
├── About
└── ArticleList
    └── Article (one per post)
```

- **App** is the root component. It supplies blog data to `Header`, `About`,
  and `ArticleList`.
- **Header** receives the blog name from `App` and displays it as the page
  heading.
- **About** receives the logo image and blog description from `App`.
- **ArticleList** receives the post array from `App`, then creates one `Article`
  child for each post.
- **Article** receives its post fields from `ArticleList` and displays the
  title, date, preview, and optional reading-time indicator.

The site data is defined in `src/data/blog.js`. `App` can also receive a `blog`
prop to display a different blog without changing the components.

## Screenshot

![Screenshot of the blog site](./images/demo.png)
