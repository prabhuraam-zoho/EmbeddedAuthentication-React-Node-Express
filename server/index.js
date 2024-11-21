'use strict'
const express = require('express')
const path = require('path')
const app = express()
const appDir = path.join(__dirname, '../client')
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;
 
app.get('/', function (req, res) {
  res.sendFile(path.join(appDir, 'index.html'))
})
 
app.use(express.static(appDir));
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); 