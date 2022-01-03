const dotenv = require("dotenv");
const connectDB = require("./config/DB");
const app = require("./app");

dotenv.config();
connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port  ${port}`);
});
