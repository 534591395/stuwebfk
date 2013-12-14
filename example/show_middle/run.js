var App = require("../../").App,
    app = new App(),
    middle01 = require("./middle01"),
    middle02 = require("./middle02");

app.use(middle01);
app.use(middle02);

app.listen(3000);
