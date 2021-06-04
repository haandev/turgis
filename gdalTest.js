const gdal = require("gdal-next");
console.log(gdal.drivers.getNames().join(","))

//
// const dataset = gdal.open("1344468036.dgn","r","DGN");
// const layer = dataset.layers.get(0);
//
// console.log("number of features: " + layer.features.count());
// console.log("fields: " + layer.fields.getNames());
// console.log("extent: " + JSON.stringify(layer.extent));
// console.log("srs: " + (layer.srs ? layer.srs.toWKT() : 'null'));
