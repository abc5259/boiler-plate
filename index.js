const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://LeeJaeHoon:abcd1234@boilerplate-ezjou.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongodb Connect!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () => console.log(`Listening on ${port}`));
