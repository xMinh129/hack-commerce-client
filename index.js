const express = require('express');
const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./client/static/'));
app.use(express.static('./client/dist/'));



// start the server
app.listen(4010, () => {
  console.log('Server is running on http://localhost:4010 or http://127.0.0.1:4010');
});
