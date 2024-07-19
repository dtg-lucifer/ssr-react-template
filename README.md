# SSR App with React.js and Express.js

![image](https://github.com/user-attachments/assets/a6cf2f82-393a-4282-923f-3971e1e61c81)


It is a basic template to showcase how a react app can be made server side rendered using express.js. It simply renders a react app on the server and sends the html to the client. The client then hydrates the app and makes it interactive.

> As for the build tool it uses **ESBuild**. It is a very fast build tool and is written in Go. It is very fast and is a good alternative to webpack.
> ***Anyone can take this repository as the template and build their own setups.***

# What does it do?

This uses simple CSS for styling as I wanted to keep it simple. Also i couldn't figure out how can i setup the more advanced styling tools such as **SASS** or **LESS** or **TailwindCSS** with **ESBuild**. If anyone think they can make that working then it's totally fine.

Everyone is welcome to contribute to this repository. And for each contribution please create a pull reaquest therefore i will merge each of the pull requests so that the idea od SSR with react and express will be spread out to more and more people around the react community.

This repository also helpe people to understand the SSR concept before diving deep into more advanced frameworks like **Next.js** or **Gatsby.js**.

# How to use this repository?

- Step 1: Clone the repository.
- Step 2: Install the dependencies.
- Step 3: Build the project.
- Step 4: Start the server.

```bash
# Step 1: Clone the repository
git clone git@github.com:dtg-lucifer/ssr-react-template.git
```

```bash
# Step 2: Install the dependencies
npm install
```

```bash
# Step 3: Build the project
npm run build
```

```bash
# Step 4: Start the server
npm start
```

> The server will start at `http://localhost:8000`. Open the URL in the browser to see the server-side rendered React app.

# Project structure of the repository

> The **master** root directory and the folder structure of the repository is as follows:

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

> There is also another example with the good old CRA which is much more convinient with the modern tools as that is the most used tool over the past decade, but it includes the feature of SSR with express.js. It would be better for anyone who is just gonna use the SSR and dont wanna spend time figuring out how can the things be done on this new setupt because the **ESBuild** one lacks a lot of features such as **Hot reload**, modern styling solutions such as **SASS** or **LESS** or **TailwindCSS**.

**That repository is available at** **_[this repo - SSR with CRA](https://github.com/dtg-lucifer/React-18-SSR-Implementation.git)_**

> The folder structure of the repository is as follows:

```bash
├── public/
├── server/
│ ├── index.js
│ └── server.js
├── src/
│ ├── components/
│ │ └── HomeModule.js
│ ├── About.js
│ ├── App.css
│ ├── App.js
│ ├── Home.js
│ ├── index.css
│ ├── index.js
│ └── reportWebVitals.js
├── .gitignore
├── package-lock.json
├── package.json
└── yarn.lock
```


- **public/**: Contains static files.
- **server/**: Contains server-side code.
  - **index.js**: The main server index file.
  - **server.js**: Server logic file.
- **src/**: Contains source code.
  - **components/**: Contains reusable components.
    - **HomeModule.js**: Home module component.
  - **About.js**: About page component.
  - **App.css**: CSS styles for the App component.
  - **App.js**: Main React component.
  - **Home.js**: Home page component.
  - **index.css**: Global CSS styles.
  - **index.js**: Entry point for React application.
  - **reportWebVitals.js**: File for measuring performance in the app.
- **.gitignore**: Git ignore file.
- **package-lock.json**: Lock file for npm dependencies.
- **package.json**: Manifest file for npm.
- **yarn.lock**: Lock file for Yarn dependencies.

---

# Contribution

Anyone can contribute to this repository. Just fork the repository and create a pull request. I will merge each of the pull requests so that the idea of SSR with react and express will be spread out to more and more people around the react community.

- Step 1: Fork the repository.
- Step 2: Clone the repository.
- Step 3: Create a new branch.
- Step 4: Make changes in the repository.
- Step 5: Push the changes.
- Step 6: Create a pull request.

Otherwise anyone can drop a mail to me directly at my email [Email](mailto:dev.bosepiush@gmail.com) and i will add them as the contributor to the repository.

# License

This repository is licensed under the MIT License. Therefore anyone can use this repository as the template and build their own setups. The license file is available in the repository. Anyone can check the license file for more information.
