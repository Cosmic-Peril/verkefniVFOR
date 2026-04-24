const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

const indexRoutes = require("./routes/index");
const menuRoutes = require("./routes/menu");
const gullfossRoutes = require("./routes/gullfoss");

app.use("/", indexRoutes);
app.use("/menu", menuRoutes);
app.use("/gullfoss", gullfossRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
