import path from "path";
import fs from "fs";

import { createElement } from "react";
import { renderToString } from "react-dom/server";

import express from "express";
import App from "../src/App";

const PORT = process.env.PORT ?? 8000;
const app = express();

app.use(express.static("dist"));

app.use("/", (req, res, next) => {
  fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${renderToString(createElement(App))}</div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
