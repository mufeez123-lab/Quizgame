const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/quizdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to mongo")
}).catch((error) => {
  console.error("Failed to connect to MongoDB:", error);
  process.exit(1);
})
    

app.use("/api/quiz", quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});