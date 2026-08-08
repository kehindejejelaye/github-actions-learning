const express = require('express');

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const app = express();
const PORT = 3000;

app.get('/add', (req, res) => {
  res.json(add(Number(req.query.a), Number(req.query.b)));
});

app.get('/multiply', (req, res) => {
  res.json(multiply(Number(req.query.a), Number(req.query.b)));
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

console.log("Deployment version A - awaiting approval");
console.log("Deployment version B");

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
