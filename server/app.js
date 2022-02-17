const express = require("express");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT || 8080;
const cors = require('cors')
require("dotenv").config();

const corsOptions = {
    origin: "*",
    method: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true
}
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, () => {
    console.log(PORT, "번 포트에서 대기 중");
});