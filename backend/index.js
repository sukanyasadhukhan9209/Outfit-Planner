const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello server!");
});

app.use("/api/v1/auth", require("./routes/userRoutes"));
app.use("/api/v1/user", require("./routes/eventRoutes"));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
