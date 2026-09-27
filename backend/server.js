const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


// ---------- HOME ----------
app.get("/", (req, res) => {
    res.send("Blood Bank Backend is Running!");
});


// ---------- BLOOD AVAILABILITY ----------
app.get("/blood", (req, res) => {
    const file = path.join(__dirname, "data", "blood.json");

    const data = fs.readFileSync(file, "utf8");

    res.json(JSON.parse(data));
});


// ---------- GET DONORS ----------
app.get("/donors", (req, res) => {
    const file = path.join(__dirname, "data", "donors.json");

    const data = fs.readFileSync(file, "utf8");

    res.json(JSON.parse(data));
});


// ---------- ADD DONOR ----------
app.post("/donors", (req, res) => {
    const file = path.join(__dirname, "data", "donors.json");

    const data = fs.readFileSync(file, "utf8");

    const donors = JSON.parse(data);

    donors.push(req.body);

    fs.writeFileSync(
        file,
        JSON.stringify(donors, null, 2)
    );

    res.json({
        message: "Successfully Registered!"
    });
});


// ---------- GET BLOOD REQUESTS ----------
app.get("/requests", (req, res) => {
    const file = path.join(__dirname, "data", "requests.json");

    const data = fs.readFileSync(file, "utf8");

    res.json(JSON.parse(data));
});


// ---------- ADD BLOOD REQUEST ----------
app.post("/requests", (req, res) => {
    const file = path.join(__dirname, "data", "requests.json");

    const data = fs.readFileSync(file, "utf8");

    const requests = JSON.parse(data);

    requests.push(req.body);

    fs.writeFileSync(
        file,
        JSON.stringify(requests, null, 2)
    );

    res.json({
        message: "Blood Request added successfully!"
    });
});


// ---------- CONTACT ----------
app.post("/contact", (req, res) => {
    const file = path.join(__dirname, "data", "contacts.json");

    const data = fs.readFileSync(file, "utf8");

    const contacts = JSON.parse(data);

    contacts.push(req.body);

    fs.writeFileSync(
    file,
    JSON.stringify(contacts, null, 2)
);

res.json({
    message: "Message sent successfully!"
});

});