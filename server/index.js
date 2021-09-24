const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");
const mongoose = require("mongoose");
const { pinoHttp, logger } = require("./logger");

mongoose.connect(`mongodb+srv://${config.userName}:${config.password}@${config.mongoURI}/${config.DBname}?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true, useUnifiedTopology: true
	})
	.then(() => logger.info('MongoDB Connected...'))
	.catch(err => logger.error(err));

app.use(cors())

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());
app.use(pinoHttp);

app.use('/api/users', require('./routes/users'));
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/categories', require('./routes/categories'));

app.get('*', function (req, res) {
	res.status(301).json({ error: "REST server isnt exist" });
});
//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 5000

app.listen(port, () => {
	logger.info('Server running on port %d', port);
});
