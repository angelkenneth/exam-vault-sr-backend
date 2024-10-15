# NextJS GraphQL

## Prerequisites

1. NodeJS 18
2. [pnpm](https://pnpm.io/installation)

## Setup

### TLDR

```bash
pnpm install && \
pnpm exec drizzle-kit migrate
```

### Steps

1. `cd` into the root directory
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up the SQLite3 database and its schemas:

   ```bash
   pnpm exec drizzle-kit migrate
   ```

## Project Initialization

```bash
pnpm create next-app . --typescript --eslint --no-tailwind --src-dir --app --import-alias "@/*"
```

## References

1. [How to install nextjs with pnpm](https://medium.com/frontendweb/how-to-install-nextjs-with-pnpm-a958f1b3e9ad)
2. [API Routes with Next.js 14 — Course part 10](https://www.youtube.com/watch?v=gEB3ckYeZF4)
3. [Pages with Next.js 14 — Course part 4](https://www.youtube.com/watch?v=JViNLW_m7uU)
4. [Fetching with Next.js 14 — Course part 15](https://www.youtube.com/watch?v=uR67O6sNjbg)
5. [How to Build Forms in React](https://www.freecodecamp.org/news/how-to-build-forms-in-react/)
6. [Guide to app architecture](https://developer.android.com/topic/architecture)
7. [How to connect Next.js to a database (in 5 minutes)](https://www.youtube.com/watch?v=wTGaoB8EL-4)
8. [Get Started with Drizzle and SQLite](https://orm.drizzle.team/docs/get-started/sqlite-new)
9. [Forms and Mutations > Form validation](https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#form-validation)
10. [Setting up Vitest with Next.js](https://nextjs.org/docs/app/building-your-application/testing/vitest)
11. [Building a NextJS backend with GraphQL and MongoDB](https://medium.com/womenintechnology/building-a-nextjs-backend-with-graphql-and-mongodb-fa6ca1307478 )
