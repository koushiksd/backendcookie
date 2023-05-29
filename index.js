const express = require("express");
const app = express();

require("dotenv").config();

const bodyParder = require("body-parser");
const cors = require("cors");

var corsOptions = {
  origin: process.env.FRONTEND,
  Credential: true,
};
console.log(corsOptions);
app.use(
  cors({
    origin: [process.env.FRONTEND,],
    credentials: true,
  })
);
app.use(
  bodyParder.urlencoded({
    extended: true,
  })
);
function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

app.get("/api/open", async (req, res, next) => {
return res.redirect(process.env.SECONDFRONTEND);
 
});
app.post("/api/fetch", async (req, res, next) => {
  //return  require("openurl").open(`${process.env.SECONDFRONTEND}`);
  let val = await makeid(5);

});

app.get('/api/returnInfo',async(req,res,next)=>{
  console.log(req.query);
  res.cookie("token", req.query.id);
  res.setHeader("Content-Type", "text/html")
  return res.redirect(process.env.FRONTEND + "/cookie");
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(process.env.PORT);
  console.log("<----Connected---->");
});

// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${process.env.PORT}`);
//   })
