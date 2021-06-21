import express from 'express'
const app = express()
const port = 3000
import {readFile} from "./turgis.js";
import readyFile from "./response.js"
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    const response = {
        geoJson : readyFile.geoJson
    }
    res.send(response)
})

app.listen(port, () => {
    console.log(`GeoJSON server is listening at http://localhost:${port}`)
})