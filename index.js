const express = require('express');
const app = express();
const { navArray } = require('./nav');
const PORT = 9000;
app.set('view engine', 'ejs');

app.use(express.static("assets"))

app.use((req, _, next) => {
    console.log("new request", req.method, req.url)
    next();
})

app.get("/", (_, res) => {
    res.render("pages/index.ejs", { nav: navArray });
})

app.get("/team", (_, res) => {
    res.render("pages/team.ejs", { nav: navArray });
})

app.get("/about", (_, res) => {
    res.render("pages/about.ejs", { nav: navArray });
})

app.get("/contact", (_, res) => {
    res.render("pages/contact.ejs", { nav: navArray });
})


app.use((_, res) => {
    res.sendFile(__dirname + "/assets/error.html")
})

app.listen(PORT, () => { console.log('listening on port', PORT) })