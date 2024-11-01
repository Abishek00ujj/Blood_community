const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
require("./connection/connection");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1", auth);

app.listen(1998, () => {
    console.log('Server is running on http://localhost:1998');
});
