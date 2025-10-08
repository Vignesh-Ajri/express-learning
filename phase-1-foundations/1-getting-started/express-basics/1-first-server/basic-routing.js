const express = require("express")
const app = express()

//Home route
app.get("/",(req, res) =>{
    res.send("Welcome to the home page")
});

// About route
app.get("/about",(req, res) =>{
    res.send("Welcome to the about page")
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact Page - You can reach us at example@email.com");
})

//server
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})