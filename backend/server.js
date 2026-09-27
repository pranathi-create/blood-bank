const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

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

app.post("/requests", (req, res) => {
    const data = fs.readFileSync("data/requests.json");
    const requests = JSON.parse(data);

    requests.push(req.body);

    fs.writeFileSync("data/requests.json", JSON.stringify(requests, null, 2));

    res.json({ message: "Blood request added successfully" });
});

app.post("/contact", (req, res) => {
    const data = fs.readFileSync("data/contacts.json");
    const contacts = JSON.parse(data);

    contacts.push(req.body);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts, null, 2));

    res.json({ message: "Message sent successfully" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});