require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route");
const jobsRouter = require("./routes/jobs.route");
const userRouter = require("./routes/user.route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/user", userRouter);

module.exports = app;
