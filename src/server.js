const app = require("./app");
const connectDB = require("./configuration/dbConfig");
const { PORT } = require("./secret");

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
  await connectDB();
});
