const express = require("express");

const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");

const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// DATABASE CONNECTION
connectDB();

// ROUTES
app.use("/todos", todoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});