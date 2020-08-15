const http = require("http");
const _ = require("lodash");
const tasks = require("./tasks");

const randomTask = () => {
	const pickRandom = _.shuffle(tasks);
	return pickRandom[0];
};

http.createServer(function(request, response) {
	response.writeHead(200, { "Content-type": "text/plain" });
	response.write(randomTask());
	response.end();
}).listen(3000);
