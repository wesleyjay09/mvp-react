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





app.post("/api/thousandlbclub", cors(), async(req, res)=>{
    try {
      const  {lifter, deadlift, benchpress, squat} = req.body;
      const newFood = await pool.query("INSERT INTO lifterdata (lifter, deadlift, benchpress, squat) VALUES ($1, $2, $3, $4 ) RETURNING *", [lifter, deadlift, benchpress, squat]);
      res.json(newFood.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})
app.get("/api/thousandlbclub", async(req, res)=>{
    try {
    const getFood = await pool.query("SELECT * FROM lifterdata")
      res.json(getFood.rows)
      } catch (err) {
        console.error(err.message)
    }
})

app.delete("/api/thousandlbclub/:id", async(req, res)=>{
    try {
        const { id } = req.params
    const deleteFood = await pool.query("DELETE  FROM lifterdata WHERE lifter = ($1)",[id])
    res.send('deleted')
      } catch (err) {
        console.error(err.message)
    }
})



app.listen(PORT, ()=>{
    console.log(`${PORT}`)
});
