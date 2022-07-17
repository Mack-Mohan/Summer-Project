const mongoose = require('mongoose')

var document  = new mongoose.Schema({
    title: {type:String},
    description : {type:String},
    pdf: {type:String},
    video: {type:String},
    name: {type:String,required:true},
    email : {type:String,required:true},
    mobileNum : {type:Number,required:true}

});

module.exports= mongoose.model('document',document);