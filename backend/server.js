const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware.js");
const port = process.env.PORT || 3003;
const connectDB = require("./config/db.js");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes.js"));
app.use("/api/users", require("./routes/userRoutes.js"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
