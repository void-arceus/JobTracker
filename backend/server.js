const connectDB = require("./src/config/db");
const app = require("./src/app");

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server is running at PORT:", 3000);
});
