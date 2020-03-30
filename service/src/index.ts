import * as http from "http";
import * as fs from "fs";

const server = http.createServer();

server.on('request', (req, res) => {
    fs.readFile('example.txt', (err, data) => {
        if (err) throw err;

        res.end(data);
    });
});


server.listen(8000);