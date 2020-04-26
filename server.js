var express = require("express");

var app = express();

PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes.js")(app);
// require("/routing/apiRoutes.js")(app);

app.listen(PORT, () => console.log("listning on http://localhost:" + PORT));
