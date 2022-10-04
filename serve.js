const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static('public'))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
	console.log(
		`API server started, Available on: http://localhost:3000/`
	);
});
