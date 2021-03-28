const express = require('express');
const port = 5000;

const app = express();
app.get('/', (req, res)=>{
    res.send('it is ok')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });