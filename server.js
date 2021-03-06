const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
});
