"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile('example.txt', (err, data) => {
        if (err)
            throw err;
        res.end(data);
    });
});
server.listen(8000);
//# sourceMappingURL=index.js.map