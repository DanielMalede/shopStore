const dotenv = require('dotenv')
dotenv.config()
const express = require("express");
const cors = require("cors");
const db = require('./DB')
const app = express();
const port = 6000;

const clothesRouter = require('./routes/clothes-route');
const shoesRouter = require('./routes/shoes-route');
const sportEquipmentRouter = require('./routes/sportEquipment-route');
const teamRouter = require('./routes/team-route');

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/clothes',clothesRouter)
app.use('/shoes',shoesRouter)
app.use('/sportEquipment',sportEquipmentRouter)
app.use('/team',teamRouter)


app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  console.log(`server is ${port}`);
});
