const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const userdata=require("./routes/userdata"); 
const campData=require("./routes/camppost");
const patientdata=require("./routes/emergencypost");
require("./connection/connection");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use("/api/v1", auth);
app.use("/api/v3",campData);
app.use("/api/v2",userdata);
app.use("/api/v3",patientdata);
app.listen(1998, () => {
    console.log('Server is running on http://localhost:1998');
});
