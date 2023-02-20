const getConst = require('./Tools/constants');

const express = require('express');
const app = express();
const port = getConst.APP_PORT;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.resolve(`${getConst.ADMIN_PAGES_PATH}`));
app.use(express.static(path.resolve(`${getConst.APP_STATIC_FOLDER}`)));

app.get('/', (req, res) => {
 res.send('Hello World!')
});

app.get('/backoffice-login', (req, res) => {
 res.render('login');
});
app.post('/backoffice-login', (req, res) => {
 res.render('login');
});

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})