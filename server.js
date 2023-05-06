const dotenv = require("dotenv");

dotenv.config({ path: `./config.env` });

const app = require("./App");

// to use dotenv in the whole project it should be defined on the top

// console.log(app.get("env"));
// console.log(process.env);

const port = 3000;
app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
