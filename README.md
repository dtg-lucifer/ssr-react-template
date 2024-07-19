# SSR App with React.js and Express.js

It is a basic template to showcase how a react app can be made server side rendered using express.js. It simply renders a react app on the server and sends the html to the client. The client then hydrates the app and makes it interactive.

> As for the build tool it uses **ESBuild**. It is a very fast build tool and is written in Go. It is very fast and is a good alternative to webpack.
> ***Anyone can take this repository as the template and build their own setups.***

# What does it do?

This uses simple CSS for styling as I wanted to keep it simple. Also i couldn't figure out how can i setup the more advanced styling tools such as **SASS** or **LESS** or **TailwindCSS** with **ESBuild**. If anyone think they can make that working then it's totally fine.

Everyone is welcome to contribute to this repository. And for each contribution please create a pull reaquest therefore i will merge each of the pull requests so that the idea od SSR with react and express will be spread out to more and more people around the react community.

This repository also helpe people to understand the SSR concept before diving deep into more advanced frameworks like **Next.js** or **Gatsby.js**.

# Project structure of the repository

The main root directory and the folder structure of the repository is as follows:

```bash
.
├── build/
├── dist/
├── node_modules/
├── public/
│ └── index.html
├── server/
│ └── server.ts
├── src/
│ ├── styles/
│ │ ├── __globals.css
│ │ └── app.css
│ ├── App.tsx
│ └── index.tsx
├── .gitignore
├── esbuild.config.mjs
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```


- **build/**: Directory for build artifacts.
- **dist/**: Directory for distribution files.
- **node_modules/**: Directory for installed npm packages.
- **public/**: Contains static files.
  - **index.html**: The main HTML file.
- **server/**: Contains server-side code.
  - **server.ts**: The main server file.
- **src/**: Contains source code.
  - **styles/**: Contains CSS files.
    - **__globals.css**: Global CSS styles.
    - **app.css**: App-specific CSS styles.
  - **App.tsx**: Main React component.
  - **index.tsx**: Entry point for React application.
- **.gitignore**: Git ignore file.
- **esbuild.config.mjs**: Configuration for esbuild.
- **package-lock.json**: Lock file for npm dependencies.
- **package.json**: Manifest file for npm.
- **pnpm-lock.yaml**: Lock file for pnpm dependencies.
- **README.md**: Project documentation file.
- **tsconfig.json**: TypeScript configuration file.

# Contribution

Anyone can contribute to this repository. Just fork the repository and create a pull request. I will merge each of the pull requests so that the idea of SSR with react and express will be spread out to more and more people around the react community.