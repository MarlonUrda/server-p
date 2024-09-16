const operator = require("./testing.js");
const isEven = require("./isEven.js");

const express = require("express");
const cors = require("cors");
const session = require("express-session");

const host = "0.0.0.0";
const port = 3000;

const app = express();

app.use(express.json()); // for parsing JSON bodies
//192.168.0.126

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 5 * 80 * 24 * 60 * 60,
      sameSite: "lax",
    },
  })
);

app.post("/greetings", (req, res) => {
  if (!req.body.username) {
    return res.status(400).json({ error: "User name is required" });
  }

  const { username } = req.body;

  console.log(`The user: ${username} has made a petition to the server.`);
  req.session.user = username;
  res.status(200).json({ message: `Hello ${username}` });
});

app.post("/math", (req, res) => {
  console.log(req.body);

  operator(req, res);
});

app.post("/even", (req, res) => {
  console.log(req.body);

  isEven(req, res);
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
