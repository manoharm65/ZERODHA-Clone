const {model} = require('mongoose');
const {HoldingSchema} = require('../schemas/HoldingSchema');


const HoldingsModel =new model('holdings',HoldingSchema);

module.exports={HoldingsModel};