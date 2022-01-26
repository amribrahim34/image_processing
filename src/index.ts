import express from "express";
import routes from "./routes/index";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use("/cached", express.static("cached"));

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}`);
});

export default app;
