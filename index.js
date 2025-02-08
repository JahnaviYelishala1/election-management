
require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
console.log("MONGO_URI:", process.env.MONGO_URI);
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined! Check your environment variables.");
  process.exit(1);
}

//connect to mongodb and listen to requests
mongoose.connect(process.env.MONGO_URI, connectionOptions);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => {
  console.log("Connected to the database");
});

//register view engine
app.set("view engine", "ejs");
//middleware and static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Provide the extended option
app.use(express.static("uploads"));

//express layouts
var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);
app.set("layout", "layouts/layout");

//polling agent and polling unit routes
const agentRoutes = require("./routes/pollingAgentRoutes");
const unitRoutes = require("./routes/pollingUnitRoutes");
app.use("/pollingAgent", agentRoutes);
app.use("/pollingUnit", unitRoutes);

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
