import gdal from 'gdal-next'
const readFile = function (){
    const dataset = gdal.open("paf.dgn")
    const layer = dataset.layers.get(0)
    const geojson = {
        "type": "FeatureCollection",
        "features": []
    }
    layer.features.forEach((feature)=>{
        const f = {
            type:"Feature",
            properties:{},
            geometry: JSON.parse(feature.getGeometry().toJSON())
        }
// if (feature.fields.get("Text")!==null)
//            console.log(feature)

        geojson.features.push(f)
    })
    return geojson;
}
readFile()
export default readFile