const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// Allow frontend to connect
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});


// HOME
app.get("/", (req, res) => {
    res.send("Life Savers Blood Bank Server is Running!");
});


// BLOOD AVAILABILITY
app.get("/blood", (req, res) => {
    res.json([
        { bloodGroup: "A+", units: 10 },
        { bloodGroup: "A-", units: 5 },
        { bloodGroup: "B+", units: 8 },
        { bloodGroup: "B-", units: 3 },
        { bloodGroup: "AB+", units: 6 },
        { bloodGroup: "AB-", units: 2 },
        { bloodGroup: "O+", units: 12 },
        { bloodGroup: "O-", units: 4 }
    ]);
});


// DONORS
app.post("/donors", (req, res) => {

    console.log("Donor received:", req.body);

    res.json({
        success: true,
        message: "Donor registered successfully"
    });

});


// GET DONORS
app.get("/donors", (req, res) => {
    res.json([]);
});


// BLOOD REQUEST
app.post("/requests", (req, res) => {

    console.log("Blood request:", req.body);

    res.json({
        success: true,
        message: "Blood request submitted successfully"
    });

});


// GET REQUESTS
app.get("/requests", (req, res) => {
    res.json([]);
});


// CONTACT
app.post("/contact", (req, res) => {

    console.log("Contact:", req.body);

    res.json({
        success: true,
        message: "Message sent successfully"
    });

});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});