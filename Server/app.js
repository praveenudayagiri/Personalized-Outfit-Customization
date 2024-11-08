const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");
const { userAuth } = require('./middleware/auth');
 const cors = require('cors');

app.use(cors({
  origin: "https://personalized-outfit-customization-rc6u.vercel.app", // React frontend URL
  credentials: true,  // Allow cookies and credentials
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],  // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"] // Allowed headers
}));


app.options('*', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://personalized-outfit-customization-rc6u.vercel.app");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).end(); // OK status
});


app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");



app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);
app.use("/",productRouter);
app.use("/",cartRouter);

app.get("/", (req, res) => {
    res.send("<h1>HI</h1>");
});


module.exports = app;
connectDB()




