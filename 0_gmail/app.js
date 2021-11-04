import express from "express";
import exphbs from "express-handlebars";

import path from "path";
import { fileURLToPath } from "url";

// * link router
import homeRouter from "./routers/home.js";

const app = express();
const port = 80;

// * express-handlebars
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// *path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname + "/public"));

// * connect routers
app.use("", homeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
