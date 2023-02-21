const getConst = require('./Tools/constants');

const express = require('express');
const app = express();
const port = getConst.APP_PORT;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve(`${getConst.ADMIN_PAGES_PATH}`));
app.use(express.static(path.resolve(`${getConst.APP_STATIC_FOLDER}`)));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
 res.send('Hello World!')
});

app.route('/backoffice-login')
 .get((req, res) => {
  res.render('login');
 })
 .post(async (req, res) => {
  const { email, password } = req.body;
  const dbConnection = require('./db/dbConnect');
  const UserModels = require("./models/UserModels");

  if (!email || !password) {
   return res.status(422).json({ error: "Enter your registered Email & Password" });
  }

  const Result = await UserModels.create({ email, password });
  if (Result) {
   return res.json({ status: "User Created Successfully.", data: Result });
  }

 })

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})