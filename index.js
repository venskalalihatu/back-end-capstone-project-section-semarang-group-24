import express from "express";
import PackageRouter from "./Routes/packageroutes.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(express.json());
app.use(PackageRouter);

app.listen(PORT, () => console.log(`app running on port ${PORT}`));