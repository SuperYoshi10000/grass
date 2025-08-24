import http from "http";
import fs from "fs";

const port = Number(process.env.PORT || process.argv[2] || 3000);

console.log("Starting server...")
const server = http.createServer((req, res) => {
    try {
        const file = fs.readFileSync(`static${req.url}`);
        res.writeHead(200);
        res.end(file);
    } catch (e) {
        res.writeHead(404);
        res.end("Not Found");
        return;
    }
});
server.listen(port);
console.log(`Server listening on port ${port}`);