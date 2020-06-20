const express = require("express");
const app = express();
const hbs = require("hbs");
//app.set('view engine',hbs)

app.get("/", (req, res) => {
  res.send("home");
});
app.use(
  (date = (req, res, next) => {
    let hour = new Date().getHours();
    if (hour > 17 || hour < 8) res.send("<h1> we are close now</h1> ");
    else next();
    console.log("Time is:", hour);
  })
);

app.use(express.static(__dirname + "/checkpoint"));

//console.log(app)

/* addrequestDate = (req, res, next) => {
  let requestAt = new Date();
  console.log(requestAt);
  next();
}; */

app.listen(3000, (err) => {
  app.get("Homepage", (req, res) => {
    res.send("hello this is the home page");
  });

  app.get("/contactus", (req, res) => {
    res.send({ Tel: 71717171, adress: "Lac 1" });
  });
  app.get("/OurServices", (req, res) => {
    res.send("<center><h1>Services</h1></center>");
  });

  /* app.get("/users/:nom", (req, res) => {
    console.log(req.params.nom);
    res.send(req.params.nom + " is connected");
  });
 
 */

  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
