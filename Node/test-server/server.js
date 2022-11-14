const https = require("https");
const urls = ["https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", "https://www.youtube.com", "https://www.google.com"]

for (const url of urls) {
    https.get(url, (response) => {
        console.log(response)
    })
}

const server = https.createServer();
server.listen(3000);
