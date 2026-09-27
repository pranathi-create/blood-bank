const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Blood Bank Backend is Running!");
});

app.get("/blood", (req, res) => {
    const data = fs.readFileSync("data/blood.json");
    res.json(JSON.parse(data));
});

app.post("/donors", (req, res) => {
    const data = fs.readFileSync("data/donors.json");
    const donors = JSON.parse(data);

    donors.push(req.body);

    fs.writeFileSync("data/donors.json", JSON.stringify(donors, null, 2));

    res.json({ message: "Donor added successfully" });
});

app.get("/requests", (req, res) => {
  const data = fs.readFileSync("data/requests.json");
  res.json(JSON.parse(data));
});
app.post("/requests", (req, res) => {
  const requests = require("./data/requests.json");

  requests.push(req.body);

  fs.writeFileSync(
    "./data/requests.json",
    JSON.stringify(requests, null, 2)
  );

  res.json({ message: "Blood Request added successfully" });
});

app.post("/contact", (req, res) => {
    const data = fs.readFileSync("data/contacts.json");
    const contacts = JSON.parse(data);

    contacts.push(req.body);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

    res.json({ message: "Message sent successfully" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on port " + PORT);
});