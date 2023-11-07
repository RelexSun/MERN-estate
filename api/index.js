// we are not using "type": "modules" so instead of importing we use require.
const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
