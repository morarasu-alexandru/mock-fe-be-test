import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { refreshTokenMock } from "../constants";

const port = 3001;

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.get("/test", (req, res) => {
  const { authorization } = req.headers;
  if (authorization === "1") {
    res.send("Success data");
  } else {
    res.sendStatus(401);
  }
});

app.post("/token", (req, res) => {
  if (req.body.refreshToken === refreshTokenMock) {
    res.json({ token: "1" });
  } else {
    res.status(404);
    res.send("Invalid refresh token");
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
