var express = require("express");

var app = express();

PORT = process.env.PORT || 3000;

require("/routing/htmlRoutes.js")(app);
// require("/routing/apiRoutes.js")(app);

app.listen(PORT, () => console.log("listning on port: ", PORT));
