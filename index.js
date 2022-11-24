const express = require('express');
const cors = require('cors');
const myRouter = require('./routes/data');
const PORT = process.env.PORT || 8000;
 const app = express();
app.use(cors());
app.use('/api',myRouter);


app.listen(PORT, () => {
    console.log("Server running at http://localhost:8000");
});
