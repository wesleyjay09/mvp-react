const express = require("express");
const morgan = require('morgan');
const PORT = process.env.PORT || 8000;
const pool = require('./db');
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json());
app.use(morgan('combined'))
app.use(express.static('public'))





app.post("/api/nutrienttracker", cors(), async(req, res)=>{
    try {
      const  {foodname, carbs, fats, protien, totalcal} = req.body;
      const newFood = await pool.query("INSERT INTO nutritioninput (foodname, carbs, fats, protien, totalcal) VALUES ($1, $2, $3, $4, $5) RETURNING *", [foodname, carbs, fats, protien, totalcal]);
      res.json(newFood.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})
app.get("/api/nutrienttracker", async(req, res)=>{
    try {
    const getFood = await pool.query("SELECT * FROM nutritioninput")
      res.json(getFood.rows)
      } catch (err) {
        console.error(err.message)
    }
})

app.get("/api/nutrienttracker/:id", async(req, res)=>{
    try {
        const { id } = req.params
    const getFood = await pool.query("DELETE * FROM nutritioninput WHERE foodname = ($1)",[id])
      } catch (err) {
        console.error(err.message)
    }
})



app.listen(PORT, ()=>{
    console.log(`${PORT}`)
});
