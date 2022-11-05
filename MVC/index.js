const express = require("express");
const usersRouter = require("./routes/routes");
const productsRouter = require("./routes/productRoute");

const app = express();
const PORT = 5080;

app.use(express.urlencoded({ extended: true }));
app.use(usersRouter);
app.use(productsRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "resourch not found",
    Error: "Something wrong",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
