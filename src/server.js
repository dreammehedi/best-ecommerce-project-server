const app = require("./app");
const { PORT } = require("./secret");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
