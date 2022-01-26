import express from "express";
import routes from "./routes/index";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use("/cached", express.static("cached"));

app.use("/api", routes);

app.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200).send("Hello World!");
});

if (process.env.APP_ENV != 'testing') {
  app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
  });
}


export default app;
